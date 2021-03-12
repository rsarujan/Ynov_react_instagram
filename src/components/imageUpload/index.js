import React, { useState } from 'react'
import styled from 'styled-components'
import { storage, db } from '../../config/firebase'
import firebase from 'firebase'

// eslint-disable-next-line react/prop-types
const ImageUpload = ({ username }) => {
  const [caption, setCaption] = useState('')
  const [image, setImage] = useState(null)
  const [progress, setProgress] = useState(0)
  // eslint-disable-next-line no-unused-vars
  const [avatar, setAvatar] = useState('')

  const handleChange = e => {
    if (e.target.files[0]) {
      setImage(e.target.files[0])
    }
  }

  const handleUpload = () => {
    const uploadTask = storage.ref(`images/${image.name}`).put(image)
    uploadTask.on(
      'state_changed',
      snapshot => {
        //progress bar ...
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        )
        setProgress(progress)
      },
      error => {
        //error...
        console.log(error)
        alert(error.message)
      },
      () => {
        //when the progress bar is at 100 % then store data into firestore db
        storage
          .ref('images')
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            //post image into db into posts collection
            db.collection('posts').add({
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              caption: caption,
              imageUrl: url,
              nickname: username,
              // avatar: profil image
              avatar:
                'https://i.pinimg.com/736x/3f/94/70/3f9470b34a8e3f526dbdb022f9f19cf7.jpg'
            })
            setProgress(0)
            setCaption('')
            setImage(null)
            setAvatar('')
          })
      }
    )
  }
  return (
    <StyleDivImageUpload>
      {/* Style for progress bar */}
      <StyleImageUploadProgress value={progress} max='100' />
      {/* Input bar for the text of a caption */}
      <input
        type='text'
        placeholder='Enter a capture...'
        onChange={event => setCaption(event.target.value)}
        value={caption}
      />
      {/* Insert a file */}
      <input type='file' onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
    </StyleDivImageUpload>
  )
}
// CSS for div
const StyleDivImageUpload = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;
  margin-bottom: 10px;
`
// CSS for progress bar
const StyleImageUploadProgress = styled.progress`
  width: 100%;
`

export default ImageUpload
