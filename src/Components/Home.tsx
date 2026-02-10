import Feed from "./Feed/Feed";
import Head from "./Helpers/Head";

const Home = () => {
  return (
    <section className="container mainContainer">
      <Head
        title="Wapuus"
        description="Home do site Wapuus, com o feed de imagens."
      />
      <Feed />
    </section>
  );
};

export default Home;
