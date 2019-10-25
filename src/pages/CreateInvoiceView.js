/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { AddInvoiceForm } from '../components/AddInvoiceForm';

// eslint-disable-next-line import/prefer-default-export
export const CreateInvoiceView = () => (
  <div>
    <div className="page--title-container">
      <h3 className="page--title">Create Invoice</h3>
    </div>
    <AddInvoiceForm />
  </div>
);
