import { Injectable } from '@angular/core';

@Injectable()
export class MembersService {
  members = [
    {name: 'Doris', img:'https://pixabay.com/static/uploads/photo/2012/04/12/21/25/cat-30706_1280.png'},
    {name: 'James', img:'https://pixabay.com/static/uploads/photo/2014/04/03/00/35/leopard-308770_1280.png'},
    {name: 'Michelle', img:'https://pixabay.com/static/uploads/photo/2014/04/03/00/35/zebra-308769_960_720.png'},
    {name: 'Kathy', img:'https://pixabay.com/static/uploads/photo/2014/04/03/00/35/owl-308773_1280.png'},
  ];

  constructor() { }

  getMembers(): any[]{
    return this.members;
  }

}
