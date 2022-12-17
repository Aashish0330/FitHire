import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import AdminLayout from '../components/AdminLayout'
import { Table,Tag} from "antd";
import moment from "moment";
import { deleteUser } from "../redux/actions/userActions";
import {DeleteOutlined} from "@ant-design/icons";


function Adminusers() {

  const [allusers,setallusers] = useState([]);
  // const [alljobs,setalljobsdata] = useState([]);
  // const [postedjobs,setPostedjobdata] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    fetch("http://localhost:8080/api/v1/register")
    .then((data) => data.json())
    .then((data) => setallusers(data))
  },[])

  console.log(allusers)

  const allUsers = allusers.filter((user) => user.role != 'admin' )
  console.log(allUsers)
  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Created Date",
      dataIndex: "createdOn",
    },
    {
      title: "Role",
      dataIndex: "role",
    },
    {
      title: "Actions",
      render: (text, data) => {
        return (
          <div className="flex">
            <DeleteOutlined
            className='mr-2'
            style={{fontSize:20}}
            onClick={() => {
              dispatch(deleteUser(data.completeUserData.id));
            }}
            />
          </div>
        );
      },
    },
  ];

  const dataSource = [];

  
  for (var user of allUsers) {
    var obj = {
      name: user.name,
      role : <Tag color="geekblue">{user.role}</Tag>,
      createdOn: moment(user.createdOn).format("MMM DD yyyy"),
      completeUserData: user,
    };
    dataSource.push(obj);
  }

return (
  <div>
    <AdminLayout>
      <h1>All Users</h1>

      <Table columns={columns} dataSource={dataSource} />
    </AdminLayout>
  </div>
);
}

export default Adminusers