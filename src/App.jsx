import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  const target = document.getElementById('root');
  if (target) {
    ReactDOM.render(
      <div>Hello Team Shelby!</div>,
      target,
    );
  } else {
    console.warn('tried to load React and failed :(');
  }
});