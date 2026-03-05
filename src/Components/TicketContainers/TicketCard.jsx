import React from 'react';
import { FaCalendar } from 'react-icons/fa';

const TicketCard = ({ ticket, handleTicket }) => {
    

    const { title, status, description, id, customer, priority, createdAt }= ticket

    return (
        <div onClick={()=>handleTicket(ticket)} className='bg-white cursor-pointer text-black shadow-lg p-3 box-border rounded-md font-inter'>

            <div className='flex items-center justify-between mb-3'>
                <h1 className='text-lg font-semibold'>{title}</h1>
                <p className={`badge badge-md ${status.toLowerCase() === 'open' ? 'bg-[#B9F8CF] text-[#02A53B]' :'bg-[#F8F3B9] text-[#9C7700]'}  p-2`}> <span className={` p-2 ${status.toLowerCase() === 'open' ? 'bg-[#0B5E06]' :'bg-[#FEBB0C]'}  rounded-full`}></span> {status}</p>
            </div>
            <div className='text-left text-xs text-gray-400 h-10'>
                <p>{description} </p>
            </div>

            <div className='flex items-center justify-between my-3'>
                <div className='flex items-center justify-center gap-5'>
                    <p>#{id}</p>
                    <p className={`${priority.toLowerCase() === 'high' ? 'text-[#F83044]' : priority.toLowerCase() === 'medium' ? 'text-[#FEBB0C]' :'text-[#02A53B]'}`}>{ priority}</p>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    <h2>{customer}</h2>
                    <p className='flex items-center gap-2 text-sm'><FaCalendar></FaCalendar>{ createdAt}</p>
                </div>

            </div>
            
        </div>
    );
};

export default TicketCard;