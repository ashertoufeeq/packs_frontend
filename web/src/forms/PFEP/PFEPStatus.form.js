import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Button, Divider, Spin,Menu, notification, Dropdown } from 'antd';
import formItem from 'hocs/formItem.hoc';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PFEP_DATA } from 'common/actions';
import {
  ArrowRightOutlined,
  DownOutlined,
  MinusCircleOutlined,
  PlusOutlined,
} from '@ant-design/icons';
import { createPFEP, editPFEP } from 'common/api/auth';
import {PFEPStatusFormFields} from 'common/formFields/PFEP/PFEPStatus.formFields';

const { Item }  = Menu;

export const PFEPStatusForm = ({ id, onCancel,onDone }) => {
  const [loading,setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const state =  useSelector(e=>(e.data.pfepData))


  const submit = async (data) =>{
    setLoading(true)
    await dispatch({ type:ADD_PFEP_DATA,data });
    setLoading(false)
    if(id){
      const { error } = await editPFEP(id,{ ...state,...data });
      if (error) {
        notification.warning({
          message: 'Unable To Edit.',
          description:
            'Something went wrong PFEP editing failed.',
        });
        onCancel();
      } else {
        onDone();
      }
    }
    else{
      const { error } = await createPFEP({ ...state,...data });
      if (error) {
        notification.warning({
          message: 'Unable To Create.',
          description:
            'Something went wrong PFEP creation failed.',
        });
        onCancel();
      } else {
        onDone();
      }
    }
  }
  // useEffect(()=>{
    // form.setFieldsValue({
    //   tp:state.tp?state.tp:[]
    // })
  // },[state])
  const menu = (
    <Menu>
      {PFEPStatusFormFields.map((item, idx) => (
        <Item key={idx.toString()}>
          <div className='row justify-between'>
            <div style={{ flexWrap:'wrap',marginRight:'5px' }}>
              {item.customLabel}
              {' '}
            </div>
            {formItem(item)}
          </div>
        </Item>
      ))}
    </Menu>
  )
  return (
    <Spin spinning={loading}>
      <Divider orientation='left'>Status</Divider>
      <Form
        onFinish={submit}
        initialValues={state}
        form={form}
        layout='vertical'
        // hideRequiredMark
        autoComplete='off'
      >
        <Row style={{ justifyContent: 'left' }}>
          <Col>
            <div className='p-2'>
              <Dropdown overlay={menu} trigger={['click']}>
                <Button className='ant-dropdown-link' onClick={e => e.preventDefault()}>
                  Select Status
                  {' '}
                  <DownOutlined />
                </Button>
              </Dropdown>
            </div>
            <br />
            <br />
            <br />
          </Col>
        </Row>
        <Row justify='space-between'>
          <div className='row'>
            <Button type='primary' htmlType='submit' disabled>
              Submit
            </Button>
            <div className='p-2' />
            <Button type='primary' onClick={onCancel}>
              Cancel
            </Button>
          </div>
        </Row>
      </Form>
    </Spin>
  );
};

export default PFEPStatusForm;
