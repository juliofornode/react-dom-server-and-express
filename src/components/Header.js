import React from 'react';

//We destructured props.message into message as parameter and also inside brackets.
const Header = ({message}) => {
  return (
    <div className="Header">
      <h3>{message}</h3>
    </div>
  );
};

Header.propTypes = {
  message: React.PropTypes.string
};

Header.defaultProps = {
  message: 'this is the default content of the message field.'
};

export default Header;
