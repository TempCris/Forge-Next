// ---Dependencys
import { ReactElement } from 'react';
import './index.less';
import Carousel from 'react-multi-carousel';
import Image from 'next/image';
// ---Others
import { genericAlt } from 'AppConfig/globalData';

// ---Images
const img1 = '/images/home/LowerSegment/Discounts/SamplePage1.webp';
const img2 = '/images/home/LowerSegment/Discounts/SamplePage2.webp';
const img3 = '/images/home/LowerSegment/Discounts/SamplePage3.webp';

// ----------COMPONENT----------------------------------------
export default function DiscountOfTheMonth(): ReactElement {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 760 },
      items: 3
    },
    mausize: {
      breakpoint: { max: 760, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div className="discount">
      <h1>
        LOS DESCUENTOS DEL MES
        <hr color="#00f8da" />
      </h1>
      <Carousel
        swipeable
        draggable={false}
        showDots
        responsive={responsive}
        ssr={false} // means to render carousel on server-side.
        infinite
        autoPlaySpeed={1000}
        keyBoardControl
        transitionDuration={500}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <Image
          priority
          src={img1} // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src={img2} // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src={img3} // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src={img1} // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src={img2} // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
        <Image
          priority
          src={img3} // Route of the image file
          height={406 * 0.8}
          width={241 * 0.8}
          alt={genericAlt}
        />
      </Carousel>
    </div>
  );
}
