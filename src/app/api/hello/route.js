import { NextRequest } from "next/server"

// export async function GET(request) {
//   const { searchParams } = new URL(request.url)
//   console.log("GET request", searchParams.get("name"))

//   return new Response(JSON.stringify({ message: "Hello World" }),{
//     status: 401,
//   })
// }

export async function POST(request) {

  const body =await request.json()
  const returnBody =`POSTで受け取った値：${body.name}`

  return new Response(JSON.stringify({ body:returnBody}))
}