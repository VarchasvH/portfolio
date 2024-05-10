import portfolioImg from "../assets/img/project-portfolio.png";
import educationImg from "../assets/img/project-education.png";
import userImg from "../assets/img/project-user.png";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
const Projects = () => {
  const projects = [
    {
      title: "Portfolio website",
      description:
        "A beautiful portfolio website built with React.js and Bootstrap",
      imgUrl: { portfolioImg },
    },
    {
      title: "Landing Page for an education website",
      description:
        "A next-gen landing page built using Next.js, Tailwind CSS and Acertinity UI",
      imgUrl: { educationImg },
    },
    {
      title: "User Management CRUD API",
      description:
        "An API written in Nodejs and built with express, jwt and cloudinary.",
      imgUrl: { userImg },
    },
  ];
  return (
    <section className='project' id='project'>
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>These are some projects that I have built with my skills.</p>
            <Tab.Container id='projects-tabs' defaultActiveKey='first'>
              <Nav variant='pills' className='flex-column'>
                <Nav.Item>
                  <Nav.Link eventKey='first'>Tab 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='second'>Tab 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey='third'>Tab 3</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey='first'>
                  <Row>
                    {projects.map((project) => (
                      <Col key={project.title} md={4}>
                        <div className='project-bx'>
                          <img
                            src={project.imgUrl.portfolioImg}
                            alt={project.title}
                          />
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                        </div>
                      </Col>
                    ))}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
