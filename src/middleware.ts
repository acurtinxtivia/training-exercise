import { NextResponse, NextRequest } from "next/server";
import { cookies } from "next/headers";

export async function middleware(req: NextRequest) {
  console.log("middleware", cookies().toString());
  let response = NextResponse.next();

  const res = await fetch("http://localhost:3000/api/kameleoon/visitorCode", {
    headers: {
      cookie: cookies().toString(),
    },
  });
  const visitorCode = await res.json();

  response.cookies.set("kameleoonVisitorCode", visitorCode);

  return response;
}
