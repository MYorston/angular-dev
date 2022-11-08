import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { TabsComponent } from './tabs/tabs.component';
import { ListComponent } from './list/list.component';
import { ItemsComponent } from './items/items.component';
import { StarWarsService } from './star-wars.service';
import { CreateCharacterComponent } from './create-character/create-character.component';
import { HeaderComponent } from './header/header.component';

const routes: Routes = [
  { path: 'characters', component: TabsComponent, children: [
      { path: '', redirectTo: 'all', pathMatch: 'full' },
      { path: ':side', component: ListComponent }
    ]
  },
  { path: 'new-character', component: CreateCharacterComponent },
  { path: '**', redirectTo: '/characters' }
];

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    ListComponent,
    ItemsComponent,
    CreateCharacterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [StarWarsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
