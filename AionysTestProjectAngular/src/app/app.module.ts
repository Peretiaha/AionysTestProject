import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoteComponent } from './note/note.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { StoreModule } from '@ngrx/store'; 
import { NoteReduser } from './reducers/note.reduser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { NoteModalComponent } from './note/note-modal/note-modal.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DeleteModalComponent } from './delete-modal/delete-modal.component';
import {ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSelectModule} from '@angular/material/select';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

export function HttpLoaderFactory( http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    NoteComponent,
    NoteModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDialogModule,
    HttpClientModule,
    MatSnackBarModule,
    StoreModule.forRoot({ notes: NoteReduser }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    StoreRouterConnectingModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
