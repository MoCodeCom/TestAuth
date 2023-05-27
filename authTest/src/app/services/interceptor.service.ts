import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";

//to add some changes or action for HTTP requst by using interceptor pattern in JS/TS
export class AuthInterceptorService implements HttpInterceptor{
    intercept(req: HttpRequest<any>, next: HttpHandler){
        //console.log('test interceptor http...');
        //console.log(req.url);
        const modifiedReq = req.clone({ headers: req.headers.append('auth','xyz') });
        return next.handle(modifiedReq);
    }

// the order is important when we make multi interceptor, we can control with the order in the module provide sections.
    
}