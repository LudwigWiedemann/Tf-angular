import { Component, OnInit, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onFeatureSelected = new EventEmitter<string>();
  onSelect(page: string){
    this.onFeatureSelected.emit(page);
  }
  ngOnInit(): void {
  }
}
