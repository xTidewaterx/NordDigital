import React from 'react'
import founderImage from "../images/founders.png"


export const Card = () => {
  return (
    <div className='app__CardContainer min-w-[300px] w-120'>

<div
  class="relative flex max-w-[24rem] flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
  <div class="relative m-0 overflow-hidden text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
    <img
      src={founderImage}
      alt="ui/ux review check" />
  </div>
  <div class="p-6">
    <h4 class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
   NordDigital - Ekspander Digitalt
    </h4>
    <p class="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-gray-700">
      Vi har kunnskapen som gjør at du trygt kan ekspandere bedriften din på nettet, digitaliser nå.
    </p>
  </div>
  <div class="flex items-center justify-between p-6">
    <div class="flex items-center -space-x-3">
      <img alt="React"
        src="https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png"
        class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
      <img alt="JavaScript"
        src="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
   

   <img alt="Python"
        src="   https://assets.stickpng.com/images/5848152fcef1014c0b5e4967.png"
        class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
   
   
   <img alt="Firebase"
        src="https://cdn4.iconfinder.com/data/icons/google-i-o-2016/512/google_firebase-2-512.png"
        class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
   


   <img alt="Google"
        src="https://www.deliverlogic.com/wp-content/uploads/2021/04/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
        class="relative inline-block h-9 w-9 !rounded-full  border-2 border-white object-cover object-center hover:z-10" />
   


    </div>
    


    <p class="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
      Bred Kompetanse
    </p>
  </div>
</div> 


    </div>
  )
}
