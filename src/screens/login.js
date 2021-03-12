import React from 'react'
import styled from 'styled-components'

import { useHistory } from 'react-router-dom'

import Logo from '../components/logo'
import LoginFrom from '../components/loginForm'
import Footer from '../components/footer'

const Login = () => {
  const history = useHistory()

  if (localStorage.getItem('token')) {
    history.push('/home')
  }
  return (
    <div>
      {/* Login Form with Instagram Logo and the footer of Instagram */}
      {/* Print Logo */}
      <StyleLogo>
        <Logo />
      </StyleLogo>
      {/* Login Form */}
      <LoginFrom />
      {/* Print the footer */}
      <StyleFooter>
        <Footer />
      </StyleFooter>
    </div>
  )
}
const StyleLogo = styled.div`
  align: center;
  position: absolute;
  top: 30%;
  left: 40%;
  transform: translate(-30%, -30%);
`

const StyleFooter = styled.footer`
  position: absolute;
  top: 80%;
`

export default Login
