import Carousel from 'react-bootstrap/Carousel';

function CarouselComponent() {
  return (
    <Carousel style={{padding : '20px 50px'}}>
      <Carousel.Item interval={1000} >
        <img style={{ width: '40rem' , height: '35rem'}}
          className="d-block w-100"
          src='https://c1.wallpaperflare.com/preview/224/215/805/learning-education-word-letters.jpg'
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Never Stop Learning</h3>
          <p>Invest your precious time with us so that you can have a better future ahead do not forget that
            first you Learn and then you simply remove the L
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img style={{ width: '50rem' , height: '35rem'}}
          className="d-block w-100"
          src='https://www.cxoinsightme.com/wp-content/uploads/2020/07/AI_shutterstock_1722492775-scaled.jpg'
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Artificial Intelligence</h3>
          <p>“There’s no one thing that defines AI. It’s more like a tapestry of modern intelligent
             technologies knit together in a strategic fashion that can then uplift and create a 
             knowledge base that is automated — where you can extrapolate findings from there.”</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img style={{ width: '50rem' , height: '35rem'}}
          className="d-block w-100"
          src="https://www.apogaeis.com/wp-content/uploads/2017/08/Apogaeis-The-Top-7-Latest-Technology-Trends.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Power Your Career</h3>
          <p>
           Master in-demand skills and achieve great heights
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselComponent;