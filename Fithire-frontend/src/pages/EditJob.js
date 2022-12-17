import React, { useEffect, useState } from "react";
import UserLayout from "../components/UserLayout";
import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { editJob} from "../redux/actions/jobActions";
import { useParams } from "react-router-dom";
const { TextArea } = Input;
const { Option } = Select;


function EditJob() {
  const {id} = useParams();
  const [jobInfo, setJobInfo] = useState({});
  const dispatch = useDispatch()
  const finalObj = {...jobInfo};
  function onFirstFormFinish(values) {
    setJobInfo(values);
    const finalObj = {...jobInfo,...values}
    finalObj.id = id
    console.log(finalObj)
    dispatch(editJob(finalObj))
  }


  
  return (
    <div>
      <UserLayout>
            <Form layout="vertical" onFinish={onFirstFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="title"
                    rules={[{ required: false}]}
                    label="Title"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="company"
                    rules={[{ required: false}]}
                    label="Company Name"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="exp"
                    rules={[{ required: false}]}
                    label="Experience"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryfrom"
                    rules={[{ required: false }]}
                    label="Salary From"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryto"
                    rules={[{ required: false }]}
                    label="Salary To"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="num"
                    rules={[{ required: false }]}
                    label="Company Phone Number"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>
              </Row>

              <Row gutter={16}>
              

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="minqual"
                    rules={[{ required: false }]}
                    label="Minimum Qualification"
                  >
                    <Select>
                      <Option value="Degree">Degree</Option>
                      <Option value="Plus 2">Plus 2</Option>
                      <Option value="10th">10th</Option>
                    </Select>
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="email"
                    rules={[{ required: false }]}
                    label="Company Email"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="smalldesc"
                    rules={[{ required: false }]}
                    label="Small description"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="fulldesc"
                    rules={[{ required: false }]}
                    label="Full description"
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
              <Button htmlType="submit">Update Job</Button>
            </Form>
      </UserLayout>
    </div>
  );
}

export default EditJob;