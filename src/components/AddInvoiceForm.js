import React, {useState,useContext} from 'react';
import { useHistory } from "react-router-dom";
import {ServerContext} from "../context/server/serverContext";

export const  AddInvoiceForm = () => {
    const [dateCreated, setDateCreated] = useState('');
    const [dateSupplied, setDateSupplied] = useState('');
    const [number, setNumber] = useState(0);
    const [comment, setComment] = useState('');
    const [validationFailed, setValidationFailed] = useState(false);
    const server = useContext(ServerContext);
    let history = useHistory();

    function validate() {
        return (comment.length > 0 && comment.length < 160) && (number > 99 && number < 100000);
    }
    function uuid() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
            let r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
    function handleSubmit(event) {
        event.preventDefault();

        if ( !validate() ){
            setValidationFailed(true);
            return false;
        }
        history.push("/");

        const inv = {
            "id": uuid(),
            "number": number,
            "date_created": dateCreated,
            "date_supplied": dateSupplied,
            "comment": comment
        };
        server.addInvoice(inv)
    }

    function displayError(){
        if (validationFailed){
            return(<span>Oops! Some data is not correct</span>)
        }
    }

    return (
        <div className="page--card">
            <form onSubmit={handleSubmit}>
                <div className="form--wrapper">
                    {displayError()}
                    <div className="form--inputs-wrapper">
                 <div className="form--inputs">
                     <div className="input-wrapper">
                     <label htmlFor="setDateCreated">Invoice Date:</label>
                     <input
                         type="date"
                         className="datainput"
                         itemID="setDateCreated"
                         onChange={(e) => setDateCreated(e.target.value)}
                         required
                     />
                     </div>
                     <div className="input-wrapper">
                         <label htmlFor="setNumber">Number:</label>
                    <input
                        type="number"
                        className="datainput"
                        itemID="setNumber"
                        onChange={(e) => setNumber(e.target.value)}
                        required
                    />
                     </div>
                     <div className="input-wrapper">
                         <label htmlFor="setNumber">Supply Date:</label>
                    <input
                        type="date"
                        className="datainput"
                        itemID="dateSupplied"
                        onChange={(e) => setDateSupplied(e.target.value, 'dateSupplied')}
                        required
                    />
                     </div>
                 </div>
                    <textarea
                        className="form-textarea"
                        onChange={(e) => setComment(e.target.value)}
                        required
                    />
                    </div>
                    <button
                        type="submit"
                        className="appbutton appbutton__apply form--button__left"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
};