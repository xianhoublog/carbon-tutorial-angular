import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UIShellModule } from 'carbon-components-angular/ui-shell/ui-shell.module';

import { HeaderComponent } from './header.component';
import Notification16 from '@carbon/icons/es/notification/16';
import UserAvatar16 from '@carbon/icons/es/user--avatar/16';
import AppSwitcher16 from '@carbon/icons/es/app-switcher/16';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  TestBed.configureTestingModule({
    declarations: [HeaderComponent],
    imports: [UIShellModule]
  });
});
