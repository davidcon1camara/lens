import { Component, OnInit } from '@angular/core';
import { ObtenerService } from '../../servicios/obtener.service';
import { posts } from '../../Interface/posts';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.css'
})
export class PostsComponent implements OnInit {
  posts: posts[] = []; 
  constructor(private OService: ObtenerService){}

  ngOnInit() {
    this.OService.getPosts().subscribe(data => {
      this.posts = data.posts; 
    });
  }
}
