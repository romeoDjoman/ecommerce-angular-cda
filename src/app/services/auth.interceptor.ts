import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const jwt = localStorage.getItem('jwt');

    if (jwt) {
      const cloned = req.clone({
        headers: req.headers.set('Authorization', `Bearer ${jwt}`)
      });
      return next.handle(cloned);
    } else {
      return next.handle(req);
    }
  }
}
