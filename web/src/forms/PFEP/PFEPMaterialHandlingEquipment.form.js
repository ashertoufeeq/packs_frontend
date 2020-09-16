import React, { useState } from 'react';
import { Form, Col, Row, Button, Divider, Spin } from 'antd';
import { PREPMaterialHandlingEquipmentFormFields } from
  'common/formFields/PFEP/PFEPMaterialHandlingEquipment.formFields';
import formItem from 'hocs/formItem.hoc';
import { useDispatch } from 'react-redux';
import { ADD_PFEP_DATA } from 'common/actions';

export const PFEPMaterialHandlingEquipmentForm = ({ id, onCancel,onDone,onNext }) => {
  const [loading,setLoading] = useState(false);
  const [form] = Form.useForm();
  const dispatch = useDispatch();

  const submit = async (data) =>{
    setLoading(true)
    await dispatch({ type:ADD_PFEP_DATA,data });
    setLoading(false)
    onNext();
  }

  return (
    <Spin spinning={loading}>
      <Divider orientation='left'>Material Handling Equipments</Divider>
      <Form
        onFinish={submit}
        form={form}
        layout='vertical'
        hideRequiredMark
        autoComplete='off'
      >
        <Row style={{ justifyContent: 'left' }}>
          {PREPMaterialHandlingEquipmentFormFields.slice(0, 3).map((item, idx) => (
            <Col span={8}>
              <div key={idx.toString()} className='p-2'>
                {formItem(item)}
              </div>
            </Col>
          ))}
        </Row>
        <Row>
          <Button type='primary' htmlType='submit'>
            Next
          </Button>
          <div className='p-2' />
          <Button type='primary' onClick={onDone}>
            Cancel
          </Button>
        </Row>
      </Form>
    </Spin>
  );
};

export default PFEPMaterialHandlingEquipmentForm;

