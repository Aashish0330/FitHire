import { Layout, Menu } from 'antd';
import React from 'react';
import { Link} from 'react-router-dom';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PlayCircleOutlined,
  UserOutlined,
  PlusOutlined,
  CheckOutlined,
  LogoutOutlined,
} from '@ant-design/icons';

import axios from 'axios';
const { Header, Sider, Content } = Layout;


class UserLayout extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      collapsed: false,
      id: '',
      userdata: [],
    }
  }

  

  
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  logout = () => {
    localStorage.removeItem('user')
  }



componentDidMount()
{
  axios.get(`http://localhost:8080/api/v1/register/${this.state.id}`)
  .then(res => {
    const userdata = res.data;
    this.setState({userdata});
    console.log(userdata)
  })
}


  render() {
    const user = JSON.parse(localStorage.getItem('user'))
  return(
    
      <Layout>
        <Sider trigger={null} collapsible collapsed={this.state.collapsed}
         style={{position: 'sticky' , overflow : 'auto' , height:'100%' , top:0}}>
          <div className="logo">
              {this.state.collapsed ? (<h1>FH</h1>) : (<h1>FitHire</h1>)}
          </div>
          <Menu theme="dark" mode="inline" defaultSelectedKeys={[window.location.pathname]}>
             <Menu.Item key="/user/userpostedjobs" icon={<PlayCircleOutlined />}>
            <Link to="/user/userpostedjobs">Jobs Info</Link>
            </Menu.Item> 

            <Menu.Item key="/user/postjob" icon={<PlusOutlined />}>
            <Link to='/user/postjob'>Post Job</Link>
            </Menu.Item>

            <Menu.Item key="/user/posted" icon={<CheckOutlined />}>
            <Link to='/user/posted'>Posted Jobs</Link>
            </Menu.Item>
            <Menu.Item key="/logout" icon={<LogoutOutlined />}>
            <Link to ='/login' onClick={this.logout}>Logout</Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0, position: 'sticky' , overflow : 'auto' , top:0,zIndex:9999}}>
          <div className='flex justify-content-between'>
          <div>
          <div style={{display : this.state.collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}}>
                  <h5 className="trigger" onClick={this.toggle}>
                  </h5>
            </div>
            </div>

            <div style={{display : this.state.collapsed ? 'none' : 'inline'}}>
                  <h5 className="mr-2">
                   <UserOutlined/>user-{user.name} 
                  </h5>
             </div>
             </div>
          </Header>
          <Content
            className="site-layout-background" style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,}}
              >
            {this.props.children}
          </Content>
        </Layout>
      </Layout>
    );
  }
};


export default UserLayout
