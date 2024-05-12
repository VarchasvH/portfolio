import portfolioImg from "../assets/img/project-portfolio.png";
import educationImg from "../assets/img/project-education.png";
import userImg from "../assets/img/project-user.png";
import garageImg from "../assets/img/project-garage.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const Projects = () => {
  const projects = [
    {
      title: "Portfolio website",
      description:
        "A beautiful portfolio website built with React.js and Bootstrap",
      imgUrl: { portfolioImg },
    },
    {
      title: "Landing Page ",
      description:
        "A next-gen landing page built using Next.js, Tailwind CSS and Acertinity UI",
      imgUrl: { educationImg },
    },
    {
      title: "The Garage",
      description:
        "A modern front-end car website for the garage built with Next.js ",
      imgUrl: { userImg },
    },
  ];
  return (
    <section
      className='project'
      id='projects'
      style={{
        background: "rgb(21,21,21)",
      }}
    >
      <Container>
        <h2>Projects</h2>
        <p>These are some projects that I have built with my skills.</p>
        <Row>
          <Col>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant='top' src={garageImg} />
              <Card.Body>
                <Card.Title
                  className=' text-center '
                  style={{ fontSize: "25px", color: "royalblue" }}
                >
                  {projects[2].title}
                </Card.Title>
                <Card.Text className='text-start' style={{ color: "black" }}>
                  {projects[2].description}
                </Card.Text>
                <Button variant='primary'>
                  <a
                    href='https://the-garage-ashy.vercel.app/'
                    style={{ color: "white" }}
                  >
                    Live Demo
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant='top' src={portfolioImg} />
              <Card.Body>
                <Card.Title
                  className=' text-center'
                  style={{ fontSize: "30px", color: "royalblue" }}
                >
                  {projects[0].title}
                </Card.Title>
                <Card.Text className='text-start' style={{ color: "black" }}>
                  {projects[0].description}
                </Card.Text>
                <Button variant='primary'>
                  <a href='/' style={{ color: "white" }}>
                    Live Demo
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "25rem" }}>
              <Card.Img variant='top' src={educationImg} />
              <Card.Body>
                <Card.Title
                  className=' text-center'
                  style={{ fontSize: "30px", color: "royalblue" }}
                >
                  {projects[1].title}
                </Card.Title>
                <Card.Text className='text-start' style={{ color: "black" }}>
                  {projects[1].description}
                </Card.Text>
                <Button variant='primary'>
                  <a
                    href='https://education-website-nextjs-mu.vercel.app/'
                    style={{ color: "white" }}
                  >
                    Live Demo
                  </a>
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
