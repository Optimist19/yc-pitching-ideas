import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // console.log("Received Data:", body); // Log incoming data

    const {
      title,
      author,
      video_link,
      category,
      pitch_author,
      description,
      author_image,
      social_handle,
      thumbnail
    } = body;

    const user = await prisma.users.create({
      data: {
        title,
        author,
        video_link,
        category,
        pitch_author,
        description,
        author_image,
        social_handle,
        thumbnail
      }
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log("Database Error:", error);
    return NextResponse.json(
      { error: `Error saving user: ${error}` },
      { status: 500 }
    );
  }
}


// export async function PUT(req: NextRequest) {
//   try {
//     const body = await req.json();
//     console.log("Received Data:", body); // Log incoming data

//     const {
//       views,
//       id
//     } = body;

//     // const user = await prisma.users.update({
//     //   where: {
//     //     // Assuming you have an `id` field to identify the user
//     //     id: body.id
//     //   },
//     //   data: {
//     //     views
//     //   }
//     // });
//     const updateView = await prisma.users.update({
//       where: { id: id },
//       data: {
//         views: views + 1,
//       },
//     })

//     return NextResponse.json(updateView);
//   } catch (error) {
//     console.log("Database Error:", error);
//     return NextResponse.json(
//       { error: `Error saving user: ${error}` },
//       { status: 500 }
//     );
//   }
// }


export async function GET() {
  // For example, fetch data from your DB here
  const users = await prisma.users.findMany();

  return new Response(JSON.stringify(users), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }
  });
}