import { Component, OnInit ,HostBinding} from '@angular/core';

// @HostBinding('class.bx--header') headerClass : Boolean;


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  ngOnInit(): void {
  }

}
