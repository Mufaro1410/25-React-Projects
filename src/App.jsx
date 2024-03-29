import "./App.css";
import Accordion from "./components/accordion";
import ModalTest from "./components/custom-modal-popup/modal-test";
import TabTest from "./components/custom-tabs/tabs-test";
import FeatureFlags from "./components/feature-flag";
import FeatureFlagGlobalState from "./components/feature-flag/context";
import GithubProfileFinder from "./components/github-profile-finder";
import ImageSlider from "./components/image-slider";
import LightDarkMode from "./components/light-dark-mode";
import LoadMoreData from "./components/load-more-data";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColour from "./components/random-colour";
import ScrollIndicator from "./components/scroll-indicator";
import ScrollToTopAndBottom from "./components/scroll-to-top-and-bottom";
import ScrollToSection from "./components/scroll-to-top-and-bottom/scroll-to-section";
import SearchAutocomplete from "./components/search-auto-complete-with-api";
import StarRating from "./components/star-rating";
import TicTacToe from "./components/tic-tac-toe";
import TreeView from "./components/tree-view";
import menus from "./components/tree-view/data";
import UseFetchHookTest from "./components/use-fetch/test";
import UseOnclickOutsideTest from "./components/use-outside-click/test";
import UseWindowResizeTest from "./components/use-window-resize/test";

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
      {/* <QRCodeGenerator /> */}

      {/* Light Dark Mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator Component */}
      {/* <ScrollIndicator url={'https://dummyjson.com/products?limit=100'}/> */}

      {/* Custom Tabs Component */}
      {/* <TabTest /> */}

      {/* Custom Modal Popup Component */}
      {/* <ModalTest /> */}

      {/* Github Profile Finder Component */}
      {/* <GithubProfileFinder /> */}

      {/* Search Auto Complete With API */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe Component */}
      {/* <TicTacToe /> */}

      {/* Feature Flag Implementation */}
      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* useFetch Custom Hook */}
      {/* <UseFetchHookTest /> */}

      {/* Use Onclick Outside Hook */}
      {/* <UseOnclickOutsideTest /> */}

      {/* Use Window Resize Hook */}
      {/* <UseWindowResizeTest /> */}

      {/* Scroll To Top And Bottom Component */}
      {/* <ScrollToTopAndBottom /> */}

      {/* Scroll To A Particular Section */}
      <ScrollToSection/>
    </div>
  );
}

export default App;
