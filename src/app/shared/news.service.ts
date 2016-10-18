import { Injectable } from '@angular/core';

@Injectable()
export class NewsService {
  news = [
    {title:'Java Basel Success',
    text:'Tech event pushes Basel Business.',
    date:'3.1.2017'},
    {title:'Basel new Tech',
    text:'New Technology in Basel everywhere.',
    date:'2.1.2017'},
    {title:'Zürich Startups move to Basel',
    text:'More and more Zürich Startups move to Basel.',
    date:'1.1.2017'}
  ];

  constructor() { }

  getNews(): any[] {
    return this.news;
  }
}
