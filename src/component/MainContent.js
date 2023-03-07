import MainConSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import { FaRegHandshake } from "react-icons/fa";
import { useRef, useState } from "react";

const MainContents = ({ SUB_SLIDE }) => {
    const [num, setNum] = useState(1)
    const ConSlide = useRef(null)
    const option = {
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 4,
        afterChange: idx => setNum(idx)
    }
    return (
        <section className="MainContents">
            <div className="title">
                <FaRegHandshake className="MainConHand" />
                <h2>전국 설치 및 가맹점 현황</h2>
            </div>
            <div className="inner">
                <div className="line"></div>
                <div className="SlideWrapper">
                    <MainConSlide className="MainConSlide" {...option} ref={ConSlide}>
                        {
                            SUB_SLIDE.map((it, idx) => {
                                return (
                                    <div className={`itm itm0${it.id}`} key={it.id}>
                                        <figure>
                                            <img src={process.env.PUBLIC_URL + `/image/maincontents0${idx + 1}.jpg`} alt="" />
                                        </figure>
                                        <p>{it.title}</p>
                                    </div>
                                )
                            })
                        }
                    </MainConSlide>

                    <ul className="arrows">
                        <li className="left" onClick={() => { ConSlide.current.slickPrev() }}>123</li>
                        <li className="right" onClick={() => { ConSlide.current.slickNext() }}>213</li>
                    </ul>
                </div>
                <div className="dots">
                    {SUB_SLIDE.slice(0, 1).map((it, idx) => {
                        return (
                            <button className={num === it.id ? 'on' : ''} key={idx} onClick={() => { ConSlide.current.slickGoTo(it.id) }}>{it.id}</button>
                        )
                    })}
                    {SUB_SLIDE.slice(4, 5).map((it, idx) => {
                        return (
                            <button className={num === it.id ? 'on' : ''} key={idx} onClick={() => { ConSlide.current.slickGoTo(it.id) }}>{it.id}</button>
                        )
                    })}
                </div>

            </div>
        </section>
    )
}

export default MainContents;