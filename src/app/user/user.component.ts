import { Component } from '@angular/core';
import { UserList } from "../../UserData";

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = UserList[0].name;
  avatar = UserList[0].avatar; 

  get avatarImageUrl() {
    return 'assets/users/'+this.avatar;
  }

  onSelectUser() {
    let i = Math.floor(UserList.length * Math.random());
    this.username = UserList[i].name;
    this.avatar = UserList[i].avatar;
  }
}
