import { BrowserRouter } from "react-router-dom";
import RoutesApp from "./routers";

export default function App() {
  return (
    <BrowserRouter>
      <RoutesApp />
    </BrowserRouter>
  );
}