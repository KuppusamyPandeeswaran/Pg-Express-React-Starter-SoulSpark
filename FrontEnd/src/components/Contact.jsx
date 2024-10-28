import React from 'react'

export default function Contact() {
    // const config = {
    //     email : 'xxxx@gmail.com',
    //     phone: '+91 99946 459260, +91 99420 096440',
    //     address: 'Thannampatti Road, Near Bypass, Vadamadurai'
    // }

    const config = {
        email : 'xxxx@gmail.com',
        phone: '+91 00000 00000, +91 00000 0000',
        address: 'xxxxxx xxxx, xxx xxxxxx, xxxxxxxxxxx'
    }

    return <section id='contact' className='flex flex-col  px-5 py-32 text-black'>
        <div className='flex flex-col items-center'>
           
            <h1 className='text-4xl border-b-4  border-secondary mb-5 w-[140px] font-bold'>Contact</h1>
            <p className='pb-5'>If you want to discuss more in detail, please contact me</p>
            <p className='py-2'>{config.address}</p>
            <p className='py-2'><span className='font-bold'>Email :</span> {config.email}</p>
            <p className='py-2'><span className='font-bold'>Phone :</span> {config.phone}</p>
        </div>
    </section>
}
