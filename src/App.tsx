import Navbar from "./components/Navbar";
import { AppRoutes } from "./routes/index.tsx";

function App() {


  return (
    <div className="relative mx-5">
      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App
