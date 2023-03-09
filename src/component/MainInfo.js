import { BsHandThumbsUpFill, BsFillMapFill, BsFillCheckSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const MainInfo = ({ MAIN_INFO }) => {
    return (
        <section className="MainInfo">
            <div className="inner">
                <div className="info_text">
                    <ul>
                        {
                            MAIN_INFO.map((it, idx) => {
                                return (
                                    <li key={idx}>
                                        <i>
                                            <Link to={`/`}>{it.icon}</Link>
                                        </i>
                                        <strong>{it.title}</strong>
                                        <p>{it.desc}</p>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                <div className="info_img">
                    <figure>
                        <img src={process.env.PUBLIC_URL + `/image/main_info01.jpg`} alt="" />
                    </figure>
                </div>
            </div>
        </section>
    )
}

export default MainInfo;