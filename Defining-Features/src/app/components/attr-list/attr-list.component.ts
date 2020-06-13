import { Component, OnInit } from '@angular/core';
import { Attr } from '../../attr';

@Component({
  selector: 'app-attr-list',
  templateUrl: './attr-list.component.html',
  styleUrls: ['./attr-list.component.css']
})
export class AttrListComponent implements OnInit {

  attribute: Attr = {
    id: 1,
    name: "Attribute1"
  }
  constructor() { }

  ngOnInit(): void {
  }

}
