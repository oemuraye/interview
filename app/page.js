import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import Header from "./components/Header";
import Auth from "./components/Auth";

const HomePage = () => {
  return (
    <section className="home-page">
      <Header />
      <Auth />
    </section>
  );
};

export default HomePage;
