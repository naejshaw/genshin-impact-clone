import Image from "next/image";

export default function Web() {
  return (<>
    <div className="hero flex flex-col w-full h-screen">
      <div id="hero-header" className="flex justify-between w-full px-20">
        <Image src={'/assets/logo.png'} width={100} height={120} alt=""/>
        <nav className="flex justify-between items-center">
          <Image src={'/assets/language.webp'} width={20} height={20} alt=""/>
          <Image src={'/assets/share.webp'} width={20} height={20} alt=""/>
          <div className="button">
            <button type="button">
            <Image src={'/assets/whatsapp.webp'} width={20} height={20} alt=""/>
              Inscrever-se
            </button>
          </div>
          <div className="button">
            <button type="button">
              Site Oficial
            </button>
          </div>
        </nav>
      </div>
      <div id="hero-banner w-full">
        <Image className="w-full" src={'/assets/textBanner.webp'} width={800} height={0} alt=""/>
      </div>
      <div id="hero-footer w-full">
        <Image src={'/assets/gems.webp'} width={60} height={60} alt=""/>
        <div id="buttons">
          <div className="downloadButton">
            <button type="button">
              Baixar no PC <br/>
              (HoYoPlay)
            </button>
          </div>
          <Image src={'/assets/play.webp'} width={60} height={60} alt=""/>
          <div className="downloadButton">
            <button type="button">
              Outros Downloads
            </button>
          </div>
        </div>
        <Image src={'/assets/down.webp'} width={60} height={60} alt=""/>
      </div>
    </div>
    <div>
      Teste
    </div>
  </>);
}


