import { signIn,signOut,auth } from "@/auth"

export default async function SignIn() {
    const session = await auth();
    console.log(session)
    const user = session?.user

  return (
        <form
      action={async () => {
        "use server"
        await signIn("google", { redirectTo: '/dashboard' })
      }}
     
    >
      <div className="hero bg-white min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-sm">
      <div className="flex justify-center">
      <img className="w-32 mb-6" src="./profile.gif" alt="" />
      </div>
      <h1 className="text-2xl font-bold">You're Almost there Just <span className="text-secondary">Sign Up</span> with Your <span className="text-secondary">Google</span> Account.</h1>
      <p className="py-6 font-medium">
      <span className="text-red-500"> Don't Close</span> the app or<span className="text-red-500"> Refresh</span> The page!
      </p>
      <button className="btn btn-secondary text-white" type="submit">Sign Up</button>
    </div>
  </div>
</div>
    </form>
    
  )
} 