import { Container, Nav, Navbar } from "react-bootstrap"
import { Link, useLocation, useNavigate } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.min.css'
import '../static/fonts.css'


const NavbarSCH = () => {
  const location = useLocation()
  console.log('location.pathname check:', location.pathname)
  const navigate = useNavigate()


  return (
    <Navbar className='navbar-main' collapseOnSelect expand='lg' fixed='sticky' bg='light' data-bs-theme="light">
      <Container>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <img onClick={() => navigate('/') } className='navbar-logo' src="/images/e13ec4ad-6e33-4063-85e9-9d4ef641cb0a.JPG"></img>
        <Nav className='ms-auto'>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/" state={{ from: location.pathname }}>Home</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/about" state={{ from: location.pathname }}>About</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/donate" state={{ from: location.pathname }}>Donate</Link>
          </Nav.Link>
          <Nav.Link href="#" as="span">
            <Link className='navbar-link inter-regular' to="/contact" state={{ from: location.pathname }}>Contact Us</Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarSCH