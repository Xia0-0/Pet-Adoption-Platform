import { BsFillBarChartFill } from 'react-icons/bs';
import { BiAtom } from 'react-icons/bi';
import { BsFillBriefcaseFill } from 'react-icons/bs';

import contact from '../../../../assets/pets.jpg';
import aboutus from '../../../../assets/aboutus.jpg';

const AboutUs = () => {
  return (
    <div className="relative mt-20 " style={{ backgroundImage: `url(${contact})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <div className="absolute inset-0 bg-black opacity-70" />

      <div className="relative z-10 text-white py-16">
        <div className="flex flex-col items-center justify-center mt-20 mb-20" id="services">
          <h3 className="text-[#ff0000]">了解我们</h3>
          <h1 className="text-white text-2xl md:text-4xl font-metamorphous font-bold text-center">__关于 我们__</h1>
        </div>
        <div className='flex items-center justify-center '>
        <div className="px-10 py-10 w-full lg:max-w-[1200px] mx-auto">
          <div className="flex gap-16 items-center justify-center">
            <div>
              <BsFillBarChartFill className="text-3xl text-warning" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">我们的愿景</h1>
              <p>在 Four Pows，我们梦想着一个充满欢声笑语和满足呼噜声的世界，让每个家庭都充满这些声音。我们的愿景是成为宠物领养的中心，促进人与人之间的联结，为每一只四脚动物带来快乐、陪伴和永远的家。</p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-16 items-center justify-center my-10">
            <div>
              <BiAtom className="text-3xl  text-success" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">我们的使命</h1>
              <p>Four Pows 怀着一颗真诚的心，致力于改写无数毛茸茸伙伴的命运，引领它们走向充满爱与归属感的美好未来。我们不仅致力于促成领养，更致力于培育一个充满关爱与支持的社群，让宠物陪伴之旅的每一步都得到庆祝和支持.</p>
            </div>
          </div>
          {/*  */}
          <div className="flex gap-16 items-center justify-center">
            <div>
              <BsFillBriefcaseFill className="text-3xl  text-red-600" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">我们的核心价值观</h1>
              <p>Four Pows 珍视每只宠物摇尾巴、喵喵叫、啾啾叫的每一个细节，认可每只宠物独有的魅力。我们的核心价值观是包容、关爱，并坚信每只宠物，无论过去如何，都值得拥有温暖的拥抱。我们致力于秉持负责任的宠物饲养原则，确保 Four Pows 社区成为一个充满无条件的爱和终生情谊的港湾……</p>
            </div>
          </div>
        </div>
            <div>
<img src={aboutus} alt="" className=' w-9/12 rounded-lg hidden lg:flex' />
            </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
