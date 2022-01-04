// ---Dependencys
import { ReactElement } from 'react';
import { Carousel } from 'antd';
import Img from '../UpperSegment/Img';

// ---Images
const img1 = '/images/home/MiddleSegment/Carousel/Carousel1.webp';
const img2 = '/images/home/MiddleSegment/Carousel/Carousel2.webp';
const img3 = '/images/home/MiddleSegment/Carousel/Carousel3.webp';

// ----------COMPONENT----------------------------------------
export default function CarouselMiddle(): ReactElement {
  return (
    <div className="courses">
      <h1>
        Cursos
        <hr color="#00f8da" />
      </h1>
      <Carousel autoplay>
        <div>
          <Img img={img1} cssStyle="carousels" />
        </div>
        <div>
          <Img img={img2} cssStyle="carousels" />
        </div>
        <div>
          <Img img={img3} cssStyle="carousels" />
        </div>
      </Carousel>
    </div>
  );
}
