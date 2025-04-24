import "./Footer.css";

function Footer() {
	return (
		<footer>
			<div className="about">
				<p id="about">A Propos</p>
				<p>Qui sommes-nous ?</p>
				<p>Notre mission</p>
				<p>Témoignage</p>
			</div>
			<div className="followUs">
				<p id="followUs">Suivez-nous</p>
				<div className="logosFooter">
					<img
						id="logo-insta"
						src="src/images/logo_insta.png"
						alt="logo instagram"
						width="20"
						height="20"
					/>
					<img
						id="logo-tiktok"
						src="src/images/logo_tiktok.png"
						alt="logo tiktok"
						width="20"
						height="20"
					/>
					<img
						id="logo-fb"
						src="src/images/logo_fb.png"
						alt="logo fb"
						width="20"
						height="20"
					/>
					<img
						id="logo-x"
						src="src/images/logo_x.png"
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
