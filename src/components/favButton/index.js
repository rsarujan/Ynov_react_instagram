import React from 'react'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

const favButton = () => {
  const history = useHistory()
  const handleFavorites = () => {
    history.push('/favorites')
  }
  return (
    <div>
      {/* favorite button */}
      <FavButton onClick={handleFavorites}>Favorites</FavButton>
    </div>
  )
}

//Same css for Logout button with the color red avec it's center
const FavButton = styled.button`
  cursor: pointer;
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

export default favButton
