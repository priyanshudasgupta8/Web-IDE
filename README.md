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
