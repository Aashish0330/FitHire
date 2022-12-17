import { Button, message, Tag } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import { applyJob } from "../redux/actions/jobActions";

const JobInfo = () => {
  const params = useParams();
 const id = params.id;


 const [job,setjobs] = useState([]);
 const [user,setuser] = useState([]);

 useEffect(() => {
  if (id) {
    axios.get(`http://localhost:8080/api/v1/register/${id}`)
    .then(res => {
      console.log(res)
      setuser(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }
},[id]);

 var appliedCandids = [];

  const dispatch = useDispatch();
  
  function applyNow()
  {
    dispatch(applyJob(job));
    localStorage.setItem("button", "clicked");
  }


  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:8080/api/v2/postjob/jobs/${id}`)
      .then(res => {
        console.log(res)
        setjobs(res.data)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },[id]);

  console.log(appliedCandids.length)

  return (
    <div>
      <DefaultLayout>
          <div>
            <p><b>Title</b> : {job.title}</p>
            <p><b>Company</b> : {job.company}</p>
            <p><b>Small Description</b> : {job.smalldesc}</p>
            <p><b>Full Description</b> : {job.fulldesc}</p>
            <p><b>Experience</b> : {job.exp}</p>
            <p><b>Minimum Qualification</b> : {job.minqual}</p>
            <hr />
            <p><b>Salary Range</b> : {job.salaryfrom} - {job.salaryto}</p>
            <p><b>Phone Number</b> : {job.num}</p>
            <p><b>Email</b> : {job.email}</p>
            <p><b>Total Candidates Applied</b> : {job.appliedcandid}</p>
            
            <hr />

                    <div>
                      {job.appliedcandid >= 1 && 'button' in localStorage ? (
                        <Tag color="green">Already Applied</Tag>
                      ) : <Button id="btn" onClick={applyNow}>Apply Now
                      </Button>
                      }
                    </div>
                <div>
              </div>
              </div>
      </DefaultLayout>
      </div>
  );
}

export default JobInfo;