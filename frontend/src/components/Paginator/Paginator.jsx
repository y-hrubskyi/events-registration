import ReactPaginate from 'react-paginate';

import * as SC from './Paginator.styled';

export const Paginator = ({ totalCount, perPage, setPage }) => {
  const handlePageChange = e => {
    setPage(e.selected + 1);
  };

  const pageCount = Math.ceil(totalCount / perPage);

  return (
    <SC.StyledPaginateContainer>
      <ReactPaginate
        pageCount={pageCount}
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
