import Image from "next/image";
import { auth, signIn, signOut } from "../../auth";

interface AuthTypes {
  name: string;
  email: string;
  image: string;
}

interface UsersType {
  user: AuthTypes;
  expires: string;
}

async function SignInAndOut() {
  const userSession = (await auth()) as UsersType;
  // console.log(userSession, "there is a user");

  const user = userSession?.user;

  return (
    <div>
      {user ? (
        <div className="flex gap-5 items-center">
          <span>{user.name}</span>
          <div>
            <Image src={user.image} alt="user-photo" width={20} height={20} className="rounded-full"/>
          </div>
          <form
            action={async () => {
              "use server";
              await signOut();
            }}>
            <button type="submit">Sign out</button>
          </form>
        </div>
      ) : (
        <div>
          <form
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
