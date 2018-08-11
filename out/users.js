"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(userInfo) {
        this.Login = userInfo.login;
        this.FullName = userInfo.name;
        this.repoCount = userInfo.public_repos;
        // this.repos=userInfo.
    }
    return User;
}());
exports.User = User;
