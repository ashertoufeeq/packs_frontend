import React, {useState, useEffect} from 'react';
import {Form, Col, Row, Button, Divider, Spin} from 'antd';
import formItem from '../hocs/formItem.hoc';
import {ReceivedFormFields, ReceivedProductFormFields} from 'common/formFields/received.formFields';
import {useAPI} from 'common/hooks/api';
import {useHandleForm} from 'hooks/form';
import {
  createReceived,
  editReceived,
  retrieveReceived,
  allReceived,
  retrieveReturns,
} from 'common/api/auth';
import {PlusOutlined, MinusCircleOutlined} from '@ant-design/icons';

export const ReceivedForm = ({id, onCancel, onDone}) => {
  const [loading, setLoading] = useState(true);
  const [received, setReceived] = useState(false);
  const [returnn, setReturn] = useState(null);
  const [products, setProducts] = useState(null);
  const [receivedId, setReceivedId] = useState(null);

  const {form, submit} = useHandleForm({
    create: createReceived,
    success: 'Request created/edited successfully.',
    failure: 'Error in creating/editing request.',
    done: onDone,
    close: onCancel,
    edit: editReceived,
    retrieve: retrieveReceived,
    id: receivedId,
  });

  useEffect(() => {
    const fetchReturn = async () => {
      const {data} = await retrieveReturns();
      if (data) {
        const reqReturn = data.filter((d) => d.id === id)[0];
        setReturn(reqReturn);
      }
    };
    if (id) fetchReturn();
  }, [id]);

  useEffect(() => {
    const fetchReceived = async () => {
      const {data} = await allReceived();
      console.log(id);
      if (data) {
        const reqrcvd = data.filter((rcvd) => rcvd.returndocket === id)[0];
        if (reqrcvd) {
          setReceivedId(reqrcvd.id);
          setReceived(reqrcvd.delivered);
        }
      }
    };
    if (id) fetchReceived();
  }, [id]);

  useEffect(() => {
    if (form && returnn) {
      form.setFieldsValue({
        transaction_no: returnn.transaction_no,
      });
      setLoading(false);
    }
  }, [returnn, form]);

  useEffect(() => {
    if (returnn) {
      const reqProds = returnn.items.map((item) => item.product);
      setProducts(reqProds);
    }
  }, [returnn]);

  const preProcess = (data) => {
    data['returndocket'] = returnn.id;
    submit(data);
  };

  return (
    <Spin spinning={loading}>
      <Divider orientation="left">Delivery Details</Divider>
      <Form onFinish={preProcess} form={form} layout="vertical" hideRequiredMark autoComplete="off">
        <Row style={{justifyContent: 'left'}}>
          {ReceivedFormFields.slice(0, 1).map((item, idx) => (
            <Col span={6}>
              <div key={idx} className="p-2">
                {formItem(item)}
              </div>
            </Col>
          ))}
          {ReceivedFormFields.slice(1, 2).map((item, idx) => (
            <Col span={6}>
              <div key={idx} className="p-2">
                {formItem({
                  ...item,
                  kwargs: {
                    onChange: (val) => setReceived(val),
                  },
                })}
              </div>
            </Col>
          ))}
        </Row>
        <Row style={{justifyContent: 'left'}}>
          {ReceivedFormFields.slice(2, 3).map((item, idx) => (
            <Col span={24} style={{justifyContent: 'center'}}>
              <div key={idx} className="p-2">
                {formItem({
                  ...item,
                })}
              </div>
            </Col>
          ))}
        </Row>
        <Divider orientation="left">Discrepancy Details</Divider>

        <Form.List name="items">
          {(fields, {add, remove}) => {
            return (
              <div>
                {fields.map((field) => (
                  <Row align="middle">
                    {ReceivedProductFormFields.slice(0, 1).map((item) => (
                      <Col span={7}>
                        <div className="p-2">
                          {formItem({
                            ...item,
                            kwargs: {
                              placeholder: 'Select',
                              type: 'number',
                              disabled: received,
                              showSearch: true,
                              filterOption: (input, option) =>
                                option.search.toLowerCase().indexOf(input.toLowerCase()) >= 0,
                            },
                            others: {
                              selectOptions: products || [],
                              key: 'id',
                              dataKeys: ['short_code', 'description', 'category'],
                              customTitle: 'name',
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
                    {ReceivedProductFormFields.slice(1, 2).map((item) => (
                      <Col span={7}>
                        <div className="p-2">
                          {formItem({
                            ...item,
                            kwargs: {
                              placeholder: 'Enter',
                              type: 'number',
                              disabled: received,
                            },
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
                    {ReceivedProductFormFields.slice(2, 3).map((item) => (
                      <Col span={7}>
                        <div className="p-2">
                          {formItem({
                            ...item,
                            kwargs: {
                              placeholder: 'Select',
                              disabled: received,
                            },
                            others: {
                              selectOptions: ['Repairable', 'Return', 'Damage', 'Swap Return'],
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
                      type="danger"
                      disabled={received}
                      onClick={() => {
                        remove(field.name);
                      }}>
                      <MinusCircleOutlined /> Delete
                    </Button>
                  </Row>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    disabled={received}
                    onClick={() => {
                      add();
                    }}
                    block>
                    <PlusOutlined /> Add Item
                  </Button>
                </Form.Item>
              </div>
            );
          }}
        </Form.List>
        <Row>
          <Button type="primary" htmlType="submit">
            Save
          </Button>
          <div className="p-2" />
          <Button type="primary" onClick={onCancel}>
            Cancel
          </Button>
        </Row>
      </Form>
    </Spin>
  );
};