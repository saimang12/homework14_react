import { Link } from "react-router-dom";
import { BsList, BsCart2, BsPerson } from "react-icons/bs";

const Header = ({ GNB }) => {
    return (
        <header className="header">
            <div className="inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + `/image/logo.png`} alt="" />
                    </Link>
                </h1>
                <nav className="gnb">
                    <ul>
                        {
                            GNB.map((it, id) => {
                                return (
                                    <li key={it.id}><Link>{it.title}</Link>
                                        {
                                            it.submenu &&
                                            <ul>
                                                {it.submenu.map((it, idx) => {
                                                    return (
                                                        <li key={idx}><Link>{it.title}</Link></li>
                                                    )
                                                })}
                                            </ul>
                                        }
                                    </li>
                                )
                            })
                        }
                    </ul>
                </nav>
                <div className="h_link">
                    <BsCart2 className="cart" />
                    <BsPerson />
                    <BsList />
                </div>
            </div>
        </header>
    )
}

export default Header;