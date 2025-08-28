import React from 'react';
import {
  SidebarWrapper,
  FilterSection,
  FilterHeader,
  AppliedFilters,
  AppliedFilterTag,
  ClearFiltersButton,
  SearchInput,
} from './FilterSidebar.styled';

const FilterSidebar = ({ filters, onInputChange }) => {
  const handleClearFilter = (name) => {
    onInputChange({ target: { name, value: '' } });
  };

  const handleClearAll = () => {
    onInputChange({ target: { name: 'name', value: '' } });
    onInputChange({ target: { name: 'location', value: '' } });
    onInputChange({ target: { name: 'price', value: '' } });
  };

  return (
    <SidebarWrapper>
      <FilterHeader>
        <h3>Filtros aplicados</h3>
        <ClearFiltersButton onClick={handleClearAll}>
          Limpar todos
        </ClearFiltersButton>
      </FilterHeader>
      
      <AppliedFilters>
        {filters.name && (
          <AppliedFilterTag onClick={() => handleClearFilter('name')}>
            {filters.name} <span>❌</span>
          </AppliedFilterTag>
        )}
        {filters.location && (
          <AppliedFilterTag onClick={() => handleClearFilter('location')}>
            {filters.location} <span>❌</span>
          </AppliedFilterTag>
        )}
        {filters.price && (
          <AppliedFilterTag onClick={() => handleClearFilter('price')}>
            Até R$ {Number(filters.price).toLocaleString('pt-BR')} <span>❌</span>
          </AppliedFilterTag>
        )}
      </AppliedFilters>

      <FilterSection>
        <h4>Marca ou Modelo</h4>
        <SearchInput
          type="text"
          name="name"
          placeholder="Digite a marca ou modelo..."
          onChange={onInputChange}
          value={filters.name}
        />
      </FilterSection>
      
      <FilterSection>
        <h4>Localização</h4>
        <SearchInput
          type="text"
          name="location"
          placeholder="Digite a cidade..."
          onChange={onInputChange}
          value={filters.location}
        />
      </FilterSection>

      <FilterSection>
        <h4>Preço Máximo</h4>
        <SearchInput
          type="number"
          name="price"
          placeholder="Preço máximo..."
          onChange={onInputChange}
          value={filters.price}
        />
      </FilterSection>
    </SidebarWrapper>
  );
};

export default FilterSidebar;