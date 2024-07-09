import React, { useEffect, useState } from 'react';
import { Row } from 'antd';
import axios from "axios";
import { API_URL, API_KEY, QUERY_TYPE, VERSION } from '../../../Config';
import ImageList from '../BestRanking/ImageList';
// import data_json from '../../../Data/BookInfo/BookInfo.json';


/* 서점 랭킹 컴포넌트 */
const BookStoreRanking = () => {
  const [bookStoreRanking, setBookStoreRanking] = useState([]);

  useEffect(() => {
    const QueryType = 'Bestseller';
    let api_url = '';

    QUERY_TYPE.forEach(query => {
      if (query === QueryType) {
        api_url = `https://cors-anywhere.herokuapp.com/${API_URL}?ttbkey=${API_KEY}&QueryType=${query}&MaxResults=40&start=1&SearchTarget=Book&output=js&Version=${VERSION}&Cover=Big`;
      }
    });

    const fetchData = async () => {
      try {
        const response = await axios(api_url);
        setBookStoreRanking(response.data.item); 
      } catch (error) {
        if (error.response && error.response.status === 429) {
          console.error('API 요청 속도가 너무 빠릅니다. 잠시 후 다시 시도해주세요.');
          await new Promise(resolve => setTimeout(resolve, 10000)); // 10초 대기
          fetchData(); // 다시 요청
        } else {
          console.error('알라딘 API 데이터를 가져오는 중 오류 발생:', error);
        }
      }
    };

    fetchData();
  }, []);
  

  // api 사용 횟수 제한으로 .. 임시 처방 .. 
  // const data_list = data_json['item'];

  return (
    <div>
      {/* 리스트 */}
      <div style={{ width: '800px', margin: '50px auto', textAlign: 'center' }}>
        <Row gutter={[10, 10]} justify="center">
          {/* {data_list.map(book => ( */}
          { bookStoreRanking && bookStoreRanking.map(book => (
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