import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-list',
  imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  fruits: any[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchFruits();
  }

  fetchFruits(): void {
    this.apiService.getFruits().subscribe((data) => {
      this.fruits = data;
    });
  }

  deleteFruit(id: number): void {
    this.apiService.deleteFruit(id).subscribe(() => {
      this.fetchFruits();
    });
  }

}
