
import { UsersType } from "@/types";
import Image from "next/image";
import { auth } from "../../auth";

export default async function GetUserImage() {
  const userSession = (await auth()) as UsersType;
  // console.log(userSession, "userSession")

  return (
    <div>
      <h1>Pitch Submission</h1>
      {userSession.imageUrl && (
        <Image src={userSession.imageUrl} width={50} height={50} alt="User" />
      )}
    </div>
  );
}
