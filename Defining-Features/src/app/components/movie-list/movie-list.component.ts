import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movie: Movie = {
    id: 1,
    title: "Star Wars",
    attr:[]
  }
  constructor() { }

  ngOnInit(): void {
  }

}
