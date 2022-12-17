import React from 'react'
import { Row, Col, Form, Input, Button} from "antd";
import { Link} from 'react-router-dom';
import { useDispatch} from "react-redux";
import { loginAdmin } from '../redux/actions/userActions';

function Login({ match }) {
  const dispatch = useDispatch()
  function login(values)
  {
    dispatch(loginAdmin(values))
  }

  return (
        <div className="login">
      <Row justify="center">
        <Col lg={5}><h1 className='heading1'>Fit</h1></Col>
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3>Welcome Admin</h3>
          <hr />
          <Form layout="vertical" onFinish={login}>
            <Form.Item
              label="name"
              name="name"
              rules={[{ required: true }]}
            >
              <Input />
            </Form.Item>
            <Form.Item type="password"
              label="password"
              name="password"
              rules={[{ required: true }]}
              
            >
              <Input.Password />
            </Form.Item>

            <Button htmlType="submit" className='mb-3'>Login</Button><br />
            <Link to='/register' className='mt-3'>Not registered ? , Click here to register</Link>
          </Form>
          </Col>
          <Col lg={5}><h1 className='heading2' data-aos='slide-right'>Hire</h1></Col>
          </Row>
          </div>
  );
}

export default Login;