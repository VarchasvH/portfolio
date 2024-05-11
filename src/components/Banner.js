import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img/Programming-amico.svg";
import { useEffect, useState } from "react";
const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 1000;

  const toRotate = [
    "Web Developer",
    "Software Engineer",
    "Front-End Developer",
    "Full-Stack Developer",
  ];

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  return (
    <>
      <section className='banner' id='home'>
        <Container>
          <Row className='align-items-center'>
            <Col xs={12} md={6} xl={7}>
              <span className='tagline'>Welcome to my Portfolio</span>
              <h1>
                {`Hi, I'm Varchasv Hoon\n`}
                <span className='wrap aloha big-text'>{text}</span>
              </h1>
              <p>
                An Aspiring Front-end focused Full-Stack Developer building and
                managing beautiful wesbites and webpages{" "}
              </p>
              <button onClick={() => console.log("connected")}>
                <a
                  href='#connect'
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Let's Connect
                  <ArrowRightCircle size={25} />
                </a>
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={headerImg} alt='Header' />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Banner;
