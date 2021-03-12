import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const homeButton = () => {
  const history = useHistory()
  const handleHome = () => {
    history.push('/home')
  }
  return (
    <div>
      {/* Home Button */}
      <HomeButton onClick={handleHome}>Home</HomeButton>
    </div>
  )
}
//Same CSS as Favorites Button but for Home button
const HomeButton = styled.button`
  cursor: pointer;
  //width: 110%;
  padding: 0 8px;
  background: red;
  border: 1px solid red;
  color: #fff;
  border-radius: 3px;
  font-weight: 600;
  font-size: 14px;
  height: 28px;
  line-height: 26px;
  outline: none;
  white-space: nowrap;
  font: inherit;
  vertical-align: baseline;
  //position: relative;
  display: inline-block;
  font-size: 20px;
  position: absolute;
  bottom: 15px;
  right: 30px;
  height: 40px;
  width: 90px;
  background-color: red;
  float: right;
  margin-right: 90px;
`

export default homeButton
