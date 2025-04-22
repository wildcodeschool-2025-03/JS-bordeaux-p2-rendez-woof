import { createBrowserRouter } from "react-router";
import App from "./App.tsx";
import Home from "./pages/home/Home.tsx";
import MyProfile from "./pages/myProfile/MyProfile.tsx";
import Profiles from "./pages/profiles/Profiles.tsx";

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "/myProfile",
				element: <MyProfile />,
			},
			{
				path: "/Profiles",
				element: <Profiles />,
			},
		],
	},
]);
export default router;
