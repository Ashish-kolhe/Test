
import React from 'react'
import getUser from '@/userState'
import Link from 'next/link'
import Footer from './Footer'
const DashHero = () => {
  return (
    <div>

      <div className="hero bg-white min-h-screen mb-8 text-md py-4 font-medium">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-2xl font-bold">Welcome <span className='text-primary'>{/* getUser()*/}</span> </h1>
            <div className='flex justify-center my-6'>
              <h1 className='font-black text-3xl text-center '>Intro Video 🎬 <br /><span className='text-sm font-medium'> "Start your journey here! Get an overview of what you’ll learn and why this course is perfect for you. 🚀" </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
             <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/lzkB1NRlDvU?si=bvQqHxBrnsDpLKUX"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
            <div className='text-left'>
              <p className="py-6 text-xl font-extrabold">
                <span className='text-primary'>Overview:</span> What You’ll Learn 📘
              </p>
              <ul>
                <li>&bull; <span className='font-semibold '>Set Up Your Environment:</span> Install Node.js to enable npm commands.</li>
                <li className='my-2'>&bull; <span className='font-semibold'>Install VS Code:</span> Your coding editor for Next.js development.</li>
                <li>&bull; <span className='font-semibold'>Create Your First Next.js App:</span> A hands-on start to building with Next.js.</li>
              </ul>

              <h1 className='text-2xl font-bold mt-20 mb-2'>
                <span className='text-primary'>Step 1:</span>  Setting Up Node.js
              </h1>
              <p> <span className='font-bold'>Why?</span> 🤔 Node.js provides the runtime for JavaScript and includes npm for managing packages 🛠️.</p>
              <ul className="my-2">
                <li>&bull; Download the latest LTS version from <Link href='https://nodejs.org/en' className='text-sky-600 underline-offset-2 underline'> Node.js official site.</Link></li>
                <li>&bull; Follow the installation instructions for your operating system.</li>
                <li>&bull; Verify the installation:</li>
              </ul>
              <div className="mockup-code my-4 ">
                <pre data-prefix="1"><code>npm -v</code></pre>
              </div>
              <h1 className='text-2xl font-bold mt-20 mb-2'>
                <span className='text-primary'>Step 2:</span>  Installing VS Code
              </h1>
              <p> <span className='font-bold'>Why?</span> 🤔 VS Code is a lightweight ⚡ and powerful 💪 code editor with excellent Next.js support 🚀.</p>
              <ul className="my-2">
                <li>&bull; Download it from
                  <Link href='https://code.visualstudio.com/' className='text-sky-600 underline-offset-2 underline'> VS Code official site.</Link></li>
                <li>&bull; Install Following Extensions:
                  <ul className='ml-8'>
                    <li>&bull; Tailwind CSS IntelliSense</li>
                    <li>&bull; ES7+ React/Redux/React-Native snippets </li>
                  </ul>
                </li>

              </ul>
              <h1 className='text-2xl font-bold mt-20 mb-2'>
                <span className='text-primary'>Step 3:</span>  Creating Your First Next.js App
              </h1>
              <p> <span className='font-bold'>Why?</span> 🤔 Next.js simplifies React development ⚛️ and makes building modern web apps easier 🔧.</p>
              <ul className="my-2">

                <li>&bull; Open your terminal and run: </li>
                <div className="mockup-code my-4">
                  <pre data-prefix=">"><code>npx create-next-app@latest appName</code></pre>
                  <pre data-prefix=">"><code>cd appName</code></pre>
                  <pre data-prefix=">"><code>npm run dev</code></pre>
                </div>

              </ul>
            </div>


            <div className='flex justify-center mt-28 mb-6'>
              <h1 className='font-black text-4xl text-center '>Quick Tips 🚀 <br /><span className='text-xl font-semibold'> <span className='text-primary'>{/* getUser()*/}</span> , these secret tips are just between us 🤫 </span></h1>
            </div>





            <div className='flex justify-center'>
              <img className='rounded-2xl' src="./codepen.jpg" alt="" />
            </div>
            <div className='flex justify-center mt-8'>
              <h1 className="text-4xl font-black">🌐 Use <span className='underline-offset-2 underline text-primary'> <Link href="https://codepen.io">CodePen:</Link> </span> </h1>
            </div>
            <p className="py-6 mb-20">
              Preview your HTML, CSS, and JavaScript in real-time ⚡ without setting up a local environment. Perfect for quick experiments!
            </p>





            <div className='flex justify-center'>
              <img className='rounded-2xl' src="./daisy.jpg" alt="" />
            </div>
            <div className='flex justify-center mt-8'>
              <h1 className="text-4xl font-black">🎨 Try <span className='underline-offset-2 underline text-primary'><Link href="https://daisyui.com">DaisyUI:</Link></span></h1>
            </div>
            <p className="py-6 mb-20">
              Make your projects beautiful 🎉 with pre-made, responsive components for Tailwind CSS.
            </p>




            <div className='flex justify-center'>
              <img className='rounded-2xl' src="./chatgpt.gif" alt="" />
            </div>
            <div className='flex justify-center mt-8'>
              <h1 className="text-4xl font-black">🤖 Use <span className='underline-offset-2 underline text-primary'><Link href="https://chatgpt.com">ChatGPT:</Link></span></h1>
            </div>
            <p className="py-6 mb-20">
              Get instant help 💡 on repetitive tasks or brainstorming ideas to save time.
            </p>



            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>Creating New Project 🚀 <br /><span className='text-sm font-medium'> Now that the setup is done, let’s start building your website. We’ll walk through using Next.js, styling with DaisyUI, and deploying on Netlify—step by step. Let’s get started! 💻🎉 </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/r6nYP1s6CHE?si=stfzmamsGNNhuFlm"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>📂 Folder Structure <br /><span className='text-sm font-medium'> Organize your project files like a pro for clarity and smooth workflow! 🗂️✨ </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/lzkB1NRlDvU?si=bvQqHxBrnsDpLKUX"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>🎨 UI Library (DaisyUI) <br /><span className='text-sm font-medium'> Effortlessly design stunning interfaces with pre-made components! 🖌️🌟 </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/lzkB1NRlDvU?si=bvQqHxBrnsDpLKUX"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>🧩 Components <br /><span className='text-sm font-medium'> Build your UI piece by piece with reusable blocks! 🛠️✨ </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/lzkB1NRlDvU?si=bvQqHxBrnsDpLKUX"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>🏠 Landing Page <br /><span className='text-sm font-medium'> Create a stunning first impression with a sleek and functional design! ✨📋 </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/sGD2WQytWY8?si=b2l9C6TsZ4Pka0qg"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>📄 New Page <br /><span className='text-sm font-medium'> Expand your site effortlessly with a fresh, custom page! ➕🌟 </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/EjBz-5FVB4Y?si=Ux2efMucn6TXMkTF"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>🔗 Navigation Links <br /><span className='text-sm font-medium'> Seamlessly guide users through your site with links! 🧭✨ </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/1SHewsWhlb0?si=PNGCVwk0FTKo6ArM"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>✅ Finishing Up <br /><span className='text-sm font-medium'> Wrap it all together and get ready to launch! 🚀🎉 </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/dU7qfvWn7cE?si=ON83I-QwJQRKZ45e"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-6'>
              <h1 className='font-black text-3xl text-center '>🌐 Deployment <br /><span className='text-sm font-medium'> Take your project live and share it with the world! 🚀🌍 </span></h1>
            </div>

            <div className='flex justify-center mb-20'>
              <div className="video-container">
                <iframe
                  className="rounded-3xl shadow-xl shadow-cyan-100"
                  width="368"
                  height="207"
                  src="https://www.youtube.com/embed/VxlR-a0PG2Q?si=_g50wpEFtFkqb3kS"
                  title="YouTube Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>

            <div className='flex justify-center mb-14'>
              <h1 className='font-black text-3xl text-center '><span className='text-primary'></span> You Did It! 🎉<br /><span className='text-sm font-medium'> "<span className='text-primary font-bold'>Congratulations!</span> You’ve now built a complete website with <span className=' font-bold'>Next.js</span>, styled it with <span className=' font-bold'>DaisyUI</span>, used <span className=' font-bold'>ChatGPT</span> to assist your development process, and deployed it to <span className=' font-bold'>Netlify</span>. You're all set to start building amazing projects. Keep experimenting, and keep building! 💪👨‍💻👩‍💻" </span></h1>
            </div>
           





            <div className='flex justify-center mt-28 mb-6'>
              <h1 className='font-black text-3xl text-center '>Project Templates 🚀<br /><span className='text-sm font-medium'> "Get started quickly with our pre-built templates. Customize and build your next project with ease! 💡" <br /><a className='text-blue-600 font-bold underline' href="https://coddeit-template.netlify.app/"> Click Here</a> For Preview </span></h1>
            </div>

            <div className='flex justify-center'>
              <div className="diff aspect-[16/9] rounded-3xl">
                <div className="diff-item-1">
                  <div className="bg-primary text-white grid place-content-center text-5xl font-black">
                    PORTFOLIO<br /><span className='text-xl'>Template</span>
                  </div>
                </div>
                <div className="diff-item-2">
                  <div className="bg-white grid place-content-center text-5xl font-black ">
                    <img src="../Cover.jpg" alt="" />
                  </div>
                </div>
                <div className="diff-resizer"></div>
              </div>
            </div>

            <button className='btn btn-primary btn-outline mt-10 mb-20' >Download</button>

            <div className='flex justify-center'>
              <div className="diff aspect-[16/9] rounded-3xl">
                <div className="diff-item-1">
                  <div className="bg-primary text-white grid place-content-center text-5xl font-black">
                    LOGIN<br /><span className='text-xl'>Template</span>
                  </div>
                </div>
                <div className="diff-item-2">
                  <div className="bg-white grid place-content-center text-5xl font-black ">LOGIN<br /><span className='text-xl'>Template</span> </div>
                </div>
                <div className="diff-resizer"></div>
              </div>
            </div>
            <button className='btn btn-primary btn-outline mt-10 mb-20'>Download</button>




          </div>
        </div>
      </div>
    </div>
  )
}

export default DashHero