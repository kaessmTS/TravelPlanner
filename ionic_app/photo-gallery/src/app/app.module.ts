import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule } from '@ionic/angular'; // Import IonicModule
import { IonicRouteStrategy } from '@ionic/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DalleImageService } from './services/dalle-image.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule], // Add IonicModule here
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, DalleImageService ],
  bootstrap: [AppComponent],
})
export class AppModule {}
