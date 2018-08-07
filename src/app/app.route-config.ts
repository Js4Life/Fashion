import { Router } from "@angular/router";
import { Injectable } from "@angular/core";

@Injectable()
export class AppRouteConfig  {
    constructor(public router:Router) {}

    gotoPage(state) {
        this.router.navigate(['./' + state]);
    }
}