import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-logine',
  templateUrl: './logine.component.html',
  styleUrls: ['./logine.component.css']
})
export class LogineComponent implements OnInit {

  constructor() { }



  ngOnInit() {
  }

  LogineUser(event){
    event.preventDefault()

    const target = event.target
    console.log(event)
  }


}
