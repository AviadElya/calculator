import React, { useState } from 'react'
// import Delet from '../function/Delet/index'
// import Edit from '../function/Edit/index'
import Calculator from '../function/Calculator'
import Button from '../components/Button'
import { FiDelete } from 'react-icons/fi'
import { RiDeleteBin2Line } from 'react-icons/ri'
import style from './style.module.css'

function Main() {
  const [arrangArray, setArrangArray] = useState("")
  const [solution, setSolution] = useState('')

  //to add anumber or func to string arrangArray
  const sever = (e) => {
    setArrangArray(arrangArray+e.target.value)
  }
  //=to process the data and return answer
  const equal = (e) => {
    console.log(arrangArray);
    setSolution(`=${Calculator(arrangArray)}`)
  }
  //function for delet all button
  function deletAll(){setArrangArray("");setSolution("")}


  return (
    <div className={style.main}>
      <table>
        <tbody>
          <tr>
            <td> <Button name="func" value={"+"} onclick={sever} data="+" /></td>
            <td> <Button name="func" value={"*"} onclick={sever} data="*" /></td>
            <td><Button name="func" value={"-"} onclick={sever} data="-" /></td>
            <td><Button name="func" value={"/"} onclick={sever} data="/" /></td>
          </tr>
          <tr>
            <td>  <Button name="number" value={9} onclick={sever} data="9" /></td>
            <td>   <Button name="number" value={8} onclick={sever} data="8" /></td>
            <td>  <Button name="number" value={7} onclick={sever} data="7" /></td>
            <td><Button name="func" onclick={()=>{setArrangArray(arrangArray.slice(0,-1))}} data={<FiDelete />} /></td>
          </tr>
          <tr>
            <td>    <Button name="number" value={6} onclick={sever} data="6" /></td>
            <td>   <Button name="number" value={5} onclick={sever} data="5" /></td>
            <td>   <Button name="number" value={4} onclick={sever} data="4" /></td>
            <td>  <Button name="=" value={"="} onclick={equal} data="=" /></td>
          </tr>
          <tr>
            <td>    <Button name="number" value={3} onclick={sever} data="3" /></td>
            <td>   <Button name="number" value={2} onclick={sever} data="2" /></td>
            <td>   <Button name="number" value={1} onclick={sever} data="1" /></td>
            <td>  <Button name="funcDeletAll" onclick={deletAll} data={<RiDeleteBin2Line />} /></td>
          </tr>
          <tr>
            <td>    <Button name="number" value={0} onclick={sever} data="0" /></td>
            <td>   <Button name="." value={"."} onclick={sever} data="." /></td>
          </tr>
        </tbody>
      </table>
      {arrangArray}{solution}
    </div>
  )
}

export default Main
