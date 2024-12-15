import Image from "next/image";

export default function Home() {
    const handleClick = () => {
      alert('hihi');
    };
  
    return (
      <div className="home">
        <Image src={'/assets/textBanner.webp'} alt="" className="text-banner"  width={40} height={80}/>
        <Image
          src={'/assets/play.webp'}
          alt=""
          className="play-button"
          onClick={handleClick} width={40} height={80}
        />
      </div>
    );
  }
  