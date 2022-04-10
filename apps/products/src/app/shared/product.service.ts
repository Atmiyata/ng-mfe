import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export class ProductService {
    constructor(private http: HttpClient) { }

    getProducts():Observable<any>{
        return this.http.get('assets/data/products.json')
    }
}
