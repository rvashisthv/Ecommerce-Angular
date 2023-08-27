import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [],

  exports: [CommonModule, BrowserModule, ReactiveFormsModule, HttpClientModule],
})
export class SharedModule {}
