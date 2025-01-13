import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NotFound from '../../compunents/NotFound';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

TodoFeature.propTypes = {};

function TodoFeature(props) {
    return (
        <div>
            TODO SHARE
            <Routes>
                {/* Trong v6 thì ta không cần gán lại link của tk cha nữa 
         để truyền tham số lên link thì ở Route của cha phải có \* ở cuối path để nó gán giá trị */}
                <Route path='/' element={<ListPage />} exact = {true} />
                <Route path=':todoId' element={<DetailPage/>} />
                <Route path="*" element={<NotFound/>} />
            </Routes>
        </div>
    );
}

export default TodoFeature;