import React from 'react';
import { SearchOutlined } from '@ant-design/icons';

const SearchBar = () => {
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      maxWidth: '500px',
      margin: '20px auto',
      borderRadius: '50px',
      overflow: 'hidden',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    }} className="search-container">
      <input
        type="text"
        style={{
          flex: 1,
          border: 'none',
          outline: 'none',
          margin: '0 20px',
          borderTopLeftRadius: '20px',
          borderBottomLeftRadius: '20px'
        }}
        className="search-input"
        placeholder="검색어를 입력하세요..."
      />
      <div style={{ margin: ' 15px' }}>
        <SearchOutlined />
      </div>
    </div>
  );
};

export default SearchBar;
