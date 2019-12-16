import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { Category } from "@shared/interfaces/category.interface";
import { categoryRoute } from "@shared/constants/main.constants";

@Component({
  selector: "image-card",
  templateUrl: "./image-card.component.html",
  styleUrls: ["./image-card.component.css"]
})
export class ImageCardComponent implements OnInit {
  @Input() category: Category;
  @Output() clickEvent = new EventEmitter<Category>();

  background: string;

  constructor() {}

  ngOnInit() {
    this.background = `${categoryRoute}/${this.category.src}`;
  }

  emit() {
    this.clickEvent.emit(this.category);
  }
}
