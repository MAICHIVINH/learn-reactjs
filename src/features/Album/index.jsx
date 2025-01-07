import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {
    
};

function AlbumFeature(props) {
const albumList =[
    {
        id: 1,
        name: 'Nhạc xuân',
        thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/d/8/1/8/d818e78f15996579d314b2d1f3bc8f86.jpg'
    },
    {
        id: 22,
        name: 'Chill',
        thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/b/1/3/0/b130381bdaed5df3ddfff9549d859510.jpg'
    },
    {
        id: 3,
        name: 'Album hot',
        thumbnailUrl: 'https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/9/8/c/7/98c7bb29ce5e414e81d66d3242cb33ab.jpg'
    },
]

    return (
        <div>
            <h2>Có thể bạn sẽ thích</h2>
            <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;