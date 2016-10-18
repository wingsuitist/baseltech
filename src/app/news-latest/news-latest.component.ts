import { Component, OnInit } from '@angular/core';
import { NewsService } from '../shared/news.service';

@Component({
  selector: 'app-news-latest',
  templateUrl: './news-latest.component.html',
  styleUrls: ['./news-latest.component.css']
})
export class NewsLatestComponent implements OnInit {
  latestNews = {};

  constructor(private newsService: NewsService) { }

  ngOnInit() {
    this.latestNews = this.newsService.getNews()[0];
  }

}
