import React from 'react';
import { UserOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';
const Profile = (props) => (
    <div>
        <Avatar size={80} icon={<UserOutlined />} />
        <h3>Name: Joe Doe</h3>
        <p>you have <u>{props.appointments || 'no'} appointment(s)</u></p>  
    </div>
);
export default Profile;