import { CiDeliveryTruck } from "react-icons/ci";
import { MdOutlineSecurity } from "react-icons/md";
import { GiReceiveMoney } from "react-icons/gi";
import { RiSecurePaymentLine } from "react-icons/ri";

function Services() {

    return (
        <div className='service-section'>
            <div className="container">
                <div className="grid grid-three-cols services">

                    <div className="services-1">
                        <div>
                            <CiDeliveryTruck className='icon' />
                            <h3>Super Fast and Free Delivery</h3>
                        </div>
                    </div>

                    <div className="services-2">

                        <div className='service-col-2'>
                            <MdOutlineSecurity className='icon' />
                            <h3>Non-contact Shipping </h3>
                        </div>

                        <div className='service-col-2'>
                            <GiReceiveMoney className='icon' />
                            <h3>Money-back Guaranteed</h3>
                        </div>

                    </div>

                    <div className="services-3">

                        <div>
                            <RiSecurePaymentLine className='icon' />
                            <h3>Super Secure Payment System</h3>
                        </div>

                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Services;
