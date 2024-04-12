import { FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <footer id="footer">
                <div className="row overflow-hidden" id="footerContainer">
                    <div className="col-md-3 col-7">
                        <h5>Dino Studio</h5>
                        <p>Copyright &copy; 2024 | Chingu</p>
                    </div>
                    <div className="col-md-2 col-5">
                        <p>Chingu team 14</p>
                        <div className="d-inline-flex" id="testing">
                            <p>Follow Us</p>
                            <a href="https://github.com/chingu-voyages/v48-tier2-team-14">
                                <FaGithub className="mx-2" id="githubIcon" />
                            </a>
                        </div>
                    </div>
                    <div className="col-md-7 d-flex justify-content-between" id="authors">
                        <div>
                            <p>Rhys</p>
                            <p>Josh</p>
                        </div>

                        <div>
                            <p>Jonah</p>
                            <p>Simon</p>
                        </div>

                        <div>
                            <p>Ana</p>
                            <p>Farzaneh Falakrou</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}

export default Footer;