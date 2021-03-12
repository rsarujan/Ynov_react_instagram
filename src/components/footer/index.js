import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <footer>
      {/* A generic footer wich I added some css */}
      <StyleContainer>
        <StyleNav>
          <StyleNavUl>
            <StyleNavUlLi>
              <StyleNavUlLiA href='https://about.instagram.com/'>
                About Us
              </StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleNavUlLiA href='https://help.instagram.com/'>
                Help
              </StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleNavUlLiA href=''>Blog</StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleNavUlLiA href=''>Press</StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleNavUlLiA href='https://www.instagram.com/developer/'>
                Api
              </StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleNavUlLiA href=''>Jobs</StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleNavUlLiA href=''>Privacy</StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleNavUlLiA href=''>Terms</StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleNavUlLiA href=''>Directory</StyleNavUlLiA>
            </StyleNavUlLi>
            <StyleNavUlLi>
              <StyleSpan className='language'>
                Language
                <select>
                  <option value='#'>English</option>
                  <option value='#'>French</option>
                </select>
              </StyleSpan>
            </StyleNavUlLi>
          </StyleNavUl>
        </StyleNav>
        {/* Yes It's a Ynov project so Projet Ynov */}
        {/*  &copy : copyright letter */}
        <StyleSpan>&copy; 2021 Instagram - Projet Ynov</StyleSpan>
      </StyleContainer>
    </footer>
  )
}
//CSS for a div
const StyleContainer = styled.div`
  background-color: #fafafa;
  order: 5;
  padding: 0 20px;
  background: #fafafa;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #fafafa;
  justify-content: space-between;
  padding: 38px 0;
  max-width: 935px;
  font-size: 12px;
  font-weight: 600;
  margin: 0 auto;
  text-transform: uppercase;
  width: 100%;
`
//CSS for a nav
const StyleNav = styled.nav`
  max-width: 100%;
`
//CSS for a ul into nav
const StyleNavUl = styled.ul`
  margin-right: 16px;
  margin-bottom: 3px;
  flex-grow: 1;
`
//CSS for a li into nav and ul
const StyleNavUlLi = styled.li`
  display: inline-block;
  margin-right: 13px;
  margin-bottom: 7px;
`
//CSS for a "a" into nav, ul, li
const StyleNavUlLiA = styled.a`
  color: #003569;
  text-decoration: none;
`
//CSS for a span
const StyleSpan = styled.span`
  color: #999;
`
export default Footer
