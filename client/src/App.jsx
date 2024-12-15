import HomeComp from './components/Home'
import AdminComp from './components/Admin';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PaymentComp from './components/Payment';

function App() {
  return (
      <Router>
          <Routes>
              <Route path="/admin" element={<AdminComp />} />
              <Route path='/' element={ <HomeComp /> }/>
              <Route path='/payment' element={ <PaymentComp />}/>
          </Routes>
      </Router>
  );
}


export default App
