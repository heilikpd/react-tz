import React, { useContext, useEffect, Fragment } from "react";
import { Invoices } from "../components/Invoices";
import { RedirectToForm } from "../components/RedirectToForm";
import { ServerContext } from "../context/server/serverContext";
export const MainView = () => {
    const { invoices, loadInvoices, removeInvoice } = useContext(ServerContext);
    useEffect(() => {
        loadInvoices();
    }, [loadInvoices]);
    return (
        <Fragment>
            <div>
                <div className="page--title-container">
                    <h3 className="page--title">Invoices</h3>
                </div>
                <RedirectToForm />
                <div className="page--card">
                    <h3>Invoices</h3>
                    {console.log("inv", invoices)}
                    <Invoices invoices={invoices} onRemove={removeInvoice} />
                </div>
            </div>
        </Fragment>
    );
};