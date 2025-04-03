"use client";

import CardComp from "@/components/CardComp";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { CardCompPropsTypes, SimilarPostTypes } from "@/types";
import SearchFormReset from "@/components/SearchFormReset";
import SkeletonComp from "@/components/SkeletonComp";
import { Bounce, toast } from "react-toastify";

function PitchingPage() {
  const [pitch, setPitch] = useState<CardCompPropsTypes[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [filteredData, setFilteredData] = useState<CardCompPropsTypes[]>([]);

  useEffect(() => {
    async function getPitch() {
      setIsLoading(true);

      try {
        const response = await fetch("/api/users");

        if (!response.ok) {
          toast(`${response.statusText}`, {
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: false,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce
          });
        }

        const data = await response.json();
        setPitch(data);
      } catch (error) {
        console.error("Fetch error:", error);
        toast("Something went wrong! Please try again", {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce
        });
      } finally {
        setIsLoading(false);
      }
    }

    getPitch();
  }, []);

  const handleCancelClick = () => {
    setFilteredData([]); // Clear filtered data
    setSearch(""); // Clear the search input
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearch(e.target.value);
    const filteredData = pitch.filter((data) => {
      return data?.category.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredData(filteredData);
  }




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
  value={search} // Add this line to connect input to search state
/>
              {search && (
                <div onClick={handleCancelClick} className="focus:outline-none">
                <SearchFormReset onReset={handleCancelClick} /> {/* Pass the handler to component */}
              </div>
              )}
            </div>
        
        </div>
      </div>

      <main>
        {isLoading ? (
          <SkeletonComp />
        ) : pitch.length < 1 ? (
          <p className="text-center pt-4vh text-[18px] md:text-[28px] lg:text-[34px] font-bold">
            No data
          </p>
        ) : (
          <div className="py-7 px-">
            <h3 className="font-semibold text-[20px] lg:text-[26px] pb-[5vh] text-center sm:text-left  sm:pl-2">
              {search ? `Searching for ${search}` : "Recommended startups"}
            </h3>
            {search ? (
              <CardComp
                filteredData={filteredData as unknown as SimilarPostTypes[]}
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
