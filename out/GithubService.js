"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var request = __importStar(require("request"));
var users_1 = require("./users");
var repo_1 = require("./repo");
var OPTIONS = {
    headers: {
        'user-agent': 'request',
    },
    json: true
};
var GitHubService = /** @class */ (function () {
    function GitHubService() {
    }
    GitHubService.prototype.getUser = function (username, callbak) {
        request.get('https://api.github.com/users/' + username, OPTIONS, function (error, repsponse, body) {
            var user = new users_1.User(body);
            callbak(user);
        });
    };
    GitHubService.prototype.getRepos = function (username, callback) {
        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS, function (error, reposonse, body) {
            var repos = body.map(function (rep) { return new repo_1.Repo(rep); });
            callback(repos);
        });
    };
    ;
    return GitHubService;
}());
exports.GitHubService = GitHubService;
