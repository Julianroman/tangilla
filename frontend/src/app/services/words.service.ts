import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WordsService {

  constructor(
    private connection:HttpClient
  ) { }

  parseText(text: string){
    const textForm = new FormData();
    textForm.append('text', text);
    return this.connection.post('http://localhost:3001/parse', textForm);
  }
}
