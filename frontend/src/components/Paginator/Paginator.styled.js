import styled from 'styled-components';

export const StyledPaginateContainer = styled.div`
  margin-top: ${p => p.theme.spacing(20)};

  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: ${p => p.theme.spacing(2)};
  }

  .page-item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
  }

  .page-link {
    width: 100%;

    text-align: center;

    cursor: pointer;
    border-radius: 50%;
  }

  .selected-page-link {
    border: 1px solid ${p => p.theme.colors.black};
  }
`;
