import { Link } from 'react-router-dom';
import './Home.css';
import logo from "../assets/club_logo.jpg";
import fiesta from "../assets/logo.png";
function Home() {
    return (
        <>
            <section className='home'>
                <div className="home-page">

                    <img src={fiesta} alt="img"/>
                    <article>Organised by</article>
                    <section>SRINIVASA RAMANUJAN MATHEMATICS CLUB</section>
                    <img src={logo} className='home-image' alt="img"/>
                    <Link to={'/events'}>
                    <button className='Register'>
                        Register
                    </button>
                    </Link>
                </div>
            </section>
        </>
    )
}
export default Home;