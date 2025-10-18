import Home from "./components/home/Home.js"
import Menu from "./components/menu/Menu.js"
import Skills from "./components/skills/Skills.js"

import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom";

function App() {
    return (
        <div className="App">
            <div>
                <Router>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route exact path="/Skills" element={<Skills />} />
                    </Routes>

                </Router>
            </div >
        </div >
    );
}

export default App;
