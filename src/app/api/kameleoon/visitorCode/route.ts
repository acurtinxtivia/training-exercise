import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

import kameleoonClient from "~/api/kameleoon";

export async function GET(req: NextRequest) {
  await kameleoonClient.initialize();
  const visitorCode = kameleoonClient.getVisitorCode({
    cookies,
  });

  const response = NextResponse.json(visitorCode);
  response.cookies.set("kameleoonVisitorCode", visitorCode);
  return response;
}
