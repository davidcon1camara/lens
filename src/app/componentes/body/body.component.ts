import { Component, OnInit } from '@angular/core';
import { ObtenerService } from '../../servicios/obtener.service';
import { lentes } from '../../Interface/lentes';
import { CommonModule } from '@angular/common';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ModalComponent } from '../modal/modal.component';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [CommonModule,
            MatTableModule, 
            MatPaginatorModule],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent implements OnInit {
  lentes: lentes[] = []; 
  displayedColumns: string[] = ['marca', 'montura', 'nombre', 'precio'];
  dataSource = new MatTableDataSource<lentes>(this.lentes);
  visible: boolean = false;
 
  constructor(private OService: ObtenerService,
              public dialog:MatDialog) {}

 ngOnInit() {
    this.OService.getLentes().subscribe(data => {
      this.lentes = data.lentes; 
      this.dataSource = new MatTableDataSource<lentes>(this.lentes);
    });
  }

  openModal() {
    this.dialog.open(ModalComponent, {
      data: {
        animal: 'panda',
      },
    });
  }
  restablecer(){}
}
