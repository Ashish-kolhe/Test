import React from 'react'

const page = () => {
  return (
    <div>
        <div className="hero bg-white min-h-screen">
  <div className="hero-content text-left">
    <div className="max-w-md">
    <a href="/"><h1 className='text-4xl font-balck mb-9'>←</h1></a>
      <h1 className="text-3xl font-black">Refund Policy</h1>
      <p className="py-6">
      We want you to be satisfied with your purchase. If you encounter issues, our refund policy is as follows:
      </p>
      <ul className='ml-4'>
<li>&bull; Refunds are only available within 7 days of purchase and only for courses or templates that have not been accessed or downloaded.</li>
<li>&bull; To request a refund, email us at <span className='italic font-semibold'>contact@coddeit.site</span> with your purchase details.</li>
<li>&bull; Refunds are not available for partial usage or dissatisfaction after significant course progress.</li>
      </ul>
    </div>
  </div>
</div>
    </div>
  )
}

export default page