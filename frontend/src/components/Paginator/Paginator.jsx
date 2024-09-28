import ReactPaginate from 'react-paginate';

import * as SC from './Paginator.styled';

export const Paginator = ({
  totalCount,
  initialPage,
  forcePage,
  perPage,
  setPage
}) => {
  const handlePageChange = e => {
    setPage(e.selected + 1);
  };

  const pageCount = Math.ceil(totalCount / perPage);
  const checkInitialPage =
    isNaN(parseInt(initialPage)) || initialPage <= 0 || initialPage > pageCount
      ? 1
      : initialPage;

  return (
    <SC.StyledPaginateContainer>
      <ReactPaginate
        pageCount={pageCount}
        initialPage={checkInitialPage - 1}
        forcePage={forcePage - 1}
        pageRangeDisplayed={4}
        marginPagesDisplayed={2}
        onPageChange={handlePageChange}
        previousLabel="<"
        breakLabel="..."
        nextLabel=">"
        className="pagination"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        activeLinkClassName="selected-page-link"
      />
    </SC.StyledPaginateContainer>
  );
};
