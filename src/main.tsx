import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import router from "./Router";
import { LikesProvider } from "./component/CardProfile/LikeContext/LikesContext";

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <LikesProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </LikesProvider>
  );
}

