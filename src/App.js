import { Navbar, Nav, Container } from 'react-bootstrap';
import TeamMember from "./TeamMember"
import AssignmentItem from './AssignmentItem';
import './App.css';
import arvana from "./arvana.jpeg"
import ines from "./ines.jpeg"
import felix from "./felix.jpeg"

function App() {

  return (
    <div className="App">
      <div id="hero">
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Group 18</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#assignments">Assignments</Nav.Link>
                <Nav.Link href="#team">The Team</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="home" className="d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome to Group 18's Page</h1>
          <h2>IPM 21/22</h2>
        </div>
      </div>
      <div id="assignments" className="p-4">
        <h1>Assignments</h1>
        <AssignmentItem id={0} title="Assignment 1 - Inês Simões" image="https://via.placeholder.com/500x250" />
        <AssignmentItem id={1} title="Assignment 1 - João Arvana" image="https://via.placeholder.com/500x250" />
        <AssignmentItem id={2} title="Assignment 1 - Rodrigo Félix" image="https://via.placeholder.com/500x250" />
        <AssignmentItem id={3} title="Assignment 2" image="https://via.placeholder.com/500x250" />
      </div>
      <div id="team" className="p-4">
        <h1>The Team</h1>
        <div className="d-flex flex-wrap flex-row justify-content-around pt-4 pb-4">
          <TeamMember image={ines} name="Inês Simões" number="55584" />
          <TeamMember image={arvana} name="João Arvana" number="54982" />
          <TeamMember image={felix} name="Rodrigo Félix" number="55268" />
        </div>
      </div>
      <div id="footer" className="p-4">
        <h1>Group 18's Page</h1>
        <h2>IPM 21/22</h2>
        <span><a href="#home">Home</a> | <a href="#assignments">Assignments</a> | <a href="#team">The Team</a></span>
      </div>
    </div>
  );
}

export default App;
