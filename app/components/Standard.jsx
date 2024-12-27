import React from 'react'
import getUser from '@/userState'

const Standard = () => {

  return (
    <div>
        <div className="hero bg-white min-h-screen">
  <div className="hero-content text-center">
    <div className="max-w-2xl">

        <h1 className="text-2xl font-bold">Welcome <span className='text-secondary'>{getUser()}</span>   </h1>
                    <div className='flex justify-center my-6'>
                      <h1 className='font-black text-3xl text-center '>Intro Video 🎬 <br /><span className='text-sm font-medium'> "Start your journey here! Get an overview of what you’ll learn and why this course is perfect for you. 🚀" </span></h1>
                    </div>
        
                    <div className='flex justify-center mb-20'>
                     <div className="video-container">
                        <iframe
                          className="rounded-3xl border-info border-4 "
                          width="352"
                          height="198"
                          src="https://www.youtube.com/embed/z7AUxPVFf_M?si=yrFXj_Q5nKhlY-C5"
                          title="YouTube Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        ></iframe>
                      </div>
        
                    </div>
      <h1 className="text-2xl font-black">Choose Your Approach</h1>
   <div className='flex justify-center gap-10 p-6'>
   <a href="#standard">
<button className='btn btn-success text-white '><span className='px-2'>Standard</span> </button></a> 
 <a href="#framework">
<button className='btn btn-secondary text-white'>Framework</button></a>
   </div>
      <p className='font-semibold leading-relaxed'>The <span className='text-success'>Standard</span> approach teaches the essentials of HTML, CSS, and JavaScript to build your first site. The <span className='text-secondary'>Framework</span> approach with Next.js and DaisyUI helps you build faster with practical tools.</p>
      <img className="w-20" src="./arrow.png" alt="" id='standard'/>
      
      <div className='my-20'>

<h1 className='text-xl font-black text-success divider divider-success'>Standard <span className='text-sm font-semibold text-slate-900'>approach</span> </h1>
<div className='flex justify-center mt-8 mb-8'>
<div className="breadcrumbs text-sm font-semibold">
  <ul>
    <li>
      <a>
      <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="24" width="18" viewBox="0 0 384 512"><path fill="#000000" d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>
        HTML
      </a>
    </li>
    <li>
      <a>
        <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#000000" d="M376.3 32L0 32 0 408.3c0 19 7.6 37.2 21 50.7s31.7 21 50.7 21l304.6 0c19 0 37.2-7.6 50.7-21s21-31.7 21-50.7l0-304.6c0-19-7.6-37.2-21-50.7s-31.7-21-50.7-21zM332.4 431.4c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.5-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-4-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L351.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.5 12.5c7.5 8.4 11.5 20.3 11.8 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4 27.4-12.3 35.7c-8.2 8.3-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-101 0c-7.7-8.5-11.7-20.7-12-36.6l31.3 0c.2 14.1 5.1 21.1 14.8 21.1c4.9 0 8.4-1.6 10.4-4.7c2-3.1 3-8 3-14.8c0-5.4-1.3-9.9-3.9-13.4c-3.5-4.2-8.1-7.5-13.2-9.5L250.2 368c-10.3-4.9-17.8-10.8-22.5-17.6c-4.5-6.8-6.7-16.3-6.7-28.4c0-13.6 4-24.6 11.8-33.1c8.1-8.5 19.1-12.7 33.2-12.7c13.6 0 24.1 4.2 31.4 12.5c7.6 8.4 11.5 20.3 11.9 35.9l-30.1 0c.2-5.1-.9-10.2-3-14.8c-1.7-3.4-5-5.1-10-5.1c-8.8 0-13.2 5.2-13.2 15.7c0 5.3 1.1 9.4 3.2 12.6c3.1 3.5 7 6.2 11.4 7.8l11.1 4.9c11.5 5.3 19.7 11.7 24.8 19.4c5.1 7.7 7.6 18 7.6 31c0 15.5-4.1 27.4-12.3 35.7s-19.5 12.5-34.1 12.5s-25.6-4.2-33.4-12.7zm-105.6 1.1c-8.4-7.7-12.5-19.2-12.5-34.5l0-75.4c0-15.2 4.4-26.7 13.2-34.6c8.9-7.8 20.7-11.8 35.2-11.8c14.1 0 25.2 4 33.4 12c8.3 8 12.5 20 12.5 35.9l0 6-33.1 0 0-5.8c0-6.1-1.3-10.7-4-13.6c-1.1-1.5-2.6-2.7-4.3-3.5s-3.5-1.2-5.4-1.1c-5.4 0-9.2 1.8-11.4 5.6c-2.3 5.2-3.3 10.8-3 16.4l0 65.5c0 13.7 4.8 20.6 14.4 20.8c4.5 0 7.9-1.6 10.2-4.8c2.5-4.1 3.7-8.8 3.5-13.6l0-4.9 33.1 0 0 5.1c0 10.6-2.1 19.5-6.2 26.6c-4 6.9-9.9 12.5-17.1 16c-7.7 3.7-16.1 5.5-24.6 5.3c-14.2 0-25.5-3.9-33.8-11.6z"/></svg>
         CSS
      </a>
    </li>
    <li>
      <span className="inline-flex items-center gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" height="24" width="21" viewBox="0 0 448 512"><path fill="#000000" d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>
        JS
      </span>
    </li>
  </ul>
</div>
</div>
<div className='text-left mb-20'>
<h1 className="text-xl font-black text-success" >Setup</h1>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2' src="./folder.JPG" alt="" />Make a New folder For your New site. </p>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2' src="./Open.JPG" alt="" />Open that Folder In VS code Or any other Text Editor. </p>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2' src="./files.JPG" alt="" />Create These Files to Get Sarted. <br />&bull; <span className='font-bold text-success'>index.html</span> will will be the Home Page of your site. You can add more pages if you want. <br />&bull;<span className='font-bold text-success'> styles.css</span> will manage all the designing part of your site. <br/>&bull;<span className='font-bold text-success'> script.js</span> is not necessary if your site is static. </p>
</div>
<div className='text-left mb-20'>
<h1 className="text-xl font-black text-success" >Build</h1>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2' src="./basic.JPG" alt="" />Go to <span className='font-bold text-success'>ChatGpt.com</span> and create a basic sturcture for your site. </p>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2' src="./copy.JPG" alt="" />Copy the code given By Chatgpt and head over to <span className='font-bold text-success'>Codepen.io</span> </p>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2' src="./design.JPG" alt="" />Customize the given code according to your prefrence, codepen makes it easier to make UI for your site  </p>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2' src="./final.JPG" alt="" />Once done with the Designing part, head back to VS code and paste the finalised code for each file.</p>
</div>
<div className='text-left mb-14'>
<h1 className="text-xl font-black text-success" >Deploy</h1>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2 w-28' src="./Netlify.png" alt="" />For Depolyment Go to Netlify, and Don’t worry it's not that compilcated with Netlify.</p>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2 ' src="./add.JPG" alt="" />Simply Add New Site, and Deploy Manually because we have a folder prepared for it. </p>
<p className='text-gray-900 py-4 leading-relaxed'><img className='mb-2' src="./upload.JPG" alt="" />And Finnally just Upload the folder to Netlify.</p>
</div>
<h1 className="text-xl font-black text-black" ><span className='text-success'>{getUser()} </span>You Did It! 🎉</h1>
<p className='my-2 leading-relaxed'>your first site is live on the internet. <br />Now, if you want to speed up the process and create more dynamic websites, it's time to explore The Framework approach</p>
<div className='flex justify-center' id="framework">
<img className='w-20' src="./arrow2.png" alt="" />
</div>
</div>
<h1 className='text-xl font-black text-secondary divider divider-secondary -mb-6'>Framework <span className='text-sm font-semibold text-slate-900'>approach</span> </h1>
    
    </div>
    
  </div>
</div>
    </div>
  )
}

export default Standard