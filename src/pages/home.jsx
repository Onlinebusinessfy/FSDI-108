import "./styles/home.css"
import { Link } from "react-router-dom";

function Home(){
    return(
        <div className="page">
            <div>
                <div className="home logo">
                    <img src="/images/Logo.jpg" alt="" />
                    <h1>Welcome to my website!</h1>
                </div>
                <div className="button-position">
                    <Link class="nav-link active" aria-current="page" to="/catalog">
                        <button className="btn btn-lg btn-success">Check out this awesome offers!</button>
                    </Link>
                </div>
            </div>
            <div>
                <div className="mission">
                    <h2>Our Mission</h2>
                    <p style={{textDecoration:"underline"}}>Our mission is to provide the best products and services to our customers.</p>
                </div>
                <div className="mission-text">
                    <img src="./images/Mission.jpg" alt="" />
                    <p>Our mission is to revolutionize the way people experience online shopping by offering a seamless, personalized, and enjoyable journey that caters to their every need. We are committed to curating a diverse range of high-quality products that meet the expectations of our customers, ensuring that every item we offer stands for reliability, value, and innovation. Beyond providing excellent products, we aim to foster a community where customers feel valued, heard, and empowered, continuously enhancing their experience through exceptional customer service and cutting-edge technology. We understand the importance of sustainability, which is why we strive to adopt eco-friendly practices in our operations, from sourcing products responsibly to minimizing waste. Our online store is more than just a platform for purchasing goods—it’s a hub for building trust, creating memorable experiences, and making a positive impact on both our customers and the environment. By embracing these values, we seek to inspire loyalty, spark joy, and contribute to a better future for everyone we serve.</p>
                </div>
            </div>
            <img src="./images/Better for your recipes.jpg" alt="" className="banner"/>
        </div>
    );
}

export default Home;