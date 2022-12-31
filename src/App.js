import AIkit from "./components/AIkit";
import Create from "./components/create";
import Features from "./components/features";
import Footer from "./components/footer";
import Header from "./components/header";
import Herosection from "./components/herosection";
import Informusers from "./components/informusers";
import Makeyoursite from "./components/makeyoursite";
import ReSources from "./components/ReSources";
import Stamps from "./components/stamps";
import Trustedsection from "./components/trusted-section";
import Waytowork from "./components/waytowork";
function App() {
  return (
    <>
    <Header/>
    <Herosection/>
    <Trustedsection/>
    <Informusers/>
    <Makeyoursite/>
    <Waytowork/>
    <Create/>
    <Features/>
    <AIkit/>
    <Stamps/>
    <ReSources/>
    <Footer/>
    </>
  );
}

export default App;
