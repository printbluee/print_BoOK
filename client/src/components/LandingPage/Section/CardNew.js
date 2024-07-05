import React from 'react'
import data_json from '../../Data/BookInfo/BookInfo.json';
import CardNewImage from './CardNewImage'
import { Row, Col } from 'antd';

// import React, { useEffect, useState } from 'react'
// import { API_URL, API_KEY, QUERY_TYPE, VERSION } from '../../Config';

/* 베스트 셀러 페이지 */
const CardNew = () => {

  // const [Book, setBook] = useState([]);
  // // console.log('book>>>', Book)
  // useEffect(() => {

  //   const QueryType = 'ItemNewSpecial'
  //   let api_url = ''
  //   QUERY_TYPE.forEach(query => {
  //     if (query === QueryType) {
  //       api_url = `https://cors-anywhere.herokuapp.com/${API_URL}?ttbkey=${API_KEY}&QueryType=${query}&MaxResults=4&start=1&SearchTarget=Book&output=js&Version=${VERSION}&Cover=Big`;
  //       console.log(api_url)
  //     }
  //   });

  //   fetch(api_url)
  //     .then(res => res.json())
  //     .then(data => {
  //       setBook(data.item); // 데이터 상태 업데이트
  //     })
  //     .catch(error => {
  //       console.error('알라딘 API 데이터를 가져오는 중 오류 발생:', error);
  //     });
  // }, [Book]);

  // api 사용 횟수 제한으로 .. 임시 처방 .. 
  const data_list = data_json['item'];

  return (
    <div style={{ width: '900px', margin: '50px auto', textAlign: 'center' }}>
      <Row gutter={[10, 10]} justify="center">
        {data_list.map(data => (
          <React.Fragment key={data.isbn13}>
            <Col lg={12} md={24} sm={24} xs={24} style={{ justifyContent: 'center', margin: '5px 0', display: 'flex' }}>
              <CardNewImage
                src={data.cover}
                alt={data.title}
                title={data.title}
                description={data.description}
                author={data.author}
              />
            </Col>
          </React.Fragment>
        ))}
      </Row>
    </div>
  );
};

export default CardNew;