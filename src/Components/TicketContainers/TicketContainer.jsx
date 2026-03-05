import React, { use, useState } from 'react';
import TicketCard from './TicketCard';
import Task from '../Tasks/Task';
import {  toast } from 'react-toastify';
import ResolvedTask from '../Tasks/ResolvedTask';

const TicketContainer = ({ ticketPromises, ticketCount, setTicketCount, resolveCount, setResolveCount }) => {
    

    const tickets = use(ticketPromises);
    const [remainedTickets, setRemainedTicket]=useState(tickets)

    // console.log(tickets);

    const handleTicket = (ticket) => {

        const displayRemainedTicket = remainedTickets.filter(displayedticket => displayedticket.id !== ticket.id);
        setRemainedTicket(displayRemainedTicket);
        setTicketCount([...ticketCount, ticket])
        toast(`Task Added!`)
        
        
    }

    const handleResolvedTask = (ticket) => {

        // console.log('ticked Resolve id', ticket.id);
        

        
        const remainingTicket = ticketCount.filter(resolveCount => resolveCount.id !== ticket.id);
        setResolveCount([...resolveCount, ticket]);
        setTicketCount(remainingTicket);
        toast("The Task is solved!")
        // console.log(remainingTicket);
        


        
    }
    

    return (
        <div className=' w-full flex items-start flex-col lg:flex-row justify-around gap-3  lg:mx-0 px-3 box-border '>
            <div className=' w-full lg:w-3/4  '>
                <h1 className='text-left mb-4 text-2xl font-bold'>Customer Tickets</h1>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-5'>

                {
                    remainedTickets.map(ticket=><TicketCard ticket={ticket} handleTicket={handleTicket} key={ticket.id}></TicketCard>)
                }
                </div>
            </div>
            <div className='w-full lg:w-1/4  px-3 box-border'>
                <h1 className='text-left mb-4 text-2xl font-bold '>Task Status</h1>
                <div className='space-y-4 h-80 overflow-auto'>
                    {
                        ticketCount.map(ticket => <Task ticket={ticket} handleResolvedTask={handleResolvedTask} key={ticket.id}></Task>)
                    }
                </div>
                <div>
                    <h1 className='text-left mb-4 text-2xl font-bold'>Task Solved</h1>
                    <div className='space-y-5 h-96 overflow-auto'>
                        {
                            resolveCount.map(resovedTicket => <ResolvedTask resolvedTickets={resovedTicket} key={resovedTicket.id}></ResolvedTask>)
                        }
                    </div>

                </div>

            </div>
            
        </div>
    );
};

export default TicketContainer;