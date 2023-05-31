import Carousel from 'react-bootstrap/Carousel';
import carousal_1 from '../Assets/Images/carousal-1.jpg';
import carousal_2 from '../Assets/Images/carousal-2.jpg';
import carousal_3 from '../Assets/Images/carousal-3.jpg';
import '../Styles/carousal.css';

function MyCarousel() {
  return (
    <Carousel controls={true}>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={carousal_1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={carousal_2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
        <img
          className="d-block w-100"
          src={carousal_3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;