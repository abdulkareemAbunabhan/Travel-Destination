import "./Footer.css"
function Footer() {
    return (
        <>
            <br/>
            <div className="styleFoot">
                <section>
                    <h3>Contact Us</h3>
                    <p>Phone Number: +962781111111</p>
                    <p>E-mail : aaaaa@gmail.com</p>
                    <p>whatsup.com/+96277777777</p>
                    <p>&copy; all rights reserved</p>

                </section>
                <section id={"ft"}>
                    <h3>Join Our team</h3>
                    <p>Phone Number: +96274444444</p>
                    <p>E-mail : bbbbbb@gmail.com</p>
                    <p>whatsup.com/+96233333333</p>
                    <div className={"ftrmg"}>
                        <ul >
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><i class="fab fa-facebook">Facebook</i></a><br></br>
                            <a href="https://www.instagram.com/?hl=en" target="_blank" rel="noreferrer"><i class="fab fa-instagram">Instagram</i></a><br></br>
                            <a href="https://twitter.com/?lang=en" target="_blank" rel="noreferrer"><i class="fab fa-twitter">twitter</i></a>
                        </ul>
                    </div>
                </section>

            </div>
        </>
    );

}
export default Footer;