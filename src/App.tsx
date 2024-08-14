// import './App.css'
import { BrowserRouter as Router } from "react-router-dom";
import ARoutes from './ARoutes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/css/mobile.css';
import './assets/css/tablet.css';
import './assets/css/desktop.css';

function App() {
  return (
    <Router>
                <ARoutes />
            </Router>
  )
}

export default App
