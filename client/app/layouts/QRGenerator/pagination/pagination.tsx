import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";

export default function PaginationButtons({
  currentPage,
  setCurrentPage,
  lastPage,
}: {
  currentPage: number;
  lastPage: number;
  setCurrentPage: (n: number) => void;
}) {
  const handlePrevPage = () => {
    if (currentPage <= 1) return;
    return setCurrentPage(currentPage - 1);
  };
  const handleNextPage = () => {
    if (currentPage === lastPage) return;
    return setCurrentPage(currentPage + 1);
  };
  return (
    <div>
      <button onClick={handlePrevPage}>
        <IoIosArrowRoundBack />
      </button>
      {currentPage}
      <button onClick={handleNextPage}>
        <IoIosArrowRoundForward />
      </button>
    </div>
  );
}
