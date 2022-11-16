import './App.css';
// Components
import NavBar from './Components/NavBar';
import NotFound from './Components/NotFound';

// Router
import {Route,Routes,Outlet} from 'react-router-dom';
import Edit from './Components/Edit';
import Add from './Components/Add';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/add" element={<Add />} />
        <Route path="/list" element={<List />} />
        <Route path="/edit/:pId" element={<Edit />} />
      </Routes>
        <Outlet />
    </div>
  );
}

export default App;
