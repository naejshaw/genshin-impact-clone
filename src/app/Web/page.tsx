import Image from "next/image";

export default function Web() {
  return (<>
    <div className="hero flex flex-col w-full">
      <div id="hero-header" className="flex justify-between items-center w-full px-32 mt-2 absolute">
        <Image src={'/assets/logo.png'} width={120} height={120} alt=""/>
        <nav className="flex justify-between items-center gap-1">
          <div className="button">
            <button type="button">
                <Image src={'/assets/language.webp'} width={25} height={25} alt=""/>
            </button>
          </div>
          <div className="button">
            <button type="button">
                <Image src={'/assets/share.webp'} width={25} height={25} alt=""/>
            </button>
          </div>
          <div className="text-xs text-white border border-blue-500 bg-blue-950 hover:brightness-150 rounded-xl px-3 py-0.5">
            <button type="button" className="flex justify-around items-center">
                <Image src={'/assets/whatsapp.webp'} width={20} height={20} alt=""/>
                <p>Inscrever-se</p>
            </button>
          </div>
          <div className="text-xs text-white border border-blue-500 bg-blue-950 hover:brightness-150 rounded-xl px-3 py-0.5">
            <button type="button">
              Site Oficial
            </button>
          </div>
        </nav>
      </div>
      <div id="hero-banner" className="w-full flex flex-col items-center justify-around gap-0 -mt-12">
        <Image src={'/assets/textBanner.webp'} width={2200} height={0} alt="" className="relative -mt-28"/>
          <div className="flex justify-between gap-2 mt-96 text-xs text-white absolute">
            <button type="button" className="border border-blue-500 bg-blue-950 rounded-xl px-3 py-0.5">V5.2</button>
            <p>Disponível agora, Versão 5.2</p>
          </div>
      </div>
      <div id="hero-footer" className="w-full flex items-center justify-between px-32 -mt-24 mb-8">
        <Image src={'/assets/gems.webp'} width={120} height={120} alt="" className="hover:text-white"/>
        <div id="buttons" className="text-xs text-white flex items-center gap-8">
          <div className="text-xs">
            <button type="button">
              Baixar no PC <br/>
              (HoYoPlay)
            </button>
          </div>
          <Image src={'/assets/play.webp'} width={60} height={60} alt="" className="hover:scale-110 ease-in-out"/>
          <div className="text-xs">
            <button type="button">
              Outros Downloads
            </button>
          </div>
        </div>
        <Image src={'/assets/down.webp'} width={60} height={60} alt="" className="animate-bounce-slow"/>
      </div>
    </div>
    <div>
      Teste
    </div>
  </>);
}


