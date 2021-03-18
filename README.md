# ERIKS Digital Tech Assignment

### Running the app
 - Run `yarn install`
 - Ensure there's a `.env` file based on `.env.example`
 - Run `yarn start`

### Available actions
`yarn build` - Generates a static bundle from the site in the folder `./dist`.  
`yarn start` - Serves the project in watch mode at `localhost:8080`.  
`yarn test:unit` - Runs unit tests.  
`yarn lint` - Scans the source code with ESLint.  
`yarn lint:fix` - Scans the source code with ESLint and fixes some mistakes.  

#### Dev features
 - Component architecture based in atomic design principles.
 - Custom webpack bundle.
 - IE 11 polyfills for `Promise` and `fetch`.
 - Styled components.
 - Testing with Jest.
 - Lazy loaded images via react-lazyload.
 - Stateful hot reload via React Fast Refresh.
 - Simple CI via Github Actions. (Build / Test / Lint)
 - API base structure ready for scaling. Uses `fetch`, but can be easily replaced with `axios`.
 - Abstract env variables for different environments via dotenv.
