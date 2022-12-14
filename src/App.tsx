import './App.css';
import Home from './pages/index';
import Wedding from './pages/wedding';
import { Couple } from './pages/couple';
import { TopBanner } from './components/TopBanner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Rsvp from './pages/rsvp';

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <TopBanner />
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
                <Routes>
                    <Route path="/wedding" element={<Wedding />} />
                </Routes>
                <Routes>
                    <Route path="/couple" element={<Couple />} />
                </Routes>
                <Routes>
                    <Route path="/rsvp" element={<Rsvp />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
