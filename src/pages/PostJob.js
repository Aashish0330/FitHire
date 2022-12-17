import React, { useState } from "react";
import { Row, Col, Form, Tabs, Input, Button, Select } from "antd";
import { useDispatch } from "react-redux";
import { postJob } from "../redux/actions/jobActions";
import UserLayout from "../components/UserLayout";
const { TextArea } = Input;
const { Option } = Select;
function PostJob() {
  const [jobInfo, setJobInfo] = useState({});
  const dispatch = useDispatch()
  
  function onFirstFormFinish(values) {
    dispatch(postJob(values))
  }

  return (
    <div>
      <UserLayout>
        <h1>Post Job</h1>
            <Form layout="vertical" onFinish={onFirstFormFinish}>
              <Row gutter={16}>
                <Col lg={8} sm={24}>
                  <Form.Item
                    name="title"
                    rules={[{ required: true }]}
                    label="title"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="company"
                    rules={[{ required: true }]}
                    label="Company Name"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="exp"
                    rules={[{ required: true }]}
                    label="Experience"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryfrom"
                    rules={[{ required: true }]}
                    label="Salary From"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="salaryto"
                    rules={[{ required: true }]}
                    label="Salary To"
                  >
                    <Input type="number" />
                  </Form.Item>
                </Col>

                <Col lg={8} sm={24}>
                  <Form.Item
                    name="num"
                    rules={[{ required: true }]}
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
                    rules={[{ required: true }]}
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
                    rules={[{ required: true }]}
                    label="Company Email"
                  >
                    <Input />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="smalldesc"
                    rules={[{ required: true }]}
                    label="Small description"
                  >
                    <TextArea rows={3} />
                  </Form.Item>
                </Col>

                <Col lg={24} sm={24}>
                  <Form.Item
                    name="fulldesc"
                    rules={[{ required: true }]}
                    label="Full description"
                  >
                    <TextArea rows={6} />
                  </Form.Item>
                </Col>
              </Row>
              <Button htmlType="submit">Post Job</Button>
            </Form>
      </UserLayout>
    </div>
  );
}

export default PostJob;