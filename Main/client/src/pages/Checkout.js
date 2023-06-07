import React from 'react';

export default function Checkout() {
    return (
        <div className="checkout px-6 py-6 mx-auto">
            <div className="shadow-md rounded-lg p-4">
                <h2 className='text-dark text-2xl font-semibold'>Secure Payment</h2>
                <div className='pt-4'></div>
                <span className='font-semibold text-lg'>Cardholder's Name</span>
                <input type='text' className='bg-gray-200 px-2 py-2 border border-gray-500 rounded w-full' name='' id='' />

                <div className='pt-4'></div>
                <span className='font-semibold text-lg'>Card Number</span>
                <input type='text' className='bg-gray-200 px-2 py-2 border border-gray-500 rounded w-full' placeholder='1234-1234-1234-1234' name='' id='' />

                <div className='pt-4'></div>
                <div className='flex space-x-2'>
                    <div className='grid'>
                        <span className='font-semibold text-lg'>Exp Date</span>
                        <input type='text' className='bg-gray-200 px-2 py-2 border border-gray-500 rounded w-full' placeholder='MM/YY' name='' id='' />
                    </div>
                    <div className='grid'>
                        <span className='font-semibold text-lg'>Security Code</span>
                        <input type='text' className='bg-gray-200 px-2 py-2 border border-gray-500 rounded w-full' placeholder='***' name='' id='' />
                    </div>
                </div>

                <div className='pt-6'></div>
                <div>
                    <button className='bg-blue-500 text-white rounded p-2 w-full'>Checkout</button>
                </div>

            </div>
        </div>
    );
}
