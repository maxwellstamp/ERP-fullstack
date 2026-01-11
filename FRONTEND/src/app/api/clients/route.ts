import { NextResponse } from "next/server";

import data from "../../../public/dummy.json";
export async function GET(res: NextResponse, req: Request, context: any) {
  return NextResponse.json(data);
}
