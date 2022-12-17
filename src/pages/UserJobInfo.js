import { Button} from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import UserLayout from "../components/UserLayout";

const JobInfo = () => {
const params = useParams();
const id = params.id;
const [job,setjobs] = useState([]);
  
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


  return (
    <div>
      <UserLayout>
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
                <Button>
                  <Link to={`/user/editjobs/${job.id}`}>Edit Now</Link>
                </Button>
            </div>
          </div>
      </UserLayout>
    </div>
  );
}

export default JobInfo;