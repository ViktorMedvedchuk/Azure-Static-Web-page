import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<pre>Hello {{value }} to Setbuilder</pre>
  <button (click)="refresh()">refresh</button>
  `,
})
export class AppComponent {
  value = 'New';
  constructor(private http: HttpClient) {

  }

  getData() {
    const url = "https://dad-jokes.p.rapidapi.com/random/joke"
    const options = {
      headers: {
        'X-RapidAPI-Key': '6c495f4dccmsh2b1ab68060588d4p1919e1jsn5bc3533d1536',
        'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
      }
    }
    return this.http.get(url, options)
  }

  refresh() {
    setTimeout(() => {
      this.getData().subscribe(
        data => {
          this.value = JSON.stringify(data)
        }
      )
    }, 1000);
  }


}
