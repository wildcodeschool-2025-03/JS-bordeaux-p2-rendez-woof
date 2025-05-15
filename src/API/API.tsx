import { useEffect, useState } from "react";
import type { DogType } from "../components/LikeContext/LikesContext";

function useDogs(): DogType[] {
	const [dogs, setDogs] = useState<DogType[]>([]);

	useEffect(() => {
		fetch(
			"https://my-json-server.typicode.com/wildcodeschool-2025-03/JS-bordeaux-p2-api-rendez-woof/dogs",
		)
			.then((res) => res.json())
			.then((data: DogType[]) => {
				setDogs(data);
			});
	}, []);

	return dogs;
}

export default useDogs;
