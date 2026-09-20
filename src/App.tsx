import { Header } from "./components/Header/index.tsx";
import Navbar from "./components/Navbar";
import { AppRoutes } from "./routes/index.tsx";

function App() {


  return (
    <div className="relative mx-5">
      <Header />

      <Navbar />
      <AppRoutes />
    </div>
  );
}

export default App
