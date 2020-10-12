import React from 'react'
import { Button } from 'react-bootstrap'
import Footer from '../../components/footer/footer'
import { cardData } from '../../data/data'
import CardItem from '../../components/card/card.component'
import './home.styles.css'
import NavHome from '../../components/NavHome/navhome.component'
import AuthContextProvider from '../../contexts/AuthContext'

const Home = () => {
  return (
    <div>
      <AuthContextProvider>
        <NavHome />
      </AuthContextProvider>
      <section className="content">
        <div className="call-to-action-message">
          <h1> MAKE IT HAPPEN. SHOCK EVERYONE</h1>
          <p>
            Begin your fitness goals today. Set goals and smash them goals using
            goal tracker.
          </p>
          <Button className="btn-bg-color-cta shadow" type="button" block>
            {' '}
            JOIN NOW
          </Button>
        </div>
      </section>
      <section className="info-card">
        {cardData.map(({ width, image, id, info }) => (
          <CardItem width={width} img={image} key={id} info={info} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default Home
