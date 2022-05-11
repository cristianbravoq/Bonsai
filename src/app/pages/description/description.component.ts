import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-description',
  templateUrl: './description.component.html',
  styleUrls: ['./description.component.css']
})
export class DescriptionComponent implements OnInit {

  musical: number = 40;
  colorProgressBar: ThemePalette = 'warn';
  ensayoValor: number = 78;
  
  constructor() { }
  ngOnInit(): void {
  }

}
