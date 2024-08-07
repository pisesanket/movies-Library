import React from 'react';
import MovieList from '../Components/MovieList';
import SideBar from '../Components/SideBar';
import { Link } from 'react-router-dom';

const HomePage = () => (
  <div className="home-page">
  <header className="header" style={{borderBottom:"1px solid black"}}>
    <h1 className="header-title">Movies Library</h1>
    <nav className="header-nav">
      <Link className="nav-link" to="/">Home</Link>
      <Link className="nav-link" to="/login">Log In</Link>
    </nav>
  </header>
  <SideBar />
  <MovieList />
</div>
);

export default HomePage;
