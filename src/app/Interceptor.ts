import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpHeaders,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './Services/auth.service';

@Injectable()
export class Interceptor implements HttpInterceptor {
    constructor(private authService: AuthService){}
    intercept(
        request: HttpRequest<any>, 
        next: HttpHandler): Observable<HttpEvent<any>> {
            const token: any = this.authService.gettoken()
            const headers = new HttpHeaders()
                .set('Authorization', token);
            const AuthRequest = request.clone({headers: headers});
            return next.handle(AuthRequest)
    }
}