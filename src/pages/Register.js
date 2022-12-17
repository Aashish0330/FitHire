import React from 'react'
import { Row, Col, Form, Input, Button,message,Select } from "antd";
import { Link } from 'react-router-dom';
import { registerUser } from '../redux/actions/userActions';
import { useDispatch } from 'react-redux';
const { Option } = Select;

function Register() {

  const dispatch = useDispatch()
function register(values){
           if(values.password!==values.conpassword){
                    message.error('passwords not matched')
           }else{
               console.log(values)
               dispatch(registerUser(values))
           }
   
       }
  

    return (
        <div className="register">
          <Row justify="center" className='flex align-items-center'>
          <Col lg={5}><h1 className='heading1' data-aos='slide-left'>Fit</h1></Col>
            <Col lg={10} sm={24} className="bs p-5 register-form">
              <h3>Register</h3>
              <hr />
              <Form layout="vertical" onFinish={register}>
            
                <Form.Item
                  label="name"
                  name="name"
                  rules={[{ required: true }]} id="name"
                >
                  <Input />
                </Form.Item>
    
                <Form.Item
                   label="password"
                  name="password"
                  type="password"
                  rules={[{ required: true }]} id="password"
                  
                >
                  <Input.Password/>
                </Form.Item>
    
                <Form.Item
                  label="confirm password"
                  name="conpassword"
                  rules={[{ required: true }]} id="conpassword"
                >
                  <Input.Password />
                </Form.Item>

                <Form.Item
                  label="email"
                  name="email"
                  rules={[{ required: true }]} id="email"
                >
                  <Input />
                </Form.Item>

                {/* <Form.Item
                  label="role"
                  name="role"
                  rules={[{ required: true }]} id="role"
                >
                  <Select>
                      <Option value="trainer">trainer</Option>
                      <Option value="user">user</Option>
                    </Select>
                 
                </Form.Item> */}

                
    
                <Button htmlType="submit" className='mb-3'>Register</Button> <br />
    
                <Link to='/login' className='mt-3'>Already registered ? , Click here to login</Link>
              </Form>
            </Col>
            <Col lg={5}><h1 className='heading2' data-aos='slide-right'>Hire</h1></Col>
          </Row>
        </div>
      );
    };

export default Register;