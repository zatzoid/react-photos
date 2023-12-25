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
      setIsNavMenuOnTop(isOnTop);
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

  }, []);
  /* popupimg */
  const [currentImageIndex, setCurrentImageIndex] = useState(null)

  const openPopupImg = (index) => {

    setCurrentImageIndex(index)
    setIsNavMenuOnTop(true)

  }

  const switchNextImg = (el) => {
    if (currentImageIndex + el <= images.length - 1 && currentImageIndex + el >= 0) {
      setCurrentImageIndex(currentImageIndex + el)
    }
    else if (currentImageIndex + el < 0) {
      setCurrentImageIndex(images.length - 1)
    }
    else if (currentImageIndex + el === images.length) {
      setCurrentImageIndex(0)
    }
  }

  const closePopupImg = () => {
    setCurrentImageIndex(null)
    handleScroll()
  }





  return (
    <div className="main">
      <Header />

      <NavMenu
        isNavMenuOnTop={isNavMenuOnTop}
      />
      {currentImageIndex !== null ? <PopupImg
        images={images}
        switchNextImg={switchNextImg}
        currentImageIndex={currentImageIndex}
        closePopupImg={closePopupImg}
      /> : ''}
      <Content imagePaths={images} popupImg={openPopupImg} />
      {isNavMenuOnTop && <a href="#content" className='up-scroll-btn' />}
    </div>
  );
}

export default App;
