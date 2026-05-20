import React from 'react';
import pet2 from '../../../../assets/pet3.jpg'
const Inspiration = () => {
    return (
        <div className=' flex justify-center flex-col mx-auto items-center w-8/12'>
           <div className='flex  flex-col-reverse lg:flex-row items-center '>
           <div className=' p-7 '>
            <p className='text-xl '><span className='text-3xl '>寻找你的完美伴侣：领养，而非购买</span></p>
<p>欢迎来到一个充满无条件爱的世界</p>
<p>在 Four Pows，我们相信宠物领养的变革力量。每一天，无数动物都在耐心等待着它们的终身家园，我们邀请您成为它们非凡旅程的一部分。</p>
            </div>
            <div>
<img src={pet2} alt="" className='' />
            </div>
           </div>
<p className='text-3xl font-bold my-10'>为什么要领养？</p>
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className='bg-pink-200 p-5 rounded-md'>
           <span className='font-bold '> 改变一个生命，拯救一个生命：</span>
<p>每一次领养都是一次改变生命的体验。通过选择领养，你不仅为有需要的宠物提供了一个充满爱的家，还帮助它们摆脱了收容所生活中不确定性的困扰。</p>
            </div>
            <div className='bg-pink-200 p-5 rounded-md '>
            <span className='font-bold'>无条件的爱：</span>
<p>没有什么比宠物的爱和陪伴更珍贵的了。被领养的动物通常会与新家庭建立起无与伦比的纽带，提供一种超越言语的忠诚和感激。</p>
            </div>
            <div className=' bg-pink-200 p-5 rounded-md'>
            <span className='font-bold'>无限的选择：</span>
<p>无论您是在寻找活泼的小狗、成熟的老年人，还是迷人的猫咪，我们多样化的可领养宠物选择确保每个人都能找到完美的伴侣。</p>
            </div>
        </div>
        </div>
    );
};

export default Inspiration;