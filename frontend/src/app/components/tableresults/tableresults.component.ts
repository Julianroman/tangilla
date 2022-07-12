import {Component, Input, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import {Synonyms} from "../../word";
import {MatTable} from "@angular/material/table";
import {WordsService} from "../../services/words.service";

@Component({
  selector: 'app-tableresults',
  templateUrl: './tableresults.component.html',
  styleUrls: ['./tableresults.component.css']
})
export class TableresultsComponent implements OnInit {

  @Input() words? : Synonyms[];
  wordsToDisplay : any[] = [];

  @ViewChild(MatTable) table?: MatTable<any>;

  displayedColumns: string[] = ['Word', 'Count'];
  constructor(
    public wordService: WordsService,
  ) { }

  ngOnInit(): void {
    if(this.words && this.words.length > 0) this.words.map(w => this.wordsToDisplay.push(w));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(!changes['words'].firstChange){
      this.wordsToDisplay = [];
      this.wordsToDisplay = changes['words'].currentValue;
      this.table?.renderRows();
    }
  }

}
