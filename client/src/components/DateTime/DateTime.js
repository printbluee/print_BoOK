import React, { useState, useEffect } from 'react';

const DateTime = () => {
  // 상태 변수들 설정
  const [year, setYear] = useState('');
  const [month, setMonth] = useState('');
  const [week, setWeek] = useState('');

  // 현재 년도, 월 구하기
  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1; // getMonth()는 0부터 시작하므로 +1 해줍니다.

    setYear(currentYear.toString());
    setMonth(currentMonth.toString());
  }, []); // 컴포넌트가 처음 렌더링될 때 한 번만 실행됩니다.

  // 주차 선택 핸들러
  const handleWeekChange = (event) => {
    setWeek(event.target.value);
  };

  // 년도 옵션 생성 (1990년부터 현재 년도까지)
  const yearOptions = [];
  const startYear = 1990;
  const currentYear = new Date().getFullYear();
  for (let year = startYear; year <= currentYear; year++) {
    yearOptions.push(<option key={year} value={year}>{year}년</option>);
  }

  // 월 옵션 생성 (1월부터 12월까지)
  const monthOptions = [];
  for (let month = 1; month <= 12; month++) {
    monthOptions.push(<option key={month} value={month}>{month}월</option>);
  }

  return (
    <div>
      <h2>
        <select style={{ border: '0', color: "#135784" }} value={year} onChange={(e) => setYear(e.target.value)}>
          {yearOptions}
        </select>

        <select style={{ border: '0', color: "#135784" }} value={month} onChange={(e) => setMonth(e.target.value)}>
          {monthOptions}
        </select>

        <select style={{ border: '0', color: "#135784" }} value={week} onChange={handleWeekChange}>
          <option value="1">1주</option>
          <option value="2">2주</option>
          <option value="3">3주</option>
          <option value="4">4주</option>
        </select>
      </h2>
    </div>
  );
};

export default DateTime;
