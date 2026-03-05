import React from 'react';

const ResolvedTask = ({ resolvedTickets }) => {


    const { title } = resolvedTickets;
    
    return (
        <div className='bg-[#ECE0FF]  text-black p-4 text-left rounded-md'>
            <h1 className='text-left mb-3 text-xl font-bold'>{ title}</h1>
        </div>
    );
};

export default ResolvedTask;