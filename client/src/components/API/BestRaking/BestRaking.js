import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from 'antd';
import PrintBookRanking from '../BestRaking/PrintBookRaking'; 
import BookStoreRanking from '../BestRaking/BookStoreRanking'; 

const BestRanking = () => {
  const { category } = useParams();
  const navigate = useNavigate();

  const handleBookStoreRakingClick = () => {
    navigate('/bestseller/BookStoreRaking');
  };

  const handlePrintBookRakingClick = () => {
    navigate('/bestseller/PrintBookRaking');
  };

  return (
    <div>
      {/* 날짜 */}
      <div style={{ margin: '20px auto', textAlign: 'center', color: '#94cef5' }}>
        <h2>2024년 06월 4주</h2>
      </div>

      <div style={{ margin: '40px auto', textAlign: 'center' }}>
        <h1>베스트 랭킹</h1>
      </div>
      
      <hr style={{ margin: '0 auto', width: '800px', color: '#135784' }} />

      {/* 프린트북랭킹/서점랭킹 버튼 */}
      <div style={{ margin: '30px auto', textAlign: 'center' }}>
        <div>
          <Button
            onClick={handlePrintBookRakingClick}
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
            onClick={handleBookStoreRakingClick}
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