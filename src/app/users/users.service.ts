import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

export interface IUser {
    login: string;
    avatar_url: string;
    repos_url: string;
    gists_url: string;
}

@Injectable()
export class UsersService {

    constructor(private http: HttpClient) { }

    getUsers(): Observable<IUser[]> {
        return this.http.get<IUser[]>('https://api.github.com/users')
    }
}