import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrls: ['./news-detail.component.css']
})
export class NewsDetailComponent implements OnInit {
  @Input()
  news = {};

  constructor() { }

  ngOnInit() {
  }

}
