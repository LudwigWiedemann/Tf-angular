import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Order} from "../../../shared/order.model";



@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  @Output() dontShowdets = new EventEmitter<void>();
  @Input() order: Order;
  @Input() editOrder: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  dontShowDetails(){
    this.dontShowdets.emit();
  }

}
