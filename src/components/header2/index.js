import React from 'react'
import styled from 'styled-components'
import Logout from '../headerLogout'

import { useHistory } from 'react-router-dom'
import HomeButton from '../homeButton'

const Header2 = () => {
  const history = useHistory()
  if (!localStorage.getItem('token')) {
    history.push('/')
  }

  return (
    <StyleNav>
      <StyleNavMenu>
        {/* Print logo of Instagram */}
        <StyleImg
          src='https://www.instagram.com/static/images/web/mobile_nav_type_logo-2x.png/1b47f9d0e595.png'
          alt=''
        />
        {/* Print logout button */}
        <Logout />
        {/* Print Home button */}
        <HomeButton />
      </StyleNavMenu>

      <br />
      <br />
      <br />
    </StyleNav>
  )
}
// CSS for nav
const StyleNav = styled.nav`
  background-color: #fff;
  border-bottom: 1px solid rgba(0, 0, 0, 0.0975);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
  -webkit-transition: height 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
  height: 77px;
`
// CSS for div into nav
const StyleNavMenu = styled.div`
  display: flex;
  flex-direction: row;
  height: 77px;
  width: 70%;
  margin: 0 auto;
  padding: 26px 40px;
  justify-content: space-between;
`
// CSS for img
const StyleImg = styled.img`
  width: 150px;
  height: 40px;
  position: absolute;
  left: 15px;
  right: 0px;
  object-fit: contain;
`

export default Header2
