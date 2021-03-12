import React from 'react'
import Header from '../components/header'
import BodyPost from '../components/bodyPost'

const Home = () => {
  //console.log('Props into Home.js', props)
  //console.log('username', localStorage.getItem('username'))

  if (!localStorage.getItem('token')) {
    history.push('/')
  }

  return (
    <div>
      {/* Print the header and the page home (bodypost wich call post.js) */}
      <Header />

      <BodyPost />
    </div>
  )
}

export default Home
