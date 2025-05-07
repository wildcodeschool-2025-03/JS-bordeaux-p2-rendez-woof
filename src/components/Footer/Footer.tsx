import "./Footer.css";

function Footer() {
	return (
		<footer>
			<div className="about">
				<p className="bold">A Propos</p>
				<p>Qui sommes-nous ?</p>
				<p>Notre mission</p>
				<p>Témoignage</p>
			</div>
			<div className="followUs">
				<p className="bold">Suivez-nous</p>
				<div className="logosFooter">
					<img
						className="logosSize"
						src="src/assets/images/logo_insta.png"
						alt="logo instagram"
						width="20"
						height="20"
					/>
					<img
						className="logosSize"
						src="src/assets/images/logo_tiktok.png"
						alt="logo tiktok"
						width="20"
						height="20"
					/>
					<img
						className="logosSize"
						src="src/assets/images/logo_fb.png"
						alt="logo fb"
						width="20"
						height="20"
					/>
					<img
						className="logosSize"
						src="src/assets/images/logo_x.png"
						alt="logo x"
						width="23"
						height="20"
					/>
				</div>
			</div>
			<p id="mentionsFooter">
				© 2025 Rendez-Woof | Mentions légales | CGU | Politique de
				confidentialité
			</p>
		</footer>
	);
}

export default Footer;
