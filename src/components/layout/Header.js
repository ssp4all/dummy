import { Link } from 'react-router-dom';

const Header = () => {

    return (
        <>
            <header>

                <h1>TodoList by Suraj</h1>
                <nav>
                    <ul>
                        <li>
                            <Link to="/" > Home </Link>
                        </li>
                        <li>
                            <Link to="/about"> About </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}

export default Header;