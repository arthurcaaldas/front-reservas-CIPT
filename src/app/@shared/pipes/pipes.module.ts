import { NgModule } from "@angular/core";
import { DocumentMaskPipe } from "./documentMask.pipe";

const pipes = [
  DocumentMaskPipe
]

@NgModule({
  declarations: [
    ...pipes
  ],
  exports: [
    ...pipes
  ]
})

export class PipesModule {}