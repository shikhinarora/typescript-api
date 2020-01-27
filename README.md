# typescript-api

Actually its in nodeJS :p

#### Steps to run
1. Run `npm i`
2. If you have aws vault setup then run `aws-vault exec <username> -- npm start`
3. Otherwise uncomment line 9-12 in aws.js and enter your aws credentials there. Now run `npm start`
4. Download postman requests from the repo and import in postman `postman.json`
5. In AWS, bucket name is `ap-southeast-1-user-bucket` and file name is `userData.json`
