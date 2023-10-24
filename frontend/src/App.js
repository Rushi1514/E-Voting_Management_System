import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './NavBar/Navbar';
import Home from './Home/Home';
import Login from './Login/Login'
import ForgotPassword from './ForgotPassword/ForgotPassword'
import EditProfile from './Profile/EditProfile'
import About from './About/About'
import { DataProvider } from './DataContext/DataContext';
import SignUp from './SignUp/SignUp'
import Vote from './Vote/Vote'
import Profile from './Profile/Profile';
import CreateElec from './CreateElection/CreateElec';
import Addquestion from './AddQuestion/Addquestion';
const App = () => {
  return (
    <>
    <BrowserRouter>
    <DataProvider>
    <Routes>
    <Route
          path="*"
            element={
              <>
                <Navbar />
                <Home />
              </>
            }
          />
    <Route path="/login" element={<Login />} />
    <Route path="/about" element={<About />} />
    <Route path="/signup" element={<SignUp />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/edit" element={<EditProfile />} />
    <Route path="/forgot" element={<ForgotPassword />} />
    <Route path='/votebtn' element={<CreateElec />} />
    <Route path='/vote' element={<Vote />} />
    <Route path='/add' element={<Addquestion />} />
    </Routes>
    </DataProvider>
    </BrowserRouter>
    </>
  );
};
export default App;
