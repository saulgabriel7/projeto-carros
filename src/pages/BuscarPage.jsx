import { useState, useEffect } from 'react';
import carsData from "../data/cars.json";
import FilterSidebar from "../components/Pesquisa/FilterSidebar";
import CarCard from "../components/Card/Card";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  PageContainer, 
  MainContent, 
  FilterContainer, 
  ResultsContainer, 
  Grid, 
  Titulo, 
  Mensagem, 
  Botao 
} from './BuscarPage.styled';

// --------- interpreta a busca em linguagem natural ---------
const parseQuery = (query) => {
  if (!query) return { name: '', location: '', price: '' };

  let name = query.trim();
  let parsedLocation = '';
  let price = '';

  // captura a cidade corretamente (todas as palavras após "em", "no" ou "na")
  const locRegex = /\b(?:em|no|na)\s+([a-zA-ZÀ-ÿ\s]+)/iu;
  const locMatch = name.match(locRegex);
  if (locMatch) {
    parsedLocation = locMatch[1].trim();
    name = name.replace(locMatch[0], '').trim();
  }

  // captura o preço
  const priceRegex = /(?:por\s+|até\s+|menos\s+|abaixo\s+de\s+)?(?:r\$\s*)?(\d{1,3}(?:[.\s]\d{3})+|\d+)(?:,\d{2})?\s*(k|mil|milhares)?/iu;
  const priceMatch = name.match(priceRegex);
  if (priceMatch) {
    let raw = priceMatch[1].replace(/[.\s]/g, '');
    let val = parseInt(raw, 10);
    if (priceMatch[2]) val *= 1000;
    price = String(val);
    name = name.replace(priceMatch[0], '').trim();
  }

  // limpa conectores soltos
  name = name
    .replace(/\b(em|por|até|menos|abaixo|de|no|na)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();

  return { name, location: parsedLocation, price };
};

// --------- componente principal ---------
export default function Buscar() {
  const navigate = useNavigate();
  const locationHook = useLocation();

  const [cars, setCars] = useState([]);
  const [filters, setFilters] = useState({ name: '', location: '', price: '' });
  const [showOtherCitiesMessage, setShowOtherCitiesMessage] = useState(false);
  const [showOtherInCityMessage, setShowOtherInCityMessage] = useState(false);
  const [showPriceSuggestionMessage, setShowPriceSuggestionMessage] = useState(false);

  // aplica os filtros no array base de carros
  const applyFiltersToArray = ({ name = '', location = '', price = '' }) => {
    let results = carsData;

    if (name) {
      const queryWords = name.toLowerCase().split(' ').filter(Boolean);
      results = results.filter((car) => {
        const hay = `${car.Name} ${car.Model}`.toLowerCase();
        return queryWords.every((w) => hay.includes(w));
      });
    }

    if (location) {
      const loc = location.toLowerCase();
      results = results.filter((c) => c.Location && c.Location.toLowerCase().includes(loc));
    }

    if (price) {
      const max = Number(price);
      if (!Number.isNaN(max)) {
        results = results.filter((c) => Number(c.Price) <= max);
      }
    }

    return results;
  };

  // opções mais baratas que a média do modelo
  const findAlternativeOptions = (carName) => {
    if (!carName) return [];
    const group = carsData.filter(
      (c) =>
        c.Name.toLowerCase().includes(carName.toLowerCase()) ||
        c.Model.toLowerCase().includes(carName.toLowerCase())
    );
    if (group.length === 0) return [];
    const avg = group.reduce((s, c) => s + Number(c.Price), 0) / group.length;
    return group.filter((c) => Number(c.Price) < avg);
  };

  // quando carrega ou muda a URL, refaz os filtros
  useEffect(() => {
    const params = new URLSearchParams(locationHook.search);
    const q = params.get("query") || "";
    const name = params.get("name") || "";
    const locationParam = params.get("location") || "";
    const price = params.get("price") || "";

    const newFilters = q ? parseQuery(q) : { name, location: locationParam, price };
    setFilters(newFilters);
  }, [locationHook.search]);

  // aplica os filtros e define mensagens
  useEffect(() => {
    const timer = setTimeout(() => {
      const initialResults = applyFiltersToArray(filters);

      if (initialResults.length > 0) {
        setCars(initialResults);
        setShowOtherCitiesMessage(false);
        setShowOtherInCityMessage(false);
        setShowPriceSuggestionMessage(false);
      } else {
        // ignora localização
        const altLoc = applyFiltersToArray({ ...filters, location: '' });

        if (altLoc.length > 0) {
          setCars(altLoc);
          setShowOtherCitiesMessage(true);
          setShowOtherInCityMessage(false);
          setShowPriceSuggestionMessage(false);
        } else {
          // outras opções de carros na mesma cidade
          const otherInCity = applyFiltersToArray({ ...filters, name: '' });

          if (otherInCity.length > 0) {
            setCars(otherInCity);
            setShowOtherCitiesMessage(false);
            setShowOtherInCityMessage(true);
            setShowPriceSuggestionMessage(false);
          } else {
            // alternativas por preço
            const altPrice = findAlternativeOptions(filters.name);

            if (altPrice.length > 0) {
              setCars(altPrice);
              setShowOtherCitiesMessage(false);
              setShowOtherInCityMessage(false);
              setShowPriceSuggestionMessage(true);
            } else {
              setCars([]);
              setShowOtherCitiesMessage(false);
              setShowOtherInCityMessage(false);
              setShowPriceSuggestionMessage(false);
            }
          }
        }
      }

      // atualiza URL
      const params = new URLSearchParams();
      if (filters.name) params.set('name', filters.name);
      if (filters.location) params.set('location', filters.location);
      if (filters.price) params.set('price', String(filters.price));
      navigate(`?${params.toString()}`, { replace: true });
    }, 250);

    return () => clearTimeout(timer);
  }, [filters, navigate]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFilters((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <PageContainer>
      <Botao onClick={() => navigate("/")}>⬅ Voltar</Botao>

      <Titulo>Buscador de Carros</Titulo>
      <MainContent>
        <FilterContainer>
          <FilterSidebar
            filters={filters}
            onInputChange={handleInputChange}
          />
        </FilterContainer>

        <ResultsContainer>
          <div style={{ padding: '0 10px 20px 0' }}>
            <p style={{ color: '#555', fontSize: '0.9rem' }}>
              {cars.length} anúncios encontrados
            </p>

            {showOtherCitiesMessage && (
              <p style={{ color: 'orange', fontSize: '0.9rem', marginTop: '10px' }}>
                Não encontramos <strong>{filters.name}</strong> em <strong>{filters.location}</strong>, 
                mas encontramos em outras cidades.
              </p>
            )}

            {showOtherInCityMessage && (
              <p style={{ color: 'orange', fontSize: '0.9rem', marginTop: '10px' }}>
                Não encontramos <strong>{filters.name}</strong> em <strong>{filters.location}</strong>, 
                mas existem outros carros nesta cidade.
              </p>
            )}

            {showPriceSuggestionMessage && (
              <p style={{ color: 'green', fontSize: '0.9rem', marginTop: '10px' }}>
                Não foi possível encontrar <strong>{filters.name}</strong> por 
                <strong> R$ {Number(filters.price).toLocaleString('pt-BR')}</strong>, 
                mas estas opções estão abaixo do preço médio.
              </p>
            )}
          </div>

          <Grid>
            {cars.length > 0 ? (
              cars.map((car, i) => <CarCard key={i} car={car} />)
            ) : (
              <Mensagem>Nenhum carro encontrado. 😢 Atualize os Filtros.</Mensagem>
            )}
          </Grid>
        </ResultsContainer>
      </MainContent>
    </PageContainer>
  );
}
