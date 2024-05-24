import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "documentMask" 
})

export class DocumentMaskPipe implements PipeTransform {
  transform(document: string, ...args: any[]) {
    const documentMasked = [
      document.slice(0, 3),
      document.slice(9, 11)
    ]

    return `${documentMasked[0]}.***.***-${documentMasked[1]}`
  }
}