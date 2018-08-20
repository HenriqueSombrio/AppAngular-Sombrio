import {Response} from '@angular/http'
//import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'
//import { Observable } from 'rxjs/add/observable/throw'

export class ErrorHandler{
    static handleError (error: Response | any){
    let errorMessage: string
    if (error instanceof Response){
        errorMessage = `Erro ${error.status}ao acessar URL ${error.statusText}`
    }else{
        errorMessage = error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)
    }
}