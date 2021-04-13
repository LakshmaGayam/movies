import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GenersService } from '../services/geners.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent implements OnInit {
  moviedId: number;
  movieDetails: any;
  language:string;
  constructor(private activatedRoute: ActivatedRoute,
    private genersService: GenersService) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.moviedId = +params['params']['id'];
      if (this.moviedId) {
        this.getMovieDetailsById()
      }
    })
  }

  getMovieDetailsById() {
    this.genersService.showMovieByMovieId(this.moviedId).subscribe((response) => {
      console.log(response);
      this.movieDetails = response;
      if(this.movieDetails) {
       this.language =  this.movieDetails.spoken_languages[0].name;
      }
    })
  }

}
