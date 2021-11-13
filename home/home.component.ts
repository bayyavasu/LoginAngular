import { Component, OnInit } from '@angular/core';
import { ShareService } from '../share.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  public roles!:string[]
  constructor(private shareServ:ShareService) { }

  ngOnInit(): void {
    this.shareServ.getRole().subscribe(
      (data)=>{console.log(data);
      this.roles=data;
    },
      (error)=>{console.log(error)}
    )
  }

}
