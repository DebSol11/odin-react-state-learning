import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Form from "./Challenge2.jsx";
import FeedbackForm from "./Challenge3.jsx";
import FirstOwnComponent from "./FirstOwnComponent.jsx";
import Accordion from "./SharingState.jsx";
import SyncedInputs from "./SyncedInputs.jsx";
import FilterableList from "./FilteringAList.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <App />
    <Form />
    <FeedbackForm /> */}
    <FirstOwnComponent />
    {/* <Accordion />
    <SyncedInputs /> */}
    <FilterableList />
  </StrictMode>,
);
