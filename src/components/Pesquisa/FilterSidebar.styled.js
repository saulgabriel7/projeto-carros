import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const FilterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding-bottom: 15px;
`;

export const AppliedFilters = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const AppliedFilterTag = styled.span`
  background-color: #e6f7ff;
  color: #007bff;
  border: 1px solid #91d5ff;
  border-radius: 4px;
  padding: 5px 10px;
  font-size: 0.8rem;
  cursor: pointer;
  span {
    font-weight: bold;
    margin-left: 5px;
    color: #007bff;
  }
`;

export const ClearFiltersButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  font-size: 0.9rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export const FilterSection = styled.div`
  border-bottom: 1px solid #eee;
  padding-bottom: 20px;
  &:last-child {
    border-bottom: none;
  }
  h4 {
    font-size: 0.95rem;
    font-weight: 600;
    margin-bottom: 10px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 0.9rem;
  &:focus {
    outline: none;
    border-color: #007bff;
  }
`;
