import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenersService {

  constructor(private http : HttpClient) { }


  getGenersList() {
    const headers = new HttpHeaders();
    // headers.append('Authorization' , '68e82445c8842ba8616d0f6bf0e97a41');
    headers.append('Content-Type' , 'application/json;charset=utf-8')
    return this.http.get('https://api.themoviedb.org/3/genre/movie/list?api_key=68e82445c8842ba8616d0f6bf0e97a41', {headers : headers});
  }

/**
 * 
 * @param genreId 
 * @returns 
 */
  getMoviesById(genreId: number) {
    const headers = new HttpHeaders();
    // headers.append('Authorization' , '68e82445c8842ba8616d0f6bf0e97a41');
    headers.append('Content-Type' , 'application/json;charset=utf-8')
    return this.http.get('https://api.themoviedb.org/3/genre/' + genreId+ '/movies?api_key=68e82445c8842ba8616d0f6bf0e97a41', {headers : headers});
  }
/**
 * 
 * @param movieId 
 * @returns 
 */
  showMovieByMovieId(movieId:number) {
    const headers = new HttpHeaders();
    headers.append('Content-Type' , 'application/json;charset=utf-8')
    return this.http.get('https://api.themoviedb.org/3/movie/' + movieId+ '?api_key=68e82445c8842ba8616d0f6bf0e97a41', {headers : headers});
  }
}
