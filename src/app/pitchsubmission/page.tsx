"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { BsFillSendFill } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";

import MDEditor from "@uiw/react-md-editor/nohighlight";
import { useState } from "react";

interface Inputs {
  title: string;
  description: string;
  category: string;
  demoLink: string;
  markdown: string;
}

function PitchSubmission() {
  const [value, setValue] = useState("");
  // const [errMarkdown, setErrMarkdown] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const allInputs = { ...data, value };
    const pitchInfo = await fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(allInputs),
      headers: {
        "Content-Type": "application/json"
      }
    });

    console.log(pitchInfo, "pitchInfo");

    if(!value){
      // setErrMarkdown(!errMarkdown)
      return;
    }
    // console.log(data);
  };

  console.log(value, "value");

  const bgColor = {
    minHeight: "30px",
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
          <div className="font-black text-[30px] text-center md:text-[54px] bg-[#000000] text-white px-[2vw] py-[1vw]">
            <h2>Submit Your Startup Pitch</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[770px] px-[2vw] flex flex-col  gap-[4vh] py-[7vh]">
          <div className="flex flex-col gap-2">
            <label className="" htmlFor="title">
              TITLE
            </label>
            <Input
              className="ring-2 ring-black rounded-full"
              id="title"
              placeholder="JSM Academy Masterclasss"
              {...register("title", {
                required: {
                  value: true,
                  message: "Title of your pitch is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.title?.message}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="desc">DESCRIPTION</label>
            <Textarea
              className="ring-2 ring-black rounded-md"
              id="desc"
              placeholder="Type your message here."
              {...register("description", {
                required: {
                  value: true,
                  message: "Description of your pitch is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.description?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="category">Category</label>
            <Input
              className="ring-2 ring-black rounded-full"
              id="category"
              placeholder="Choose a category (e.g., Tech, Health, Education, etc.)"
              {...register("category", {
                required: {
                  value: true,
                  message: "Category of your pitch is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.category?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="imag/vid">IMAGE/VIDEO LINK</label>
            <Input
              className="ring-2 ring-black rounded-full"
              type="text"
              id="imag/vid"
              placeholder="Paste a link to your demo or promotional media"
              {...register("demoLink", {
                required: {
                  value: true,
                  message: "Demo link to  your pitch is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.demoLink?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="pitch">PITCH</label>
            <MDEditor
              id="pitch"
              height={300}
              value={value}
              className="ring-2 ring-black rounded-full"
              onChange={setValue}
              // {...register("markdown", {
              //   required: {
              //     value: true,
              //     message: "Your pitch statement is required"
              //   }
              // })}
            />
            {/* {errMarkdown && <p></p>} */}
            <p className="px-3 text-red-800 text-[10px]">
              {errors.markdown?.message}
            </p>
          </div>

          <div className="bg-[#EE2B69] text-white flex items-center justify-center gap-2 rounded-full py-2 ring-2 ring-black">
            <button type="submit">SUBMIT YOUR PITCH</button>
            <BsFillSendFill />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PitchSubmission;
