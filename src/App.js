import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Content from "./components/Content";
import imagePaths from './generateCards';

function App() {
console.log(imagePaths)
  return (
    <div className="main">
      <Header />
      <NavMenu />
      <Content imagePaths={imagePaths} />

    </div>
  );
}

export default App;
