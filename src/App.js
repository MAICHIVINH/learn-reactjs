import React from 'react';
// import './App.css';
import { Route, Routes, Link, NavLink } from "react-router-dom";
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album'

function App() {
  return (
    <div className="App">
      Header
      {/* Link nhan laf toi trang dich lien */}
      <p><Link to = "/todos">Todos</Link> </p>
      <p><Link to = "/albums">Albums</Link></p>

      {/* NavLink lamf dangj menu , ko đặt class thì className mặc đingj là "active", active chỉ được add khi đang ở đúng đường dẫn mà trung với navlink đó */}
    
      <p><NavLink to = "/todos" activeClassName="active-menu">Todos</NavLink> </p>
      <p><NavLink to = "/albums">Albums</NavLink></p>

      <Routes>
        <Route path="/todos/" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
