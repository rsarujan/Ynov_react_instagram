import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import white from './white.png'
import red from './red.png'

import { db } from '../../config/firebase'
import firebase from 'firebase'

//get props
// eslint-disable-next-line react/prop-types
const Post = ({ postId, user, nickname, avatar, imageUrl, caption }) => {
  const [comments, setComments] = useState([])
  const [comment, setComment] = useState('')

  //icone never use but setIcone it's use
  // eslint-disable-next-line no-unused-vars
  const [icone, setIcone] = useState()

  // Map my db for get all data of instagram posts
  useEffect(() => {
    var unsubscribe
    if (postId) {
      unsubscribe = db
        .collection('posts')
        .doc(postId)
        .collection('comments')
        .orderBy('timestamp', 'desc')
        .onSnapshot(snapshot => {
          // set comments
          setComments(snapshot.docs.map(doc => doc.data()))
        })
    }
    return () => {
      unsubscribe()
    }
  }, [postId])

  // Get the color of a like (red or white)
  // Default white
  const getIcone = post => {
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []
    const isPresent = currentFavorite.find(e => e.postId === post.postId)

    if (isPresent) {
      return red
    } else {
      return white
    }
  }

  //Add a post into Favorite (localStorage)
  const addInStorage = post => {
    const currentFavorite = localStorage.getItem('favorite')
      ? JSON.parse(localStorage.getItem('favorite'))
      : []

    const isPresent = currentFavorite.find(e => e.postId === post.postId)
    //is not present do that
    if (!isPresent) {
      // add the post into localstorage and change the color red (to say "I like it")
      currentFavorite.push(post)
      localStorage.setItem('favorite', JSON.stringify(currentFavorite))
      setIcone(red)
    }
    //if it's present so do that
    else {
      //I did a filter to sortout the item
      const curr = currentFavorite.filter(
        e => e.postId !== isPresent.postId && e.user === isPresent.user
      )
      //set the element into localstorage and change the color
      localStorage.setItem('favorite', JSON.stringify(curr))
      setIcone(white)
    }
  }
  // Set the comment into db (into comments collection)
  const postComment = event => {
    event.preventDefault()
    db.collection('posts').doc(postId).collection('comments').add({
      text: comment,
      nickname: user,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setComment('')
  }

  return (
    // Generic form to add a form with the nickname, the avatar (profile photo)
    // the photo, the comment and also the like icon
    <StylePost>
      <header>
        {/* Print the nickname and the profil photo of a post */}
        <StylePostUser>
          <StylePostUserAvatar>
            <StylePostUserAvatarImg src={avatar} alt={nickname} />
          </StylePostUserAvatar>
          <StylePostUserNicname>
            <span>{nickname}</span>
          </StylePostUserNicname>
        </StylePostUser>
      </header>
      <div>
        {/* Print the photo and the comment of post */}
        <StylePostImageBg>
          <StylePostImageImg alt={caption} src={imageUrl} />
        </StylePostImageBg>
      </div>
      {/* Add into favorites (like button)*/}
      <ButtonImg
        src={getIcone({
          postId,
          nickname,
          imageUrl,
          caption,
          user,
          avatar
        })}
        // pass all data to store into favorites then use it to print into /favorites
        onClick={() =>
          addInStorage({ postId, nickname, imageUrl, caption, user, avatar })
        }
      ></ButtonImg>
      {/* 1 comment of the post */}
      <StylePostCaption>
        <StylePostCaptionStrong>{nickname}</StylePostCaptionStrong> {caption}
        <StylePostComment>
          {comments.map((comment, id) => (
            <div key={id}>
              <strong>{comment.nickname} </strong>
              {comment.text}
            </div>
          ))}
        </StylePostComment>
      </StylePostCaption>
      {/* Add a comment by user or other user */}
      {user && (
        <StylePostCommentBox>
          <StylePostInput
            type='text'
            placeholder='Add a comment...'
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
          <StylePostButton
            disabled={!comment}
            type='submit'
            onClick={postComment}
          >
            Post
          </StylePostButton>
        </StylePostCommentBox>
      )}
    </StylePost>
  )
}

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
const StylePostComment = styled.div`
  padding: 20px;
  margin-left: 80px;
  flex-direction: column;
  text-align: left;
`

const StylePostCommentBox = styled.form`
  display: flex;
  margin-bottom: 1px;
`
const StylePostInput = styled.input`
  flex: 1;
  border: none;
  padding: 10px;
  border-top: 1px solid lightgray;
`
const StylePostButton = styled.button`
  flex: 0;
  border: none;
  color: #6082a3;
`

const ButtonImg = styled.img`
  width: 40px;
  height: 40px;
  float: left;
  margin-right: 1px;
  align: left;
`
export default Post
