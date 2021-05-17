import React from 'react';

const Spinner = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui big text loader">{props.message}</div>
    </div>
  );
};
// if a message is not provided.
Spinner.defaultProps = {
  message: 'Loading...'
};
export default Spinner;
