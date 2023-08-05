import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Content from "./components/Content";


function App() {
  function importAll(r) {
    return r.keys().map((item) => ({ name: item, link: r(item) }));
  }
  const images = importAll(require.context('./images/photos', false, /\.(png|jpe?g|svg)$/));
  console.log(images)
  return (
    <div className="main">
      <Header />
      <NavMenu />
      <Content imagePaths={images} />

    </div>
  );
}

export default App;
