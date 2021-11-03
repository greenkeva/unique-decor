import { Component } from '@angular/core';
import { IDecor } from './decor';
import data from '../api/decor-list.json';


@Component({
  selector: 'pm-decor',
  templateUrl: './decor.component.html',
})

export class DecorComponent{
  pageTitle:string = 'List of Unique Decor Ideas'


}
