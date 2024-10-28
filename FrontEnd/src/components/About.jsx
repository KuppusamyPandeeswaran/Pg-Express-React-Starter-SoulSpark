import React from 'react'

export default function About() {
    const config  = {
        line1: 'Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem.',
        line2: 'Anim aute id magna. Qui irure qui lorem',
        line3: 'Anim aute id magna aliqua. Qui irure qui lorem',
        line4: 'Anim aute id magna aliqua ad ad non deserunt sunt.',
        line5: 'magna aliqua ad ad non deserunt sunt. Qui irure qui lorem',
        line6: 'Anim aute id magna aliqua sunt. Qui irure qui lorem'
    }

    return  <section  id='about' className=" min-h-screen bg-gray-100 flex flex-col bg-secondary justify-center items-start p-6">    
        <div className=' flex justify-center'>
            <div className='flex flex-col justify-center text-white'>
            <h1 className=" text-white text-4xl font-bold mb-8">About me</h1>
                <p className='pb-5'>{config.line1}</p>
                <p className='pb-5'>{config.line2}</p>
                <p className='pb-5'>{config.line3}</p>
                <p className='pb-5'>{config.line4}</p>
                <p className='pb-5'>{config.line5}</p>
                <p className='pb-5'>{config.line6}</p>
            </div>
        </div>
    </section>
}
