import Image from "next/image";

export default function Landscape(){
    return (
        <div className="landscape">
          <div className="box">
            <Image src={'/assets/background.webp'} alt="" className="image" />
            <p>Please rotate your device for better display.</p>
          </div>
        </div>
      );
}