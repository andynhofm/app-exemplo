import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTelaPage } from './nova-tela.page';

describe('NovaTelaPage', () => {
  let component: NovaTelaPage;
  let fixture: ComponentFixture<NovaTelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovaTelaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaTelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
