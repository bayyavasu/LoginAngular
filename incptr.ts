import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";

export class OurInterceptor implements HttpInterceptor {


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    var modifiedReq=null;

        console.log("inn");
        if(req.url.startsWith("http://localhost:4010/oauth/token?"))
        {
         modifiedReq = req.clone({ 
            headers: req.headers.set('Authorization', "Basic " + btoa("slokamTech" + ":" + "tech"))
            //"Basic " + btoa("slokamTech" + ":" + "tech"))
          });
        }
        else
        {

            const token=localStorage.getItem('token');
            console.log(token);
            modifiedReq=req.clone({

                 
                headers:req.headers.set('Authorization', "Bearer " +token),
            })  
        }       
           return next.handle(modifiedReq);
    }
}
