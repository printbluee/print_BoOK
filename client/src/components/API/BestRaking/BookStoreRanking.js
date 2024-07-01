import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { API_URL, API_KEY, QUERY_TYPE, VERSION } from '../../Config';
import { Row } from 'antd';

import ImageList from '../ImageList/ImageList';
import data_json from './data.json';

const BookStoreRanking = () => {
  // const { category } = useParams();
  // const navigate = useNavigate();

  // const [BookStoreRanking, setBookStoreRanking] = useState([]);

  // useEffect(() => {

  //   const QueryType = 'Bestseller'
  //   let api_url = '';

  //   QUERY_TYPE.forEach(query => {
  //     if (query === QueryType) {
  //       api_url = `https://cors-anywhere.herokuapp.com/${API_URL}?ttbkey=${API_KEY}&QueryType=${query}&MaxResults=40&start=1&SearchTarget=Book&output=js&Version=${VERSION}&Cover=Big`;
  //     }
  //   });


  //   fetch(api_url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setBookStoreRanking(data.item); // 데이터 상태 업데이트
  //     })
  //     .catch(error => {
  //       console.error('알라딘 API 데이터를 가져오는 중 오류 발생:', error);
  //     });
  // }, [category]);


  // api 사용 횟수 제한으로 .. 임시 처방 .. 
  const data_list = data_json['item'];

  return (
    <div>
      {/* 리스트 */}
      <div style={{ width: '800px', margin: '50px auto', textAlign: 'center' }}>
        <Row gutter={[10, 10]} justify="center">
          {/* {Array.isArray(BookStoreRanking) && BookStoreRanking.map(book => ( */}
          {data_list.map(book => (
            <React.Fragment key={book.isbn}>
              <ImageList
                src={book.cover}
                alt={book.title}
                author={book.author}
              />
            </React.Fragment>
          ))}
        </Row>
      </div>
      <p style={{ textAlign: 'center', color: 'gray', fontSize: '9px' }}>도서 DB 제공 : 알라딘 인터넷서점( www.aladin.co.kr)</p>
    </div>
  );
};

export default BookStoreRanking;
