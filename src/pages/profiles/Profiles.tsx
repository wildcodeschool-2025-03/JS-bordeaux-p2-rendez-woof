import { useEffect, useState } from "react";
import CardProfile from "../../components/CardProfile/CardProfile";
import "./Profiles.css";
import Select from "react-select";

function Profiles() {
	const [dog, setDog] = useState([]);
	const [searchLocality, setSearchLocality] = useState("");
	const [selectedRaces, setSelectedRaces] = useState([]);
	const [racesOptions, setRacesOptions] = useState([]);
	const [valueAge, setValueAge] = useState("1");
	const [selectedHobbies, setSelectedHobbies] = useState([]);
	const [hobbiesOptions, setHobbiesOptions] = useState([]);

	const [isSearchBarLocality, setIsSearchBarLocality] = useState(false);
	const [isMultiSelectRace, setIsMultiSelectRace] = useState(false);
	const [isSliderAge, setIsSliderAge] = useState(false);
	const [isMultiSelectHobbies, setIsMultiSelectHobbies] = useState(false);

	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

	useEffect(() => {
		fetch(
			"https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-rendez-woof/dogs",
		)
			.then((response) => response.json())
			.then((data) => {
				setDog(data);

				const uniqueRaces = Array.from(
					new Set(data.map((dog) => dog.race.toLowerCase())),
				);

				const formattedRaces = uniqueRaces.map((race) => ({
					value: race,
					label: race.charAt(0).toUpperCase() + race.slice(1),
				}));

				setRacesOptions(formattedRaces);

				const allHobbies = data.flatMap((dog) => dog.hobbies);
				const uniqueHobbies = Array.from(
					new Set(allHobbies.map((h) => h.toLowerCase())),
				);

				const formattedHobbies = uniqueHobbies.map((hobby) => ({
					value: hobby,
					label: hobby.charAt(0).toUpperCase() + hobby.slice(1),
				}));

				setHobbiesOptions(formattedHobbies);
			});
	}, []);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1024);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (!isMobile) {
			setIsSearchBarLocality(true);
			setIsMultiSelectRace(true);
			setIsSliderAge(true);
			setIsMultiSelectHobbies(true);
		}
	}, [isMobile]);

	const filteredDogs = dog.filter((dog) => {
		const age = dog.age;
		const isInAgeRange =
			(valueAge === "1" && age >= 1 && age <= 3) ||
			(valueAge === "2" && age >= 4 && age <= 6) ||
			(valueAge === "3" && age >= 7 && age <= 9) ||
			(valueAge === "4" && age >= 10);

		return (
			dog.city.toLowerCase().includes(searchLocality.toLowerCase()) &&
			(selectedRaces.length === 0 ||
				selectedRaces.some(
					(race) => race.value.toLowerCase() === dog.race.toLowerCase(),
				)) &&
			isInAgeRange &&
			(selectedHobbies.length === 0 ||
				selectedHobbies.some((selected) =>
					dog.hobbies
						.map((h) => h.toLowerCase())
						.includes(selected.value.toLowerCase()),
				))
		);
	});

	const handleChangeRace = (selectedRace) => {
		setSelectedRaces(selectedRace);
	};

	return (
		<main>
			<section className="profiles">
				<h2>Profils</h2>

				<div className="filters">
					<img
						id="filterLogo"
						src="src/assets/images/filter_image.png"
						alt="icone filtre"
						width="20"
						height="20"
					/>
					<div className="filterUse">
						<button
							className="filterButton"
							type="button"
							onClick={() => {
								if (isMobile) {
									setIsSearchBarLocality(!isSearchBarLocality);
									setIsMultiSelectRace(false);
									setIsSliderAge(false);
									setIsMultiSelectHobbies(false);
								}
							}}
						>
							Localité
						</button>
						{isSearchBarLocality && (
							<input
								type="text"
								id="searchBar"
								value={searchLocality}
								onChange={(event) => setSearchLocality(event.target.value)}
								placeholder="Saisis une ville"
							/>
						)}
					</div>
					<div className="filterUse">
						<button
							className="filterButton"
							type="button"
							onClick={() => {
								if (isMobile) {
									setIsMultiSelectRace(!isMultiSelectRace);
									setIsSearchBarLocality(false);
									setIsSliderAge(false);
									setIsMultiSelectHobbies(false);
								}
							}}
						>
							Race
						</button>
						{isMultiSelectRace && (
							<Select
								className="multiSelect"
								options={racesOptions}
								isMulti
								value={selectedRaces}
								onChange={handleChangeRace}
								placeholder="Sélectionne une ou plusieurs races"
							/>
						)}
					</div>

					<div className="filterUse">
						<button
							className="filterButton"
							type="button"
							onClick={() => {
								if (isMobile) {
									setIsSliderAge(!isSliderAge);
									setIsSearchBarLocality(false);
									setIsMultiSelectRace(false);
									setIsMultiSelectHobbies(false);
								}
							}}
						>
							Ages
						</button>

						{isSliderAge && (
							<div className="ageRange visibleInput">
								<input
									id="ageRange"
									type="range"
									min="1"
									max="4"
									step="1"
									value={valueAge}
									onChange={(event) => setValueAge(event.target.value)}
									list="tickmarks"
								/>
								<datalist id="tickmarks">
									<option value="1" />
									<option value="2" />
									<option value="3" />
									<option value="4" />
								</datalist>
								<div className="ticks-labels">
									<span>1-3 ans</span>
									<span>4-6 ans</span>
									<span>7-9 ans</span>
									<span>10 ans et +</span>
								</div>
							</div>
						)}
					</div>
					<div className="filterUse">
						<button
							className="filterButton"
							type="button"
							onClick={() => {
								if (isMobile) {
									setIsMultiSelectHobbies(!isMultiSelectHobbies);
									setIsSearchBarLocality(false);
									setIsSliderAge(false);
									setIsMultiSelectRace(false);
								}
							}}
						>
							Hobbies
						</button>
						{isMultiSelectHobbies && (
							<Select
								className="multiSelect"
								options={hobbiesOptions}
								isMulti
								value={selectedHobbies}
								onChange={(selected) => setSelectedHobbies(selected)}
								placeholder="Sélectionne un ou plusieurs hobbies"
							/>
						)}
					</div>
				</div>

				<div className="profilesFiltered">
					{filteredDogs.length > 0 ? (
						filteredDogs.slice(1, isMobile ? 2 : 4).map((dog, index) => (
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
				<p>Aucune recommandation pour l’instant.</p>
			</section>
		</main>
	);
}

export default Profiles;
