import React from 'react';

export const Invoices=(props)=> {
    function parseChildren() {
        const children = [];
        if(props.invoices.length > 0){
            props.invoices.map((invoice, index) => (
                    children.push(<tr style={{height: "50px"}} key={index}>
                        <td
                            style={{textAlign: "center", fontSize:".8rem"}}
                        >
                            {invoice.date_created}
                        </td>
                        <td
                            style={{color: '#4973FF', textOverflow: "ellipsis", whiteSpace: "nowrap", textAlign: "center"}}
                        >
                            INV-{invoice.number}
                        </td>
                        <td
                            style={{textAlign: "center", fontSize:".8rem"}}
                        >
                            {invoice.date_supplied}
                        </td>
                        <td
                            style={{textTransform: "capitalize"}}
                        >
                            {invoice.comment}
                        </td>
                        <td
                            style={{textAlign: "center"}}
                        >
                            <button
                                className="appbutton appbutton__close"
                                onClick={() => props.onRemove(invoice.id)}
                            >
                                Remove
                            </button>
                        </td>
                    </tr>)
                )
            )}
        return children
    }

    return (
        <table
            className="invoices-table"
            style={{borderCollapse:"collapse"}}
        >
            <tbody >
                <tr className="invoices-table--heading">
                    <th>Create</th>
                    <th>No</th>
                    <th>Supply</th>
                    <th>Comment</th>
                    <th>Options</th>
                </tr>
                {parseChildren()}
            </tbody>
        </table>
    )
};