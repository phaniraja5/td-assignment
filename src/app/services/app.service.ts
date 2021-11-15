import {Injectable} from "@angular/core";
import {Observable, of} from "rxjs";
import {catchError} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {User} from "../User";

@Injectable({
  providedIn: 'root',
})
export class AppService {

  private usersUrl = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl)
      .pipe(
        catchError(this.handleError<User[]>('getUsers', []))
      );
  }

  getUser(id: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.usersUrl}?id=${id}`)
      .pipe(
        catchError(this.handleError<User[]>('get user with id', []))
      );
  }

  updateUser(id: number, user: User): Observable<User> {
    return this.http.put<User>(`${this.usersUrl}/${id}`, user)
      .pipe(
        catchError(this.handleError<User>('get user with id', ))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      return of(result as T);
    };
  }

}
