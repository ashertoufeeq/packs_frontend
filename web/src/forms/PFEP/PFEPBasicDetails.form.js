import React, { useEffect, useState } from 'react';
import { Form, Col, Row, Button, Divider, Spin } from 'antd';
import { ArrowRightOutlined, MinusCircleOutlined, PlusOutlined } from '@ant-design/icons';
import { PREPBasicDetailsFormFields } from 'common/formFields/PFEP/PFEPBasicDetails.formFields';
import formItem from 'hocs/formItem.hoc';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_PFEP_BASIC_DATA, ADD_PFEP_DATA, } from 'common/actions';
import moment from 'moment';
import { PREPCreationFormFields } from 'common/formFields/PFEP/PFEPCreation.formFields';
import { PREPTouchPointsFormFields } from 'common/formFields/PFEP/PFEPTouchPoints.formFields';

export const PFEPBasicDetailsForm = ({ id, onCancel,lead,onNext,active }) => {
  const [loading,setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const state =  useSelector(e=>(e.data.pfepData))

  const submit = async (data) =>{
    setLoading(true)
    await dispatch({ type:id?ADD_PFEP_DATA:ADD_PFEP_BASIC_DATA,data:{ ...data,lead_no:lead } });
    setLoading(false)
    onNext();
  }

  useEffect( ()=>{
    if(active!==0){
      console.log(form.getFieldsValue(['date','contact_person','designation','email','contact_no'],"GGG"))

      // await submit(form.getFieldsValue(['date','contact_person','designation','email','contact_no']))
    }
  },[active])

  return (
    <Spin spinning={loading}>
      <Form
        initialValues={{
          date:state.date?moment(state.date):null,
          contact_person:state.contact_person?state.contact_person:null,
          designation:state.designation?state.designation:null,
          email:state.email?state.email:null,
          contact_no:state.contact_no?state.contact_no:null
        }}
        onFinish={submit}
        form={form}
        layout='vertical'
        // hideRequiredMark
        autoComplete='off'
      >
        <Divider orientation='left'>Basic Details</Divider>
        <Row style={{ justifyContent: 'left' }}>
          {PREPBasicDetailsFormFields.slice(0, 1).map((item, idx) => (
            <Col span={4}>
              <div key={idx.toString()} className='p-2'>
                {formItem(item)}
              </div>
            </Col>
          ))}
          {PREPBasicDetailsFormFields.slice(1, 5).map((item, idx) => (
            <Col span={5}>
              <div key={idx.toString()} className='p-2'>
                {formItem(item)}
              </div>
            </Col>
          ))}
        </Row>
        <Divider orientation='left'>PFEP Creation</Divider>
        <Row style={{ justifyContent: 'left' }}>
          {PREPCreationFormFields.slice(0, 3).map((item, idx) => (
            <Col span={8}>
              <div key={idx.toString()} className='p-2'>
                {formItem(item)}
              </div>
            </Col>
          ))}
        </Row>
        <Form.List name='sending_details'>
          {(fields, { add, remove }) => {
            return (
              <div>
                {fields.map((field, index) => (
                  <Row align='middle'>
                    {PREPCreationFormFields.slice(3, 5).map((item) => (
                      <Col span={5}>
                        <div className='p-2'>
                          {formItem({
                            ...item,
                            noLabel: index !== 0,
                            form,
                            others: {
                              formOptions: {
                                ...field,
                                name: [field.name, item.key],
                                fieldKey: [field.fieldKey, item.key],
                              },
                            },
                          })}
                        </div>
                      </Col>
                    ))}
                    <Button
                      type='danger'
                      style={index !== 0 ? { top: '-2vh'} : null}
                      onClick={() => {
                        remove(field.name);
                      }}>
                      <MinusCircleOutlined />
                      {' '}
                      Delete
                    </Button>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type='dashed'
                    onClick={() => {
                      add();
                    }}
                    block>
                    <PlusOutlined />
                    {' '}
                    Add Item
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>

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
          <Button type='link' htmlType='submit'>
            <ArrowRightOutlined style={{ fontSize:30 }}  />
          </Button>
        </Row>
      </Form>
    </Spin>
  );
};

export default PFEPBasicDetailsForm;

