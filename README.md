# THU Explorer
A travel planner app for human-computer interaction.

## About the THU Explorer
The THU Explorer is an Android, iOS, and web app designed to assist students, teachers, and visitors in exploring our campus and learning about its features. Currently, it is just a demo, showcasing three campus buildings with interactive capabilities.

## Development Instructions
The app is developed using Ionic. Follow these instructions:
1. Install Node.js from https://nodejs.org/en/download.
2. Ensure Node.js and npm are installed by checking the console with:
   > node -v
   > npm -v
3. Install Ionic tooling by running:
   > npm install -g @ionic/cli native-run cordova-res
4. Install the ChatGPT plugin by:
   > npm install --save openai
5. Manually set the OpenAI API key in our project.
   *Verification:* To verify the setup, reopen the command prompt and type the command below. It should display your API key:
   > echo %OPENAI_API_KEY%

### Running it on Android
1. Run:
   > npx cap copy && npx cap sync
2. Run:
   > npx cap open android
For more information, refer to https://ionicframework.com/docs/deployment/play-store.

## Evaluation
We conducted a user study to assess the effectiveness of our app. The results indicate overall satisfaction with the gamified approach to learning about the campus. The link to our questionnaire is here: [Questionnaire Link](https://docs.google.com/forms/d/e/1FAIpQLSeoq0y1Ml81J3gZHEk9E7aBDIFcRCxoewFBuEOsgSindIUyUA/viewform?usp=sf_link).

The Mann-Whitney U test statistic is 29.5, and the p-value is 0.034, indicating a clear preference for our app over the native version.
