import "./App.css";
import Accordion from "./components/accordion";
import ImageSlider from "./components/image-slider";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColour from "./components/random-colour";
import StarRating from "./components/star-rating";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";

function App() {
  return (
    <div>
      {/* Accordion Component */}
      {/* <Accordion /> */}

      {/* Random Colour Component */}
      {/* <RandomColour /> */}

      {/* Star Rating Component*/}
      {/* <StarRating noOfStars={10}/> */}

      {/* Image Slider Component */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={'1'} limit={'10'}/> */}

      {/* Load More Data Component */}
      {/* <LoadMoreData /> */}

      {/* Tree View Component */}
      {/* <TreeView menus={menus}/> */}

      {/* QR Code Generator */}
      <QRCodeGenerator />
    </div>
  );
}

export default App;
