import CharacterInfo from "./CharacterInfo";
import VersionInfo from "./VersionInfo";
import GameFeatures from "./GameFeature";
import Home from "./Home";

export default function Content(){
    return (
        <div className="content">
          <Home />
          <div className="body">
            <CharacterInfo />
            <VersionInfo />
            <GameFeatures />
          </div>
        </div>
      );
}