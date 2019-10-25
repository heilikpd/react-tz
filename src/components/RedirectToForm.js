/* eslint-disable react/jsx-filename-extension */
/* eslint-disable import/prefer-default-export */
import React from 'react';
import { useHistory } from 'react-router-dom';

export const RedirectToForm = () => {
  const history = useHistory();
  function handleClick() {
    history.push('/create');
  }
  return (
    <div className="page--card">
      <h3>Actions</h3>
      <button className="appbutton appbutton--apply" type="button" onClick={handleClick}>
                Add new
      </button>
    </div>
  );
};
