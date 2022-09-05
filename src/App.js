import Discover from "./components/Discover";
import Featured from "./components/Featured";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NewArrivals from "./components/NewArrivals";
import Products from "./components/Products";
import Subscribe from "./components/Subscribe";
import Test from "./components/Test";

function App() {
  return (
    <div className="overflow-hidden bg-body-color">
      <Navbar />
      <Home />
      <Featured />
      <Discover />
      <Products />
      <Test />
      <NewArrivals />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;
