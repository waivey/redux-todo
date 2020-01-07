import React from 'react';

const Button = ({ active, onClick, children}) => (
<button onClick={onClick} disabled={active}>{children}</button>
)

export default Button