// import CartComp from './components/Cart'
import HomeComp from './components/Home'
import AdminComp from './components/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/admin" element={<AdminComp />} />
              <Route path='/' element={ <HomeComp /> }/>
              {/* <Route path='/cart' element={ <CartComp />} /> */}
          </Routes>
      </Router>
  );
}


export default App
