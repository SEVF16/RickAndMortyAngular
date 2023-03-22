import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailcharacterComponent } from './detailcharacter.component';

describe('DetailcharacterComponent', () => {
  let component: DetailcharacterComponent;
  let fixture: ComponentFixture<DetailcharacterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailcharacterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailcharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
