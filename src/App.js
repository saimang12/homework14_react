import Header from "./component/Header";
import MainVisual from "./component/MainVisual";
import { GNB, MAIN_SLIDE } from "./data/data";

const App = () => {
    return (
        <div className="Wrap">
            <Header GNB={GNB} />
            <MainVisual MAIN_SLIDE={MAIN_SLIDE} />
        </div>
    )
}

export default App;