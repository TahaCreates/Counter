interface Props{
className: string;
}

function Button({className}) {
    return <button type="button" className={`btn ${className}`} >Say HI</button>;
  }
  
  export default Button;