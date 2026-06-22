import React from 'react'

function CardJobs() {
  return (
    <section className='py-4 px-5 md:px-20'>
        <div className="grid md:grid-cols-2 gap-4" >
            <div className="container bg-gray-200 py-10 px-5 rounded-lg shadow-md text-center md:text-left">               
                <h1 className="font-bold text-2xl mb-2 text-gray-800 ">
                For Developers
                </h1>
                <p className='mb-4 '>Browse our React jobs and start your career today</p>
                <button className='bg-black text-white font-bold p-2 rounded'>Browse Jobs</button>
            </div>
             <div className="container bg-blue-200 py-10 px-5 rounded shadow-lg text-center md:text-left">
                <h1 className='font-bold text-2xl mb-2 text-gray-800 '>For Employers</h1>
                <p className='mb-4   '>List your job to find the perfect developer for the role</p>             
                <button className='bg-blue-600 text-white font-bold p-2 rounded'>Add Jobs</button>
            </div>
        </div>
    </section>
  )
}

export default CardJobs