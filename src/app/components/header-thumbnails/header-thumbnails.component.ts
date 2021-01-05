import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-thumbnails',
  templateUrl: './header-thumbnails.component.html',
  styleUrls: ['./header-thumbnails.component.css']
})
export class HeaderThumbnailsComponent implements OnInit {

  @Input() card;

  constructor() { }

  ngOnInit(): void {
  }

}
