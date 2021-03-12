import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const HeaderLogout = () => {
  const history = useHistory()
  const isToken = localStorage.getItem('token')

  const handleLogout = () => {
    //delete all localStorage when I logout and push it into login page
    localStorage.clear()
    history.push('/')
  }
  return (
    <div>
      {/* if I have a tocken, then print the button logout else return null */}
      {isToken ? (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      ) : null}
    </div>
  )
}
//CSS for Logout Button
const LogoutButton = styled.button`
  cursor: pointer;
  padding: 0 8px;
  background: #3897f0;
  border: 1px solid #3897f0;
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
  display: inline-block;
  float: right;
  font-size: 20px;
  position: absolute;
  bottom: 15px;
  right: 20px;
  height: 40px;
  width: 100px;
`

export default HeaderLogout
