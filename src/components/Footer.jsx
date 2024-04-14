import { FaGithub } from "react-icons/fa";
import '../styles/Footer.css'

function Footer() {
  return (
		<>
			<footer>
				<div className="row overflow-hidden" id="footerContainer">
					<div className="col-md-3 col-7">
						<h5 id='brand'>Dino Studio</h5>
						<p className="mt-3">Copyright &copy; 2024 | <a href='www.chingu.io'>Chingu</a></p>
					</div>
					<div className="col-md-2 col-5">
						<p>Chingu Team 14</p>
						<div className="d-inline-flex" id="iconContainer">
							<p>Github Repo</p>
							<a
								href="https://github.com/chingu-voyages/v48-tier2-team-14"
								className="text-decoration-none text-white"
							>
								<FaGithub className="mx-2" id="githubIcon" />
							</a>
						</div>
					</div>
					<div className="col-md-7 d-flex justify-content-between" id="authors">
						<div>
							<p>
								<a href="https://github.com/rjmills87">Rhys</a>
							</p>
							<p>
								<a href="https://github.com/Joshf225">Josh</a>
							</p>
						</div>

						<div>
							<p>
								<a href="https://github.com/jonahunuafe">Jonah</a>
							</p>
							<p>
								<a href="https://github.com/simonC137">Simon</a>
							</p>
						</div>

						<div>
							<p>
								<a href="https://github.com/franeCode">Ana</a>
							</p>
							<p>
								<a href="https://github.com/farzaneh-falakrou">Fari</a>
							</p>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}

export default Footer;
