import { Component, Inject } from '@angular/core';
import { Http } from '@angular/http';

@Component({
    selector: 'fetchdata',
    templateUrl: './fetchdata.component.html'
})
export class FetchDataComponent {
    public completenames: FullName[];

    constructor(http: Http, @Inject('BASE_URL') baseUrl: string) {
        http.get(baseUrl + 'api/SampleData/FullNames').subscribe(result => {
            this.completenames = result.json() as FullName[];
        }, error => console.error(error));
    }
}

interface FullName {
    summary: string;
    summary2: string
}
