import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { delay} from "rxjs/operators";
import * as Login from 'src/assets/mocks/login.json';
import * as AllUserBooks from 'src/assets/mocks/allUserBooks.json';
import * as UserData from 'src/assets/mocks/userData.json';



@Injectable({
    providedIn: 'root'
})


export class MockUtils {

    public mockResponse(callParams: any, delayMs = 800): Observable<any>{
        const mockResponse = this.getMockResponse(callParams) || {};
        console.log('mock response created for: '+callParams);
        return of(mockResponse).pipe(delay(delayMs))
    }

    private getMockResponse(callParams: any) {
        switch (callParams.serviceName) {
            case 'login':
                return Login;
            case 'get-all-user-books':
                return AllUserBooks;
            case 'get-user-data':
                return UserData;    
        }
        return null;
    }
}