import './index.css';
import 'antd/dist/antd.min.css';
import Home from './pages/Home';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import AppliedJobs from './pages/AppliedJobs'
import PostJob from './pages/PostJob'
import UserPostedJobs from './pages/UserPostedJobs'
import JobInfo from './pages/JobInfo'
import UserJobInfo from './pages/UserJobInfo';
import AdminJobs from './pages/Adminjobs';
import AdminUsers from './pages/Adminusers';
import UserAuth from './components/UserRoute'
import PrivateRoute from './components/PrivateRoute';
import PrivateAdminRoute from './components/AdminRoute';
import FadeLoader from "react-spinners/FadeLoader";
import UserLogin from './pages/UserLogin';
import { useSelector } from 'react-redux';
import Register from './pages/Register';
import Login from './pages/Login';
import PostedJobs from './pages/PostedJobs';
import EditJob from './pages/EditJob';
import AdminLogin from './pages/AdminLogin';

function App() {
  const { loader } = useSelector((state) => state.loaderReducer);
  return (
    <div className="App">
      {loader && (
        <div className="sweet-loading text-center">
          <FadeLoader color={"#001529"} />
          </div>
      )}
      <BrowserRouter>
      <Routes>

      <Route path="/login" exact element={<Login/>} />
        <Route path="/register" exact element={<Register/>} />
        <Route path="/" exact element={<Home/>} />
        <Route path="/adminlogin" exact element={<AdminLogin/>} />
        <Route path="/userlogin" exact element={<UserLogin/>} />


        <Route path="/trainer" element={<PrivateRoute/>}>
        <Route path="appliedjobs" exact element={<AppliedJobs/>} />
        </Route>

        
        
       
        <Route path="/user" element={<UserAuth/>}>
        <Route path="jobs/:id" exact element={<UserJobInfo/>} />
        <Route path="userpostedjobs" exact element={<UserPostedJobs/>} />
        <Route path="postjob" exact element={<PostJob/>} />
        <Route path="posted" exact element={<PostedJobs/>} />
        <Route path="editjobs/:id" exact element={<EditJob/>} />
        </Route>

        <Route path="jobs/:id" exact element={<JobInfo/>} />

        
        <Route path="/admin" element={<PrivateAdminRoute/>}>
        <Route path="adminjobs" exact element={<AdminJobs/>}/>
        <Route path="adminusers" exact element={<AdminUsers/>}/>
        </Route>

        </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

