import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-input',
  templateUrl: './excel-input.component.html',
  styleUrls: ['./excel-input.component.css']
})
export class ExcelInputComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  loadExcel() {
    localStorage.setItem('toast_on_reload_message', "Wczytano plik pomyślnie");
    localStorage.setItem('toast_on_reload_color', 'green darken-4');
    window.location.reload();
  }

}
