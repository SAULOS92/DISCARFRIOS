import { Component, OnInit } from '@angular/core';
import { UsersService } from "../servicios/firebase/users.service";

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.page.html',
  styleUrls: ['./resetpassword.page.scss'],
})
export class ResetpasswordPage implements OnInit {

  constructor(public authService: UsersService) { }

  ngOnInit() {
  }

}
