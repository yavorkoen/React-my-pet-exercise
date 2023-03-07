import { Link } from 'react-router-dom';

export default function Header() {

    return (
        <header id="site-header">
            <nav className="navbar">
                <section className="navbar-dashboard">
                    <Link to="/">Dashboard</Link>
                    <div id="guest">
                        <Link className="button" to="/login">Login</Link>
                        <Link className="button" to="/register">Register</Link>
                    </div>
                    <div id="user">
                        <span>Welcome, email</span>
                        <Link className="button" to="#">My Pets</Link>
                        <Link className="button" to="/create">Add Pet</Link>
                        <Link className="button" to="/">Logout</Link>
                    </div>
                </section>
            </nav>
        </header>
    );
}