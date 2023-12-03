import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from 'src/app/features/authentication/models/user';
import { AppSettings, defaults } from '../../app.config';

@Injectable({
  providedIn: 'root',
})
export class CoreService {

  isLoggedIn = false;
  isGenin = false;
  isSeinse = false;
  private userData: User = new User("null", 0, "null", "null", "null", "null");

  setUserData(data: User) {
    this.userData = data;
    this.isLoggedIn = true;
    if (data.grade == "1") this.isGenin = true;
    if (data.grade == "2") this.isSeinse = true;
  }

  getUserData() {
    return this.userData;
  }

  get notify(): Observable<Record<string, any>> {
    return this.notify$.asObservable();
  }

  private notify$ = new BehaviorSubject<Record<string, any>>({});

  getOptions() {
    return this.options;
  }

  setOptions(options: AppSettings) {
    this.options = Object.assign(defaults, options);
    this.notify$.next(this.options);
  }

  private options = defaults;

  getLanguage() {
    return this.options.language;
  }

  setLanguage(lang: string) {
    this.options.language = lang;
    this.notify$.next({ lang });
  }
}
