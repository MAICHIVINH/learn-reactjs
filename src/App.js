import React, { useEffect } from 'react';
// import './App.css';
import { Route, Routes, Link, NavLink } from 'react-router-dom';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import ColorBox from './compunents/ColorBox';
import { Navigate } from 'react-router-dom';
import NotFound from './compunents/NotFound';
import productApi from './api/productApi';

function App() {
useEffect(() =>{
  const fetchProducts = async () => {
    const productList = await productApi.getAll();
    console.log(productList);
  }
  fetchProducts();
}, []);



  return (
    <div className="App">
      Header
      {/* Link nhan laf toi trang dich lien */}
      {/* <p><Link to = "/todos">Todos</Link> </p>
      <p><Link to = "/albums">Albums</Link></p> */}
      {/* NavLink lamf dangj menu , ko đặt class thì className mặc đingj là "active", active chỉ được add khi đang ở đúng đường dẫn mà trung với navlink đó */}
      <p>
        <NavLink
          to="/todos"
          // activeClassName="active-menu"
          //Trong v6 trở lên activeClassName đã bị thay thế bằng className
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Todos
        </NavLink>{' '}
      </p>
      <p>
        <NavLink to="/albums">Albums</NavLink>
      </p>
      <p>
        <Link to="/">ColorBox</Link>
      </p>
      {/* chay tu tren xun duoi tung row check naof max voi map duoc voi path hien tai neu max thi chi render feature do. Khong sd switch sex render tat ca cac row map */}
      <Routes>
        {/* phiên bản react-router-dom v6 trở đi, Redirect đã bị thay thế bằng Navigate */}
        {/* <Navigate from="/home" to="/" />; */}
        {/* Điều hướng */}
        {/* Navigate không thể là con trực tiếp của <Routes>. Tất cả các phần tử con của <Routes> phải là <Route> */}
        <Route path="/post-list/:postId" element={<Navigate to="posts/:postId" />} />
        <Route path="/" element={<ColorBox />} exact={true} />
        {/* <Route path="/" element={<ColorBox />} />
          <Route path="/" element={<ColorBox />} /> */}
        <Route path="/todos/*" element={<TodoFeature />} />
        <Route path="/albums" element={<AlbumFeature />} />
        {/* Truong hợp notfound */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      Footer
    </div>
  );
}

export default App;
