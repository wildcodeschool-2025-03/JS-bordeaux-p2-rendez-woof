import ReactDOM from "react-dom/client";
import "./components/reset.css";
import "./index.css";
import { RouterProvider } from "react-router";
import { LikesProvider } from "./components/LikeContext/LikesContext";
import router from "./components/Router";

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(
		<LikesProvider>
			<RouterProvider router={router} />
		</LikesProvider>,
	);
}
