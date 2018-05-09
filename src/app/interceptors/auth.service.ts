import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest} from '@angular/common/http';
import {Observable} from "rxjs";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(){

  }
  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {
    const cloned = req.clone({
      headers:req.headers.set("Authorization","Token 111bb68520a5f7fe63fbd85325118c5f25e56d9e")
      // setHeaders: {
      //   Authorization: `Token 111bb68520a5f7fe63fbd85325118c5f25e56d9e`
      // }


    });
    return next.handle(cloned);

    // return next.handle(req);
  }
}
