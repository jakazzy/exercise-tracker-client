import React from 'react'
import DashboardNavbar from '../../components/dashboard-navbar/dashboard-navbar.component'
import { Card } from 'react-bootstrap'
import GymImage from '../../images/gymwoman.png'
import ProfileForm from '../../components/profile-form/profile-form.component'
const Profile = () => {
  return (
    <div style={{ width: '72rem', margin: '2rem auto' }}>
      <DashboardNavbar />
      <div
        className="card-groups"
        style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Card style={{ width: '27rem', height: '25rem', position: 'relative' }}>
          <Card.Img variant="top" src={GymImage} style={{ height: '6rem' }} />
          <Card.Img
            variant="top"
            src={GymImage}
            style={{
              height: '7rem',
              width: '7rem',
              borderRadius: '4rem',
              position: 'absolute',
              top: '2rem',
              left: '11rem'
            }}
          />
          <Card.Body>
            <Card.Title style={{ marginTop: '2rem' }}>Abena Flames</Card.Title>
            <Card.Text>
              This is a longer card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
              <hr />
              <div
                className="profile-description"
                style={{ display: 'flex', justifyContent: 'space-around' }}>
                <div className="height">
                  <p>height</p>
                  <p>5.3/F</p>
                </div>
                <div className="weight">
                  <p>weight</p>
                  <p>50/kg</p>
                </div>
                <div className="age">
                  <p>age</p>
                  <p>23/y</p>
                </div>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>

        <Card style={{ width: '40rem', height: '33rem' }}>
          <Card.Body>
            {/* <Card.Title>Card title</Card.Title>
            <Card.Text>
              This card has supporting text below as a natural lead-in to
              additional content.{' '}
            </Card.Text> */}
            <ProfileForm />
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Profile
