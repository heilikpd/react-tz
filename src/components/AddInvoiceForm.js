import React, {useState,useContext} from 'react';
import { useHistory } from "react-router-dom";
import {ServerContext} from "../context/server/serverContext";
import { Alert } from './Alert';

export const  AddInvoiceForm = () => {
    const [dateCreated, setDateCreated] = useState('');
    const [dateSupplied, setDateSupplied] = useState('');
    const [number, setNumber] = useState(0);
    const [comment, setComment] = useState('');
    const [validationFailed, setValidationFailed] = useState(false);
    const server = useContext(ServerContext);
    let history = useHistory();

    function validate() {
        console.log(dateSupplied)
        return (comment.length > 0 && comment.length <= 160) && number.length >= 3 && Number(number);
    }

    function uuid() {
        return 'xxxxxxxxxxxxxxxxxxxxxxxx'.replace(/[x]/g, c => {
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
       

        const inv = {
            "id": uuid(),
            "number": Number(number),
            "date_created": dateCreated,
            "date_supplied": dateSupplied,
            "comment": comment
        };
        server.addInvoice(inv)
        history.push("/");
    }

    function displayError(){
        if (validationFailed){
            const message = `Oops! Some data is not correct`;
            // eslint-disable-next-line no-unused-expressions
            return(<Alert message={message}/>)
        } 
    }

    return (
        <div className="page--card" >
            <form onSubmit={handleSubmit}>
                <div className="form--wrapper">
                    {displayError()}
                    <div className="form--inputs-wrapper">
                 <div className="form--inputs">
                    <div className="input-wrapper">
                        <label htmlFor="setNumber">Number:</label>
                        <input
                            type="text"
                            className="datainput"
                            itemID="setNumber"
                            onChange={(e) => setNumber(e.target.value)}
                            required
                        />
                     </div>
                     <div className="input-wrapper">
                     <label htmlFor="setDateCreated">Invoice Date:</label>
                     <input
                         type="date"
                         placeholder="Date"
                         className="datainput"
                         itemID="setDateCreated"
                         onChange={(e) => setDateCreated(e.target.value)}
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
                        rows="10"
                        required
                    />
                    </div>
                    <button
                        type="submit"
                        className="appbutton appbutton--apply form--button__left"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
};