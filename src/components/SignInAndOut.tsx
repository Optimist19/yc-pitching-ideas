import Image from "next/image";
import { auth, signIn, signOut } from "../../auth";
import { UsersType } from "@/types";


async function SignInAndOut() {
  const userSession = (await auth()) as UsersType;
  // console.log(userSession, "there is a user");

  const user = userSession?.user;
  // console.log(user, "user in the signin");

  const fullName = user?.name || "";
  const initials = fullName.split(" ").map(word => word[0]).join("");
  // console.log(initials); 

  return (
    <div>
      {user ? (
        <div className="flex gap-5 items-center">
          <span>{initials}</span>
          <div>
            <Image src={user.image} alt="user-photo" width={20} height={20} className="rounded-full"/>
          </div>
          <form className="hover:text-[#EF4444]"
            action={async () => {
              "use server";
              await signOut();
            }}>
            <button type="submit">Sign out</button>
          </form>
        </div>
      ) : (
        <div>
          <form className="hover:text-[#EF4444]"
            action={async () => {
              "use server";

              await signIn("google");
            }}>
            <button type="submit">Signin with Google</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default SignInAndOut;
