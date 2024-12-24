"use client";
import { randomBytes } from "crypto";
import { redirect } from 'next/navigation';
import { useState } from 'react'
import React from 'react'
 const PaymentPage = ()=>{
  
    const AMOUNT = 49;
    const [isProcessing,setIsProcessing] = useState(false);
    const handelPayment = async ()=>{
        setIsProcessing(true);
        try{
            const response = await fetch( "/api/create-order", {method:"POST"});
            const data = await response.json();

            const options = {
                key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
                amount: AMOUNT * 100,
                currency: "INR",
                name: "Coddeit",
                description: "Learn Programming the Right way!",
                order_id: data.orderId,
                handler: function (response) {
                    console.log("Payment Successful",response);
                    
                    redirect('/456f8679f46cd658f5fd1dfa16a3e2f2');
                  
                },
            
                theme:{
                    color: "#000000",
                },
            };
            const rzpl = new window.Razorpay(options);
            rzpl.open();
        }catch (error){
            console.log("Payment Failed",error);
        }finally{
            setIsProcessing(false);

        }
        
    };
    return (
        <div className='bg-white'> 
<script src="https://checkout.razorpay.com/v1/checkout.js"/>
<button 
onClick={handelPayment}
disabled={isProcessing}
className='btn btn-secondary text-white disabled:text-white disabled:bg-secondary'>
    {isProcessing ? "Processing.." : "Start Creating!"}
</button>
        </div>
    );
 };
 export default PaymentPage;
