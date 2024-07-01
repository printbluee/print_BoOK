export const API_URL = 'http://www.aladin.co.kr/ttb/api/ItemList.aspx'
export const API_KEY = 'ttbz9806222232001'

/*
  - ItemNewAll : 신간 전체 리스트
  - ItemNewSpecial : 주목할 만한 신간 리스트
  - ItemEditorChoice : 편집자 추천 리스트 (카테고리로만 조회 가능 - 국내도서/음반/외서만 지원)
  - Bestseller : 베스트셀러
  - BlogBest : 블로거 베스트셀러 (국내도서만 조회 가능)
*/
export const QUERY_TYPE = ['ItemNewAll', 'ItemNewSpecial', 'ItemEditorChoice', 'Bestseller', 'BlogBest']

// 최신 버전
export const VERSION = '20131101' 