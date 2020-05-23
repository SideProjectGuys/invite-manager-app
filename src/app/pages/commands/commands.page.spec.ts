import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CommandsPage } from './commands.page';

describe('CommandsPage', () => {
  let component: CommandsPage;
  let fixture: ComponentFixture<CommandsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CommandsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
