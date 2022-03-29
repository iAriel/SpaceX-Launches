import {BrowserRouter, Routes, Route} from 'react-router-dom'
import { Header } from "./components/Header";
import { FavoriteContextProvider } from './context/favoriteContext';
import { Discover } from './pages/Discover';
import { FavoritePage } from './pages/Favorites';
import { Home } from './pages/Home';
import { GlobalStyle } from "./styles/global";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <FavoriteContextProvider>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/discover" element={<Discover/>}/>
          <Route path='/favorite' element={<FavoritePage/>}/>
        </Routes>
        <GlobalStyle/>
        </FavoriteContextProvider>
      </div>
    </BrowserRouter>
  );
}
