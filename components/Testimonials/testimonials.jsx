"use client";
// import Swiper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination } from 'swiper/modules';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import img1 from "@/components/Images/deansa.jpg"
import img2 from "@/components/Images/faculty.jpeg"
import img3 from "@/components/Images/gsecy.jpg"
import Image from 'next/image';


const Testimonials = () => {
    return (
        <div className='mt-[30px] lg:mt-[55px] '>
            <Swiper
                modules={[Pagination]}
                pagination={{ clickable: true }}
                spaceBetween={30}
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 30
                    }
                }}>
                <SwiperSlide> <div className='py-[30px] px-5 rounded-3 hi'>
                    <div className='flex items-center justify-between'>
                        <Image src={img1} alt="img" className='rounded-[50%] w-[80px] h-[80px]' />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor '>
                                Dr. S. C. Martha
                            </h4>
                            <p className='text-[13px] leading-[30px] font-semibold text-headingColor '>
                                Dean Student Affairs
                            </p>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        What I understand the duty of student affairs (SA) is to create an environment to students to participate in various academic and non-academic activities, while judiciously ensuring discipline and security, for making them global "learned" leaders with utmost satisfaction on their understanding, knowledge and experience gained while staying at campus. I strongly believe that, our students have huge potential to become world leaders and SA team is working hard to ensure this happen !
                    </p>
                </div></SwiperSlide>
                <SwiperSlide>  <div className='py-[30px] px-5 rounded-3 hi'>
                    <div className='flex items-center justify-between'>
                        <Image src={img2} alt="img" className='rounded-[50%] w-[80px] h-[80px]' />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor '>
                                Dr. Ashwani Sharma
                            </h4>
                            <p className='text-[13px] leading-[30px] font-semibold text-headingColor '>
                                Faculty Advisor, BOST
                            </p>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-textColor font-[400]'>
                        Own midst. Behold sea created male he together of That Said fourth deep abundantly have light night beginning rule darkness seed darkness which land saying moveth. Fifth shall wont signs, can seasons green days gathered great
                    </p>
                </div></SwiperSlide>
                <SwiperSlide><div className='py-[30px] px-5 rounded-3 hi'>
                    <div className='flex items-center justify-between'>
                        <Image src={img3} alt="img" className='rounded-[50%] w-[80px] h-[80px]' />
                        <div>
                            <h4 className='text-[18px] leading-[30px] font-semibold text-headingColor '>
                                Mehul Gupta
                            </h4>
                            <p className='text-[13px] leading-[30px] font-semibold text-headingColor '>
                                General Secretary, BOST
                            </p>
                        </div>
                    </div>
                    <p className='text-[16px] leading-7 mt-4 text-[textColor] font-[400]'>
                        BOST is a place for dreamers,innovators and out of the box thinkers with various club here guided by enthusiastic people one can learn ,innovate , build and own the future. To be a leader in Science and Technology we seek your support and participation in this strive of ours. So pick up a club which fascinates you and join with us!
                    </p>
                </div></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default Testimonials