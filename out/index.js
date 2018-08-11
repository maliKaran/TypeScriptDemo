"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubService_1 = require("./GithubService");
console.log("Hello World");
//Request API lets me call rest APIs from node.js projecct
// Default API for this purpose is  http api    
if (process.argv.length < 3) {
    console.log("Please enter a  valid user");
}
else {
    var username = process.argv[2];
    var gh = new GithubService_1.GitHubService();
    gh.getUser(username, function (usercallbackRepoonse) {
        console.log(usercallbackRepoonse);
    });
    gh.getRepos(username, function (repoCall) {
        console.log(repoCall);
    });
}
