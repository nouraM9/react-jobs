import JobListing from './JobListing';
import { useState , useEffect } from 'react';
import Spinner from './Spinner';

function JobListings({isHome = false}) {
  const [jobs , setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=> {

    const fetchJobs = async ()=>{
      try{
            const ApiUrl = isHome
            ? "/api/jobs?_limit=3"
            : "/api/jobs";

        const res =  await fetch(ApiUrl);

        const data = await res.json();
        const homeData = isHome? data.slice(0,3) : data;
        setJobs(homeData);
      }catch(error){
        console.log('Error fetching data',error);
      }finally{
        setLoading(false)
      }
    }
    fetchJobs();

  },[isHome])
  // const jobs = isHome ? jobs.slice(0,3) : jobs;
  
    return (
   <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
           {isHome ? 'Browse Jobs' : 'All Jobs'}
        </h2>
        {loading ? (
                <Spinner  loading={loading}/>
               ) : (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {jobs.map((job) =>(
              <JobListing key={job.id} job={job}/>
            ))}
          </div>
        )}

     
        </div>
    </section>
)
}

export default JobListings