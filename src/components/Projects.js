import crypticImg from "../assets/img/crypticImg.png";
import educationImg from "../assets/img/project-education.png";
import brewistaImg from "../assets/img/brewistaImg.png";
import userImg from "../assets/img/project-user.png";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
const Projects = () => {
  const projects = [
    {
      title: "Cryptic",
      description:
        "A beautiful website to keep track of all your cryptocurrencies. Built with React, Material UI",
      imgUrl: { crypticImg },
    },
    {
      title: "Landing Page ",
      description:
        "A next-gen landing page built using Next.js, Tailwind CSS and Acertinity UI",
      imgUrl: { educationImg },
    },
    {
      title: "Brewista",
      description:
        "A beautiful static website for a Coffee company built using Next.js and Tailwind CSS",
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
              <Card.Img variant='top' src={crypticImg} />
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
                  <a
                    href='https://cryptic-lyart.vercel.app/'
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
              <Card.Img variant='top' src={brewistaImg} />
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
                    href='https://brewista.vercel.app/'
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
