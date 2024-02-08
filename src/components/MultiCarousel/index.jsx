import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MultiCarousel.css'

const MultiCarousel = ({ items }) => {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows={true}
      autoPlay={false}
      autoPlaySpeed={5000}
      centerMode={false}
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={{
        desktop: {
          breakpoint: {
            max: 3000,
            min: 1024
          },
          items: 5,
          partialVisibilityGutter: 40
        },
        mobile: {
          breakpoint: {
            max: 464,
            min: 0
          },
          items: 1,
          partialVisibilityGutter: 30
        },
        tablet: {
          breakpoint: {
            max: 1024,
            min: 464
          },
          items: 2,
          partialVisibilityGutter: 30
        }
      }}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass="p-5"
      slidesToSlide={5}
      swipeable
    >
      {items.map(item => (
        <div key={item.id} className='flex items-start flex-col'>
          <img src={item.img} />
          <h5>Just {item.price} €</h5>
          <h6>{item.title}</h6>
          <span>{item.seller}</span>
          <h6>{item.rating}</h6>
        </div>
      ))}
    </Carousel>
  )
}

export default MultiCarousel