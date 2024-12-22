
import { signIn,signOut,auth } from "@/auth"

export default async function SignOut() {
  
  return (
    <form
      action={async () => {
        "use server"
        await signOut({redirectTo: '/'})
      }}
    >
       
      <button className="btn btn-primary" type="submit">Sign out</button>
    </form>
  )
} 