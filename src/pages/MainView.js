/* eslint-disable react/jsx-filename-extension */

import React, { useContext, useEffect } from 'react';
import { Invoices } from '../components/Invoices';
import { RedirectToForm } from '../components/RedirectToForm';
import { ServerContext } from '../context/server/serverContext';

// eslint-disable-next-line import/prefer-default-export
export const MainView = () => {
  const { invoices, loadInvoices, removeInvoice } = useContext(ServerContext);
  useEffect(() => {
    loadInvoices();
  }, []);
  return (
    <div>
      <div>
        <div className="page--title-container">
          <h3 className="page--title">&nbsp;Invoices</h3>
        </div>
        <RedirectToForm />
        <div className="page--card">
          <h3>Invoices</h3>
          <Invoices invoices={invoices} onRemove={removeInvoice} />
        </div>
      </div>
    </div>
  );
};
