import {Button, Container, Nav, Navbar, NavDropdown, Popover, OverlayTrigger} from 'react-bootstrap';
import './navbar.scss';
import { IconContext } from "react-icons";
import { FaBloggerB, FaDotCircle, FaRegSun, FaSearch} from "react-icons/fa";
import 'react-dropdown/style.css';
import Card from 'react-bootstrap/Card';



const popover = (
  <Popover id="popover-basic">
    <Popover.Header as="h3">Search everthing</Popover.Header>
    <Popover.Body>
      Bu qism <strong>hali</strong> yakunlanmagan!
    </Popover.Body>
  </Popover>
);

const Example = () => (
  <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
    <Button variant="dark"><IconContext.Provider value={{ size: "1.7em", className: "global-class-name"}}>
                <div>
                  <FaSearch />
                </div>
              </IconContext.Provider></Button>
  </OverlayTrigger>
);

const ThreeDots = () => (
  <IconContext.Provider value={{ size: "0.4em", className: "global-class-name"}}>
                <div>
                  <FaDotCircle /> <FaDotCircle /> <FaDotCircle />
                </div>
              </IconContext.Provider>
)

const SunTheme = () => (
  <IconContext.Provider value={{color:"orange", size: "1em", className: "global-class-name"}}>
  <div>
    <FaRegSun />
   </div>
</IconContext.Provider>
)

function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className="align">
        <Navbar.Brand href="#home"><IconContext.Provider value={{color:"#0ff", size: "1em", className: "global-class-name"}}>
                <div>
                  <FaBloggerB /> blogzine
                </div>
              </IconContext.Provider></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="align">
          <Nav className="me-auto"></Nav>
          <Nav>
          <NavDropdown  title="Home" id="collasible-nav-dropdown" autoClose="outside">
              <NavDropdown.Item href="#action/3.1">Home Default</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Home Lazy Load</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Magaine</NavDropdown.Item>
              {/* <NavDropdown.Divider /> */}
              <NavDropdown.Item href="#action/3.4">Blah blah blah blah</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.5">Blah blah blah blah</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.6">blaah</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.7">Blah blah blah blah</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.8">Blah blah blah blah</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.9">Blah blah blah blah</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="Pages" id="collasible-nav-dropdown" autoClose="outside">
              <NavDropdown.Item href="#action/1.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/1.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/1.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/1.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown  title="Post" id="collasible-nav-dropdown" autoClose="outside">
              <NavDropdown.Item href="#action/2.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/2.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/2.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/2.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            
            
            <NavDropdown title="Lifesytle" id="collasible-nav-dropdown" autoClose="outside">
              
              <NavDropdown.Item href="#action/3.1" className="d-flex flex-row">
              <Card style={{ width: '20rem' }} className='bgdark'>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Link href="#" className='card-link1'>Card Link</Card.Link>
        <br />
        <Card.Link href="#" className='card-link2'>Another Link</Card.Link>
        <Card.Text>Blah blah</Card.Text>
      </Card.Body>
    </Card>
              </NavDropdown.Item>
              
              <NavDropdown.Item href="#action/3.2">
              <Card style={{ width: '20rem' }} className='bgdark'>
              <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Link href="#" className='card-link1'>Card Link</Card.Link><br />
        <Card.Link href="#" className='card-link2'>Another Link</Card.Link>
        <Card.Text>Blah blah</Card.Text>
      </Card.Body>
    </Card>
              </NavDropdown.Item>
              
            </NavDropdown>
           
            <Nav.Link href="#deets">Dashboard</Nav.Link>
          
            
            
          </Nav>
        </Navbar.Collapse>
       
          <Nav className='flex'>
          <NavDropdown  title={<SunTheme />} id="collasible-nav-dropdown" autoClose="outside">
              <NavDropdown.Item href="#action/4.2">
                Light theme
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/4.3">Dark theme</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown   title={<ThreeDots />} id="collasible-nav-dropdown" autoClose="outside">
              <NavDropdown.Item href="#action/5.1">About</NavDropdown.Item>
              <NavDropdown.Item href="#action/5.2">
                Author
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/5.3">Blah blah</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#deets"> <Button variant="danger">Subscribe</Button>{' '}</Nav.Link> 
            <Nav.Link href="#deets"><Example /></Nav.Link>
          </Nav>
       
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;