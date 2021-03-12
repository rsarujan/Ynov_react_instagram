import React, { useState } from 'react'
import Header2 from '../components/header2'

import styled from 'styled-components'

const Favorites = () => {
  // eslint-disable-next-line no-unused-vars
  const [fav, setFav] = useState(JSON.parse(localStorage.getItem('favorite')))

  return (
    <div>
      {/* Print the header with Home button and logout button */}
      <Header2 />
      <div>
        <strong>Liste des favories</strong>
      </div>
      <br />
      {/* Map favorites localStorage to get back all data which I liked */}
      {fav
        ? fav.map((post, id) => (
            <StylePost key={id}>
              <header>
                <StylePostUser>
                  <StylePostUserAvatar>
                    <StylePostUserAvatarImg
                      src={post.avatar}
                      alt={post.nickname}
                    />
                  </StylePostUserAvatar>
                  <StylePostUserNicname>
                    <span>{post.nickname}</span>
                  </StylePostUserNicname>
                </StylePostUser>
              </header>
              <div>
                <StylePostImageBg>
                  <StylePostImageImg alt={post.caption} src={post.imageUrl} />
                </StylePostImageBg>
              </div>

              <StylePostCaption>
                <StylePostCaptionStrong>
                  {post.nickname}{' '}
                </StylePostCaptionStrong>
                {post.caption}
              </StylePostCaption>
            </StylePost>
          ))
        : null}
    </div>
  )
}
// Same CSS as POst.js without Button to like, comments
const StylePost = styled.div`
  border-radius: 3px;
  border: 1px solid #e6e6e6;
  background-color: #fff;
  margin-bottom: 30px;
  margin-left: 2%;
  margin-right: 2%;
  padding: 10px;
`
const StylePostUser = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
`
const StylePostUserAvatar = styled.div`
  width: 30px;
  height: 30px;
`
const StylePostUserAvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  margin-right: 10px;
`
const StylePostUserNicname = styled.div`
  margin-left: 12px;
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
  padding: 12px 12px 0 0;
  margin-top: -6px;
`
const StylePostImageBg = styled.div`
  background-color: #efefef;
`
const StylePostImageImg = styled.img`
  //display: block;
  width: 100%;
  object-fit: contain;
`
const StylePostCaption = styled.div`
  padding: 16px 16px;
  margin-left: -100px;
`
const StylePostCaptionStrong = styled.strong`
  font-family: 'PT Sans', sans-serif;
  font-weight: bold;
`

export default Favorites
