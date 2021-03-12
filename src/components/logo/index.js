import React from 'react'
import styled from 'styled-components'

const Logo = () => {
  return (
    <div>
      <br></br>
      {/* Instagram Logo */}
      <Imgcss
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png'
        alt='logo'
      />
    </div>
  )
}
//CSS for Image
const Imgcss = styled.img`
  background: cover no-repeat;
  width: 175px;
  height: auto;
`
export default Logo
