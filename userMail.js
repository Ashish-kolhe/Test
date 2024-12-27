
import { signIn,signOut,auth } from "@/auth"
// Function to set the user

// Function to get the user
export default async function getMail() {
    const session = await auth();
    const user = session?.user
  return user.email;
}