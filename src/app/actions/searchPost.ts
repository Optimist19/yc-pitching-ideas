// "use server";

// import { SimilarPostTypes } from "@/types";
// import prisma from "../../../lib/prisma";

// export async function searchPost(formData: FormData): Promise<SimilarPostTypes[]> {
// 	const search = formData.get("search");
// 	const searchedPitch = await prisma.users.findMany({
// 	  where: { title: { contains: search } }
// 	});
// 	console.log(search, "search");
// 	console.log(searchedPitch, "searchedPitch");
// 	return searchedPitch;
//   }


