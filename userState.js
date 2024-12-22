
import { signIn,signOut,auth } from "e:/Projects/coddeit/auth"
// Function to set the user

// Function to get the user
export default async function getUser() {
    const session = await auth();
    const user = session?.user
  return user.name;
}
