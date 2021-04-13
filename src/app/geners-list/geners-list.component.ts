import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GenersList } from '../Models/GenersList';
import { MovieByGenerId } from '../Models/MoviesByGnereId';
import { GenersService } from '../services/geners.service';

@Component({
  selector: 'app-geners-list',
  templateUrl: './geners-list.component.html',
  styleUrls: ['./geners-list.component.css']
})
export class GenersListComponent implements OnInit {
  genersList: GenersList[];
  moviesListByGnerId: MovieByGenerId[];
  generType:string;
  constructor(private genersService: GenersService ,
    private router: ActivatedRoute ,
    private route: Router) { }

  ngOnInit() {
    this.getListOfGeners();

  }


  getListOfGeners() {
    this.genersService.getGenersList().subscribe((response: any) => {
      if (response) {
        this.genersList = response.genres;
        if (this.genersList && this.genersList.length > 0) {
          this.getMoviessByGenerId(this.genersList[0].id)
        }
      }
    }, (error) => {
      console.log(error);
    })
  }

  /**
   * 
   * @param generId 
   */

  getMoviessByGenerId(generId: number) {
    if(generId && this.genersList.length > 0) {
     const generObj = this.genersList.find((rec) => +rec.id === +generId);
     if(generObj) {
       this.generType = generObj.name;
     }
    }
    this.genersService.getMoviesById(generId).subscribe((response: any) => {
      this.moviesListByGnerId = response.results;
    }, (error) => {
      console.log(error);
    })
  }

  /**
   * 
   * @param movieId 
   */
  goToMoveComponent(movieId: number) {
    this.route.navigate(['/movie/' + movieId]);
  }

}
