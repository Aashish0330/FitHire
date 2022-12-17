import React from 'react'
import { Row, Col, Form, Input, Button,Select} from "antd";
import { Link,useNavigate} from 'react-router-dom';
import { useDispatch} from "react-redux";
import { loginUserrole} from '../redux/actions/userActions';
const { Option } = Select;

function Login({ match }) {
  const dispatch = useDispatch()
  function loginuser(values)
  {
    dispatch(loginUserrole(values))
  }
  

  return (
        <div className="login">
      <Row justify="center">
        <Col lg={5}><h1 className='heading1' data-aos='slide-left'>Fit</h1></Col>
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3>Login</h3>
          <hr />
          <Form layout="vertical" onFinish={loginuser}>
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

            <Form.Item
                  label="role"
                  name="role"
                  id="role"
                  rules={[{ required: true }]}
                >
                  <Select>
                      <Option value="trainer">trainer</Option>
                      <Option value="user">user</Option>
                    </Select>
                 
                </Form.Item>

            <Button htmlType="submit" className='mb-3'>Login</Button><br/>
            <Link to='/register' className='mt-3'>Not registered ? , Click here to register</Link>
            <br></br>
            <Link to='/adminlogin' className='mt-3'>Click here for Admin</Link>
          </Form>
          </Col>
          <Col lg={5}><h1 className='heading2' data-aos='slide-right'>Hire</h1></Col>
          </Row>
          </div>
  );
}

export default Login;