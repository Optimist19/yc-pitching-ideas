import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaEye } from "react-icons/fa";
import { Button } from "./ui/button";

function SimilarPostComp(props) {
  // console.log(props, "props")
  const { similarPost } = props;
  // console.log(similarPost, "similarPosts")

  return (
    <div className="flex flex-wrap gap-4 py-3">
      {similarPost?.map((obj) => (
        <div
          key={obj.id}
          className="w-[320px] h-[471px] ring-2 ring-black flex flex-col gap-3 py-[4vh] px-4 shadow-custom rounded-2xl hover:bg-[#FFE8F0]">
          <div className="flex justify-between items-center font-medium text-[16px]">
            <div className="bg-[#FFE8F0] rounded-full px-2 py-2">
              {new Date(obj.createdAt)
                .toLocaleDateString("en-GB")
                .replace(
                  /(\d{2})\/(\d{2})\/(\d{4})/,
                  (_, d, m, y) => `${d}/${m}/${y}`
                )}
            </div>

            <div className="flex justify-between gap-2 items-center">
              <FaEye className="text-red-400" />
              <p>{obj.views}</p>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="grid gap-1">
              <p className="font-medium text-[16px]">{obj.author}</p>
              <p className="font-semibold text-[22px] lg:text-[26px]">
                {obj.title}
              </p>
            </div>
            <div className="w-[3vw]">
              <Image
                src={obj.author_image}
                width={50}
                height={50}
                alt="creator-picture"
                className="rounded-full"
                style={{ width: "50px", height: "50px", borderRadius: "50%" }}
              />
            </div>
          </div>

          <p className="text-[16px] font-thin">{obj.description}</p>

          <div className="relative w-full h-[65vh]">
            <Image
              src={obj.thumbnail}
              alt="writer-picture"
              fill
              className="object-cover rounded-xl"
            />
          </div>

          <div>
            <div className="flex items-center justify-between font-medium text-[16px]">
              <p>{obj.category}</p>

              <Link href={`/pitch/${obj.id}`}>
                <Button className="hover:bg-[#FFE8F0] bg-black rounded-full px-7">
                  Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SimilarPostComp;
