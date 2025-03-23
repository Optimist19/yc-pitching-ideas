import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

const userData: Prisma.UsersCreateInput[] = [
  {
    title: "Mastery Education",
    author: "Oluwasegun",
    video_link: "https://www.youtube.com/watch?v=QXxy8Uv1LnQ",
    category: "Education",
    pitch_author:
      "Thank you so much sir, iam working heavily with my database but ignored prisma lot of times, but after seeing 10 minutes of your video, i literally cried my self, thank you so much for this beautiful, neat explanation",
    description: "How to work with nextjs",
    views: 4,
    author_image: "https://lh3.googleusercontent.com/a/ACg8ocJOnccywM4L1qpR3vaqsqibdOiB0dpz8yxzPnjn5mlmrFpgPQ=s96-c",
    social_handle: "@optimist_BG0",
    thumbnail: "https://lh3.googleusercontent.com/a/ACg8ocJOnccywM4L1qpR3vaqsqibdOiB0dpz8yxzPnjn5mlmrFpgPQ=s96-c"
  },
  {
    title: "Scrimba Education",
    author: "Evan You",
    video_link: "https://www.youtube.com/watch?v=GoDERit8mVo",
    category: "Education",
    pitch_author:
      "Hello, I'm studying comics and I wanted to know if I can use the same way as the video in a js code on another page. for example, in an app, you would use the database to store the data locally, which could change as the app progresses. I'm a beginner and I'm learning :)",
    description: "How to work with prisma",
    views: 0,
    author_image: "https://lh3.googleusercontent.com/a/ACg8ocJOnccywM4L1qpR3vaqsqibdOiB0dpz8yxzPnjn5mlmrFpgPQ=s96-c",
    social_handle: "@optimist_BG0",
        thumbnail: "https://lh3.googleusercontent.com/a/ACg8ocJOnccywM4L1qpR3vaqsqibdOiB0dpz8yxzPnjn5mlmrFpgPQ=s96-c"
  }
];

export async function main() {
  for (const u of userData) {
    await prisma.users.create({ data: u });
  }
}

main();
