import MainLayout from "./components/MainLayout";
import Sidebar from "./components/Sidebar";
const App = () => {
  return (
    <div className="grid h-screen grid-cols-12 gap-6 overflow-hidden p-5">
      <Sidebar />
      <MainLayout />
    </div>
  );
};

export default App;
