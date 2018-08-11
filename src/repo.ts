export class Repo
{
name:string;
Description:string;
url:string;
size:string;

constructor(repos:any)
{
    this.name=repos.name;
    this.Description=repos.description;
    this.url=repos.html_url;
    this.size=repos.html_size;
}
}