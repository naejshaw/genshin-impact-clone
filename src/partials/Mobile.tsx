import Content from "@/components/Content";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Landscape from "@/components/Landscape";
import { withOrientationChange } from "react-device-detect";

function Mobile({ isLandscape }: any){
    if (isLandscape) {
        return <Landscape />;
      }
    
      return (
        <div className="wrapper">
          <Header />
          <Content />
          <Footer />
        </div>
      );
}

export default withOrientationChange(Mobile);