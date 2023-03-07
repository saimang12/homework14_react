import Header from "./component/Header";
import MainContents from "./component/MainContent";
import MainMovie from "./component/MainMovie";
import MainVisual from "./component/MainVisual";
import { GNB, MAIN_SLIDE, SUB_SLIDE } from "./data/data";

const App = () => {
    return (
        <div className="Wrap">
            <Header GNB={GNB} />
            <MainVisual MAIN_SLIDE={MAIN_SLIDE} />
            <MainContents SUB_SLIDE={SUB_SLIDE} />
            <MainMovie/>
        </div>
    )
}

export default App;