function Contact() {
    return (
        <div className="contact-section">

            <h1 className='common-heading'>Contact page</h1>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14617.842578058066!2d76.81438633465574!3d23.659479266353483!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1758023409429!5m2!1sen!2sin" width="100%" height="400" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="container-form">
                <div className="contact">
                    <form action="2827520545505935156" method='POST'>
                        
                        <input type="text" name='username' required autoComplete='off' placeholder='Enter your name' />

                        <input type="email" name='email' required autoComplete='off' placeholder='Enter your email' />

                        <textarea name="Message" cols="30" rows="10" required placeholder='Enter your message'></textarea>

                        <input type="submit" value="send" className='send' />
                    </form>
                </div>
            </div>
        </div >

    )
}

export default Contact;