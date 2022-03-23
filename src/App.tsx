import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from "./components/Header";
import { Discover } from './pages/Discover';
import { Home } from './pages/Home';
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/discover" element={<Discover/>}/>
        </Routes>
        <GlobalStyle/>
      </div>
    </BrowserRouter>
  );
}

export default App;
