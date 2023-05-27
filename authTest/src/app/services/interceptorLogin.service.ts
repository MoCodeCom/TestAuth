import { HttpEventType, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { tap } from "rxjs";

export class interceptorLogin implements HttpInterceptor{

    //Http Interceptor for other inerceptor

    intercept(req: HttpRequest<any>, next: HttpHandler){
        //alert('the url is: '+ req.url);
        //console.log('Outcoming requset');

        return next.handle(req).pipe(tap(event =>{
            if(event.type === HttpEventType.Response){
                //console.log('Incoming response');
            }
        }));
    }

}