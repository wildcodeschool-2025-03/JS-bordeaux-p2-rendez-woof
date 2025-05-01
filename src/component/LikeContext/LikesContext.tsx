import { createContext, useContext, useState } from "react";

export interface DogType {
	id: number;
	name: string;
	age: number;
	photo: string;
	city: string;
	size: string;
	personality: string[];
	favorite_foods: string[];
	phobias: string[];
	hobbies: string[];
	race: string;
}

interface LikesContextType {
	likedDogs: DogType[];
	setLikedDogs: React.Dispatch<React.SetStateAction<DogType[]>>;
}

const LikesContext = createContext<LikesContextType | null>(null);

export const LikesProvider = ({ children }: { children: React.ReactNode }) => {
	const [likedDogs, setLikedDogs] = useState<DogType[]>([]);

	return (
		<LikesContext.Provider value={{ likedDogs, setLikedDogs }}>
			{children}
		</LikesContext.Provider>
	);
};

export const useLikes = () => {
	const likeContext = useContext(LikesContext);

	if (!likeContext) {
		throw new Error("useLikes must be used within a LikesProvider");
	}

	return likeContext;
};
