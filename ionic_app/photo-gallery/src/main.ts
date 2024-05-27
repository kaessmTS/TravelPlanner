import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));

// async function main() {
//   const openaiService = new OpenaiService(); // Instantiate OpenaiService
//   const message = "Give me 3 names"; // Specify your message
//   const completion = await openaiService.chatGPT(message); // Call chatGPT method
//   console.log(completion);
// }
