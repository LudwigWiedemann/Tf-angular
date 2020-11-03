import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Bestellung} from "../../../shared/bestellung.model";



@Component({
  selector: 'app-bestellungs-details',
  templateUrl: './bestellungs-details.component.html',
  styleUrls: ['./bestellungs-details.component.css']
})
export class BestellungsDetailsComponent implements OnInit {
  @Output() dontShowdets = new EventEmitter<void>();
  @Input() dieseBestellung: Bestellung;
  @Input() editOrder: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  dontShowDetails(){
    this.dontShowdets.emit();
  }

}
