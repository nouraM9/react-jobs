import { Link } from "react-router-dom"
import { useState } from "react"

function Navbar() {
const [isOpen , setIsOpen] = useState(false)
    return (
      <nav className="bg-indigo-700 border-b border-indigo-500 ">
      <div className="flex justify-between items-center py-5 px-6 md:px-20">
        <div className="flex gap-4 items-center">
          <img src="/logo.png" className="w-10" alt="React Jobs Logo" />
          <h1 className="text-2xl text-white font-bold">React Jobs</h1>
        </div>

        <ul className="hidden md:flex gap-10 text-white items-center">
          <li className="bg-black px-3 py-2 rounded">
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/jobs">Jobs</Link>
          </li>
          <li>
            <Link to="/add-job">Add Job</Link>
          </li>
        </ul>

        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>

      {isOpen && (
        <ul className="md:hidden flex flex-col bg-indigo-800 text-white px-6 py-4 gap-4 items-center">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Jobs</a>
          </li>
          <li>
            <a href="#">Add Job</a>
          </li>
        </ul>
      )}
    </nav>
  )
}

export default Navbar