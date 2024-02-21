import { NextApiRequest } from "next";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { ServerResponse } from "http";

import kameleoonClient from "~/api/kameleoon";

type Context = {
  params: {
    goalId: string;
  };
};

export async function POST(req: NextApiRequest, context: Context) {
  console.log(req);
  const res = new ServerResponse(req);
  try {
    const goalId = parseInt(context.params.goalId);
    await kameleoonClient.initialize();
    const visitorCode = kameleoonClient.getVisitorCode({
      request: req,
      response: res,
    });

    cookies().set("kameleoonVisitorCode", visitorCode);

    kameleoonClient.trackConversion({
      visitorCode,
      goalId,
    });

    kameleoonClient.flush(visitorCode);

    return NextResponse.json("tracked");
  } catch (error) {
    return NextResponse.json(error);
  }
}
