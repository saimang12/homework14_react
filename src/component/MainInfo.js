import { BsHandThumbsUpFill, BsFillMapFill, BsFillCheckSquareFill } from "react-icons/bs";

const MainInfo = ({ MAIN_INFO }) => {
    return (
        <section className="MainInfo">
            <div className="inner">
                <ul>
                    {
                        MAIN_INFO.map((it, idx) => {
                            return (
                                <li>
                                    {it.icon}
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </section>
    )
}

export default MainInfo;