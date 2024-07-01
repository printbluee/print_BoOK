// import React, { useEffect, useState } from 'react'
// import { API_URL, API_KEY, QUERY_TYPE, VERSION } from '../../Config';
import data_json from './CardNew.json'
import CardNewImage from './CardNewImage'
import { Row, Col } from 'antd';

const CardNew = () => {

  // const [Book, setBook] = useState([]);

  // useEffect(() => {

  //   const QueryType = 'ItemEditorChoice'
  //   let api_url = ''
  //   QUERY_TYPE.forEach(query => {
  //     if (query === QueryType) {
  //       api_url = `https://cors-anywhere.herokuapp.com/${API_URL}?ttbkey=${API_KEY}&QueryType=${query}&MaxResults=40&start=1&SearchTarget=Book&output=js&Version=${VERSION}&Cover=Big`;
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
  // }, []);

  // api 사용 횟수 제한으로 .. 임시 처방 .. 
  const data_list = data_json['item'];

  return (
    <div style={{ width: '900px', margin: '50px auto', textAlign: 'center' }}>
      <Row gutter={[10, 10]} justify="center">
        {data_list.map(data => (
          <Col lg={12} md={24} sm={24} xs={24} style={{ display: 'flex', justifyContent: 'center', margin: '5px 0' }}>
            <React.Fragment key={data.isbn}>
              <CardNewImage
                src={data.cover}
                alt={data.title}
                title={data.title}
                description={data.description}
                author={data.author}
              />
            </React.Fragment>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default CardNew;