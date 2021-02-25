import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-viewBook',
  templateUrl: './viewBook.component.html',
  styleUrls: ['./viewBook.component.scss']
})
export class ViewBookComponent implements OnInit {

  constructor() { }
  bookList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  ngOnInit() {
  }

}
