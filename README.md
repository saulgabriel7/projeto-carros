# Web Car: Buscador de Carros 

Bem-vindo ao Web Car! Este projeto é um buscador de carros que oferece uma experiência de usuário intuitiva e inteligente.

A aplicação está disponivel em:

projeto-carros.vercel.app

Como Rodar o Projeto?

Siga os passos abaixo para rodar a aplicação em seu ambiente local:

Clone o repositório:

git clone (https://github.com/saulgabriel7/projeto-carros.git)

Instale as dependências:

Certifique-se de que você tem o Node.js instalado. Em seguida, execute o comando para instalar as dependências do projeto.

npm install

Inicie a aplicação:

npm run dev

O projeto será iniciado e ficará disponível em http://localhost:5173.

Sobre a Aplicação:

Eu decidi construir este projeto com React para criar uma single-Page Application (SPA), garantindo uma navegação rápida e fluida sem recarregar a página a cada interação. 
O uso de React Router DOM foi crucial para gerenciar as rotas e permitir que a busca fosse refletida na URL.

🛠️ Tecnologias Utilizadas

React
 – SPA e gerenciamento de componentes

React Router DOM
 – navegação entre páginas

Styled Components
 – estilização com CSS-in-JS

Regex
 – interpretação inteligente da busca

Vite
 – build rápido para desenvolvimento

Minha principal meta era criar uma experiência de busca intuitiva, que entendesse o que o usuário realmente quer, mesmo com uma linguagem informal. 
Para isso, usei Expressões Regulares (Regex) para interpretar a intenção de busca, extraindo automaticamente o nome do carro, marca e preço de uma única string. 
Essa decisão técnica é a base da usabilidade, já que o usuário não precisa preencher múltiplos campos para iniciar a busca.

Para aprimorar ainda mais a experiência, implementei uma lógica de busca inteligente em três etapas:

1.  Busca Padrão: Primeiro, a aplicação tenta encontrar o carro com todos os filtros aplicados (nome, localização e preço).
2.  Busca por Localidade: Se não houver resultados na busca padrão, a aplicação ignora o filtro de localização e busca o carro em outras cidades, sugerindo a melhor alternativa. 
Isso evita que o usuário desista por não encontrar o carro em sua localidade.
3.  Busca por Preço: Se a busca por localidade também falhar, o sistema assume que o preço é o problema. 
Ele então calcula o preço médio do modelo e sugere as opções que estão com o valor abaixo dessa média, incentivando o usuário a encontrar uma oportunidade.

Plano de Negócios:

O modelo de negócios seria baseado em monetização por anúncios, com foco em classificados patrocinados e parcerias com lojas.

Estratégia de Aquisição (CAC)
Inicialmente, focaria em marketing de conteúdo (Redes Socias sobre carros com guias de compra) e SEO para atrair tráfego orgânico. 
Usaria também anúncios pagos (Google Ads e Meta Ads) segmentados por intenção de busca ("carro usado", "melhor carro até 100 mil"), com uma estimativa de CAC de R$ 5 a R$ 15, dependendo do canal e da concorrência inicial.

O LTV seria maximizado oferecendo uma experiência de busca superior, com a proposta de valor de encontrar as melhores oportunidades de mercado.
A estratégia de retenção incluiria:
- Notificações por e-mail: Para alertar sobre novas ofertas de modelos que o usuário buscou.
- Salvar busca: Funcionalidade para o usuário salvar seus filtros e voltar a eles facilmente.
- Comunidade: Fóruns e grupos para discussões sobre carros.

As principais fontes de monetização seriam:
- Anúncios de destaque: Concessionárias pagariam para ter seus carros em posições de destaque.
- Parcerias com financiadoras: Receberíamos uma comissão por leads de financiamento qualificados.
- Serviços premium: Um modelo de assinatura para lojas com mais funcionalidades e visibilidade.