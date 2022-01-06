import { BrowserRouter, Routes, Route } from 'react-router-dom';

import 'assets/scss/style.scss';
import LandingPage from 'pages/LandingPage';
import Example from './pages/Example';
import DetailsPage from 'pages/DetailsPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route exact path="/properties/:id" element={<DetailsPage />} />
          <Route exact path="/example" element={<Example />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
