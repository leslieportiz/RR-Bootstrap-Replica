import { Navbar, Nav, Button, Container } from 'react-bootstrap'
import '../css/top-bar.css'
export default function TopBar() {
    return <Navbar bg="dark" expand="lg" >
        <Navbar.Brand style={{ margin: "5px 0 0 20px" }} href="#home">
            <img src="./assets/logo.jpg" alt="logo" style={{ verticalAlign: 'inherit', height: "100px", width: "300px", float: 'left' }} />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
        <Navbar.Collapse id="basic-navbar-nav" style={{ justifyContent: 'flex-end' }}>
            <Nav className="mr-auto">
            </Nav>
            <Nav>
                <Button variant="success" className='sign-up'>Sign Up</Button>{' '}
                <Nav.Link href="#LogIn" className='log-in'>Log In</Nav.Link>
            </Nav>
        </Navbar.Collapse>
    </Navbar>

}

