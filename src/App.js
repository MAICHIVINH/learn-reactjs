import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Vinh';
  const age = 20;
  const isMale = true;
  const student = {
    name: 'Mai Chi Vinh',
    age: 18,
    address: 'Ben Tre'
  };
  const colorList = ['red','green', 'blue']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>ReactJs</p>

        {/* render chuổi hoặc số*/}
        <p>
          Xin chao {name} - {age} - {isMale ? 'Male' : 'Female'}
        </p>

        {/* true, false, none ... ko rendẻ trực tiếp lên màn hình dùng true false để render thêm đk nếu đúng ..., nếu sai ... */}
        {isMale ? <p>Male</p> : <p>Female</p>}
        {isMale && <p>Male</p>}
        {!isMale && <p>Female</p>}

        {/* render có 1 thẻ cha */}
        {isMale && (
          <div>
            <p>Male 1</p>
            <p>Male 2</p>
          </div>
          )}
        {/* Không có thẻ cha thì sử dụng Fragment hoặc <> </> */}
        {isMale && (
          <React.Fragment>
            <p>Male 1</p>
            <p>Male 2</p>
          </React.Fragment>
          )}
          {isMale && (
          <>
            <p>Male 1</p>
            <p>Male 2</p>
          </>
          )}
          {/* Object ko render trực tiếp lên mảng mà phải chia nhỏ ra */}
          <p>{student.name} - {student.age} - {student.address} </p>

          {/* Mảng dùng map lup qua mảng rồi render lưu ý phải có key truyền vào giá trị duy nhất của item trong mảng */}
          <ul>
            {colorList.map(color => (
                <li key={color} style={{color}}> {color} </li>
            ))}
          </ul>
      </header>
    </div>
  );
}

export default App;
