import {Route , createBrowserRouter, createRoutesFromElements,RouterProvider} from 'react-router-dom';

import HomePage from './pages/HomePage';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/JobsPage'
import NotFoundPage from './pages/NotFoundPage';
import SingleJob,{jobLoader} from './pages/SingleJob';
import AddJob from './pages/AddJob';

const router = createBrowserRouter(createRoutesFromElements(
<Route path='/' element={<MainLayout />}>
  <Route index element ={<HomePage isHome = {true} />}/>
  <Route path="/jobs" element = {<JobsPage />} />
  <Route
        path="jobs/:id"
        element={<SingleJob />}
        loader={jobLoader}
      />  
      <Route path='/add-job' element = {<AddJob/>}></Route>
      <Route path='*' element = {<NotFoundPage />}/>

</Route>

))
function App() {
  return <RouterProvider router ={router} />
};

export default App