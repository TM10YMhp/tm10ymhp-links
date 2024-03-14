import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;

  if (searchParams.get("secret") !== process.env.SECRET) {
    return Response.json({ revalidated: false });
  }

  revalidatePath("/");

  return Response.json({ revalidated: true });
}
