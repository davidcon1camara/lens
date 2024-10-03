import { Component, OnInit } from '@angular/core';
import { ObtenerService } from '../../servicios/obtener.service';
import { lentes } from '../../Interface/lentes';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  lentes: lentes[] = []; 
  constructor(private OService: ObtenerService) {}

 ngOnInit() {
    this.OService.getLentes().subscribe(data => {
      console.log(data);
      this.lentes = data.lentes; 
      console.log(this.lentes.length);
      console.log(this.lentes);
    });
  }
}
