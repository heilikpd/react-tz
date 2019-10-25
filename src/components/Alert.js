/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/prefer-default-export */
/* eslint-disable react/prop-types */
import React from 'react';

export const Alert = (props) => (
  <div className="alert alert--red">
    <h3 className="alert__title">{props.message}</h3>
  </div>
);
