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
  const [currentImage, setCurrentImage] = useState(null)

  useEffect(() => {
    if (currentImageIndex !== null) {
      setCurrentImage(images[currentImageIndex])
      setIsNavMenuOnTop(true)
    }
  }, [currentImageIndex])
  const switchCurrentImgIndex = (el) => {
    setCurrentImageIndex(el)
  }
  const closePopupImg = () => {
    setCurrentImage(null)
    setScale(1)
  }
  const switchNextImg = (el) => {
    if(currentImageIndex !== images.length -1){
    setCurrentImageIndex(currentImageIndex + el)}
    else{
      setCurrentImageIndex(0)
    }
  }

  /* scale */
  const [scale, setScale] = useState(1);

  const handleScaleChange = () => {
    if (scale < 2) {
      setScale(scale + 0.5);
    }
    else {
      setScale(1)
    }
  };



  return (
    <div className="main">
      <Header />

      <NavMenu
        isNavMenuOnTop={isNavMenuOnTop}
        currentImage={currentImage}
        closePopupImg={closePopupImg}
        handleScaleChange={handleScaleChange}
      />
      {currentImage !== null ? <PopupImg
        switchNextImg={switchNextImg}
        currentImage={currentImage}
        scale={scale} /> : ''}
      <Content imagePaths={images} popupImg={switchCurrentImgIndex} />
      {isNavMenuOnTop && <a href="#content" className='up-scroll-btn' />}
    </div>
  );
}

export default App;
