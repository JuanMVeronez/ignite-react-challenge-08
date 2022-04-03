import { Navigation, Pagination, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

import { Flex } from '@chakra-ui/react';
import { ContinentCard } from './ContinentCard';

export function ContinentSwiper() {
  const handleSelectContinent = (continentId?: number) => {
    console.log(continentId);
  }
  
  return (
    <Flex>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide><ContinentCard goToContinent={handleSelectContinent} /></SwiperSlide>
        <SwiperSlide><ContinentCard goToContinent={handleSelectContinent} /></SwiperSlide>
        <SwiperSlide><ContinentCard goToContinent={handleSelectContinent} /></SwiperSlide>
        <SwiperSlide><ContinentCard goToContinent={handleSelectContinent} /></SwiperSlide>
      </Swiper>
    </Flex>
  );
};