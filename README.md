# ionic图片懒加载

![lazyload](https://github.com/macrine/ionic-image-lazyloader/raw/master/screen.gif)  


关键文件：  
    src/app/lazy.load.ts  
    src/directives/lazy-src/lazy-src.ts  


使用方法  
    1.监听scrollEnd: <ion-content #content (ionScrollEnd)="scrollEnd(content)">  
    2.为img标签添加指令: <img [lazy-src]="item.picture.thumbnail" [lazy-content]="content">
