import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // 追加

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule } from '@angular/fire'; // 追加
import { AngularFirestoreModule } from '@angular/fire/firestore'; // 追加
import { AngularFireAuthModule } from '@angular/fire/auth'; // 追加
import { AngularFireStorageModule } from '@angular/fire/storage'; // 追加
import { environment } from '../environments/environment'; // 追加

import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // 追加
// import { MatListModule, MatButtonModule, MatInputModule, MatToolbarModule, MatDividerModule, MatCardModule, MatIconModule } from '@angular/material';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // 追加
    BrowserAnimationsModule, // 追加
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase), // 追加
    AngularFirestoreModule, //  追加
    AngularFireAuthModule, //  追加
    AngularFireStorageModule, //  追加
    MatButtonModule, // 追加
    MatInputModule, // 追加
    MatToolbarModule, // 追加
    MatDividerModule, // 追加
    MatCardModule, // 追加
    MatIconModule, // 追加
    MatListModule // 追加
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
