import { FaGithub } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function Footer(){

    
    return(
        <>
          <div className="lg:mx-7 mx-4 lg:px-5 md:px-5 px-2 lg:py-5 md:py-5 py-3 mt-10 flex lg:flex-row md:flex-row flex-col lg:gap-0 gap-3 items-center justify-between bg-white rounded-lg">
             <p className="font-semibold lg:text-sm md:text-sm text-xs text-gray-700 text-center">© 2025 Muhammad Hasssan Raza. All rights reserved.</p>
             <div className="flex gap-4 justify-center">
                <a href={'https://github.com/MuhammadHassanRaza25'} target="_blank"><p className="text-2xl text-gray-700 rounded-full"><FaGithub/></p></a>
                <a href={'https://www.linkedin.com/in/muhammad-hassan-raza-aab5402b7/'} target="_blank"><p className="text-2xl text-gray-700 hover:text-blue-500 rounded-full"><FaLinkedinIn/></p></a>
                <a href={'mailto:hassanejaz773@gmail.com'}><p className="text-2xl text-gray-700 hover:text-red-500 rounded-full"><MdEmail/></p></a>
             </div>
          </div>
        </>
    )
}