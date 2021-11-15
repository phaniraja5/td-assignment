import {Component, OnInit} from '@angular/core';
import {AppService} from "./services/app.service";
import {takeUntil} from "rxjs/operators";
import {User} from "./User";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
}
