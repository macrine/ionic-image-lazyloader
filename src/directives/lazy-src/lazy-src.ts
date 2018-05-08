import {Directive, ElementRef, Input} from '@angular/core';
import {Content} from "ionic-angular";
import {LazyLoad} from "../../app/lazy.load";

/**
 * Generated class for the SrcLazyDirective directive.
 *
 * See https://angular.io/api/core/Directive for more info on Angular
 * Directives.
 */
@Directive({
    selector: '[lazy-src]' // Attribute selector
})
export class LazySrcDirective {
    @Input("lazy-src") src: string;
    @Input("lazy-content") content: Content;

    constructor(private elementRef: ElementRef) {
    }

    ngOnInit() {
        let img = this.elementRef.nativeElement;
        img.setAttribute("src-lazy", this.src);
        img.setAttribute("src", "data:image/gif;base64,R0lGODlhAQABAJEAAAAAAP///+fn5////yH5BAEAAAMALAAAAAABAAEAAAICVAEAOw==");
        let content = this.content;
        setTimeout(()=>{
            let offsetTop = LazyLoad._calcOffsetTop(img);
            if (offsetTop >= content.scrollTop && offsetTop <= content.scrollTop + content.contentHeight && this.src && !img.getAttribute("lazy-loaded")) {
                img.setAttribute("lazy-loaded", "1");
                if (img.nodeName == "IMG") {
                    img.src = this.src;
                } else {
                    img.style.backgroundImage = "url('" + this.src + "')";
                }
            }
        },100);
    }
}
