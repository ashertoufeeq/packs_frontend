import { FORM_ELEMENT_TYPES } from 'web/src/constants/formFields.constant';

export const outwardDocketFormFields = [
  {
    key: 'transaction_date',
    type: FORM_ELEMENT_TYPES.DATE,
    others: null,
  },
  {
    key: 'dispatch_date',
    type: FORM_ELEMENT_TYPES.DATE,
    others: null,
  },
  {
    key: 'transaction_no',
    rules: [{ required: true, message: 'Please select Transaction Number!' }],
    kwargs: {
      placeholder: 'Transaction Number',
      type:'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    customLabel: 'Transaction Number',
  },
  {
    key: 'sending_location',
    rules: [{ required: true, message: 'Please select Sender Number!' }],
    type: FORM_ELEMENT_TYPES.SELECT,
    kwargs: {
      placeholder: 'Sender Number',
    },
    customLabel: 'Sender Number',
  },
  {
    key: 'kit',
    rules: [{ required: true, message: 'Please select kit!' }],
    type: FORM_ELEMENT_TYPES.SELECT,
    kwargs: {
      placeholder: 'kit',
    },
    customLabel: 'kit',
    others: {
      selectOptions:[]
    }
  },
  {
    key: 'quantity_parts',
    rules: [{ required: true, message: 'Please select Quantity Parts!' }],
    kwargs: {
      placeholder: 'Quantity Parts',
      type:'number'
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    customLabel: 'Quantity Parts',
  },
  {
    key: 'quantity_kit',
    rules: [{ required: true, message: 'Please select Quantity Kit!' }],
    kwargs: {
      type:'number',
      placeholder: 'Quantity Kit',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    customLabel: 'Quantity Kit',
  },{
    key: 'transporter_name',
    rules: [{ required: true, message: 'Please select Transporter Name!' }],
    kwargs: {
      placeholder: 'Transporter Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    customLabel: 'Transporter Name',
  },
  {
    key: 'vehicle_details',
    rules: [{ required: true, message: 'Please select Vehicle Details!' }],
    kwargs: {
      placeholder: 'Vehicle Details',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    customLabel: 'Vehicle Details',
  },
  {
    key: 'invoice_number',
    rules: [{ required: true, message: 'Please select Invoice Number!' }],
    kwargs: {
      placeholder: 'Invoice Number',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    customLabel: 'Invoice Number',
  },
  {
    key: 'remark',
    kwargs: {
      placeholder: 'Remark',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    customLabel: 'Remark',
  },
]
