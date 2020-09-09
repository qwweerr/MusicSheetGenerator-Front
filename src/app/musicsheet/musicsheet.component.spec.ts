import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicsheetComponent } from './musicsheet.component';

describe('MusicsheetComponent', () => {
  let component: MusicsheetComponent;
  let fixture: ComponentFixture<MusicsheetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MusicsheetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MusicsheetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
