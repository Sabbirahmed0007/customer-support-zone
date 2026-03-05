import React, { use } from 'react';
import TicketCard from './TicketCard';

const TicketContainer = ({ ticketPromises }) => {
    

    const tickets = use(ticketPromises);

    console.log(tickets);
    

    return (
        <div className=' w-full flex items-start flex-col lg:flex-row justify-around gap-3  lg:mx-0 px-3 box-border '>
            <div className=' w-full lg:w-3/4  '>
                <h1 className='text-left mb-4 text-2xl font-bold'>Customer Tickets</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>

                {
                    tickets.map(ticket=><TicketCard ticket={ticket} key={ticket.id}></TicketCard>)
                }
                </div>
            </div>
            <div className='w-full lg:w-1/4  px-3 box-border'>
                <h1 className='text-left mb-4 text-2xl font-bold'>Task Status</h1>

            </div>
            
        </div>
    );
};

export default TicketContainer;