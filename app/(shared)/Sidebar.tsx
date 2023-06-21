import React from 'react'
import SocialLinks from './SocialLinks'
import Subscribe from './Subscribe'
import Image from 'next/image';
import Ad2 from "/public/assets/ad-2.png";
import AboutProfile from "/public/assets/about-profile.jpg";

type Props = {}

const Sidebar = (props: Props) => {
  return (
    <section>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
            Subcribe and Follow
        </h4>
        <div className='my-5 mx-5'>
            <SocialLinks isDark />
        </div>
        <Subscribe />
        <div className='bg-wh-900 my-8'>
        <Image 
            className='hidden md:block my-8 w-full'
            alt="advert-2"
            placeholder="blur"
            src={Ad2}
            width = {500}
            height = {1000}
        />
        </div>
        <h4 className='bg-wh-900 py-3 px-5 text-wh-50 text-xs font-bold text-center'>
            About the Blog
        </h4>
        <div className='flex justifycenter my-3'>
            <Image 
                alt="about-profile"
                placeholder="blur"
                src={AboutProfile}
                style={{ objectFit: "cover" }} 
            />
        </div>
        <h4 className='py-3 px-5 text-wh-500 font-bold text-center'> Geoffrey Epstein </h4>
        <p className='text-wh-500 text-center text-sm'>
            Sit diam vel lacus tortor molestie amet tincidunt.Sit diam vel lacus tortor molestie amet tincidunt.
            Sit diam vel lacus tortor molestie amet tincidunt.
        </p>
            
    </section>
  )
}

export default Sidebar;