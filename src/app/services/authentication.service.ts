import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { UserModel } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    private user?: UserModel;
    private sujet: BehaviorSubject<UserModel> = new BehaviorSubject<UserModel>(null);

    get user$(): Observable<UserModel> {
        return this.sujet.asObservable();
    }

    constructor() {
        if (sessionStorage.getItem('USER') != null) {
            this.user = JSON.parse(sessionStorage.getItem('USER') || '{}') as UserModel;
            this.sujet.next(this.user);
            console.log('init: changement détat');
        }
    }


    login(login: string, password: string): void {
        //appel serveur d'auth

        this.user = { login: login, name: 'Bob' };
        sessionStorage.setItem('USER', JSON.stringify(this.user));
        this.sujet.next(this.user);
        console.log('login: changement détat');
    }

    logout(): void {
        this.user = undefined;
        sessionStorage.removeItem('USER');
        this.sujet.next(undefined);
    }
}