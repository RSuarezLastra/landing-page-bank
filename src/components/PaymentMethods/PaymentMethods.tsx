"use client";

import 'swiper/css'
import { BackgroundRadialRight } from '../BackgroundRadialRight';
import { Swiper, SwiperSlide } from 'swiper/react';
import { dataPaymentMethods } from './PaymentMethods.data';
import Image from 'next/image';

export function PaymentMethods() {
  return (
    <div className='relative py-20 md:py-64' id='servicios'>
      <BackgroundRadialRight />
      <div className='relative w-full overflow-hidden'>
        <Swiper>
          <div className='absolute flex'>
            {
              dataPaymentMethods.map(({ id, image }) => (
                <SwiperSlide key={id} className='flex items-center slider-horizontal'>
                  <Image src={`/assets/${image}`} alt='metodo de pago' width={70} height={70} className='w-[120px] h-[60px] object-contain' />
                </SwiperSlide>
              ))
            }
          </div>
        </Swiper>
      </div>
    </div>
  )
}
