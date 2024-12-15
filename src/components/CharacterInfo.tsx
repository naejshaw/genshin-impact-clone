import Image from "next/image";
import Slider from 'react-slick';

function CharacterInfo() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      nextArrow: <NextArrow />,
      prevArrow: <PreviousArrow />,
    };
  
    return (
      <div className="character-info">
        <Image src={'/assets/title.webp'} alt="" className="title"  width={40} height={80}/>
        <Slider className="slider" {...settings}>
          <div className="slider-item">
            <Image src={'/assets/chasca.webp'} alt="kamisato ayaka" className="image"  width={40} height={80}/>
            <Image src={'/assets/play.webp'} alt="play button" className="play-button"  width={40} height={80}/>
            <p className="intro">A Pacificadora de Tlalocan, a<br /> finalizadora de todas as disputas.</p>
          </div>
        </Slider>
        {/* <img src={sliderButton} alt="" className="button left" />
        <img src={sliderButton} alt="" className="button" /> */}
      </div>
    );
  }
  
  export default CharacterInfo;
  
  function PreviousArrow({ className, style, onClick }: any) {
    return (
      <Image
        src={'/assets/prev.webp'}
        className={className}
        style={{ ...style }}
        alt="previous arrow"
        // className="button left"
        onClick={onClick}
         width={40} height={80}
      />
    );
  }
  
  function NextArrow({ className, style, onClick }: any) {
    return (
      <Image
        src={'/assets/next.webp'}
        className={className}
        style={{ ...style }}
        alt="next arrow"
        // className="button"
        onClick={onClick}
         width={40} height={80}
      />
    );
  }