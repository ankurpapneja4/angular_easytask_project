import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  username = "FooBar"
  avatar = "user-1.jpg"; 

  get avatarImageUrl() {
    return 'assets/users/'+this.avatar;
  }

  onSelectUser() {
    console.log("User Selected");
  }
}
