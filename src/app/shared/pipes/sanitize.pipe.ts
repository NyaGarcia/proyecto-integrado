import { DomSanitizer, SafeHtml } from "@angular/platform-browser";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "sanitizeHtml", pure: false })
export class sanitizeHtmlPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(content) {
    console.log(content);
    return this.sanitizer.bypassSecurityTrustHtml(content);
  }
}
