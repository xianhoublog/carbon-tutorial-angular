import { Component, OnInit ,HostBinding, Input} from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @HostBinding('class.bx--header') headerClass = true;
// for angular carbon icon
  @Input() size!: string;

  ngOnInit(): void {
  }

}
