import CommonButton from '@/components/common/commonButton/CommonButton';
import Link from 'next/link';
import React from 'react';

const MenuCover = () => {
    return (
        <div className='flex justify-between items-center px-5 md:px-20 bg-[#f9fafc] h-64 mt-20 mb-10'>
            <h1 className='text-3xl leading-tight font-semibold'>Starbelly menu.</h1>
            <div>
            <CommonButton>
                <Link href={"/"} className='mr-5'>Home</Link> /
                <Link href={""} aria-disabled={true} className='disabled ml-5'>Menu</Link>
            </CommonButton>
           </div>
        </div>
    );
};

export default MenuCover;