import React from 'react'
import style from './style.module.css'
function Button({onclick,data,name,styles,value}) {
  return (
    <div>
      <button type="string" value={value} onClick={onclick} name={name} className={style[styles]}>{data}</button>
    </div>
  )
}

export default Button
