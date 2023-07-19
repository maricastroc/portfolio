export const projectsDetailsPT = [
  {
    id: 0,
    title: 'Blogger',
    images: [
      {
        first: '/assets/projects/blogger/img_1.png',
        second: '/assets/projects/blogger/img_2.png',
        third: '/assets/projects/blogger/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'FullStack Development'],
    languages: ['TypeScript', 'Next.Js', 'Prisma', 'MySQL'],
    summary:
      'Meu primeiro projeto full-stack é uma aplicação de rede social em pequena escala, envolvendo todas as operações CRUD. Os usuários podem se cadastrar diretamente no aplicativo ou acessá-lo como convidados.',
    details:
      'Para este projeto, utilizei um banco de dados Next.js, usando Prisma e MySQL. Isso me permitiu criar um backend junto com minha aplicação frontend, possibilitando a persistência de dados e o gerenciamento de requisições por meio da criação de rotas e endpoints dentro do Next.js para conexão com o banco de dados.',
    tools: [
      'Typescript',
      'Next.Js',
      'React.js',
      'Prisma',
      'Stitches',
      'axios',
      'font-awesome',
      'zod',
      'react-hook-form',
      'phosphor-react',
      'radix-ui',
      'react-toastify',
      'ESLint',
      'Prettier',
    ],
    preview: 'maricastroc-myblog.vercel.app',
  },
  {
    id: 1,
    title: 'Atomic Shop',
    images: [
      {
        first: '/assets/projects/atomic_shop/img_1.png',
        second: '/assets/projects/atomic_shop/img_2.png',
        third: '/assets/projects/atomic_shop/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['TypeScript', 'Next.Js', 'React.Js'],
    summary:
      'Este projeto é uma aplicação de marketplace integrada com a API do Stripe para registro e checkout de produtos. Ele oferece uma experiência simulada ao usuário, desde a navegação no catálogo até a conclusão do processo de checkout, incluindo o redirecionamento dinâmico para uma página de sucesso. Recursos adicionais foram desenvolvidos, como uma API personalizada para fornecer detalhes de checkout ao Stripe.',
    details:
      'No meu primeiro projeto Next.js, utilizei o FileSystem Routing para gerar novas rotas e empreguei a biblioteca de estilos Stitches para renderização do lado do servidor e pré-bundling. Aprendi como lidar com as funções getServerSideProps e getStaticProps e criei uma API personalizada para interagir com o Stripe no processo de checkout. Além disso, implementei um carrossel interativo utilizando a biblioteca keen-slider para exibir os produtos do catálogo.',
    tools: [
      'React.js',
      'TypeScript',
      'Next.Js',
      'Stripe API',
      'Stitches',
      'axios',
      'keen-slider',
      'font-awesome',
      'lottie-react',
      'radix-ui',
      'geolocation-API',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://maricastroc-atomic-shop.netlify.app/',
  },
  {
    id: 2,
    title: 'Comments Section',
    images: [
      {
        first: '/assets/projects/interactive_comments/img_1.png',
        second: '/assets/projects/interactive_comments/img_2.png',
        third: '/assets/projects/interactive_comments/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['TypeScript', 'React.Js'],
    summary:
      'Aqui, desenvolvi uma aplicação que oferece uma página com postagens e seções de comentários dinâmicas. O aplicativo oferece recursos como a criação de novas postagens, gerenciamento completo de comentários e respostas por meio de operações de criação, leitura, atualização e exclusão (CRUD), além da opção de votar positivamente ou negativamente nos comentários.',
    details:
      'Neste projeto, adquiri experiência prática com o ReactJS e utilizei vários conceitos, como estados, contextos, listas, imutabilidade, propriedades, componentes e chaves. Aproveitei a biblioteca radix-ui para trabalhar com o React Primitive, especificamente para o componente de modal, o que melhorou a flexibilidade, reutilização e acessibilidade. Além disso, priorizei a componentização e utilizei TypeScript para melhorar a organização do projeto e prevenir erros.',
    tools: [
      'React.js',
      'TypeScript',
      'Vite',
      'radix-ui',
      'phosphor-react',
      'styled-components',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://maricastroc-interactive-post-comments.netlify.app/',
  },
  {
    id: 3,
    title: 'Github Blog',
    images: [
      {
        first: '/assets/projects/github_blog/img_1.png',
        second: '/assets/projects/github_blog/img_2.png',
        third: '/assets/projects/github_blog/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['TypeScript', 'React.Js'],
    summary:
      'O projeto consiste em um website que exibe os repositórios de um usuário do GitHub, oferecendo informações detalhadas para cada um. A aplicação possui uma seção de perfil do usuário com dados relevantes obtidos da API do GitHub, uma lista de repositórios com funcionalidade de filtragem e detalhes abrangentes dos repositórios, como data de criação, distribuição de linguagens, link da página inicial e exibição do conteúdo do README.',
    details:
      'Durante este projeto, concentrei-me em aprimorar minha compreensão de como passar parâmetros por meio das rotas da aplicação. Utilizei com sucesso a biblioteca axios para lidar com as requisições à API e adquiri uma experiência valiosa na implementação de filtros de pesquisa. Além disso, aproveitei o poder das bibliotecas react-markdown e react-syntax-highlighter para converter os arquivos README do GitHub para o formato HTML e destacar a sintaxe do código dentro dos blocos de texto',
    tools: [
      'React.js',
      'TypeScript',
      'Vite',
      'font-awesome',
      'react-markdown',
      'react-syntax-highlighter',
      'styled-components',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://maricastroc-github-blog.netlify.app/',
  },
  {
    id: 4,
    title: 'Art Galleria',
    images: [
      {
        first: '/assets/projects/art_galleria/img_1.png',
        second: '/assets/projects/art_galleria/img_2.png',
        third: '/assets/projects/art_galleria/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['JavaScript', 'React.js'],
    summary:
      'Este projeto de slideshow de galeria de arte, desenvolvido usando ReactJS, apresenta um layout em estilo masonry e oferece uma apresentação de slides com visualização em lightbox. Os usuários podem desfrutar de um layout responsivo e experimentar estados interativos ao passar o cursor sobre as imagens. Eles podem navegar pelo slideshow para visualizar cada pintura em um lightbox, proporcionando uma experiência de visualização aprimorada.',
    details:
      'Este projeto envolveu o trabalho com ReactJS e a implementação de conceitos-chave como estados, imutabilidade, propriedades, componentes, contexto e chaves. Recursos de design, como layout em estilo masonry, apresentação de slides e visualização em lightbox, foram incorporados, priorizando o design responsivo com a abordagem Mobile First. Além disso, o React Router DOM foi utilizado para passar parâmetros entre as rotas, permitindo a criação de uma galeria na página inicial com rotas separadas para exibir detalhes específicos de cada pintura.',
    tools: [
      'React.js',
      'JavaScript',
      'Vite',
      'CSS modules stylesheet',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://maricastroc-galleria-slideshow.netlify.app/',
  },
  {
    id: 5,
    title: 'Planets Fact',
    images: [
      {
        first: '/assets/projects/planets_fact/img_1.png',
        second: '/assets/projects/planets_fact/img_2.png',
        third: '/assets/projects/planets_fact/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['TypeScript', 'React.js'],
    summary:
      'Neste projeto, criei um website informativo com 8 páginas sobre os planetas do nosso sistema solar. Os usuários podem desfrutar de um layout responsivo e experimentar estados interativos ao passar o cursor sobre os elementos. Cada planeta possui sua própria página dedicada com abas para alternar entre Visão Geral, Estrutura Interna e Geologia da Superfície, para informações detalhadas.',
    details:
      'Com esta aplicação, adquiri experiência prática na construção de um carrossel utilizando o hook useEmblaCarousel. Além disso, pratiquei várias funcionalidades do ReactJS, incluindo styled-components, contexts, reducers e roteamento com o React Router DOM. O uso do TypeScript melhorou a organização dos arquivos do projeto e ajudou a prevenir erros.',
    tools: [
      'React.js',
      'TypeScript',
      'Vite',
      'phosphor-react',
      'embla-carousel',
      'styled-components',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://maricastroc-planets-fact-site.netlify.app/',
  },
  {
    id: 6,
    title: 'Coffee Delivery',
    images: [
      {
        first: '/assets/projects/coffee_delivery/img_1.png',
        second: '/assets/projects/coffee_delivery/img_2.png',
        third: '/assets/projects/coffee_delivery/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['TypeScript', 'React.js'],
    summary:
      'Esse projeto fornece uma interface amigável para gerenciar o carrinho de compras de uma cafeteria fictícia, permitindo que os clientes selecionem e acompanhem facilmente os itens desejados, além de fornecer uma maneira conveniente de calcular o valor total de sua compra.',
    details:
      'Neste projeto, adquiri experiência prática com styled-components, contexts, reducers, immer, roteamento usando React Router DOM, React Hook Form e validação de formulários usando zod com hookform/resolvers. Também utilizei hooks como useDebounce e useMemo. Além disso, criei um hook personalizado useLocation usando a API de Geolocalização para obter a localização do usuário.',
    tools: [
      'React.js',
      'TypeScript',
      'Vite',
      'lottie-react',
      'phosphor-react',
      'react-geolocated',
      'react-hook-form',
      'styled-components',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://maricastroc-coffee-delivery.netlify.app/',
  },
  {
    id: 7,
    title: 'Devfinder',
    images: [
      {
        first: '/assets/projects/search_github/img_1.png',
        second: '/assets/projects/search_github/img_2.png',
        third: '/assets/projects/search_github/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['TypeScript', 'React.js'],
    summary:
      'Esta aplicação permite buscar e listar usuários do GitHub pelo nome. Os resultados da busca são apresentados como cartões clicáveis, oferecendo a opção de visitar diretamente a página do usuário no GitHub ou navegar para uma rota separada que fornece informações mais abrangentes sobre o usuário selecionado.',
    details:
      'Neste projeto, tive a oportunidade de praticar o trabalho com rotas no React, aprimorando a habilidade de passar parâmetros entre diferentes rotas dentro da aplicação. Priorizei a componentização e utilizei TypeScript para aprimorar a organização do projeto e minimizar erros.',
    tools: [
      'React.js',
      'TypeScript',
      'Vite',
      'phosphor-react',
      'Github API',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://maricastroc-search-github-user.netlify.app/',
  },
  {
    id: 8,
    title: 'Coffee Roasters',
    images: [
      {
        first: '/assets/projects/coffee_roasters/img_1.png',
        second: '/assets/projects/coffee_roasters/img_2.png',
        third: '/assets/projects/coffee_roasters/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['JavaScript', 'React.js', 'SCSS'],
    summary:
      'Coffee Rosters é um website de 3 páginas que apresenta uma seção interativa de montagem do pedido. Os usuários podem desfrutar de um layout otimizado e responsivo, experimentar estados de hover para elementos interativos e criar seu pedido a partir de seleções de diferentes atributos. Eles também podem visualizar um modal de resumo do pedido que reflete as escolhas feitas.',
    details:
      'Neste primeiro projeto em grande escala, enfrentei desafios relacionados ao estilo e à responsividade. Ao utilizar o pré-processador SASS, melhorei a legibilidade do código. A implementação da abordagem Mobile First foi crucial para adaptar o layout e as funcionalidades a diversos dispositivos, garantindo uma ótima experiência do usuário. Priorizei um código limpo e organizado durante todo o processo de desenvolvimento.',
    tools: [
      'HTML-Semantic-Markup',
      'JavaScript',
      'SASS',
      'ESLint',
      'Prettier',
      'Mobile-first-workflow',
    ],
    preview: 'https://maricastroc-coffeeroasters-page.netlify.app/',
  },
  {
    id: 9,
    title: 'Dictionary',
    images: [
      {
        first: '/assets/projects/dictionary_web/img_1.png',
        second: '/assets/projects/dictionary_web/img_2.png',
        third: '/assets/projects/dictionary_web/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front End Development'],
    languages: ['TypeScript', 'React.js'],
    summary:
      'Esta é uma aplicação web de dicionário baseada em ReactJS que utiliza a Dicionary API. Ela oferece recursos como busca de palavras, exibição das respostas da API, validação de formulário, reprodução de áudio, personalização de fontes e temas, layout responsivo e feedback interativo dos elementos.',
    details:
      'Neste projeto, tive a oportunidade de exercitar a componentização com ReactJS ao máximo, tornando a aplicação mais legível e facilitando sua manutenção. Também utilizei styled-components, priorizando as melhores práticas para controlar o comportamento de um componente. O uso do TypeScript foi fundamental para controlar a tipagem das propriedades utilizadas para comunicação entre os componentes.',
    tools: [
      'React.js',
      'TypeScript',
      'Vite',
      'phosphor-icons',
      'styled-components',
      'ESLint',
      'Prettier',
    ],
  },
]
