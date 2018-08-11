import * as request from 'request'
import { User } from './users';
import { Repo } from './repo';

const OPTIONS: any = {
    headers: {
        'user-agent': 'request',
    },
    json: true
}

export class GitHubService {

    getUser(username: string, callbak: (user: User) => any) {

        request.get('https://api.github.com/users/' + username, OPTIONS, (error: any, repsponse: any, body: any) => {
            let user = new User(body);
            callbak(user);
        });
    }

    getRepos(username: string, callback: (repo: Repo[]) => any) {

        request.get('https://api.github.com/users/' + username + '/repos', OPTIONS, (error: any, reposonse: any, body: any) => {
            var repos = body.map((rep: any) => new Repo(rep));
            callback(repos);
        })
    };

}