import React from 'react'
import style from './style.module.css'

function Screen({solution,arrangArray}) {
  return (
    <div className={style.Screen} >
      {arrangArray}{solution}
    </div>
  )
}

export default Screen
