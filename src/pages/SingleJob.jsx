import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {toast} from 'react-toastify';

function SingleJob({deleteJobSubmit}) {
  const navigate = useNavigate();
    const job = useLoaderData();

    const onDeleteClick = (jobId)=> {
      const Confirm = window.confirm('Are you Sure you want to delete this job listing?');
      if(!Confirm)return;

      deleteJobSubmit(jobId);
      toast.success('Job Deleted Successfuly');
       return navigate('/jobs');
    }
    
  return (
    <>
    <section>
      <div className="container m-auto py-6 px-6">
        <a
          href="/jobs.html"
          className="text-indigo-500 hover:text-indigo-600 flex items-center"
        >
          <i className="fas fa-arrow-left mr-2"></i> Back to Job Listings
        </a>
      </div>
    </section>

    <section className="bg-indigo-50">
      <div className="container m-auto py-10 px-6">
        <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
          <main>
            <div
              className="bg-white p-6 rounded-lg shadow-md text-center md:text-left"
            >
              <div className="text-gray-500 mb-4">{job.type}</div>
              <h1 className="text-3xl font-bold mb-4">
                {job.title}
              </h1>
              <div
                className="text-gray-500 mb-4 flex align-middle justify-center md:justify-start"
              >
                <FaArrowLeft
                  className="fa-solid fa-location-dot text-lg text-orange-700 mr-2"
                ></FaArrowLeft>
                <p className="text-orange-700">{job.location}</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-indigo-800 text-lg font-bold mb-6">
                Job Description
              </h3>

              <p className="mb-4">
                {job.description}
              </p>

              <h3 className="text-indigo-800 text-lg font-bold mb-2">Salary</h3>

              <p className="mb-4">{job.salary} / Year</p>
            </div>
          </main>

          <aside>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-6">Company Info</h3>

              <h2 className="text-2xl">NewTek Solutions</h2>

              <p className="my-2">
                NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.
              </p>

              <hr className="my-4" />

              <h3 className="text-xl">Contact Email:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">
                contact@newteksolutions.com
              </p>

              <h3 className="text-xl">Contact Phone:</h3>

              <p className="my-2 bg-indigo-100 p-2 font-bold">555-555-5555</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md mt-6">
              <h3 className="text-xl font-bold mb-6">Manage Job</h3>
              <Link
                to={`/edit-job/${job.id}`}
                className="bg-indigo-500 hover:bg-indigo-600 text-white text-center font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
                >Edit Job
                </Link>
              <button onClick={()=> onDeleteClick(job.id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline mt-4 block"
              >
                Delete Job
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>

    </>
       

)
}

// const jobLoader = async({params})=>{
//     const res = await fetch(`/api/jobs/${params.id}`);
//     const data = await res.json();
//     // console.log(data)
//     return data;
// };

// export {SingleJob as default , jobLoader}; 
export default SingleJob;
// UseEffect fetching 
