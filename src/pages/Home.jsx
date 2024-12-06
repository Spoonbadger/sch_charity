import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='home-container'>
      <div className='bg-images-wrapper'>
        <div className='home-bg-image'>
          Welcome
        </div>
        <div className="home-image">
          <div className="home-text arapey-regular">
            Welcome to <span style={{ color: 'rgba(150, 250, 150, 0.6)' }}>Saltergate Children&apos;s Home,</span> Ethiopia
            <img className="home-logo" src="/images/e13ec4ad-6e33-4063-85e9-9d4ef641cb0a.JPG"></img>
          </div>
          <Button onClick={() => navigate('/about')} className='btn btn-light about-us-button' variant="outline-success">About Us</Button>
        </div>
        <img className='eman-image' src="/images/ae614431-b975-4d1b-b76d-c278bb2a5c7d.JPG"></img>
      </div>
    </div>
  )
}

export default Home