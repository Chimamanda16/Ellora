import HomeComp from './components/Home'
import AdminComp from './components/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/admin" element={<AdminComp />} />
              <Route path='/' element={ <HomeComp /> }/>
          </Routes>
      </Router>
  );
}


export default App
