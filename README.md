# api-mock-server
This project will create mock server from HAR file. HAR file contains API related information, this can be copied from chrome console
<br>
This mock server can be used in development, when your project calls multiple external APIs in that case it takes time to load file from server or sometime your external API does not work and you still have to continue your development work in that case you can use this api-mock-server.
<br>
Steps to use mock server
1. Open "Network" tab in chrome debugger 
2. Load your project with normal API calls
3. Right click on URL and click "Save as HAR with content". It will save all network call details in HAR file.
<img src="https://raw.githubusercontent.com/sirajpathan/test/master/2018_06_08_16_08_34_.png">
4. Save this file as "config.HAR" in root of "api-mock-server" project.
5. Run `node generateConfig.js <root_url>` (root_url can be https://stage.website.com) in root of this folder, to generate config data from HAR file
6. No run `node index.js` to run mock server.
7. Try hitting mock URL with postman localhost:9001/<sub-path for content>
<br><br>
Note:
This will only mock text data not image or something else.
