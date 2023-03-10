import { BsHandThumbsUpFill, BsFillMapFill, BsFillCheckSquareFill } from "react-icons/bs";
import { Link, Route, Routes, useParams } from "react-router-dom";
import styled from "styled-components";

const Test = styled.div`
    position: fixed;
    inset: 0 0 0 0;
    background: rgba(0,0,0,0.5);
    z-index: 999;
`
const Testin = styled.div`
    position: absolute;
    inset:50% 0 0 50%;
    transform:translate(-50%,-50%);
    width: 200px;
    height: 200px;
    background: #000;
`

const DetailInfo = ({ MAIN_INFO }) => {
    const { id } = useParams();
    const detailInfo = MAIN_INFO.find(it => String(it.id) === id);
    return (
        <Test>
            {
                detailInfo &&
                <Testin>{MAIN_INFO.title}</Testin>
            }
        </Test>
    )
}

const MainInfo = ({ MAIN_INFO }) => {
    return (
        <>
            <section className="MainInfo">
                <div className="inner">
                    <div className="info_text">
                        <ul>
                            {
                                MAIN_INFO.map((it, idx) => {
                                    return (
                                        <li key={idx}>
                                            <i>
                                                <Link to={`/detail/${it.id}`}>{it.icon}</Link>
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
            <Routes>
                <Route path="/" element={null} />
                <Route path="/detail/:id" element={
                    <DetailInfo
                        MAIN_INFO={MAIN_INFO} />
                } />
            </Routes>
        </>

    )
}

export default MainInfo;