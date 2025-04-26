import { createContext, useState } from "react";

export interface Dog {
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
}

export interface LikesContextType {
	likeDogs: Dog[];
	addLike: (dog: Dog) => void;
	likeNotification: string | null;
}

export const LikesContext = createContext<LikesContextType | undefined>(
	undefined,
);
export const LikesProvider = ({ children }: { children: React.ReactNode }) => {
	const [likeDogs, setLikeDogs] = useState<Dog[]>([]);
	const [likeNotification, setLikeNotification] = useState<string | null>(null);
	const addLike = (dog: Dog) => {
		setLikeDogs((prevLikes) => [...prevLikes, dog]);
		setLikeNotification(`${dog.name} a été liké!`);
		setTimeout(() => {
			setLikeNotification(null);
		}, 3000);
	};

	return (
		<LikesContext.Provider value={{ likeDogs, addLike, likeNotification }}>
			{children}
		</LikesContext.Provider>
	);
};
