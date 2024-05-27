# THU Explorer
Travel planner app for 人机交互.\
![image](./figures/paperPrototype.drawio.png)

## ideas
### Information requirements
- coffee
- gym
- beautiful scenery
- nice sitting places
- canteens
- building numbers
- users added content (with vote if good or bad)

! with pictures

### Artefacts
Using a baidu 3d map\
![image](./figures/baiduMap.PNG)
with a 1km radius for THU, which popps up like seen here\
![image](./figures/animalCrossingjpg.jpg)
with extra images taken by us as can be seen here in this illustration\
![image](./figures/fancy_pic.png)


### dev instructions
1. install node.js https://nodejs.org/en/download
2. make sure this and npm is install by checking the console with
    > node -v\
npm -v
3. install electron with
>npm install electron --save-dev
4. install chatGPT plugin by:
>npm install --save openai
5. set openApi key
>setx OPENAI_API_KEY "your-api-key-here"
6. next steps:
>*Permanent setup:* To make the setup permanent, add the variable through the system properties as follows:\
Right-click on 'This PC' or 'My Computer' and select 'Properties'.
Click on 'Advanced system settings'.
Click the 'Environment Variables' button.
In the 'System variables' section, click 'New...' and enter OPENAI_API_KEY as the variable name and your API key as the variable value.

*Verification:* To verify the setup, reopen the command prompt and type the command below. It should display your API key: echo %OPENAI_API_KEY%