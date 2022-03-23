import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'bosch-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  redirectToHome(): void {
    this.router.navigate(['/home']);
  }

  redirectToSection(sec: string): void {
    this.router.navigate(['/home'], { fragment: sec });
  }

  redirectToProfile(): void {
    this.router.navigate(['/profile']).then();
  }

}
