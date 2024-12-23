
import Navbar from "./components/Navbar";
import Link from 'next/link'
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import PaymentPage from "./components/Payment";
import { Sign } from "crypto";
import Footer from "./components/Footer";
export default async function Home() {
 
  const session = await auth();
  if (session) return redirect('/dashboard')
  return (
    <>
      <Navbar />

      <div className="hero bg-white min-h-screen ">
  
        <div className="hero-content text-center ">
       
          <div className=" max-w-2xl ">  
          <img className="w-20" src="./arrow.png" alt="" />
            <h1 className="flex justify-center">
             <img className="w-52 " src="./web.gif"/>
            </h1>
            <h1 className="text-4xl font-black leading-normal">Make Your First <br /><span className="bg-gradient-to-r from-white  via-secondary to-white text-white  rounded-xl "><span className="text-transparent">.....</span>&lt;Website/&gt;<span className="text-transparent">.....</span></span> </h1>
            <p className="py-6">
             Create your first site from scratch with practical, hands-on steps—no course, just building.
            </p>
            <PaymentPage />

            <div className="flex justify-center mt-4">
              <div className="flex overflow-hidden  -space-x-4 rtl:space-x-reverse  p-4">
                <div className="avatar  ">
                  <div className="w-10 rounded-full  border-white border-4">
                    <img src="./Thor.jpg" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 rounded-full  border-white border-4">
                    <img src="./profile3.jfif" />
                  </div>
                </div>
                <div className="avatar">
                  <div className="w-10 rounded-full border-white border-4">
                    <img src="./a.jpg" />
                  </div>
                </div>
                <div className="avatar placeholder" >
                  <div className="bg-secondary text-white w-12 rounded-full border-white border-4">
                    <span className="font-bold">+69</span>
                  </div>
                </div>
              </div>
            </div>
            <p className="pt-2 pb-10 text-gray-700 italic">
              <span className="text-black font-bold">72</span> Students Built Their First Website!
            </p>
            <div >
              <kbd className="kbd mx-2 btn btn-outline btn-secondary">Coddeit</kbd>
              +
              <kbd className="kbd mx-2 px-4 btn btn-outline btn-secondary"> You </kbd>
              =
              <kbd className="kbd mx-2 bg-green-600 font-bold text-white py-2">Success</kbd>
            </div>
            
          </div>
        </div>
      </div>
       
       <div className="hero mt-20 text-center px-20 bg-white " >
      <div className="max-w-md ">
      <div className="rating rating-sm mb-4 bg-white">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-amber-500" defaultChecked/>
</div>
<p className="text-xs font-bold text-slate-900 leading-6 ">"I never thought I could build a website, but once I took the leap with Coddeit, it all started to make sense. <span className="bg-pink-100"> Now I have my own site up and running, and it feels amazing!</span>"</p>
      <div className="flex justify-center mt-6">
      <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="./kid.jpg" />
  </div>
</div>
<p className="text-sm font-bold text-slate-900 ml-4">Jhon Doe <br /> <span className="text-xs font-light">Built, <span className="text-blue-500 underline underline-offset-1"><a href="https://textintospeech.netlify.app/">textintospeech</a></span> </span></p>
      </div>
      </div>
      </div>
      
      <div className="hero min-h-screen mt-20 mb-20  bg-white"  >
        <div className="hero-content text-center">
          <div className="max-w-2xl">
        
          <h1 className="flex justify-center" id="pricing">
            <img className="w-52 mb-4" src="./sleep.gif" alt="" />
            </h1>
            <h1 className="text-3xl font-bold mb-12 ">Bored of Tutorials? <span className="text-4xl font-black text-secondary"> Time to Build!</span>
            </h1>
            
           
            <div className="flex content-center justify-center ">

            

              <div className="card bg-white rounded-box  h-3/5   text-neutral-700 p-10 text-left border-pink-500 border-2  indicator">
              <span className="indicator-item indicator-center badge badge-secondary font-bold text-white">Pocket money friendly!</span>
                <h1 className="text-7xl font-black mb-6 text-secondary"><span className="text-lg text-red-500 line-through">₹599</span><span className="text-green-500">₹49</span><span className="text-lg text-secondary">/Lifetime</span></h1>
                <p className="font-bold"><span className="text-green-500">✔ </span>Full access. 📚</p>

                <p className="font-bold"><span className="text-green-500">✔ </span>Project tutorials. 🛠️</p>
                <p className="font-bold"><span className="text-green-500">✔ </span>Lifetime access. 🔒</p>
                <p className="font-bold"><span className="text-green-500">✔ </span>Beginner-friendly tips. 🌟</p>
                <p className="font-bold"><span className="text-green-500">✔ </span>Prebuilt templates included. 🖼️</p>
               
                <div className="flex justify-center mt-6">
                  <PaymentPage />
                </div>
              </div>
            </div>
            
            <div className="text-left mt-20">
              <p className="font-bold"><span className="text-red-500">✖ </span>Instead of Wasting months Watching Tutorial's</p>
              <p className="font-bold"><span className="text-green-500">✔ </span>Learn by building real projects.</p>
              <p className="font-bold"><span className="text-green-500">✔ </span>Focus on solving real-world problems.</p>
              <p className="font-bold"><span className="text-green-500">✔ </span>Start creating, not just consuming content.</p>
            </div>
           
            <div className="hero bg-white min-h-screen -mb-32" id="about">
           
  <div className="hero-content flex-col lg:flex-row-reverse ">
  <p className="font-bold text-black">Hey It's <span className="text-amber-500 font-black">Ashish</span>,</p>
    <img
      src="./Ashish.png"
      className="max-w-56 " />
    <div>
      <h1 className="text-5xl font-black"><span className="text-black"><span className="text-secondary">"</span>  <span className="text-red-600 italic">Break</span> the <span className="text-amber-500 italic underline-offset-1">Learning</span> Barrier <span className="text-secondary">"</span></span></h1>
      <p className="py-6 font-medium">
      "I spent <span className="text-red-500 italic">years</span> learning coding from books and tutorials but never built anything real. Then I realized—only <span className="text-red-500 italic">20% </span> of what I learned was needed to start earning through coding. Now, I focus on building and creating, and I want to help you do the same."
      </p>
      
    </div>
  </div>
  
</div>
<a href='https://instagram.com/ashishkolhe_'>
<kbd className="kbd p-2 m-6 kbd-lg bg-white"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#ff00d4" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></kbd></a>
<a href=""><kbd className="kbd p-2 m-6 kbd-lg bg-white"><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#0019d6" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg></kbd></a>
<a href=""><kbd className="kbd p-2 m-6 kbd-lg bg-white" ><svg xmlns="http://www.w3.org/2000/svg" height="32" width="28" viewBox="0 0 448 512"><path fill="#000000" d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z"/></svg></kbd>     </a>       
            <h1 className="text-3xl font-black mb-8 mt-28"id="faq">Frequently Asked Questions</h1>
            <div className="text-left ">
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="my-accordion-2" defaultChecked />
                <div className="collapse-title text-xl font-bold">What do I get exactly?</div>
                <div className="collapse-content">
                  <p>You’ll gain practical coding skills, access to real-world projects, and a clear path to building your own portfolio and business. No fluff, just results.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">Who is this for?</div>
                <div className="collapse-content">
                  <p>This is perfect for entrepreneurs, creators, or anyone who wants to learn coding quickly and effectively without focusing on certifications. If you're looking to build, create, and launch, this is for you.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold">What if I get stuck along the way?</div>
                <div className="collapse-content">
                  <p>Don’t worry! We offer support via dedicated forums, chat groups, and resources to help you overcome any hurdles. You’re never alone on this journey.</p>
                </div>
              </div>
              <div className="collapse collapse-arrow bg-white">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title text-xl font-bold"> Can I use UPI for payments?</div>
                <div className="collapse-content">
                  <p>Yes, we accept UPI payments for your convenience. Simply select UPI as a payment option during checkout.</p>
                </div>
              </div>
            </div>
            <div className="hero mt-20 text-center px-20 ">
      <div className="max-w-md ">
      <div className="rating rating-sm mb-4 bg-white">
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-500"  />
  <input type="radio" name="rating-4" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-amber-500" />
  <input type="radio" name="rating-1" className="mask mask-star-2 bg-amber-500" defaultChecked/>
</div>
<p className="text-xs font-bold text-slate-900 leading-6 ">"<span className="bg-pink-100">I spent months stuck in endless tutorials and still couldn’t build a single website.</span> Then I found Coddeit. It just clicked—I finally built my first site, and seeing it live online feels unreal!"</p>
      <div className="flex justify-center mt-6">
      <div className="avatar">
  <div className="w-12 rounded-full">
    <img src="./test.jpg" />
  </div>
</div>
<p className="text-sm font-bold text-slate-900 ml-4">Jhon Doe <br /> <span className="text-xs font-light">Built, <span className="text-blue-500 underline underline-offset-1"><a href="https://gamestoreforfun.netlify.app/">gamestoreforfun</a></span> </span></p>
      </div>
      </div>
      </div>
          </div>
        </div>

      </div>
<Footer/>
      
    </>
  );
}
