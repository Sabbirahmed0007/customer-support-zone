import React from 'react';
import bgImageOne from '../../assets/vector1.png'
import bgImageTwo from '../../assets/Vector-bg2.png'

const Banner = ({ ticketCount, resolveCount }) => {
    
    return (
        <div className='my-14 grid grid-cols-1 lg:grid-cols-2 items-center justify-center gap-7 px-3 box-border mb-24'>

            {/* Card One */}
            <div  className='bg-gradient-to-br from-[#632EE3] to-[#9F62F2] bg-blend-overlay text-center py-16  relative rounded-lg'>
                {/* <div style={{ backgroundImage: `url(${bgImageOne})` }} className=' inset-1 bg-no-repeat bg-contain opacity-80 absolute '></div>
                <div style={{ backgroundImage: ` url(${bgImageTwo})` }} className=' inset-1 bg-no-repeat bg-contain opacity-80 absolute right-0'></div> */}
                <img
                    src={bgImageOne}
                    className="absolute top-0 left-0 opacity-70 object-contain"
                />
                <img
                    src={bgImageTwo}
                    className="absolute top-0 right-0 opacity-70 object-contain"
                />

                <h1 className='text-3xl font-bold'>In-Progress </h1>
                <p className='text-6xl font-bold my-4'>{ ticketCount.length}</p>
                

            </div>


            {/* Card two */}
            <div className='bg-gradient-to-br from-[#54CF68] to-[#00827A] bg-blend-overlay text-center py-16  relative rounded-lg'>
                {/* <div style={{ backgroundImage: `url(${bgImageOne})` }} className=' inset-0 bg-no-repeat bg-contain opacity-90 absolute bg-blend-overlay'></div> */}
                <img
                    src={bgImageOne}
                    className="absolute top-0 left-0 opacity-70"
                />

                
                <img
                    src={bgImageTwo}
                    className="absolute top-0 right-0 opacity-70"
                />

                <h1 className='text-3xl font-bold'>Resolved </h1>
                <p className='text-6xl font-bold my-4'>{ resolveCount.length}</p>
                

            </div>
           

        </div>
    );
};

export default Banner;