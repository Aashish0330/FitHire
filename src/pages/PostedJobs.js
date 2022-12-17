import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Table, Modal } from "antd";
import {
  EditOutlined,
  EyeOutlined,
  DeleteOutlined
} from "@ant-design/icons";
import moment from "moment";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { deleteJob} from "../redux/actions/jobActions";
import UserLayout from "../components/UserLayout";



function PostedJobs() {
 
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedJob, setSelectedJob] = useState();
  const [postedjobs,setPostedjobdata] = useState([]);
  const [user,setuser] = useState([]);

  useEffect(() => {
    postedjobdata();
  }, []);

  const postedjobdata = async() =>
  {
    const {data} = await axios.get('http://localhost:8080/api/v2/postjob')
    setPostedjobdata(data);
  }
  
  useEffect(() => {
    users();
  }, []);

  const users = async() =>
  {
    const {userdata} = await axios.get('http://localhost:8080/api/v1/register')
    setuser(userdata);
  }

  

  const userPostedJobs = postedjobs.filter((job) => postedjobdata.id == users.id);
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
      title: "Posted On",
      dataIndex: "postedOn",
    },
    {
      title: "Applied Candidates",
      dataIndex: "appliedCandidates",
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div className="flex">
            <EyeOutlined
            className='mr-2'
            style={{fontSize:20}}
            onClick={() => {
              navigate(`/user/jobs/${data.completeJobData.id}`);
            }}
            />

            <EditOutlined
            className='mr-2'
              style={{fontSize:20}}
              onClick={() => {
                navigate(`/user/editjobs/${data.completeJobData.id}`);
              }}
            />
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

  const dataSource = [];

  for (var job of userPostedJobs) {
    var obj = {
      title: job.title,
      company: job.company,
      postedOn: moment(Date.now()).format("MMM DD yyyy"),
      appliedCandidates: job.appliedcandid,
      completeJobData: job,
    };
    dataSource.push(obj);
  }

  const showModal = (job) => {
    setIsModalVisible(true);
    setSelectedJob(job);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

 function CandidatesList(){
  const candidatesColumns = [
    {
      title: "Candidate Id",
      dataIndex: "candidateId",
      render : (text ,data)=>{
       return <Link to={`/users/${data.candidateId}`}>{data.candidateId}</Link>
      }
    },
    {
      title: "Full Name",
      dataIndex: "fullName",
    },
    { title: "Applied Date", dataIndex: "appliedDate" },
  ];

  var candidatesDatasource = [];

  for (var candidate of selectedJob.appjob) {
    var user = users.find((user) => user.id == candidate.userid);

    var obj = {
      candidateId: user.id,
      fullName: user.name + " " + user.lname,
      appliedDate: candidate.appliedDate,
    };

    candidatesDatasource.push(obj);
  }

  return <Table
  columns={candidatesColumns}
  dataSource={candidatesDatasource}
/>
 }

  console.log(userPostedJobs);
  return (
    <div>
      <UserLayout>
        <h1>Posted Jobs</h1>

        <Table columns={columns} dataSource={dataSource} />

        <Modal
          title="Applied Candidates List"
          visible={isModalVisible}
          closable={false}
          onOk={handleOk}
          onCancel={handleCancel}
          width={800}
        >
          <CandidatesList/>
        </Modal>
      </UserLayout>
    </div>
  );
}

export default PostedJobs;