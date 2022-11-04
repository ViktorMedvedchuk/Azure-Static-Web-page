import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  template: `<div>Hello {{value}} to Setbuilder</div>`,
})
export class AppComponent {
  value = 'New';
  constructor(private http: HttpClient) {
    setTimeout(() => {
      this.getData().subscribe(
        data => {
          this.value = JSON.stringify(data)
        }
      )
    }, 2000);

  }

  getData() {
    const url = "https://dad-jokes.p.rapidapi.com/random/joke"
    const options: any = {
      'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
      'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    }
    return this.http.get(url, options)
  }


}
