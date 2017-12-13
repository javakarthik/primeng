import { Injectable } from "@angular/core";

import { Http, Response, Headers } from "@angular/http";

@Injectable()
export class DirecttvApiService {
  REQUEST_PROFILE = "/assets/profile-data.json";

  REQUEST_AGREEMENTS = "/assets/agreement-data.json";

  REQUEST_ACCOUNTS = "/assets/account-data.json";

  constructor(private http: Http) {}

  GETPROFILE_DATA(): any {
    return this.http.get(this.REQUEST_PROFILE);
  }

  GETAGREEMENT_DATA(): any {
    return this.http.get(this.REQUEST_AGREEMENTS);
  }

  GETACCOUNT_DATA(): any {
    return this.http.get(this.REQUEST_ACCOUNTS);
  }
}
