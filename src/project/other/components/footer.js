const footerStyle = {
    backgroundColor: '#f8f8f8',
    padding: '20px',
    marginTop: '50px',
};

const containerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
};

const copyRightStyle = {
    textAlign: 'center',
    paddingTop: '10px',
    borderTop: '1px solid #eaeaea',
    marginTop: '20px'
};

const Footer = () => {
    return(
        <footer style={footerStyle}>
            <div style={containerStyle}>
                <div>
                    <h3>Little Lemon</h3>
                    <p>Poltavska, Warszawa</p>
                    <p>Contact us: +123 456 789</p>
                </div>
                <div>
                    <h4>Working Hours</h4>
                    <p>Mon-Fri: 10:00 - 18:00</p>
                    <p>Sat-Sun: 12:00 - 17:00</p>
                </div>
                <div>
                    <h4>Follow Us</h4>
                    <p>
                        <a href="#">Facebook</a> | <a href="#">Instagram</a>
                    </p>
                </div>
            </div>
            <div style={copyRightStyle}>
                <p>&copy; {new Date().getFullYear()} Little Lemon. All Rights Reserved.</p>
            </div>
        </footer>
    );
}



export default Footer;
