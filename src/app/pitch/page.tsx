import React from "react";
import { CiSearch } from "react-icons/ci";
import { FaEye } from "react-icons/fa";

import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Button } from "@/components/ui/button";
// import { data } from "@/data";
import Link from "next/link";

async function PitchingPage() {
  try {
    const response = await fetch("http://localhost:3000/api/users");
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    console.log(data, "data");
  } catch (err) {
    console.log(err);
  }

  const bgColor = {
    minHeight: "530px",
    width: "100%",
    backgroundImage: "url('/stripe-line.svg')", // Use direct public path
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  return (
    <div>
      <div>
        <div
          style={bgColor}
          className="bg flex justify-center items-center gap-4  flex-col py-10 px-6 ">
          <div className="bg-[#FBE843] font-bold text-[17px] px-[2vw] py-[1vw] rounded-md">
            <h1 className="">PITCH, VOTE, AND GROW</h1>
          </div>
          <div className="font-black text-[30px] text-center md:text-[54px] bg-[#000000] text-white px-[2vw] py-[1vw]">
            <h2>Pitch Your Startup, Connect with Entrepreneurs</h2>
          </div>

          <p className="text-white font-medium text-[20px]">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions
          </p>
          <div className="">
            <div className=" ring-4 ring-black rounded-full flex items-center md:w-[50vw] bg-white px-[2vw] md:py-2">
              <Input
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  backgroundColor: "transparent"
                }}
                placeholder="SEARCH STARTUP"
                className="w-[100%] font-bold md:text-[24px]"
              />
              <div className="w-[35px] h-[35px] rounded-full bg-black flex items-center justify-center cursor-pointer">
                <CiSearch className=" text-[1.5vw] text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        <div className="py-7">
          <h3 className="font-semibold text-[30px] pb-[5vh] px-[2vw] ">
            Recommended startups
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {/* {data?.map((obj, i) => {
              return (
                <div
                  key={i}
                  className="w-[320px] h-[471px] ring-2 ring-black flex flex-col gap-3 py-[4vh] px-4 shadow-custom rounded-2xl hover:bg-[#FFE8F0]">
                  <div className="flex justify-between items-center font-medium text-[16px]">
                    <div className="bg-[#FFE8F0] rounded-full px-2 py-2">
                      <p>{obj.date}</p>
                    </div>

                    <div className="flex justify-between gap-2 items-center">
                      <FaEye className="text-red-400" />
                      <p>{obj.views}</p>
                    </div>
                  </div>

                  <div className="flex justify-between">
                    <div className="grid gap-1">
                      <p className="font-medium text-[16px]">{obj.name}</p>
                      <p className="font-semibold text-[26px]">EcoTrack</p>
                    </div>
                    <div className="w-[3vw]">
                      <Image
                        src="/image.svg"
                        width={500}
                        height={500}
                        alt="writter-picture"
                      />
                    </div>
                  </div>

                  <p className="text-[16px] font-thin">{obj.desc}</p>

                  <div className="">
                    <Image
                      src="./topic thumbnail.svg"
                      width={276}
                      height={164}
                      alt="writter-picture"
                    />
                  </div>

                  <div>
                    <div className="flex items-center justify-between font-medium text-[16px]">
                      <p>{obj.level}</p>
                      <Link href={`/pitch/${i}`}>
                        <Button className="hover:bg-[#FFE8F0] bg-black rounded-full px-7">
                          Details
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </main>
    </div>
  );
}

export default PitchingPage;
