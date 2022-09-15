import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  title = 'Profile Page Title';

  imageUrl = 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png';

  viewCount = 0;

  name = 'Tom';

  list = ["Item 1", "Item 2", "Item 3"];

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount(){
    this.viewCount ++;
  }

}
