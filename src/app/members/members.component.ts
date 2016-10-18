import { Component, OnInit } from '@angular/core';

import { MembersService } from '../shared/members.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  members: any[] = [];

  constructor(private membersService: MembersService) { }

  ngOnInit() {
    this.members = this.membersService.getMembers();
  }

}
