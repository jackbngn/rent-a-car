import React from 'react';

export default function Checkout() {
    return (
        <div className="checkout px-6 py-6 mx-auto">
            <div className="shadow-xl rounded-lg p-4">
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

                <div className='pt-4'></div>
                <h2 className='text-dark text-xl font-semibold'>Billing Address</h2>

                <div className='pt-2'></div>
                <div className='flex space-x-2'>
                    <div className='grid-cols-2 w-full'>
                        <span className='font-semibold text-lg'>Address 1</span>
                        <input type='text' className='bg-gray-200 px-2 py-2 border border-gray-500 rounded w-full' name='' id='' />
                    </div>
                    <div className='grid-cols-2 w-full'>
                        <span className='font-semibold text-lg'>Address 2</span>
                        <input type='text' className='bg-gray-200 px-2 py-2 border border-gray-500 rounded w-full' name='' id='' />
                    </div>
                </div>

                <div className='pt-2'></div>
                <div className='flex space-x-2'>
                    <div className='grid-cols-3 w-full'>
                        <span className='font-semibold text-lg'>City</span>
                        <input type='text' className='bg-gray-200 px-2 py-2 border border-gray-500 rounded w-full' placeholder='MM/YY' name='' id='' />
                    </div>
                    <div className='grid-cols-3 w-full'>
                        <span className='font-semibold text-lg'>State</span>
                        <select className='my-select-box' name="state-names" id="state-names">
                            <option value="alabama">AL</option>
                            <option value="alaska">AK</option>
                            <option value="arizona">AZ</option>
                            <option value="alabama">AL</option>
                            <option value="arkansas">AR</option>
                            <option value="california">CA</option>
                            <option value="colorado">CO</option>
                            <option value="connecticut">CT</option>
                            <option value="delaware">DE</option>
                            <option value="florida">FL</option>
                            <option value="georgia">GA</option>
                            <option value="hawaii">HI</option>
                            <option value="idaho">ID</option>
                            <option value="illinois">IL</option>
                            <option value="indiana">IN</option>
                            <option value="iowa">IA</option>
                            <option value="kansas">KS</option>
                            <option value="kentucky">KY</option>
                            <option value="louisiana">LA</option>
                            <option value="maine">ME</option>
                            <option value="maryland">MD</option>
                            <option value="massachusetts">MA</option>
                            <option value="michigan">MI</option>
                            <option value="minnesota">MN</option>
                            <option value="mississippi">MS</option>
                            <option value="missouri">MO</option>
                            <option value="montana">MT</option>
                            <option value="nebraska">NE</option>
                            <option value="nevada">NV</option>
                            <option value="new hamsphire">NH</option>
                            <option value="new jersey">NJ</option>
                            <option value="new mexico">NM</option>
                            <option value="new york">NY</option>
                            <option value="north carolina">NC</option>
                            <option value="north dakota">ND</option>
                            <option value="ohio">OH</option>
                            <option value="oklahoma">OK</option>
                            <option value="oregon">OR</option>
                            <option value="pennsylvania">PA</option>
                            <option value="rhode island">RI</option>
                            <option value="south carolina">SC</option>
                            <option value="south dakota">SD</option>
                            <option value="tennessee">TN</option>
                            <option value="texas">TX</option>
                            <option value="utah">UT</option>
                            <option value="vermont">VT</option>
                            <option value="virginia">VA</option>
                            <option value="washington">WA</option>
                            <option value="west virginia">WV</option>
                            <option value="wisconsin">WI</option>
                            <option value="wyoming">WY</option>
                        </select>
                    </div>
                    <div className='grid-cols-3 w-full'>
                        <span className='font-semibold text-lg'>Zip</span>
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
