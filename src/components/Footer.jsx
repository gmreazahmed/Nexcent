import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import Logo2 from "./image/Logo2.png";
// import send from "./image/send.png";

const Footer = () => {
  return (
    <div>
      <footer className="bg-[#263238] text-white py-12 px-6">
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-4">
       
        <div>
          <div className="flex items-center gap-2 mb-4">
            <img src={Logo2} alt="Nexcent" className="w-[160px] h-[25px]" />
           
          </div>
          <p className="text-sm text-gray-400 mb-6">
            Copyright © 2020 Landify UI Kit.
            <br />
            All rights reserved
          </p>
         
          <div className="flex gap-3 text-gray-300 text-lg">
            <a href="#"><FaInstagram className="hover:text-white" /></a>
            <a href="#"><FaDribbble className="hover:text-white" /></a>
            <a href="#"><FaTwitter className="hover:text-white" /></a>
            <a href="#"><FaYoutube className="hover:text-white" /></a>
          </div>
        </div>

      
        <div>
          <h3 className="font-semibold text-lg mb-4">Company</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">About us</a></li>
            <li><a href="#" className="hover:text-white">Blog</a></li>
            <li><a href="#" className="hover:text-white">Contact us</a></li>
            <li><a href="#" className="hover:text-white">Pricing</a></li>
            <li><a href="#" className="hover:text-white">Testimonials</a></li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-lg mb-4">Support</h3>
          <ul className="space-y-2 text-gray-400 text-sm">
            <li><a href="#" className="hover:text-white">Help center</a></li>
            <li><a href="#" className="hover:text-white">Terms of service</a></li>
            <li><a href="#" className="hover:text-white">Legal</a></li>
            <li><a href="#" className="hover:text-white">Privacy policy</a></li>
            <li><a href="#" className="hover:text-white">Status</a></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4">Stay up to date</h3>
          <form className="flex items-center bg-gray-600 rounded-lg overflow-hidden">
            <input
              type="email"
              placeholder="Your email address"
              className="w-full px-4 py-2 text-sm text-white placeholder-gray-300 bg-transparent outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 text-gray-300 hover:text-white"
            >
             <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" viewBox="0 0 14 13" fill="none">
<g clip-path="url(#clip0_47_137)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.4608 0.76669C12.6026 0.908499 12.6506 1.11901 12.5844 1.3083L8.93002 11.7493C8.8593 11.9514 8.67243 12.0898 8.45855 12.0985C8.24468 12.1072 8.04715 11.9845 7.96021 11.7889L5.95355 7.27392L1.43857 5.26726C1.24297 5.18032 1.12025 4.98279 1.12898 4.76892C1.1377 4.55505 1.2761 4.36817 1.47813 4.29746L11.9192 0.643093C12.1085 0.576842 12.319 0.62488 12.4608 0.76669ZM6.97174 6.99403L8.37953 10.1616L10.8432 3.1226L6.97174 6.99403ZM10.1049 2.38431L3.06592 4.84794L6.23345 6.25573L10.1049 2.38431Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_47_137">
<rect width="12.5293" height="12.5293" fill="white" transform="translate(0.606506 0.0917969)"/>
</clipPath>
</defs>
</svg>
            </button>
          </form>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer
