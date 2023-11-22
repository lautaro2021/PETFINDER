export default function PaginationButtons({currentPage,setCurrentPage, lastPage}:{
  currentPage: number,
  lastPage: number,
  setCurrentPage: (n:number)=> void;
}){
  const handlePrevPage = ()=>{
    if(currentPage <= 1) return
    return setCurrentPage(currentPage - 1)
  }
  const handleNextPage = ()=>{
    if(currentPage === lastPage) return
    return setCurrentPage(currentPage + 1);
  }
  return (
    <div>
      <button onClick={handlePrevPage}>
        Prev
      </button>
      {currentPage}
      <button onClick={handleNextPage}>
        Next
      </button>
    </div>
  )
}