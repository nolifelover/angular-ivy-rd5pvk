import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { OneComponent } from "./one/one.component";
import { TwoComponent } from "./two/two.component";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "one", component: OneComponent },
  { path: "two", component: TwoComponent }
];

@NgModule({
  imports: [BrowserModule, FormsModule, RouterModule],
  declarations: [AppComponent, HelloComponent, OneComponent, TwoComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
