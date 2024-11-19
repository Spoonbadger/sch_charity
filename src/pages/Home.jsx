import { Button } from "react-bootstrap"
import { useNavigate } from 'react-router'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='home-container'>
        <div className="home-image">
          <div className="home-text">
            Welcome to Saltergate Children&apos;s Home, Ethiopia <img className="home-logo" src="/images/e13ec4ad-6e33-4063-85e9-9d4ef641cb0a.JPG"></img>
          </div>
          <Button onClick={() => navigate('/about')} className='btn btn-light' variant="outline-success">About Us</Button>
        </div>
    </div>
  )
}

export default Home