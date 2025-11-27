import { NavLink } from 'react-router-dom';
import shop from "../images/shop1.jpg";
import { MdDone } from 'react-icons/md';

function Hero() {

    return (
        <div className="hero-section">

            <div className="hero-container container grid grid-two-cols ">

                <div className="hero-content">

                    <div className="content">
                        <h2>Welcome to <span>E-commerce Platform</span></h2>
                        <p className="para">Trendy fashion, smart gadgets, home essentials </p>
                    </div>

                    <div className="flex Btns">
                        <NavLink>
                            <button className="Btn">Shop Now</button>
                        </NavLink>

                        <NavLink>
                            <button className="Btn">Explore Categories</button>
                        </NavLink>
                    </div>

                    <div className="category grid-two-cols grid">
                        <div className='cate-para'><MdDone className='done' />
                            <p>Secure Payments</p></div>
                        <div className='cate-para'><MdDone className='done' /> <p>Fast Delivery</p></div>
                        <div className='cate-para'><MdDone className='done' /> <p>Easy Returns</p></div>
                        <div className='cate-para'><MdDone className='done' /> <p>24/7 Support</p></div>
                    </div>

                </div>

                <div className="hero-image">
                    <img src={shop} alt={shop} />
                </div>

            </div>
        </div>
    )
}

export default Hero;
