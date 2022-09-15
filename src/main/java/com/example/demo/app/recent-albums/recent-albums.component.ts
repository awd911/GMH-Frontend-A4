import { Component, OnInit } from '@angular/core';
import { AlbumserviceService } from '../albumservice.service';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-recent-albums',
  templateUrl: './recent-albums.component.html',
  styleUrls: ['./recent-albums.component.css']
})
export class RecentAlbumsComponent implements OnInit {


  constructor(private albumService: AlbumserviceService){ }

  ngOnInit(): void {
      this.albumService.getAllAlbums().subscribe(
        response => {
          console.log("Got All Album response! ", response)
        }
      )
  }
  // constructor(private photoService: PhotoService) { }

  // ngOnInit(): void {
  //   this.photoService.getAllPhotos().subscribe(
  //     response => {
  //       console.log("Got all photos response!",response);
  //     }
  //   );
  // }



}
