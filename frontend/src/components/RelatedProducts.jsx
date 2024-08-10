import React from 'react';
import LATEST from '../assets/latest';
import { Link } from 'react-router-dom';
import {RiShoppingCart2Line} from 'react-icons/ri'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const RelatedProducts = () => {
  return (
    <div>
      <h4 className='border-l-4 pl-2 border-secondary bold-20'>Related Products</h4>

      <div className='mx-auto max-w-full'>
        <Swiper
        breakpoints={{
          600: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1200: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        className='h-[188px] mt-5'
        >
          {LATEST.map((item, i) => (
            <SwiperSlide key={i}>
              <Link onClick={window.scrollTo(0, 0)} to={`/product/${item.id}`} className='flexCenter gap-x-5 bg-white p-4 rounded-xl'>
                <img src={item.image} alt="items" height={77} width={77} className='rounded-lg drop-shadow-xl'/>
                <div className='flex flex-col gap-y-1'>
                    <h4 className='line-clamp-1 medium-16'>{item.name}</h4>
                    <p className='line-clamp-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio quidem iure doloremque aperiam provident dicta harum. Perferendis, aperiam nisi placeat quas cum obcaecati et nulla impedit unde modi, mollitia porro?</p>

                    <div className='flexBetween'>
                      <div className='flexBetween gap-x-2 medium-16'>
                        <span>${item.new_price}.00</span>
                        <span className='line-through text-secondary'>${item.old_price}.00</span>
                      </div>
                      <RiShoppingCart2Line className='text-xl hover:text-secondary'/>
                    </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default RelatedProducts;