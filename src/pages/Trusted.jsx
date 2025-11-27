import visa from "../images/visa.jpg"
import flipcart from "../images/flicart.jpg"
import paytm from "../images/paytm.jpg"
import meesho from "../images/meesho.webp"
import amazon from "../images/Amazon_icon.png"

export default function Trusted() {

    return (
        <section className="trusted">
            <p >
                Trusted by 1000+ Companies
            </p>

            <div className="grid grid-five-cols container">

                <div className="images" >
                    <img src={amazon} alt={amazon} />
                </div>

                <div className="images">
                    <img src={flipcart} alt={flipcart} />
                </div>

                <div className="images">
                    <img src={visa} alt={visa} />
                </div>

                <div className="images">
                    <img src={meesho} alt={meesho} />
                </div>

                <div className="images">
                    <img src={paytm} alt={paytm} />
                </div>

            </div>

        </section>
    );
}

