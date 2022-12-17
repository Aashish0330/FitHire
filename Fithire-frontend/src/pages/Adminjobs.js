import React, { useEffect, useState } from 'react'
import AdminLayout from '../components/AdminLayout'
import { Table} from "antd";
import moment from "moment";
import { deleteJob } from "../redux/actions/jobActions";

import {
  DeleteOutlined
} from "@ant-design/icons";
import axios from 'axios';
import { useDispatch } from 'react-redux';
function Adminjobs() {
  
  const [alljobs,setalljobsdata] = useState([]);
  const [user,setuser] = useState([]);

  useEffect(() => {
    alljobdata();
  }, []);

  const alljobdata = async() =>
  {
    const {data} = await axios.get('http://localhost:8080/api/v2/postjob')
    setalljobsdata(data);
  }

  const dispatch = useDispatch();

  const users = async() =>
  {
    const {userdata} = await axios.get('http://localhost:8080/api/v1/register')
    setuser(userdata);
  }

  const allPostedJobs = alljobs.filter((job) => alljobdata.id == users.id);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
    },
    {
      title: "Company",
      dataIndex: "company",
    },
    {
      title: "Total Applied Candidates",
      dataIndex: "appliedCandidates",
    },
    {
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Action",
      render: (data) => {
        return (
          <div className="flex">
            <DeleteOutlined
            className='mr-2'
            style={{fontSize:20}}
            onClick={() => {
              dispatch(deleteJob(data.completeJobData.id));
            }}
            />
          </div>
        );
      },
    },
  ];

  const datestring = "2022-11-03T07:53:23.437Z"
  const dataSource = [];

  for (var job of allPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(datestring).format("MMM DD yyyy"),
      appliedCandidates: job.appliedcandid,
      completeJobData: job,
    };
    dataSource.push(obj);
  }

console.log(allPostedJobs);
return (
  <div>
    <AdminLayout>
      <h1>All Jobs Posted</h1>

      <Table columns={columns} dataSource={dataSource} />
    </AdminLayout>
  </div>
);
}

export default Adminjobs;