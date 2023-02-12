import React from 'react'
import style from './style.module.css'
function Button({onclick,data,name,value}) {
  return (
    <div>
      <button type="string" value={value} onClick={onclick} className={style[name]}>{data}</button>
    </div>
  )
}

export default Button
