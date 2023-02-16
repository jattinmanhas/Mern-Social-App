import {BrowserRouter, Navigate, Routes, Route} from "react-router-dom";
import HomePage from './scenes/homePage';
import LoginPage from './scenes/loginPage';
import profilePage from './scenes/loginPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage/>} />
          <Route path="/home" element={<HomePage/>} />
          <Route path="/profile/:userId" element={<profilePage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
