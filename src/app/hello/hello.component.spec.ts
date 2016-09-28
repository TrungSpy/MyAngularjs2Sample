/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { HelloComponent } from './hello.component';
import { MessageService } from '../message.service'

describe('Component: Hello', () => {
  it('should create an instance', () => {
    let service = new MessageService();
    let component = new HelloComponent(service);
    expect(component).toBeTruthy();
  });
});
