"use client";

import CardComp from "@/components/CardComp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { CardCompPropsTypes } from "@/types";
import SearchFormReset from "@/components/SearchFormReset";
import SkeletonComp from "@/components/SkeletonComp";

function PitchingPage() {
  const [pitch, setPitch] = useState<CardCompPropsTypes[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<CardCompPropsTypes[]>([]);

  // const query = (await searchParams).query;
  // const params = { search: query || null };

  // console.log(params, "params");

  // const users = await prisma.users.findMany();

  useEffect(() => {
    async function getPitch() {
      setIsLoading(true);
      const pitchData = await fetch("/api/users");
      // const pitchData = 1;
      const pitchResponse = await pitchData.json();
      setPitch(pitchResponse);
      setIsLoading(false);

    }
    getPitch();
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const filteredData = pitch.filter((data) => {
      return data?.category.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredData(filteredData);

    // console.log(search, "results");
    // console.log(filteredData, "filteredData");
  };

  // console.log(pitch, "pitch");

  const bgColor = {
    minHeight: "530px",
    width: "100%",
    backgroundImage: "url('/stripe-line.svg')",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };

  console.log("it worked and went back")


  return (
    <div>
      <div>
        <div
          style={bgColor}
          className="bg flex justify-center items-center gap-4  flex-col py-10 px-6 ">
          <div className="bg-[#FBE843] font-bold text-[17px] px-[2vw] py-[1vw] rounded-md">
            <h1 className="">PITCH, VOTE, AND GROW</h1>
          </div>
          <div className="font-black text-[25px] text-center md:text-[54px] bg-[#000000] text-white px-[2vw] py-[1vw]">
            <h2>Pitch Your Startup, Connect with Entrepreneurs</h2>
          </div>

          <p className="text-white font-medium md:text-[20px] text-[15px] text-center">
            Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
            Competitions
          </p>
          <form onSubmit={handleSubmit} className="search-form">
            <div className=" ring-4 ring-black rounded-full flex items-center md:w-[50vw] bg-white px-[2vw] md:py-2">
              <Input
                name="search"
                type="text"
                style={{
                  border: "none",
                  outline: "none",
                  boxShadow: "none",
                  backgroundColor: "transparent"
                }}
                placeholder="SEARCH STARTUP"
                className="w-[100%] font-bold md:text-[24px] text-[18px]"
                onChange={handleChange}
              />
              {search ? <SearchFormReset /> : ""}
              <Button
                type="submit"
                className="w-[35px] h-[35px] rounded-full bg-black flex items-center justify-center cursor-pointer">
                <CiSearch className=" text-[1.5vw] text-white" />
              </Button>
            </div>
          </form>
        </div>
      </div>

      <main>
        {isLoading ? (
          <SkeletonComp />
        ) : (
          <div className="py-7 px-">
            <h3 className="font-semibold text-[20px] lg:text-[26px] pb-[5vh] px-[2vw] ">
              {search ? `Searching for ${search}` : "Recommended startups"}
            </h3>

            {search ? (
              <CardComp
                filteredData={filteredData}
                pitch={[]}
                similarPost={[]}
              />
            ) : (
              <CardComp pitch={pitch} similarPost={[]} filteredData={[]} />
            )}
          </div>
        )}
      </main>
    </div>
  );
}

export default PitchingPage;
