
"use client";
import { useSession } from "next-auth/react";

import { useRouter } from "next/navigation";


import { BsFillSendFill } from "react-icons/bs";
import { useForm, SubmitHandler } from "react-hook-form";

import MDEditor from "@uiw/react-md-editor/nohighlight";
import { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

// import { signIn } from "next-auth/react";

interface Inputs {
  // append(arg0: string, file: File): unknown;
  title: string;
  description: string;
  category: string;
  vidLink: string;
  socialHandle: string;
  author: string;
  file: FileList;
  thumbnail: FileList;
}

function PitchSubmissionComp() {
  const [value, setValue] = useState("");
  const [errMarkdown, setErrMarkdown] = useState(false);
  const { status } = useSession();

  const router = useRouter(); // Initialize the router

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<Inputs>();


  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/pitch");
    }
  }, [status, router]);

 


  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    if (!value) {
      setErrMarkdown(true);
      return;
    }

    try {
      // For the file upload
      const file = data.file[0];
      const file1 = data.file[0];

      const dataForm = new FormData();
      dataForm.append("file", file);
      dataForm.append("upload_preset", "first_time_using_cloudinary");
      dataForm.append("cloud_name", "dsyq2mclc");

      const dataForm1 = new FormData();
      dataForm1.append("file", file1);
      dataForm1.append("upload_preset", "first_time_using_cloudinary");
      dataForm1.append("cloud_name", "dsyq2mclc");

      // Upload both images concurrently
      const [imgRes, imgRes1] = await Promise.all([
        fetch("https://api.cloudinary.com/v1_1/dsyq2mclc/image/upload", {
          method: "POST",
          body: dataForm
        }),
        fetch("https://api.cloudinary.com/v1_1/dsyq2mclc/image/upload", {
          method: "POST",
          body: dataForm1
        })
      ]);

      const [updloadedImgUrl, updloadedImgUrl1] = await Promise.all([
        imgRes.json(),
        imgRes1.json()
      ]);

      // Update state with the new image URLs
      // setUserImage(updloadedImgUrl?.url);
      // setThumbNail(updloadedImgUrl1?.url);

      // Construct the results object after the state has been updated
      const results = {
        ...data,
        markdownValue: value,
        userAvatar: updloadedImgUrl?.url, // Use the direct URL from the response
        thumbnail: updloadedImgUrl1?.url // Use the direct URL from the response
      };

      setErrMarkdown(false);

      // Send the data to your API
      const res = await fetch("/api/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title: results.title,
          video_link: results.vidLink,
          author: results.author,
          thumbnail: results.thumbnail,
          category: results.category,
          pitch_author: results.markdownValue,
          description: results.description,
          author_image: results.userAvatar,
          social_handle: results.socialHandle
        })
      });

      if (res.ok) {
        router.push("/pitch");
      } else {
        console.error("Error saving user");
      }
    } catch (error) {
      console.error("Error uploading images or saving user:", error);
    }
  };

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
            <label className="" htmlFor="author">
              AUTHOR
            </label>
            <Input
              className="ring-2 ring-black rounded-full"
              id="title"
              placeholder="JSM Academy Masterclasss"
              {...register("author", {
                required: {
                  value: true,
                  message: "Author of the pitch is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.author?.message}
            </p>
          </div>

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
                  message: "Title of the pitch is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.title?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2 py-7">
            <label className="">
              <Input
                type="file"
                {...register("file", {
                  required: {
                    value: true,
                    message: "Author's image of the pitch is required"
                  }
                })}
                className="ring-2 ring-black rounded-full"
              />
            </label>
            <p className="px-3 text-red-800 text-[10px]">
              {errors.file?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label className="" htmlFor="social">
              SOCIAL MEDIA
            </label>
            <Input
              className="ring-2 ring-black rounded-full"
              id="social"
              placeholder="JSM Academy Masterclasss"
              {...register("socialHandle", {
                required: {
                  value: true,
                  message: "Social handle is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.socialHandle?.message}
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
            <label htmlFor="thumbnail">Thumbnail</label>
            <Input
              className="ring-2 ring-black rounded-full"
              type="file"
              id="thumbnail"
              placeholder="Paste a link to your demo or promotional media"
              {...register("thumbnail", {
                required: {
                  value: true,
                  message: "Pitch cover is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.thumbnail?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="vidLink">Video Link</label>
            <Input
              className="ring-2 ring-black rounded-full"
              type="text"
              id="vidLink"
              placeholder="Paste a link to your demo or promotional media"
              {...register("vidLink", {
                required: {
                  value: true,
                  message: "Demo link to  your pitch is required"
                }
              })}
            />
            <p className="px-3 text-red-800 text-[10px]">
              {errors.vidLink?.message}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="pitch">PITCH</label>
            <MDEditor
              id="pitch"
              height={300}
              value={value}
              className="ring-2 ring-black rounded-full"
              // onChange={setValue}
              onChange={(value) => setValue(value || "")}

              // {...register("markdown", {
              //   required: {
              //     value: true,
              //     message: "Your pitch statement is required"
              //   }
              // })}
            />
            {errMarkdown && (
              <p className="px-3 text-red-800 text-[10px]">
                Your pitch statement is required
              </p>
            )}
          </div>

          <div className="bg-[#EE2B69] text-white flex items-center justify-center gap-2 rounded-full py-2 ring-2 ring-black">
            <button type="submit">
              {isSubmitting ? "Submitting..." : "SUBMIT YOUR PITCH"}
            </button>
            <BsFillSendFill />
          </div>
        </form>
      </div>
    </div>
  );
}

export default PitchSubmissionComp;
