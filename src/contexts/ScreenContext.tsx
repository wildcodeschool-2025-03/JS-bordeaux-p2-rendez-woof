import { createContext, useContext, useEffect, useState } from "react";

const ScreenContext = createContext(null);

export function ScreenProvider({ children }) {
	const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

	useEffect(() => {
		const handleResize = () => setIsMobile(window.innerWidth < 1024);
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	return (
		<ScreenContext.Provider value={{ isMobile, setIsMobile }}>
			{children}
		</ScreenContext.Provider>
	);
}

export const useScreen = () => {
	const value = useContext(ScreenContext);

	if (value === null) {
		throw new Error("erreur");
	}

	return value;
};
