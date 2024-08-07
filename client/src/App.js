import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import HomePage from './Pages/HomePage';
import MovieDetailsPage from './Pages/MovieDetailsPage';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import './App.css';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/movie/:id"
            element={
              <PrivateRoute>
                <MovieDetailsPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
