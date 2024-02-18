 
import OrderCover from '@/components/Orders/OrderCover';
import OrderTab from '@/components/Orders/OrderTab';
import React from 'react';
import './order.css'
const Order = () => {
    return (
        <div className='mt-28 lg:mt-48 mb-20'>
            <OrderCover />
             <OrderTab/>
        </div>
    );
};

export default Order;