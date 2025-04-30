import ReactDOM from "react-dom/client";
import "./reset.css";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router";

const rootElement = document.getElementById("root");

if (rootElement != null) {
	ReactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
}
