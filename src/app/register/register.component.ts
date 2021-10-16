import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  @Input() username : string;
  title : string;
  currentMsgToChild1 : string
 
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoHome(txt){

     this.title=txt.value;
    
    this.router.navigate(['exam',this.title]);  // define your component where you want to go
   
}

}
