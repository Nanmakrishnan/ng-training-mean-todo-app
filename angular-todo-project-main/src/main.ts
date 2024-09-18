import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { importProvidersFrom } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { provideHttpClient, withFetch } from '@angular/common/http';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom(BrowserAnimationsModule),
    importProvidersFrom(MatDialogModule),
    importProvidersFrom(FormsModule),
    importProvidersFrom(MatDatepickerModule),
    importProvidersFrom(MatNativeDateModule),
    importProvidersFrom(MatMenuModule),
    importProvidersFrom(MatIconModule),
    importProvidersFrom(HttpClientModule), // Include HttpClientModule
    provideHttpClient(withFetch())
  ]
}).catch(err => console.error(err));