import React from "react";
export const Alert = (props) => {
    return (
        <div className="alert alert--red">
            <h3 className="alert__title">{props.message}</h3>
        </div>
    );
};