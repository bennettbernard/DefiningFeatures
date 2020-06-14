import { Component, OnInit } from '@angular/core';
import { Movie } from '../../movie';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {

  movies: Movie[] = [{
    id: 1,
    title: "Star Wars",
    attr:[1]
  },
  {
    id: 2,
    title: "Harry Potter",
    attr:[2,1]
  }]
  constructor() { }

  ngOnInit(): void {
  }

}
