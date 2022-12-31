import styled from '@emotion/styled';

export const Header = styled.header`
  position: fixed;
  display: flex;
  align-items: center;
  max-width: 448px;
  width: 100%;
  height: 50px;
  padding: 0 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;
