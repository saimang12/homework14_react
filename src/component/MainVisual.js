import React, { useRef, useState } from "react";
import MainSlide from "react-slick";
import "slick-carousel/slick/slick.css";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";



const MainVisual = ({ MAIN_SLIDE }) => {
    const [num, setNum] = useState(0)
    const arrow = useRef(null)
    const setting = {
        arrows: false,
        afterChange: idx => setNum(idx)
    }
    return (
        <section className="MainVisual">
            <MainSlide {...setting} ref={arrow}>
                <div className="itm itm01"></div>
                <div className="itm itm02"></div>
                <div className="itm itm03"></div>
            </MainSlide>
            <div className="arrows">
                <BsArrowLeftShort className="left" onClick={() => arrow.current.slickPrev()} />
                <BsArrowRightShort className="right" onClick={() => arrow.current.slickNext()} />
            </div>
            {/* <div className="num">
                <strong>{num + 1}</strong> / <span>3</span>
            </div> */}
            <div className="dots">
                {MAIN_SLIDE.map((it, idx) => {
                    return (
                        <button key={idx}>{it.id}</button>
                    )
                })}
            </div>
        </section>
    )

}

export default MainVisual;