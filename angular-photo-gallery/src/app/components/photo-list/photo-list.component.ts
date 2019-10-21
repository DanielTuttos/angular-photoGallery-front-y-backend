import { Component, OnInit } from '@angular/core';
import { PhotoService } from 'src/app/services/photo.service';
import { Photo } from 'src/app/interfaces/Photo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit {

  photos: Photo[] = [];

  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit() {

    this.photoService.getPhotos()
      .subscribe(data => {
        console.log(data);
        this.photos = data;
      }, error => console.log(error));

  }

  selectedCard(id: string) {
    //console.log(id);
    this.router.navigate(['/photos/', id]);
  }



}
