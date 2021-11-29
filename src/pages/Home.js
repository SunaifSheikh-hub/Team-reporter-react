import React, { useState } from 'react';
import { Modal, Button } from 'antd';
import '../App.css';
import { Form } from 'antd';
import {  Select } from 'antd';


const { Option } = Select;

const OnClickHandler = () => {
    
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
      setIsModalVisible(true);
    };
  
    const handleOk = () => {
      setIsModalVisible(false);
    };
  
    const handleCancel = () => {
      setIsModalVisible(false);
    };
  

    return (


        <div class="left">
            <Button type="primary"
             onClick={showModal}
             >

        Create
      </Button>
      <Modal title="Basic Modal"
       visible={isModalVisible} 
      onOk={handleOk} onCancel={handleCancel}
      >

      

        <p className="App">Create Your Own Team </p>
        <p className="newTeam">Categories</p>
        <Form.Item
            name={['Website Designer', 'Graphic Designer']}
            noStyle
            rules={[{ required: true, message: 'Field is required' }]}
          >
            <Select placeholder="Select Field">
              <Option value="Website Designer">Website Designer</Option>
              <Option value="Graphic Designer">Graphic Designer</Option>
            </Select>
          </Form.Item>
        <p className="newTeam">Team Name</p>
        <Form.Item
            name={['2 to 5 team', '7 to 10 team']}
            noStyle
            rules={[{ required: true, message: 'Field is required' }]}
          >
            <Select placeholder="Select Field">
              <Option value="7 to 10 team">7 to 10 team</Option>
              <Option value="2 to 5 team">2 to 5 team</Option>
            </Select>
          </Form.Item>
      </Modal>
        </div>
    );
}




export default OnClickHandler
