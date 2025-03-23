import Image from "next/image";

import SimilarPostComp from "@/components/SimilarPostComp";
import { UsersType } from "@/types";
import { redirect } from "next/navigation";
import { auth } from "../../../../auth";
import prisma from "../../../../lib/prisma";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ id: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  // read route params
  const { id } = await params;
  const res = await prisma.users.findUnique({
    where: { id: id }
  });

  return {
    title: res?.title,
    description: res?.description,
    openGraph: {
      title: res?.title,
      description: res?.description,
      images: res?.thumbnail
    }
  };
}

async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  const userSession = (await auth()) as UsersType;
  if (!userSession) {
    redirect("/pitch");
  }

  const { id } = await params;

  const user = await prisma.users.findUnique({
    where: { id: id }
  });

  // if(user?.views){
  await prisma.users.update({
    where: { id: id },
    data: {
      views: (user?.views ?? 0) + 1
    }
  });

  // }

  //Filtering similar posts that have the same category as the current post
  const similarPost = await prisma.users.findMany({
    where: { category: user?.category }
  });

  const bgColor = {
    minHeight: "530px",
    width: "100%",
    backgroundImage: "url('/stripe-line.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div>
      <div>
        <div>
          <div
            style={bgColor}
            className="bg flex justify-center items-center gap-4  flex-col py-10 px-6 ">
            <div className="bg-[#FBE843] font-bold text-[17px] px-[2vw] py-[1vw] rounded-md">
              <h1 className="">
                {user?.createdAt
                  ? new Date(user.createdAt)
                      .toLocaleDateString("en-GB")
                      .replace(
                        /(\d{2})\/(\d{2})\/(\d{4})/,
                        (_, d, m, y) => `${d}/${m}/${y}`
                      )
                  : "N/A"}
              </h1>
            </div>
            <div className="font-black text-[30px] md:text-[54px] bg-[#000000] text-white px-[2vw] py-[1vw] text-center">
              <h2>JSM ACADEMY MASTERCLASS</h2>
            </div>

            <p className="text-white font-medium text-[20px] text-center">
              An online platform offering project-based learning for web
              developers, aimed at leveling up junior to mid-level developers by
              focusing on real-world applications.
            </p>
          </div>

          <div className="px-4">
            <div className="flex justify-center py-5">
              <div className="w-[]">
                <Image
                  src="/mastery.svg"
                  height={500}
                  width={800}
                  alt=""
                  className=""
                />
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-[800px]">
                <div className="md:flex md:justify-between">
                  <div className="flex items-center py-1 gap-3">
                    <div className="w-[3vw]">
                      <Image
                        src={user?.author_image || "/image.svg"}
                        width={50}
                        height={50}
                        alt="creator-picture"
                        className="rounded-full hidden lg:block"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%"
                        }}
                      />
                      <Image
                        src={user?.author_image || "/image.svg"}
                        width={50}
                        height={50}
                        alt="creator-picture"
                        className="rounded-full lg:hidden"
                        style={{
                          width: "50px",
                          height: "50px",
                          borderRadius: "50%"
                        }}
                      />
                    </div>
                    <div className="pl-5">
                      <p className="font-extrabold lg:text-[25px] text-[19px]">
                        {user?.author}{" "}
                      </p>
                      <p className="text-[15px] lg:text-[20px] font-medium">
                        {user?.social_handle}
                      </p>
                    </div>
                  </div>
                  <div className=" py-1 text-[20px] font-medium">
                    <p>{user?.category}</p>
                  </div>
                </div>

                <div>
                  <p className="lg:text-[30px] text-[19px] font-bold py-[3vh]">
                    Pitch details
                  </p>

                  <p className="text-justify">{user?.pitch_author}</p>
                </div>

                <div className="ring-1 ring-black my-[3vh]" />

                <div className="py-8">
                  <p className="lg:text-[30px] text-[19px] font-bold py-2">
                    Similar startups
                  </p>

                  <SimilarPostComp similarPost={similarPost} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
