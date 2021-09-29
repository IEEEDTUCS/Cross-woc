import React from 'react';
import {Navbar, Nav, Container} from 'react-bootstrap';
import '../styles/Navigation.css'

function Navigation() {
    return (
        <>
         <Navbar  collpseOnSelect fixed='top' expand='sm' variant='light'>
             <Container>
                <Navbar.Brand href="/">CrossWoc</Navbar.Brand>
                 <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                 <Navbar.Collapse id='responsive-navbar-nav' className='justify-content-end'>
                     <Nav>
                        <Nav.Link href='/into'>ABOUT</Nav.Link>
                        <Nav.Link href='/schedule'>SCHEDULE</Nav.Link>
                        <Nav.Link href='/project'>PROJECTS</Nav.Link>
                        <Nav.Link href='/leaderboard'>LEADERBOARD</Nav.Link>                        
                        <Nav.Link href='#sponsors'>SPONSORS</Nav.Link>                        
                        <Nav.Link href='/faq'>FAQ</Nav.Link>                        
                        <Nav.Link href='/team'>TEAM</Nav.Link>                                                   <Nav.Link href='#contact'>CONTACT</Nav.Link>                       
                     </Nav>
                 </Navbar.Collapse>
             </Container>
         </Navbar> 
         <br></br> 
         <br></br>
        </>
    )
}

export default Navigation;
