
import React from 'react'
import DashNav from '../components/DashNav'

import Link from 'next/link'
import Footer from 'app/components/Footer'
import getUser from '@/userState'


const page = () => {
 
  return (
   
    <div >
        <DashNav/>
        <div className="hero bg-white min-h-screen mb-8 text-md py-4 font-medium">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
          <h1 className="text-2xl font-bold">Welcome <span className='text-secondary'>{getUser()}</span> </h1>
            <div className='flex justify-center my-6'>
              <h1 className='font-black text-3xl text-center '>Intro Video 🎬 <br /><span className='text-sm font-medium'> "Start your journey here! Get an overview of what you’ll learn and why this course is perfect for you. 🚀" </span></h1>
            </div>

         
            <div className='text-left'>
              <p className="py-6 text-xl font-extrabold">
                <span className='text-secondary'>Overview:</span> What You’ll Learn 📘
              </p>
              <ul>
                <li>&bull; <span className='font-semibold '>Set Up Your Environment:</span> Install Node.js to enable npm commands.</li>
                <li className='my-2'>&bull; <span className='font-semibold'>Install VS Code:</span> Your coding editor for Next.js development.</li>
                <li>&bull; <span className='font-semibold'>Create Your First Next.js App:</span> A hands-on start to building with Next.js.</li>
              </ul>

              <h1 className='text-2xl font-bold mt-20 mb-2'>
                <span className='text-secondary'>Step 1:</span>  Setting Up Node.js
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
                <span className='text-secondary'>Step 2:</span>  Installing VS Code
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
                <span className='text-secondary'>Step 3:</span>  Creating Your First Next.js App
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

            </div>
            </div>
            </div>
        <Footer/>
    </div>
  )
}

export default page
