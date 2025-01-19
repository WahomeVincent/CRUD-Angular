import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; // <-- Import this



@Component({
  selector: 'app-list',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  fruits: any[] = [];
  fruitObj: any = {
    "name": "",
    "price": "",
  }

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.fetchFruits();
  }

  fetchFruits(): void {
    this.apiService.getFruits().subscribe((data) => {
      this.fruits = data;
    });
  }

  addFruit() {
    this.apiService.addFruit(this.fruitObj).subscribe(() => {
      this.fruitObj=''; //clears the input box
      this.fetchFruits();//fetches the data again
    })
  }

  deleteFruit(id: number): void {
    this.apiService.deleteFruit(id).subscribe(() => {
      this.fetchFruits();
    });
  }

}
