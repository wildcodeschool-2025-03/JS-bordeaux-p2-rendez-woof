import { useEffect, useState } from "react";
import CardProfile from "../../components/CardProfile/CardProfile";
import "./Profiles.css";

function Profiles() {
	const [dog, setDog] = useState([]);
	const [filterLocality, setFilterLocality] = useState("");
	const [filterRace, setFilterRace] = useState("");
	const [valueAge, setValueAge] = useState("1");
	const [filterHobbies, setFilterHobbies] = useState("");

	const [searchLocality, setSearchLocality] = useState(false);
	const [searchRace, setSearchRace] = useState(false);
	const [searchAge, setSearchAge] = useState(false);
	const [searchHobbies, setSearchHobbies] = useState(false);

	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

	useEffect(() => {
		fetch(
			"https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-rendez-woof/dogs",
		)
			.then((response) => response.json())
			.then((data) => setDog(data));
	}, []);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1024);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const filteredDogs = dog.filter((dog) => {
		const age = dog.age;
		const isInAgeRange =
			(valueAge >= "1" && valueAge <= "3" && age >= 1 && age <= 3) ||
			(valueAge >= "4" && valueAge <= "6" && age >= 4 && age <= 6) ||
			(valueAge >= "7" && valueAge <= "9" && age >= 7 && age <= 9) ||
			(valueAge >= "10" && age >= 10);

		return (
			dog.city.toLowerCase().includes(filterLocality.toLowerCase()) &&
			dog.race.toLowerCase().includes(filterRace.toLowerCase()) &&
			isInAgeRange &&
			dog.hobbies.some((hobby) =>
				hobby.toLowerCase().includes(filterHobbies.toLowerCase()),
			)
		);
	});

	return (
		<main>
			<section className="profiles">
				<h2>Profils</h2>

				<div className="filtersBar">
					<img
						id="filterImage"
						src="src/assets/images/filter_image.png"
						alt="icone filtre"
						width="20"
						height="20"
					/>
					<div className="fourFilters">
						{[
							{
								label: "Localité",
								state: searchLocality,
								setter: setSearchLocality,
								value: filterLocality,
								onChange: setFilterLocality,
								placeholder: "Saisis une ville",
							},
							{
								label: "Race",
								state: searchRace,
								setter: setSearchRace,
								value: filterRace,
								onChange: setFilterRace,
								placeholder: "Saisis une race",
							},
							{
								label: "Ages",
								state: searchAge,
								setter: setSearchAge,
								isAge: true,
							},
							{
								label: "Hobbies",
								state: searchHobbies,
								setter: setSearchHobbies,
								value: filterHobbies,
								onChange: setFilterHobbies,
								placeholder: "Saisis un hobby",
							},
						].map((filter, index) => (
							<div className="filter" key={index.id}>
								<button
									className="filterButton"
									type="button"
									onClick={() => {
										if (!isMobile) return;
										filter.setter(!filter.state);
										[
											setSearchLocality,
											setSearchRace,
											setSearchAge,
											setSearchHobbies,
										].forEach((s, idx) => {
											if (
												s !== filter.setter &&
												[searchLocality, searchRace, searchAge, searchHobbies][
													idx
												]
											) {
												s(false);
											}
										});
									}}
								>
									{filter.label}
								</button>
								{(isMobile && filter.state) || !isMobile ? (
									filter.isAge ? (
										<div
											className={`ageRange ${filter.state ? "visibleInput" : ""}`}
										>
											<input
												type="range"
												min="1"
												max="15"
												step="1"
												list="tickmarks"
												value={valueAge}
												onChange={(event) => setValueAge(event.target.value)}
											/>
											<datalist id="tickmarks">
												<option value="1" label="1 an" />
												<option value="4" label="4 ans" />
												<option value="7" label="7 ans" />
												<option value="10" label="10 ans et +" />
											</datalist>
										</div>
									) : (
										<input
											className={`searchBar ${filter.state ? "visibleInput" : ""}`}
											type="text"
											value={filter.value}
											onChange={(e) => filter.onChange(e.target.value)}
											placeholder={filter.placeholder}
										/>
									)
								) : null}
							</div>
						))}
					</div>
				</div>

				<div className="profilesFiltered">
					{filteredDogs.length > 0 ? (
						filteredDogs.slice(0, isMobile ? 1 : 3).map((dog, index) => (
							<div key={dog.id} className={`card-${index + 1}`}>
								<CardProfile dog={dog} />
							</div>
						))
					) : (
						<p>Aucun profil ne correspond à tes filtres.</p>
					)}
				</div>
			</section>

			<section className="recommendations">
				<h2>
					Recommandations :<br />
					tu risques de trouver l'âme chien ici !
				</h2>
				<div className="profilesFiltered">
					{filteredDogs.length > 0 ? (
						filteredDogs.slice(1, isMobile ? 2 : 4).map((dog, index) => (
							<div key={dog.id} className={`card-${index + 1}`}>
								<CardProfile dog={dog} />
							</div>
						))
					) : (
						<p>Aucune recommandation pour l’instant.</p>
					)}
				</div>
			</section>
		</main>
	);
}

export default Profiles;
