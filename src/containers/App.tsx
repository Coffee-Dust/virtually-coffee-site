import '../assets/styles/globals.css'
import '../assets/styles/layout/MainContent.css'
import '../assets/styles/layout/NavMenu.css'
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from '../components/layout/Layout'

function App() {
  
  return (
    <Router>
      <Layout />
    </Router>
  );
}

export default App;
