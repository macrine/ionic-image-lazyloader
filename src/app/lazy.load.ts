import {Content} from "ionic-angular";

export class LazyLoad {
    private static instance:LazyLoad=new LazyLoad();

    constructor(){
        if (LazyLoad.instance) {
            throw new Error("错误: 请使用AppGlobal.getInstance() 代替使用new.");
        }
        LazyLoad.instance = this;
    }

    public static getInstance(): LazyLoad {
        return LazyLoad.instance;
    }

    scrollEnd(content: Content) {
        setTimeout(() => {
            let el = content._elementRef.nativeElement;
            let imgs = el.querySelectorAll("[src-lazy]");
            this.loadImg(content, imgs);
        }, 200);
    }

    private loadImg(content, imgs) {
        for (let i = 0; i < imgs.length; i++) {
            let img = imgs[i];
            let lazySrc = img.getAttribute("src-lazy");
            let offsetTop = LazyLoad._calcOffsetTop(img);
            if (offsetTop >= content.scrollTop && offsetTop <= content.scrollTop + content.contentHeight && lazySrc && !img.getAttribute("lazy-loaded")) {
                img.setAttribute("lazy-loaded","1")
                if(img.nodeName=="IMG"){
                    img.src = lazySrc;
                    img.onload = () => {
                        this.loadImg(content, imgs);
                    };
                    img.onerror = () => {
                        this.loadImg(content, imgs);
                    };
                } else {
                    img.style.backgroundImage="url('"+lazySrc+"')";
                    this.loadImg(content, imgs);
                }
                break;
            }
        }
    }

    static _calcOffsetTop(img, top = 0): number {
        top = top + img.offsetTop;
        if (img.offsetParent) {
            if (img.offsetParent.className == "scroll-content") {
                return top;
            }
            return LazyLoad._calcOffsetTop(img.offsetParent, top);
        }
        return top;
    }
}