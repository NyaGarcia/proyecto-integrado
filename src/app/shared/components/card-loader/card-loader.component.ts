import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "card-loader",
  templateUrl: "./card-loader.component.html"
})
export class CardLoaderComponent implements OnInit {
  @Input() loop: number;
  @Input() height: number;

  constructor() {}

  ngOnInit() {}

  arrayOne(n: number): any[] {
    return Array(n);
  }
}
