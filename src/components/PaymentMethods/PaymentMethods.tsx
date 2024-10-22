"use client";

import 'swiper/css'
import { BackgroundRadialRight } from '../BackgroundRadialRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataPaymentMethods } from './PaymentMethods.data';
import Image from 'next/image';
import { CtaDark } from '../CtaDark';

export function PaymentMethods() {
  return (
    <div className='relative py-20 md:py-64' id='servicios'>
      <BackgroundRadialRight />
      <div className='relative w-full overflow-hidden'>
        <Swiper
          breakpoints={{
            320: {
              slidesPerView: 8,
              spaceBetween: 15
            }
          }}
          autoplay={{
            delay: 1,
            disableOnInteraction: false
          }}
          grabCursor={true}
          loop={true}
          speed={2000}
          >
          <div className='absolute flex'>
            {
              dataPaymentMethods.map(({ id, image }) => (
                <SwiperSlide key={id} className='flex items-center slider-horizontal'>
                  <Image src={`/assets/${image}`} alt='payment' width={70} height={70} className='w-[120px] h-[60px] object-contain' />
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </div>
      <CtaDark/>
    </div>
  )
}
