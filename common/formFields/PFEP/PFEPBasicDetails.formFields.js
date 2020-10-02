import { FORM_ELEMENT_TYPES } from 'web/src/constants/formFields.constant';

export const PREPBasicDetailsFormFields = [
  {
    key: 'date',
    type: FORM_ELEMENT_TYPES.DATE,
    others: null,
  },

  {
    key: 'contact_person_name',
    kwargs: {
      placeholder: 'Contact person Name',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    customLabel: 'Contact person Name',
  },
  {
    key: 'designation',
    kwargs: {
      placeholder: 'Designation',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
  },
  {
    key: 'email',
    kwargs: {
      placeholder: 'Email',
    },
    type: FORM_ELEMENT_TYPES.INPUT,
    others: null,
    customLabel: 'Email',
  },
]