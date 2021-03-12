import React, { useEffect, useState } from 'react'
import Post from '../POst'
import { db } from './../../config/firebase'
import ImageUpload from '../imageUpload'

const BodyPost = () => {
  // const [posts, setPosts] = useState([
  //   {
  //     nickname: 'Ynov',
  //     avatar:
  //       'https://th.bing.com/th/id/OIP.UdrAcO81lhv7wml88XO1FAHaHa?pid=ImgDet&rs=1',
  //     imageUrl: 'https://www.ynov.com/wp-content/uploads/2021/02/campus_4.jpg',
  //     caption: 'Moving the community Test!'
  //   },
  //   {
  //     nickname: 'Titi',
  //     avatar:
  //       'https://image.shutterstock.com/image-vector/new-social-media-icon-user-260nw-1130097605.jpg',
  //     imageUrl:
  //       'https://cdn.searchenginejournal.com/wp-content/uploads/2019/02/instagram-engagement-1520x800.png',
  //     caption: 'I love Instagram <3'
  //   },
  //   {
  //     nickname: 'Ynov',
  //     avatar:
  //       'https://th.bing.com/th/id/OIP.UdrAcO81lhv7wml88XO1FAHaHa?pid=ImgDet&rs=1',
  //     imageUrl: 'https://www.ynov.com/wp-content/uploads/2021/02/campus_5.jpg',
  //     caption: 'On action'
  //   }
  // ])
  const [posts, setPosts] = useState([])
  var user = localStorage.getItem('username')

  useEffect(() => {
    //console.log(db)
    //use a firestore db to retrieve data for a post
    db.collection('posts')
      //timestamp : horadateur
      .orderBy('timestamp', 'desc')
      .onSnapshot(snapshot => {
        //every time a new post is added do this
        setPosts(
          snapshot.docs.map(doc => ({
            id: doc.id,
            post: doc.data()
          }))
        )
      })
  }, [])

  return (
    <div>
      {/* Je map chaque post */}
      {posts.map(({ post, id }) => (
        <Post
          key={id}
          postId={id}
          user={user}
          nickname={post.nickname}
          avatar={post.avatar}
          imageUrl={post.imageUrl}
          caption={post.caption}
        />
      ))}
      {/* Upload an image */}
      {user ? <ImageUpload username={user} /> : null}
    </div>
  )
}

export default BodyPost
