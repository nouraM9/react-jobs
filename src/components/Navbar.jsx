
function Navbar() {
  return (
        <nav className='bg-indigo-700 border-b border-indigo-500'>
        <div className="flex  justify-between py-5 px-20">
            <div className="flex gap-4 items-center">
             <img src="./logo.png"  className="w-10 "alt="" />
            <div><h1 className='text-2xl text-white font-bold'>React Jobs</h1></div>
            </div>
      
            <ul className='flex gap-4 text-white items-center'>
                <li className='bg-black p-2 rounded'><a href="#" >Home</a></li>
                <li className='p-2'><a href="#">Jobs</a></li>
                <li className='p-2'><a href="#">Add Job</a></li>

            </ul>
        </div>
        </nav>
    
  )
}

export default Navbar