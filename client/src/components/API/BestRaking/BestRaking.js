import { Button } from 'antd';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import BookStoreRanking from '../BestRaking/BookStoreRanking';
import PrintBookRanking from '../BestRaking/PrintBookRaking';
import DateTime from '../../DateTime/DateTime'

const BestRanking = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      {/* 날짜 */}
      <div>
        { DateTime }
      </div>

      <div style={{ margin: '40px auto', textAlign: 'center' }}>
        <h1>베스트 랭킹</h1>
      </div>

      <hr style={{ margin: '0 auto', width: '800px', color: '#135784' }} />

      {/* 프린트북랭킹/서점랭킹 버튼 */}
      <div style={{ margin: '30px auto', textAlign: 'center' }}>
        <div>
          <Button
            onClick={() => navigate('/bestseller/PrintBookRaking')}
            type="primary"
            shape="round"
            size='default'
            style={{
              borderColor: '#94cef5',
              backgroundColor: category === 'PrintBookRaking' ? '#94cef5' : 'white',
              color: category === 'PrintBookRaking' ? 'white' : '#135784',
              primaryShadow: '0',
              margin: '0 5px'
            }}>
            프린트북 랭킹
          </Button>
          <Button
            onClick={() => navigate('/bestseller/BookStoreRaking')}
            type="primary"
            shape="round"
            size='default'
            style={{
              borderColor: '#94cef5',
              backgroundColor: category === 'BookStoreRaking' ? '#94cef5' : 'white',
              color: category === 'BookStoreRaking' ? 'white' : '#135784',
              primaryShadow: '0',
              margin: '0 5px'
            }}>
            서점 랭킹
          </Button>
        </div>
      </div>

      {/* 리스트 */}
      {category === 'PrintBookRaking' && <PrintBookRanking />}
      {category === 'BookStoreRaking' && <BookStoreRanking />}
    </div>
  );
};

export default BestRanking;