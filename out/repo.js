"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Repo = /** @class */ (function () {
    function Repo(repos) {
        this.name = repos.name;
        this.Description = repos.description;
        this.url = repos.html_url;
        this.size = repos.html_size;
    }
    return Repo;
}());
exports.Repo = Repo;
