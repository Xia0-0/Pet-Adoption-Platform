// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import ban2 from '../../../../assets/banner1.jpg'
import ban3 from '../../../../assets/banner2.jpg'
import ban4 from '../../../../assets/banner-4.jpg'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Banner = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        autoplay={true}
      >

        {/* 第一页 */}
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#FFF4D6]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={ban2} className="w-6/12 rounded-lg" />

              <div>
                <h1 className="text-xl lg:text-5xl font-bold text-black">
                  用爱与善意，给流浪动物一个温暖的家
                </h1>

                <p className="py-6 text-sm lg:text-xl">
                  每一次领养，都是一次生命的重生。敞开心扉，让爱不再流浪。
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 第二页 */}
        <SwiperSlide>
          <div className="hero min-h-screen bg-[#FBEDEC]">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={ban3} className="w-6/12 rounded-lg" />

              <div>
                <h1 className="text-xl lg:text-5xl font-bold text-black">
                  遇见陪伴你的它，从领养开始
                </h1>

                <p className="py-6 text-sm lg:text-xl">
                  用领养代替购买，让更多流浪动物拥有幸福与归宿。
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* 第三页 */}
        <SwiperSlide>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <img src={ban4} className="w-6/12 rounded-lg" />

              <div>
                <h1 className="text-xl lg:text-5xl font-bold text-black">
                  选择领养，让爱改变生命
                </h1>

                <p className="py-6 text-sm lg:text-xl">
                  给它一个家，也让自己的生活多一份温暖与陪伴。
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>

      </Swiper>
    </div>
  );
};

export default Banner;