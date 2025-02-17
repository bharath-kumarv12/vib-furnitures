import Homepage from './Homepage';
import Navbar from './Navbar';
import './index.css';
import Ourprocess from './ourprocess';
import Vibrer from './vibrer';
import Footer from './footer';

const App: React.FC = () =>{
  return(
    <>
    <Navbar/>
    <Homepage/>
    <Ourprocess/>
    <Vibrer/>
    <Footer/>
    </>
  );
}
export default App
