import { Link } from "react-router-dom";
import { BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import styled from "styled-components";


const Company = styled.span`
    display: block;
    margin: 0 0 5px 0;
`

const Tel = styled.span`
display: block;
margin: 0 0 5px 0;
`

const Address = styled.address`
display: block;
margin: 0 0 5px 0;
`

const SubAddress = styled.address`
display: block;
margin: 0 0 5px 0;
`

const Copy = styled.div`

`

const Footer = ({ BASIC }) => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="footer_top">
                    <ul className="list">
                        <li>
                            <Link to={`/`}>이용약관</Link>
                        </li>
                        <li className="bold">
                            <Link to={`/`}>개인정보처리방침</Link>
                        </li>
                    </ul>
                    <ul className="sns">
                        <li><a href="/" target='_blank'><BsFacebook /></a></li>
                        <li><a href="/" target='_blank'><BsInstagram /></a></li>
                        <li><a href="/" target='_blank'><BsYoutube /></a></li>
                    </ul>
                </div>
                <div className="footer_bottom">
                    <div className="desc">
                        <Company>
                            상호명:{BASIC.company} / 대표:{BASIC.name} /
                            사업자 번호:{BASIC.number}
                        </Company>
                        <Tel>
                            Tel:{BASIC.tel} / {BASIC.email}
                        </Tel>
                        <Address>
                            {BASIC.address}
                        </Address>
                        <SubAddress>
                            {BASIC.sub_address}
                        </SubAddress>
                        <Copy>
                            &copy; {BASIC.copy}
                        </Copy>
                    </div>
                    <figure>
                        <img src={process.env.PUBLIC_URL + `/image/footer01.png`} alt="" />
                    </figure>
                </div>
            </div>
        </footer>
    )
}

export default Footer;