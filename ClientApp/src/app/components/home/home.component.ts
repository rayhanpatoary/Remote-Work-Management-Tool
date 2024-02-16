import { Component, OnInit } from '@angular/core';
import { HomeService } from '../../services/home.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  message: string = '';

  constructor(private homeservice: HomeService ){}
  ngOnInit(): void {
    this.homeservice.getMessage().subscribe(
      data => this.message = data.message,
      error => console.error(error)
    );
  }
}
