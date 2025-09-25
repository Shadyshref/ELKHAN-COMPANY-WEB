import React from 'react'

const Footer = () => {
  return (
   <footer id='contact' class=" scroll-smooth px-6 md:px-16 lg:px-24 xl:px-32 pt-8 w-full mt-30 text-white">
    <div class="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500/30 pb-6">
        <div class="md:max-w-96 text-center">
            <img src="/images/second-image.png-removebg-preview.png" className='w-80' alt="" />
            <p class="mt-1  text-orange-400 text-lg">
               Architecture
            </p>
        </div>
        <div class="flex-1 flex items-start md:justify-end gap-20">
            <div>
                <h2 class="font-semibold mb-5 text-white">Company</h2>
                <ul class="text-sm scroll-smooth  text-white space-y-2">
                    <li><a  href="#">Home</a></li>
                    <li><a href="#">About us</a></li>
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Privacy policy</a></li>
                </ul>
            </div>
            <div>
                <h2 class="font-semibold mb-5 text-white">Get in touch</h2>
                <div class="text-sm space-y-2">
                    <p>+20 101 017 2682</p>
                    <p>contact@example.com</p>
                </div>
            </div>
        </div>
    </div>
    {/* <p class="pt-4 text-center text-xs md:text-sm pb-5">
        Copyright 2024 © <a href="https://prebuiltui.com">PrebuiltUI</a>. All Right Reserved.
    </p> */}
</footer>
  )
}

export default Footer
