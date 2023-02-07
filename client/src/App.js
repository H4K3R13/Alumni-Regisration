
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import SignUp  from './components/pages/SignUp'
import SignIn from './components/pages/SignIn'
import Homepage from './components/pages/Homepage'
import { About  } from './components/pages/About';
function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
        <Route exact path='/'  element={<Homepage />} />
        <Route path='/SignUp' element={<SignUp/>} />
        <Route path='/SignIn' element={<SignIn/>} />
        <Route path='/About' element={<About/>} />
    </Routes>
    </Router>
);
}

export default App;
