import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';

const Slider = () => {
    return (
        <div>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                <SwiperSlide><img src="" alt="" /></SwiperSlide>
                <SwiperSlide><img src="" alt="" /></SwiperSlide>
                <SwiperSlide><img src="" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Slider;