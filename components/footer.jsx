import Image from 'next/image';
import Link from "next/link"
import Logo from "@/public/images/logo.png"
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='relative z-[20] overflow-hidden mt-12 border-t border-transparent-white py-[5.6rem] text-sm' >
            <div>
                <div className='flex md:flex-row flex-col items-center md:justify-between gap-10 md:gap-0 md:px-[150px] px-6 z-10 relative'>
                    <div className="flex flex-col gap-5 ">
                        <div className=' flex justify-evenly W-[50%]'>
                            <Image src={Logo} className='w-[80px]' />
                        </div>
                        <div className='flex flex-col '>
                            <h2 className="text-xl text-center mb-4 md:mb-7 md:text-3xl">
                                Board of Science and Technology
                            </h2>
                            <span className='flex items-center text-center justify-evenly px-2'>
                                <Link href={"https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FIIT-Ropar-262431593827848%2F%3Fref%3Dbr_rs"}>
                                    <FaFacebook className='text-[25px] rounded-full hover:text-[skyblue]' />
                                </Link>
                                <Link href={"https://twitter.com/iitrpr?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"}>
                                    <FaSquareXTwitter className='text-[25px] rounded-full hover:text-[grey]' />
                                </Link>
                                <Link href={"https://www.instagram.com/iitropar/?hl=en"}>
                                    <FaInstagramSquare className='text-[25px] rounded-full hover:text-[coral]' />
                                </Link>
                            </span>
                        </div>
                    </div>
                    <div className='px-auto pl-6 flex flex-col items-end justify-between gap-2'>
                        <span className='w-full'>
                            <h4 className='text-xl leading-7 font-semibold mb-4 '>
                                Address
                            </h4>
                            <p className='text-md leading-10 font-[400] mb-4' >
                                Nangal Rd, Hussainpur, Rupnagar, Punjab, India 140001
                            </p>
                        </span>
                        <span className='w-full'>
                            <h4 className='text-xl leading-7 font-semibold mb-4 '>
                                Phone
                            </h4>
                            <p className='text-md leading-10 font-[400] mb-4'>
                                General Secretary: +91 76270 00977
                            </p>
                        </span>
                        <span className='w-full'>
                            <h4 className='text-xl leading-7 font-semibold mb-4 '>
                                Email Address
                            </h4>
                            <p className='text-md leading-10 font-[400] mb-4'>
                                General Secretary: gs.tech@iitrpr.ac.in
                            </p>
                        </span>

                    </div>
                </div>
                <span className='flex items-center justify-evenly mt-20 text-center'>
                    <p className='text-sm font-[400] text-primary-text leading-8'>
                        Developed by BOST Team 2024
                    </p>
                </span>
            </div>

            <div id="gooeyL" className="h-[700px] w-[700px] absolute rounded-[50%] top-[-70%] left-[70%]  blur-[20px] z-[7]">
            </div>
            <div id="gooey2" className="h-[700px] w-[700px]  absolute rounded-[50%] top-[-20%] left-[60%]  blur-[20px] z-[7]">
            </div>

        </footer>

    )
}

export default Footer