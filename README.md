# Multiplayer Memory Tile Game

asdfzxcv

cd to frontend
npm install
npm start
cd to backend
npm install
npm run dev

what is React
react is a javascript library that is used to build dynamic and interactive websites. It allows devs to create reusable components, manage state and efficiently update the UI using a virtual DOM. the react code itself runs in the browser where it handles all frontend interactions.

What is Vite
Vite is a modern build tool - which means it compiles the jsx/js code into a format that browsers can run. Used for React and vue and such. During development Vite provides a fast dev server with hot module replacement, which means you can see changes instantly without reloading the entire page.

frontendtwo setup
npm install -g create-vite
allows you to install vite to run vite commands so that when you run npm run dev and look at the package.json file and see what the script is running its running vite which is the build tool to start the server
npm create vite@latest my-react-app -- --template react
this uses vites built in templates to create a setup

cd into frontendtwo and then my-react-app
npm install -g create-vite
npm install
npm run dev

EXPLANATION OF HOW A SERVER STARTS AND HOW IT USES THE index.html PAGE
when running "npm run dev" what is happening is that it is running a script. It looks inside of package.json and goes to "scripts" and looks at "dev". It then runs "vite". What vite does it essentially sets up the development server on your local port. By default the local port is 5173. It then passes the index.html file through that port. Inside of the index.html file is two lines of important code

<div id="root"></div>

this creates an empty box with the id="root"

<script type="module" src="/src/main.jsx"></script>

this is the actual line that runs the actual main.jsx script

Now if we look inside the main.jsx script we see

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

this line looks at the DOM and finds the tag where the id="root" and sets up a react root there. The DOM is the Document Object Model. It sets up a page almost like a upside down tree where the branches are html tags (<p>,<h>,<div>). There it actually renders the App.jsx file which is the main react function/component for the page

EXPLANATIONS OF HOW REACT COMPONENTS WORK