const calculatePageNumbers = (wikiList, currentPage) => {
  //페이지네이션 계산 함수
  const itemsPerPage = 5;

  const indexOfLast = currentPage * itemsPerPage; // 마지막을 먼저 구함
  const indexOfFirst = indexOfLast - itemsPerPage; // 제거
  const currentItems = wikiList.slice(indexOfFirst, indexOfLast); // 슬라이스 활용
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(wikiList.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }
  return [pageNumbers, currentItems];
};

export { calculatePageNumbers };
