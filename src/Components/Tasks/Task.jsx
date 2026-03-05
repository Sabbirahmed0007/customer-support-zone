import React from 'react';

const Task = ({ ticket, handleResolvedTask }) => {
    
    const {title} = ticket

    return (
        <div className='p-3 bg-white text-black font-inte rounded-md'>
            <h1 className='text-left mb-3 text-xl font-bold'>{title}</h1>
            <div>
                <button onClick={() => handleResolvedTask(ticket)} className='btn w-full text-white bg-[#02A53B]'>Complete</button>
            </div>
        </div>
    );
};

export default Task;