import { useState } from "react";
import { BsTelephone } from "react-icons/bs";

const MainProduct = ({ BASIC }) => {
    const [text, setText] = useState()

    const onChange = (e) => {
        setText()
    }

    return (
        <section className="MainProduct">
            <div className="inner">
                <div className="logo_box">
                    <figure>
                        <img src={process.env.PUBLIC_URL + `/image/logo02.png`} alt="" />
                    </figure>
                </div>
                <div className="info_box">
                    <strong>창업문의</strong>
                    <span><a href={`tel:${BASIC.tel}`}>{BASIC.tel}</a></span>
                    <p>핑거커피 창업문의에 관한 문의사항 접수 해주시면 확인 후 상담 연락 드리겠습니다.</p>
                    <button>
                        <a href={`tel:${BASIC.tel}`}>
                            <BsTelephone />  고객센터 전화상담 연결
                        </a>
                    </button>
                </div>
                <div className="input_box">
                    <div className="input input_name">
                        <p>성함</p>
                        <input type="text" value={text} onChange={onChange} />
                    </div>
                    <div className="input input_tel">
                        <p>연락처</p>
                        <div className="Finput">
                            <input type="tel" value={text} onChange={onChange} />
                            <input type="tel" value={text} onChange={onChange} />
                            <input type="tel" value={text} onChange={onChange} />
                        </div>
                    </div>
                    <div className="input input_address">
                        <p>지역</p>
                        <input type="text" value={text} onChange={onChange} />
                    </div>
                    <div className="input_desc">
                        <p>내용</p>
                        <textarea type="text" value={text} onChange={onChange} />

                    </div>
                    <span>
                        <a href="#!">접수하기</a>
                    </span>
                </div>

            </div>
        </section>
    )
}

export default MainProduct;