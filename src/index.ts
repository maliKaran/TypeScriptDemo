import { GitHubService } from './GithubService'
import { User } from './users';
import { Repo } from './repo';

console.log("Hello World")
//Request API lets me call rest APIs from node.js projecct
// Default API for this purpose is  http api    

if (process.argv.length < 3) {
    console.log("Please enter a  valid user");
}
else {
    let username=process.argv[2];
    let gh = new GitHubService();
    gh.getUser(username, (usercallbackRepoonse: User) => {
        console.log(usercallbackRepoonse);
    });

    gh.getRepos(username, (repoCall: Repo[]) => {

        console.log(repoCall);
    })
}