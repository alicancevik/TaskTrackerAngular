import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  isLoggedIn = false;

  constructor(private localStorageService:LocalStorageService) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.localStorageService.get("access-token");

    console.log("sidebar > this.isLoggedIn");
    console.log(this.isLoggedIn);
  }

}
