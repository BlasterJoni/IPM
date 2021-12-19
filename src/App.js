import { Navbar, Nav, Container, Image, Button } from 'react-bootstrap';
import TeamMember from "./TeamMember"
import AssignmentItem from './AssignmentItem';
import AssignmentItemRaw from './AssignmentItemRaw';
import './App.css';
import assignments from './assignments';
import flowmap from "./flowmapWithBG.png"
import computational from "./computational.png"
import icon from "./icon.png";
import logo from "./logo.png";
import flashcan from "./flashcan.png";
import heuristic from "./heuristic.png";

function App() {

  return (
    <div className="App">
      <div id="home">
        <Navbar expand="lg" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Group 18</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
              <Nav className="ml-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#assignments">Assignments</Nav.Link>
                <Nav.Link href="#project">Project</Nav.Link>
                <Nav.Link href="#team">The Team</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div id="hero" className="d-flex flex-column justify-content-center align-items-center">
          <h1>Welcome to Group 18's Page</h1>
          <h2>IPM 21/22</h2>
        </div>
      </div>
      <div id="assignments" className="p-4">
        <h1>Assignments</h1>
        <div className="d-flex flex-wrap flex-column align-items-center">
          {assignments.map((assig, index) => {
            return (<AssignmentItem id={index} key={index} assignment={assig} />)
          })}
        </div>
      </div>
      <div id="project" className="p-4">
        <h1>Project</h1>
        <div className="d-flex flex-wrap flex-column align-items-center">
          <AssignmentItemRaw forDark id={0} title={"Stage 1: Project proposal"} resume={""} image={logo}>
            <div className="text-center" style={{ width: "100%" }}>
              <iframe src={process.env.PUBLIC_URL + "/project/G_18_stage1.pdf"} style={{ width: "100%", height:"70vh" }} ></iframe>
            </div>
          </AssignmentItemRaw>
          <AssignmentItemRaw forDark id={1} title={"Stage 2: User and task analysis"} resume={""} image={icon}>
            <div className="text-center" style={{ width: "100%" }}>
              <iframe src={process.env.PUBLIC_URL + "/project/G_18_stage2.pdf"} style={{ width: "100%", height:"70vh" }} ></iframe>
            </div>
          </AssignmentItemRaw>
          <AssignmentItemRaw forDark id={2} title={"Stage 3: 1'st prototype"} resume={""} image={flowmap}>
            <div className="text-center" style={{ width: "100%" }}>
              <iframe src={process.env.PUBLIC_URL + "/project/G_18_stage3.pdf"} style={{ width: "100%", height:"70vh" }} ></iframe>
              <a target="_blank" href="https://marvelapp.com/prototype/d0g16jb"><Button variant="primary" className="mt-3 me-1">Go to Prototype</Button></a>
              <a target="_blank" href="https://userflows.marvelapp.com/d0g16jb"><Button variant="primary" className="mt-3 ms-1">Go to UserFlow</Button></a>
            </div>
          </AssignmentItemRaw>
          <AssignmentItemRaw forDark id={3} title={"Stage 4: Functional prototype"} resume={""} image={computational}>
            <div className="text-center" style={{ width: "100%" }}>
              <iframe src={process.env.PUBLIC_URL + "/project/G_18_stage4.pdf"} style={{ width: "100%", height:"70vh" }} ></iframe>
              <a target="_blank" href="https://github.com/BlasterJoni/ipm_navegante"><Button variant="primary" className="mt-3 me-1">Go to the Project's Github</Button></a>
              <a target="_blank" href="https://github.com/BlasterJoni/ipm_navegante/releases/download/v1.0.1/navegante.apk"><Button variant="primary" className="mt-3 ms-1">Download APP</Button></a>
            </div>
          </AssignmentItemRaw>
          <AssignmentItemRaw forDark id={4} title={"Stage 5: Heuristic Evaluation"} resume={""} image={flashcan}>
            <div className="text-center" style={{ width: "100%" }}>
              <iframe src={process.env.PUBLIC_URL + "/project/G_18_stage5.pdf"} style={{ width: "100%", height:"70vh" }} ></iframe>
            </div>
          </AssignmentItemRaw>
          <AssignmentItemRaw forDark id={5} title={"Stage 6: Evaluation Results"} resume={""} image={heuristic}>
            <div className="text-center" style={{ width: "100%" }}>
              <iframe src={process.env.PUBLIC_URL + "/project/G_18_stage6.pdf"} style={{ width: "100%", height:"70vh" }} ></iframe>
            </div>
          </AssignmentItemRaw>
        </div>
      </div>
      <div id="team" className="p-4">
        <h1>The Team</h1>
        <div className="d-flex flex-wrap flex-row justify-content-around pt-4 pb-4">
          <TeamMember image={process.env.PUBLIC_URL + "/ines.jpeg"} name="Inês Simões" number="55584" />
          <TeamMember image={process.env.PUBLIC_URL +"/arvana.jpeg"} name="João Arvana" number="54982" />
          <TeamMember image={process.env.PUBLIC_URL + "/felix.jpeg"} name="Rodrigo Félix" number="55268" />
        </div>
      </div>
      <div id="footer" className="p-4">
        <h1>Group 18's Page</h1>
        <h2>IPM 21/22</h2>
        <span><a href="#home">Home</a> | <a href="#assignments">Assignments</a> | <a href="#project">Project</a> | <a href="#team">The Team</a></span>
      </div>
    </div>
  );
}

export default App;
