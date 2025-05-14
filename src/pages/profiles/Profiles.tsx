import "../../components/CardProfile/CardProfile.css";
import "./Profiles.css";
import { useEffect, useState } from "react";
import Select from "react-select";
import type { MultiValue } from "react-select";
import CardProfile from "../../components/CardProfile/CardProfile";
import type { DogType } from "../../components/LikeContext/LikesContext";
import Recommandations from "../../components/Recommandations/Recommandations";

interface Option {
	value: string;
	label: string;
}

function Profiles() {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
	const [dog, setDog] = useState<DogType[]>([]);

	const [isLocalityClicked, setIsLocalityClicked] = useState(false);
	const [isSearchBarLocality, setIsSearchBarLocality] = useState(false);
	const [searchLocality, setSearchLocality] = useState("");

	const [isRacesClicked, setIsRacesClicked] = useState(false);
	const [isMultiSelectRace, setIsMultiSelectRace] = useState(false);
	const [selectedRaces, setSelectedRaces] = useState<Option[]>([]);
	const [racesOptions, setRacesOptions] = useState<Option[]>([]);

	const [isAgesClicked, setIsAgesClicked] = useState(false);
	const [isSliderAge, setIsSliderAge] = useState(false);
	const [valueAge, setValueAge] = useState("1");

	const [isHobbiesClicked, setIsHobbiesClicked] = useState(false);
	const [isMultiSelectHobbies, setIsMultiSelectHobbies] = useState(false);
	const [selectedHobbies, setSelectedHobbies] = useState<Option[]>([]);
	const [hobbiesOptions, setHobbiesOptions] = useState<Option[]>([]);

	useEffect(() => {
		fetch(
			"https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-rendez-woof/dogs",
		)
			.then((response) => response.json())
			.then((data: DogType[]) => {
				setDog(data);

				const uniqueRaces = Array.from(
					new Set(data.map((dog) => dog.race.toLowerCase())),
				);

				const formattedRaces = uniqueRaces.map((race) => ({
					value: race,
					label: race.toLowerCase(),
				}));

				setRacesOptions(formattedRaces);

				const allHobbies = data.flatMap((dog) => dog.hobbies);
				const uniqueHobbies = Array.from(
					new Set(allHobbies.map((hobby) => hobby.toLowerCase())),
				);

				const formattedHobbies = uniqueHobbies.map((hobby) => ({
					value: hobby,
					label: hobby.toLowerCase(),
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

	const handleChangeRace = (selectedRace: MultiValue<Option>) => {
		setSelectedRaces([...selectedRace]);
	};

	const filteredDogs = dog.filter((dog) => {
		const age = dog.age;
		const isInAgeRange =
			(valueAge === "1" && age >= 1 && age <= 3) ||
			(valueAge === "2" && age >= 4 && age <= 6) ||
			(valueAge === "3" && age >= 7 && age <= 9) ||
			(valueAge === "4" && age >= 10);

		const matchesLocality = dog.city
			.toLowerCase()
			.includes(searchLocality.toLowerCase());

		const matchesRace =
			selectedRaces.length === 0 ||
			selectedRaces.some((race) =>
				race.value.toLowerCase().includes(dog.race.toLowerCase()),
			);

		const matchesHobbies =
			selectedHobbies.length === 0 ||
			selectedHobbies.some((selected) =>
				dog.hobbies
					.map((hobby) => hobby.toLowerCase())
					.includes(selected.value.toLowerCase()),
			);

		return matchesLocality && matchesRace && isInAgeRange && matchesHobbies;
	});

	return (
		<main>
			<section className="profiles">
				<h2>Profils</h2>

				<div className="filtersSection">
					<img
						id="filterLogo"
						src="src/assets/images/filter_image.png"
						alt="icone filtre"
						width="20"
						height="20"
					/>
					<div className="filtersButtons">
						<button
							className={`button ${isLocalityClicked ? "red" : ""} ${isLocalityClicked ? "bold" : ""}`}
							type="button"
							onClick={() => {
								if (isMobile) {
									setIsLocalityClicked(!isLocalityClicked);
									setIsRacesClicked(false);
									setIsAgesClicked(false);
									setIsHobbiesClicked(false);
									setIsSearchBarLocality(!isSearchBarLocality);
									setIsMultiSelectRace(false);
									setIsSliderAge(false);
									setIsMultiSelectHobbies(false);
								}
							}}
						>
							Localité
						</button>
						<button
							className={`button ${isRacesClicked ? "red" : ""} ${isRacesClicked ? "bold" : ""}`}
							type="button"
							onClick={() => {
								if (isMobile) {
									setIsRacesClicked(!isRacesClicked);
									setIsLocalityClicked(false);
									setIsAgesClicked(false);
									setIsHobbiesClicked(false);
									setIsMultiSelectRace(!isMultiSelectRace);
									setIsSearchBarLocality(false);
									setIsSliderAge(false);
									setIsMultiSelectHobbies(false);
								}
							}}
						>
							Races
						</button>
						<button
							className={`button ${isAgesClicked ? "red" : ""} ${isAgesClicked ? "bold" : ""}`}
							type="button"
							onClick={() => {
								if (isMobile) {
									setIsAgesClicked(!isAgesClicked);
									setIsLocalityClicked(false);
									setIsRacesClicked(false);
									setIsHobbiesClicked(false);
									setIsSliderAge(!isSliderAge);
									setIsSearchBarLocality(false);
									setIsMultiSelectRace(false);
									setIsMultiSelectHobbies(false);
								}
							}}
						>
							Ages
						</button>
						<button
							className={`button ${isHobbiesClicked ? "red" : ""} ${isHobbiesClicked ? "bold" : ""}`}
							type="button"
							onClick={() => {
								if (isMobile) {
									setIsHobbiesClicked(!isHobbiesClicked);
									setIsLocalityClicked(false);
									setIsRacesClicked(false);
									setIsAgesClicked(false);
									setIsMultiSelectHobbies(!isMultiSelectHobbies);
									setIsSearchBarLocality(false);
									setIsSliderAge(false);
									setIsMultiSelectRace(false);
								}
							}}
						>
							Hobbies
						</button>
					</div>
				</div>

				<div className="filtersUse">
					{isSearchBarLocality && (
						<input
							type="text"
							id="searchBar"
							value={searchLocality}
							onChange={(event) => setSearchLocality(event.target.value)}
							placeholder="Saisis une ville"
						/>
					)}
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
					{isSliderAge && (
						<div className="ageRange">
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
					{isMultiSelectHobbies && (
						<Select
							className="multiSelect"
							options={hobbiesOptions}
							isMulti
							value={selectedHobbies}
							onChange={(selected: MultiValue<Option>) =>
								setSelectedHobbies([...selected])
							}
							placeholder="Sélectionne un ou plusieurs hobbies"
						/>
					)}
				</div>

				<div className="profilesFiltered">
					{filteredDogs.length > 0 ? (
						filteredDogs.slice(0, isMobile ? 1 : 3).map((dog, index) => (
							<div key={dog.id} className={`card-${index + 1}`}>
								<CardProfile dog={dog} context="profiles" />
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

				<div className="profilesRecommended">
					<Recommandations />
				</div>
			</section>
		</main>
	);
}

export default Profiles;
