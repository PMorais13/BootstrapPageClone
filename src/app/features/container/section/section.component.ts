import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  copiar(codeElement: HTMLElement): void {
    navigator.clipboard.writeText(codeElement.innerHTML);
  }
}
