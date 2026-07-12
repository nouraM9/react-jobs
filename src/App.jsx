import {Route , createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage';
import SingleJob,{jobLoader} from './pages/SingleJob';
import AddJob from './pages/AddJob';



function App() {
  // Add New Job
const addJob = async (newJob) =>{
  const res = await fetch('api/jobs',{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
    },
    body : JSON.stringify(newJob)
  });
  return;
}

// Delete Job

const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<MainLayout />}>
  <Route index element ={<HomePage isHome = {true} />}/>
  <Route path="/jobs" element = {<JobsPage />} />
  <Route
        path="jobs/:id"
        element={<SingleJob />}
        loader={jobLoader}
      />  
      <Route path='/add-job'   element={<AddJob addJobSubmit={addJob} />} 
 ></Route>
      <Route path='*' element = {<NotFoundPage />}/>

</Route>

))
  return <RouterProvider router ={router} />
};

export default App