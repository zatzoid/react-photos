import Header from "./components/Header";
import NavMenu from "./components/NavMenu";
import Content from "./components/Content";
import PopupImg from "./components/PopupImg";
import { useEffect, useState } from "react";



function App() {
  /* загрузки изображений */
  function importAll(r) {
    return r.keys().map((item) => ({ name: item, link: r(item) }));
  }
  const images = importAll(require.context('./images/photos', false, /\.(png|jpe?g|svg)$/));
  /* шапка и кнопка скролла */
  const [isNavMenuOnTop, setIsNavMenuOnTop] = useState(false);
  function handleScroll() {
    const element = document.getElementById('nav-menu');
    if (element) {
      const rect = element.getBoundingClientRect();
      const isOnTop = rect.top <= 0;
      console.log(rect)
      setIsNavMenuOnTop(isOnTop);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

  }, []);



  return (
    <div className="main">
      <Header />

      <NavMenu isNavMenuOnTop={isNavMenuOnTop} />
      <Content imagePaths={images} />
      {isNavMenuOnTop && <a href="#content" className='up-scroll-btn' />}
    </div>
  );
}

export default App;
