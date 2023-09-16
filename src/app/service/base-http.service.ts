import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export abstract class BaseHttpService<T> {
    constructor(protected url: string, protected http: HttpClient) { }

    findAll(skip: Number = 0, limit: Number = 100): Observable<T[]> {
        return this.http.get<T[]>(`${this.url}/all?skip=${skip}&limit=${limit}`);
    }

    findById(id: String): Observable<T> {
        return this.http.get<T>(`${this.url}/one?item_id=${id}`);
    }

    save(body: T) {
        return this.http.post<T>(this.url + "/create", body);
    }
}