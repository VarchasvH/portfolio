import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

// Logo Imports
// ? Frontend
import reactLogo from "../assets/img/react-logo.svg";
import tailwindLogo from "../assets/img/tailwind-logo.svg";
import nextLogo from "../assets/img/next-logo.svg";
import cssLogo from "../assets/img/css-logo.svg";
import jsLogo from "../assets/img/js-logo.svg";
import htmlLogo from "../assets/img/html-logo.svg";
import nodeLogo from "../assets/img/node-logo.svg";
import mongoDBLogo from "../assets/img/mongodb-logo.svg";
import postmanLogo from "../assets/img/postman-logo.svg";
import expressLogo from "../assets/img/express2.svg";

// ? DevOps
import dockerLogo from "../assets/img/docker-logo.svg";
import kubernetesLogo from "../assets/img/kubernetes-logo.svg";
import linuxLogo from "../assets/img/linux-logo.svg";
import gitLogo from "../assets/img/git-logo.svg";
import githubLogo from "../assets/img/github-logo.svg";

import colorSharp from "../assets/img/color-sharp.png";
const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section className='skill' id='skills'>
      <Container>
        <Row>
          <Col>
            <div className='skill-bx'>
              <h2>Web Development</h2>
              <p></p>
              <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                focusOnSelect={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1500}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass='carousel-container'
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                className='skill-slider slide-in-right-to-left'
              >
                <div className='item'>
                  <img src={htmlLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={cssLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={jsLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={reactLogo} alt='skills' />
                </div>
                <div className='item tailwind'>
                  <img src={tailwindLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={nextLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={mongoDBLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={nodeLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={postmanLogo} alt='skills' />
                </div>
                <div className='item tailwind'>
                  <img src={expressLogo} alt='skills' />
                </div>
              </Carousel>
            </div>
          </Col>
          <Col>
            <div className='skill-bx'>
              <h2>DevOps</h2>
              <p></p>
              <Carousel
                swipeable={false}
                draggable={false}
                responsive={responsive}
                ssr={true} // means to render carousel on server-side.
                focusOnSelect={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={1800}
                keyBoardControl={true}
                transitionDuration={500}
                containerClass='carousel-container'
                removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
                dotListClass='custom-dot-list-style'
                itemClass='carousel-item-padding-40-px'
                className='skill-slider slide-in-right-to-left'
              >
                <div className='item'>
                  <img src={dockerLogo} height={25} width={25} alt='skills' />
                </div>
                <div className='item'>
                  <img src={kubernetesLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={linuxLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={gitLogo} alt='skills' />
                </div>
                <div className='item'>
                  <img src={githubLogo} alt='skills' />
                </div>
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img
        className='background-image-left'
        src={colorSharp}
        alt='colorSharp'
      />
    </section>
  );
};

export default Skills;
