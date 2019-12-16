/* import { HttpClient } from "selenium-webdriver/http";
import { Injectable } from "@angular/core";
import { environment } from "@environments/environment";
import { switchMap } from 'rxjs/operators';

@Injectable()
export class Storage {
  constructor(private http: HttpClient) {}

  async getData(item: string) {
    if (await this.isDataInLocalStorage()) {
      return JSON.parse(localStorage.getItem(item));
    }

    return this.fetchDataFromServer();
  }

  private async isDataInLocalStorage() {
    return (
      (await this.isVersionUpdated()) && !!localStorage.getItem("contacts")
    );
  }

  private isVersionUpdated(item) {
    return this.getServerVersion(item).pipe(switchMap) 
    return localStorage.getItem("version") === version;
  }

  private getServerVersion(item) {
    return this.http.get<string>(`${environment.baseUrl}/${item}/version`);
  }
  private setLocalStorageVersion = async () => {
    localStorage.setItem("version", await this.getServerVersion());
  };

  private fetchDataFromServer = () => {
    this.setLocalStorageVersion();

    return this.httpService
      .get(ENDPOINTS.ALLCONTACTS)
      .then(contact => {
        localStorage.setItem("contacts", JSON.stringify(contact));
        return contact;
      })
      .catch(reason => {
        throw new Error(reason.message);
      });
  };
}  */
