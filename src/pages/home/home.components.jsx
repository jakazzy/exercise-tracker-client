import React, { useEffect } from 'react'
import gsap from 'gsap'
import { Button } from 'react-bootstrap'
import Footer from '../../components/footer/footer'
import { cardData } from '../../data/data'
import CardItem from '../../components/card/card.component'
import './home.styles.css'
import NavHome from '../../components/NavHome/navhome.component'
import AuthContextProvider from '../../contexts/AuthContext'
import IntroOverlay from '../../components/intro-overlay/introOverlay.component'

import Train from '../../images/train.svg'
const Home = () => {
  useEffect(() => {
    // gsap.to('.top', { duration: 0, visibility: 'visible' })

    function intro() {
      const tl = gsap.timeline({ repeat: 2 })
      tl.from('.wlcm-msg', {
        duration: 0.5,
        autoAlpha: 0.5,
        // y: 100,
        delay: 0.2,
        // skewX: 7,
        ease: 'Linear.easeNone'
      })
        .to('.wlcm-msg', {
          autoAlpha: 0,
          ease: 'Linear.easeNone'
        })
        .to('.wlcm-msg', { display: 'none' })
      return tl
    }

    function middle() {
      const tl = gsap.timeline()
      tl.from('.top', { delay: 2 })
        .to('.top', { delay: -2, visibility: 'visible', ease: 'back' })
        .to(
          '.intro-overlay',
          {
            duration: 2,
            height: '0%'
            // y: 100,
            // ease: 'expo.inOut'
            // zIndex: 0
          },
          { height: '100%', ease: 'power4.easeInOut' }
        )
        .to(
          '.train-image',
          {
            visibility: 'visible',
            ease: 'power4.easeInOut',
            duration: 0.5,
            scale: 1,
            y: -400
            // x: 100
          },
          '-=2'
        )
        .to(
          '.train-image',
          {
            ease: 'power4.easeInOut',
            duration: 2,
            scale: 0.3,
            y: -128,
            position: 'absolute',
            x: 778,
            borderRadius: '30rem'
          },
          '-=1'
        )
        .to(
          '.main-content',
          { visibility: 'visible', ease: 'slow(0.7, 0.1, false)', duration: 1 },
          '-=0.5'
        )
      return tl
    }

    const masterTimeline = gsap.timeline()

    masterTimeline.add(intro()).add(middle())
  }, [])
  return (
    <div style={{ position: 'relative' }}>
      <AuthContextProvider>
        <NavHome />
      </AuthContextProvider>
      <IntroOverlay />
      <div className="wlcm-msg">
        <h4>Let's make the goal a reality</h4>
      </div>
      <div
        className="train-image"
        style={{
          backgroundColor: '#dcfbfd',
          visibility: 'hidden'
          // borderRadius: '30rem'
        }}>
        <img
          src={Train}
          alt="keep fit"
          // style={{ backgroundColor: '#52b9c0' }}
        />
      </div>
      <section className="content main-content">
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
      <section className="info-card main-content">
        {cardData.map(({ width, image, id, info }) => (
          <CardItem width={width} img={image} key={id} info={info} />
        ))}
      </section>
      <Footer />
    </div>
  )
}

export default Home
