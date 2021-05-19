import React from 'react';
import cl from 'classnames';

function Button({ onClick, className, outline, children }) {
  return (
    <button
      onClick={onClick}
      className={cl('button', className, {
        'button--outline': outline,
      })}>
      {children}
    </button>
  );
}

export default Button;
