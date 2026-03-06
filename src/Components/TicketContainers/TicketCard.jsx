import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const TicketCard = ({ ticket, handleTicket }) => {
    

    const { title, status, description, id, customer, priority, createdAt }= ticket

    return (
        <div onClick={()=>handleTicket(ticket)} className='bg-white cursor-pointer text-black shadow-lg p-3 box-border rounded-md font-inter lg:h-44'>

            <div className='flex flex-col md:flex-row items-start md:items-center justify-between mb-3'>
                <h1 className=' font-semibold text-left overflow-auto w-2/3'>{title}</h1>
                <p className={`badge text-xs  badge-md  ${status.toLowerCase() === 'open' ? 'bg-[#B9F8CF] text-[#02A53B]' :'bg-[#F8F3B9] text-[#9C7700]'}  p-2`}> <span className={` p-2 ${status.toLowerCase() === 'open' ? 'bg-[#0B5E06]' :'bg-[#FEBB0C]'}  rounded-full`}></span> {status}</p>
            </div>
            <div className='text-left text-xs text-gray-400 h-10'>
                <p>{description} </p>
            </div>

            <div className='flex flex-col-reverse  md:flex-row items-start md:items-center justify-between my-3 '>
                <div className='flex items-center justify-between md:justify-center gap-5'>
                    <p className='text-xs'>#{id}</p>
                    <p className={`${priority.toLowerCase() === 'high' ? 'text-[#F83044]' : priority.toLowerCase() === 'medium' ? 'text-[#FEBB0C]' :'text-[#02A53B]'} font-semibold text-xs`}>{ priority} Priority</p>
                </div>
                <div className='flex items-center justify-center gap-5 space-y-1'>
                    <h2 className=' font-semibold'>{customer}</h2>
                    <p className='flex items-center gap-2 text-xs'><FaCalendar></FaCalendar>{ createdAt}</p>
                </div>

            </div>
            
        </div>
    );
};

export default TicketCard;