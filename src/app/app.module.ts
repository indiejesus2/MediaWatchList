import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CategoryListPipe } from './category-list.pipe';
import { FavoriteDirective } from './favorite.directive';
import { MediaItemListComponent } from './media-item-list.component';
import { MediaItemComponent } from './media-item.component';

@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryListPipe
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}