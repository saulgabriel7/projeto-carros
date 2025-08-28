import { useState } from "react";
import { 
  Container, 
  Title, 
  Subtitle, 
  SearchWrapper, 
  Input, 
  Botao 
} from './HomePage.styled';
import { useNavigate } from "react-router-dom";

export default function HomePage () {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (query.trim()) {
      navigate(`/busca?query=${encodeURIComponent(query)}`);
    }
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") handleSearch();
  };

  return (
    <Container>
      <Title>Web Car</Title>
      <Subtitle>Encontre os melhores carros num só lugar!</Subtitle>
      <SearchWrapper>
        <Input
          type="text"
          placeholder="Digite a marca ou modelo do carro"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleEnter}
        />
        <Botao onClick={handleSearch}>Ver ofertas</Botao>
      </SearchWrapper>
    </Container>
  );
}