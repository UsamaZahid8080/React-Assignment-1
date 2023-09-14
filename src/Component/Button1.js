import React from 'react'
import { Button } from 'react-bootstrap'
import "./Button1.css";
import "./Header.css"

function Button1(props) {
  let {children,style} = props;
  return (
    <>
    <Button style={style} className='buttonstyle ms-3'>{children}</Button>
    </>
  )
}

export default Button1