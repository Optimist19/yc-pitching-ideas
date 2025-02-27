import Image from "next/image";
import React from "react";

async function DetailPage({ params }: { params: Promise<{ id: string }> }) {
  console.log((await params).id);

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
        <div>
          <div
            style={bgColor}
            className="bg flex justify-center items-center gap-4  flex-col py-10 px-6 ">
            <div className="bg-[#FBE843] font-bold text-[17px] px-[2vw] py-[1vw] rounded-md">
              <h1 className="">OCTOBER 5, 2024</h1>
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
              <Image src="/mastery.svg" height={500} width={800} alt="" className=""/>
            </div>
          </div>

          <div className="flex justify-center">
          <div className="w-[800px]">
            <div className="md:flex md:justify-between">
              <div className="flex items-center py-1 gap-3">
                <div className="">
                  <Image
                    src="/writter-image.svg"
                    alt=""
                    width={55}
                    height={55}
                  />
                </div>
                <div>
                  <p className="font-extrabold text-[25px]">
                    Adrian Hajdin - JS Mastery
                  </p>
                  <p className="text-[20px] font-medium">@adrianhajdin</p>
                </div>
              </div>
              <div className=" py-1 text-[20px] font-medium">
                <p>Education</p>
              </div>
            </div>

            <div>
              <p className="text-[30px] font-bold py-[3vh]">Pitch details</p>

              <p className="text-justify">
                EcoCart is an innovative e-commerce platform designed for
                eco-conscious shoppers looking to make a positive environmental
                impact with their purchases. We connect users with local
                businesses that offer eco-friendly, sustainable products across
                categories like home goods, fashion, beauty, and more. By
                partnering with small and medium-sized enterprises committed to
                sustainability, we aim to reduce carbon footprints and promote
                greener consumer choices. Our platform not only helps users find
                ethically sourced and environmentally responsible products but
                also offers features like carbon offset tracking, green
                certifications, and personalized sustainability goals. EcoCart
                is built to encourage mindful shopping, making it easier for
                people to reduce waste, support local communities, and
                contribute to a more sustainable future. Our mission is simple:
                Shop better, live better, and create a greener world—one
                purchase at a time.
              </p>
            </div>

            <div  className="ring-1 ring-black my-[3vh]"/>

            <div>
              <p className="text-[30px] font-bold py-2">Similar startups</p>
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
