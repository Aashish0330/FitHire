import React,{useEffect, useState} from 'react'
import DefaultLayout from '../components/DefaultLayout'
import { Row, Col , Button } from "antd";
import { Link } from 'react-router-dom';
import moment from "moment";
import axios from 'axios';


function Home() {
const [jobs,setjobs] = useState([]);

useEffect(() => {
  jobdata();
}, []);


const jobdata = async () => 
{
  const {data} = await axios.get('http://localhost:8080/api/v2/postjob');
  setjobs(data);
};


  
  return (
    <div>
        <DefaultLayout>
        <Row gutter={16}>
          {jobs.map((job) => {
           return <Col lg={12} sm={24}>
                <div className="job-div bs m-2 p-2">
                  <h4>{job.title}</h4>
                   <p>{job.company}</p>
                   <hr />
                   <p>{job.smalldesc}</p>
                   <div className="flex">
                   <p>Salary : <b>{job.salaryfrom} - {job.salaryto}</b> , </p>
                   <p style={{marginLeft:20}}>Experience : <b>{job.exp} Years</b> </p>
                   
                   </div>
                   <hr />
                   <div className="flex justify-content-between">
                       <Link to={`/jobs/${job.id}`}><Button>View</Button></Link>
                       <p>Posted on : {moment(Date.now()).format("MMM DD yyyy")}</p>
                       
                   </div>
                </div>
            </Col>;
          })}
        </Row>
        </DefaultLayout>
    </div>
  )
}

export default Home