import React, { useEffect, useState } from "react";
import DefaultLayout from "../components/DefaultLayout";
import { useDispatch } from "react-redux";
import { Table,Tag } from "antd";
import moment from "moment";
import { applyJob } from "../redux/actions/jobActions";
import {
  CheckCircleOutlined
} from '@ant-design/icons';

const AppliedJobs = (props) =>  {
  const dispatch = useDispatch();
    const [jobs,setPostedjobs] = useState([]);


    useEffect(() => {
      dispatch(applyJob());
    })

  useEffect(() => {
    fetch("http://localhost:8080/api/v2/postjob")
    .then((data) => data.json())
    .then((data) => setPostedjobs(data))
  },[])

  console.log(jobs)

  const columns = [
    {
        title : "Job Title" , 
        dataIndex : "title" ,
    }, 
    {
        title : "Company" , 
        dataIndex : "company", 
    },
    {
      title : "Status",
      dataIndex : "status",
    },
    {
        title : 'Applied Date' , 
        dataIndex : "appliedDate" 
    }
    
]


  const userapp = jobs.filter((job) => job.appliedcandid >= 1)
    const userAppliedJobs=[]
    console.log(userapp)

    for(var job of userapp){
         if('applied' in localStorage || job.appliedcandid==2){
          var obj = {
                  title : job.title,
                  company : job.company ,
                  appliedDate : moment(Date.now()).format("MMM DD yyyy"),
                  status : <Tag icon={<CheckCircleOutlined/>} color="success">applied</Tag>
              };
              userAppliedJobs.push(obj);
            }
        }
      
    console.log(userAppliedJobs)
    return (
        <div>
            <DefaultLayout>
              <p>{props.title}</p>
                   <h1>AppliedJobs</h1>
                   <Table columns={columns} dataSource={userAppliedJobs}/>
            </DefaultLayout>
        </div>
    )
}

export default AppliedJobs