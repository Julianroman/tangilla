import { Component, OnInit } from '@angular/core';
import {WordsService} from "../../services/words.service";
import {Synonyms} from "../../word";

@Component({
  selector: 'app-textinput',
  templateUrl: './textinput.component.html',
  styleUrls: ['./textinput.component.css'],
  providers: [WordsService]
})
export class TextinputComponent implements OnInit {

  text?: string;
  isVisible = false;
  wordsParsed : Synonyms[] = [];
  isDisabled = true;
  hasToRefresh = false;

  constructor(
    public wordService: WordsService
  ) { }

  ngOnInit(): void {
  }

  parseText() : void {
    if(this.text){
      this.wordService.parseText(this.text).subscribe(
        (data) => {
          if(data){
            // @ts-ignore
            this.wordsParsed = data;
            this.isVisible = true;
          }
        }
      );
    }
  }

  clearTextBoxArea() {
    this.text = '';
    this.isVisible = false;
    this.hasToRefresh = false;
  }

}
