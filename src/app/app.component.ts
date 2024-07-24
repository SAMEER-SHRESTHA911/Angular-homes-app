import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  selector: 'app-root',
  template: 
  `<main>
    <header class="brand-name">
      <img class ="brand-logo" src="/assets/logo.svg" alt ="logo" aria-hidden="true">
    </header>
    <section class="content">
      <router-outlet></router-outlet>
    </section>
  </main>`, 
  // `<h1>So Today we start Angular's Journey. Hi It's me Megumin, 
  // The foremost powerful Crimson Demon, Saikyo no Bakuretsu Mahoo</h1>
  // <img src= "assets/megumin.jpg" alt ="image">
  // `,
  styleUrls: ['./app.component.css'],
  imports: [HomeComponent,RouterModule,],
  
})
export class AppComponent {
  title = 'homes';
}
