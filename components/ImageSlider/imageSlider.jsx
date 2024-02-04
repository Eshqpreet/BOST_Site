"use client"
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import Image from 'next/image';
import Img1 from "@/components/ImageSlider/pic1.jpg"
import Img2 from "@/components/ImageSlider/ROBOWAR.jpg"
import Img3 from "@/components/ImageSlider/pic2.jpeg"
import Img4 from "@/components/ImageSlider/pic3.jpg"


const imageSlider = () => {
    return (
        <div>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className='flex items-center justify-evenly mt-10'>
                        <Image src={Img1} alt="img" className='imgSlider' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-evenly mt-10'>
                        <Image src={Img2} alt="img" className='imgSlider' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-evenly mt-10'>
                        <Image src={Img3} alt="img" className='imgSlider' />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='flex items-center justify-evenly mt-10'>
                        <Image src={Img4} alt="img" className='imgSlider' />
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
}

export default imageSlider