import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import {registerLicense} from '@syncfusion/ej2-base';

registerLicense("ORg4AjUWIQA/Gnt2UFhhQlJBfVpdX2JWfFN0QXNRdV9wflBAcDwsT3RfQFljTXxSdEViW3tZdXNTRA==");


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
