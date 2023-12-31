export const projectsDetailsEN = [
  {
    id: 0,
    title: 'Book Wise',
    images: [
      {
        first: '/assets/projects/book_wise/img_1.png',
        second: '/assets/projects/book_wise/img_2.png',
        third: '/assets/projects/book_wise/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'FullStack Development'],
    languages: ['TypeScript', 'Next.Js', 'Prisma'],
    summary:
      'The application consists of a book rating platform, where the reader can see recommendations from other readers and also make their own ratings of the books they have already read. Additionally, users can search for books by categories and check data about their reading history, such as the total number of pages and authors they have read. The app also features social authentication through a Google or GitHub account.',
    details:
      "The most challenging part of this project was creating routes and endpoints for interacting with the database. Since the registered data had many relationships among themselves, and there were some data that needed to be calculated in the request body, it required a well-thought-out logic to obtain them at times. I leveraged Next.js's server-side rendering feature, using getServerSideProps, to render database information on the server-side. Additionally, I used a seed.ts file to populate the database. NextAuth.js library was employed to implement social user authentication.",
    tools: [
      'Typescript',
      'Next.Js',
      'React.js',
      'NextAuth.js',
      'Prisma',
      'Stitches',
      'axios',
      'nookies',
      'date-fns',
      'font-awesome',
      'zod',
      'react-hook-form',
      'phosphor-react',
      'radix-ui',
      'react-toastify',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://book-wise-puce.vercel.app/',
  },
  {
    id: 1,
    title: 'Movie Mentor',
    images: [
      {
        first: '/assets/projects/movie_mentor/img_1.png',
        second: '/assets/projects/movie_mentor/img_2.png',
        third: '/assets/projects/movie_mentor/img_3.png',
      },
    ],
    categories: ['Interaction Design', 'Front-end Development'],
    languages: ['TypeScript', 'Next.Js', 'React.Js'],
    summary:
      'The application consists of a book rating platform, where the reader can see recommendations from other readers and also make their own ratings of the books they have already read. Additionally, users can search for books by categories and check data about their reading history, such as the total number of pages and authors they have read. The app also features social authentication through a Google or GitHub account.',
    details:
      "The most challenging part of this project was creating routes and endpoints for interacting with the database. Since the registered data had many relationships among themselves, and there were some data that needed to be calculated in the request body, it required a well-thought-out logic to obtain them at times. I leveraged Next.js's server-side rendering feature, using getServerSideProps, to render database information on the server-side. NextAuth.js library was employed to implement social user authentication.",
    tools: [
      'Typescript',
      'Next.Js',
      'React.js',
      'NextAuth.js',
      'NextSeo.js',
      'Stitches',
      'font-awesome',
      'phosphor-react',
      'ESLint',
      'Prettier',
    ],
    preview: 'https://maricastroc-entertainment-web-app.vercel.app/',
  },
  {
    id: 2,
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
      'This project is a marketplace application integrated with the Stripe API for product registration and checkout. It provides a simulated user experience from browsing the catalog to completing the checkout process, including dynamic redirection to a success page. Additional features have been developed, such as a custom API for supplying checkout details to Stripe.',
    details:
      'In my first Next.js project, I utilized FileSystem Routing for generating new routes and employed the Stitches style library for server-side rendering and pre-bundling. I learned how to handle getServerSideProps and getStaticProps functions and created a custom API to interact with Stripe for checkout. Additionally, I implemented an interactive carousel using the keen-slider library to showcase catalog products.',
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
    id: 3,
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
      'Here I developed an application that features a page with posts and dynamic comment sections. The app offers responsive design, hover states for interactive elements, the ability to create new posts, manage comments and replies with CRUD operations, and the option to upvote and downvote comments.',
    details:
      'In this project, I gained practical experience with ReactJS and utilized various concepts such as states, contexts, lists, immutability, properties, components, and keys. I leveraged the radix-ui library to work with React Primitive, specifically for the dialog component, which improved flexibility, reusability, and accessibility. Additionally, I prioritized componentization and employed TypeScript for better project organization and bug prevention.',
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
    id: 4,
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
      "I created a 3-page website that displays a GitHub user's repositories, offering detailed information for each one. The application features a user profile section with relevant data fetched from the GitHub API, a repository list with filtering functionality, and comprehensive repository details such as creation date, language distribution, homepage link, and README content display.",
    details:
      'During this project, I focused on enhancing my understanding of passing parameters through application routes. I successfully utilized the axios library to handle API requests and gained valuable experience in implementing search filters. Additionally, I leveraged the power of react-markdown and react-syntax-highlighter libraries to convert GitHub readme files into HTML format and beautifully highlight code syntax within text blocks.',
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
    id: 5,
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
      "This Art gallery slideshow project, developed using ReactJS, features a masonry layout and offers a slideshow presentation with a lightbox view. Users can enjoy an optimal layout based on their device's screen size and experience interactive hover states. They can navigate through the slideshow to view each painting in a lightbox for a better viewing experience.",
    details:
      'This project involved working with ReactJS and implementing key concepts like states, immutability, properties, components, context, and keys. Design features such as masonry layout, slideshow presentation, and lightbox view were incorporated, prioritizing responsive design using a Mobile First approach. Additionally, React Router DOM was utilized to pass parameters between routes, allowing for a gallery on the Home page with separate routes displaying specific painting details.',
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
    id: 6,
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
      "In this project, I created an informative 8-page website about the planets in our solar system. Users can enjoy an optimal layout based on their device's screen size and experience interactive hover states. Each planet has its own dedicated page with tabs to toggle between Overview, Internal Structure, and Surface Geology for detailed information.",
    details:
      'With this application, I gained hands-on experience building a carousel using the useEmblaCarousel hook. Additionally, I practiced various ReactJS features including styled-components, contexts, reducers, and routing with React Router DOM. Working with TypeScript improved the organization of project files and helped prevent bugs.',
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
    id: 7,
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
      'Overall, the project aimed to provide a user-friendly interface for managing the shopping cart of a fictional coffee shop, allowing customers to easily select and track their desired items, as well as providing a convenient way to calculate the total value of their purchase.',
    details:
      "In this project, I gained hands-on experience with styled-components, contexts, reducers, immer, routing using React Router DOM, React Hook Form, and form validation using zod with hookform/resolvers. I also utilized hooks like useDebounce and useMemo. Additionally, I created a custom useLocation hook using the Geolocation API to retrieve the user's location.",
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
    id: 8,
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
      "This application allows you to search and list GitHub users by their name. The search results are presented as clickable cards, offering the option to either visit the user's GitHub page directly or navigate to a separate route that provides more comprehensive information about the selected user.",
    details:
      'In this project, I had the opportunity to practice working with routes in React, mastering the skill of passing parameters between different routes within the application. I emphasized componentization and utilized TypeScript to enhance project organization and minimize bugs. It was an excellent exercise that contributed to my development skills.',
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
    id: 9,
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
      "Coffee Rosters Landing Page is a 3-page website featuring an interactive subscription section. Users can enjoy an optimal layout based on their device's screen size, experience hover states for interactive elements, and create a coffee subscription by making selections. They can also view an order summary modal that reflects their choices.",
    details:
      'In this first large-scale project, I faced challenges related to styling and responsiveness. By utilizing the SASS preprocessor, I improved code readability. Implementing a Mobile First approach was crucial in adapting the layout and functionalities to various devices, ensuring a seamless user experience. Despite the challenges, I prioritized clean and organized code throughout the development process.',
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
    id: 10,
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
      'This is a ReactJS-based Dictionary Web App that utilizes the Dictionary API. It offers features such as word search, displaying API responses, form validation, audio playback, font and theme customization, responsive layout, and interactive element feedback.',
    details:
      "In this project, I had the opportunity to exercise componentization with ReactJS to the fullest, making the application more readable and facilitating its maintenance. I also made use of styled-components, favoring adherence to best practices for controlling a component's behavior. The use of TypeScript was essential to control the typing of properties used for communication between components.",
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
