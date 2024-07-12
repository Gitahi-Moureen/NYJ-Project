import './App.css';
import Blog from "./Blog";
import Navbar from './Home';
import Podcastpage from './Podcastpage';
import Videos from './Videos';

function App() {
  return (
    <div>
      <Navbar/>
      <Videos/>
      <Podcastpage/>
         <Blog/>
    </div>
  );

}


export default App;

