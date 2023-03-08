import Header from "./component/Header";
import MainContents from "./component/MainContent";
import MainInfo from "./component/MainInfo";
import MainMovie from "./component/MainMovie";
import MainProduct from "./component/MainProduct";
import MainVisual from "./component/MainVisual";
import { GNB, MAIN_SLIDE, SUB_SLIDE, BASIC, MAIN_INFO } from "./data/data";

const App = () => {
    return (
        <div className="Wrap">
            <Header GNB={GNB} />
            <MainVisual MAIN_SLIDE={MAIN_SLIDE} />
            <MainContents SUB_SLIDE={SUB_SLIDE} />
            <MainMovie />
            <MainProduct BASIC={BASIC} />
            <MainInfo MAIN_INFO={MAIN_INFO} />
        </div>
    )
}

export default App;