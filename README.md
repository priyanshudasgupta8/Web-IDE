# Web-IDE
Submission for DVHacks III

## Inspiration
I was inspired by Codepen.io and I added some additional features such as 2 different types of debuggers and an in-progress console (TBF --> to be finished). My IDE also provides support for multiple users on their own PC so in this case my IDE is similar to VSCode.

## What it does
It is an online IDE where the user can write their own code (so far only HTML, CSS, JavaScript). The user will also get immediate output and error messages if any and this feature saves a lot of cumulative time for the user. My IDE also has a ddb or duck debugger where some speech recognition is used for making the user talk out the bugs they are facing. There is also a window in the bottom-left which serves as a console (TBF), a error output which is another form of a debugger tells you what the errors are.

## How I built it
I built it using React.js and codemirror. I also used VSCode for the development. I also used the CSS stylings from Wed-Dev Simplified's video : https://www.youtube.com/watch?v=wcVxX7lu2d4

## Challenges we ran into
I ran into a problem while trying to implement the SpeechRecognition however a react library saved me from that casualty. I also ran into a huge problem while trying to display the console and the errors (2nd type of debugger)

## Accomplishments that I'm proud of
- Having finished my first main hackathon
- Helping more people be interested in coding
- Instant output as **soon** as the code is written
- Error handling and output of error to the user for better understanding
- Incomplete code is usually highlighted (applies to mainly HTML) 
- UI

## What I learned
- How to work in a hackathon
- ML, Graph.js and so much more from the several workshops throughout the hackathon
- Usage of try & catch

## What's next for Web-IDE
- Several library support for main languages (JS, PY, C)
- Several users and username and password
- The console
- Support for more languages (C and **Python**) --> this feature is already being worked on and will be implemented as soon as the console is perfectly functioning.



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
