import{p as k}from"./p5.min.860e6110.js";function f(o,t,r){const a=o.createButton(t);return a.parent("buttons"),a.mousePressed(r),a}const d=o=>{let t,r=0,a;const g=Math.min(window.innerWidth,window.innerHeight),S=g,c=g;let h;o.setup=()=>{o.createCanvas(S,c).parent("p5"),a=o.random(255),t=new Array(S);for(let n=0;n<S;n++)t[n]=o.noise(n/100+o.random(1e4))*c;f(o,"Bubble Sort",()=>s("Bubble Sort")),f(o,"Selection Sort",()=>s("Selection Sort")),f(o,"Insertion Sort",()=>s("Insertion Sort")),f(o,"Odd-Even Sort",()=>s("Odd-Even Sort")),f(o,"Comb Sort",()=>s("Comb Sort")),f(o,"Cocktail Shaker Sort",()=>s("Cocktail Shaker Sort")),o.textSize(32)},o.draw=()=>{if(o.background("black"),o.text(h,10,35),o.fill(255,255,255),t.forEach((n,l)=>{let e=n/c*255,b=l/t.length*255;o.stroke(e,b,a),o.line(l,c,l,c-n)}),r<t.length)switch(h){case"Bubble Sort":for(let e=0;e<t.length-1-r;e++)t[e]>t[e+1]&&i(t,e+1,e);break;case"Selection Sort":let n=r;for(let e=r+1;e<t.length-1;e++)t[e]<t[n]&&(n=e);i(t,r,n);break;case"Insertion Sort":for(let e=r;e>0;e--)t[e]<t[e-1]&&i(t,e-1,e);break;case"Odd-Even Sort":for(let e=1;e<t.length-1;e+=2)t[e]>t[e+1]&&i(t,e,e+1);for(let e=0;e<t.length-1;e+=2)t[e]>t[e+1]&&i(t,e,e+1);r++;break;case"Comb Sort":let l=Math.floor(t.length/Math.pow(1.3,r+1));for(let e=l;e<t.length-1;e++)t[e]<t[e-l]&&i(t,e,e-l);break;case"Cocktail Shaker Sort":for(let e=r;e<t.length-1-r;e++)t[e]>t[e+1]&&i(t,e+1,e);for(let e=t.length-1-r;e>0+r;e--)t[e]<t[e-1]&&i(t,e,e-1);break;default:o.noLoop();break}else o.noLoop(),console.log("stopped sorting!");r++};function u(){r=0;for(let n=0;n<t.length;n++)t[n]=o.noise(n/100+o.random(1e4))*c;o.loop()}function s(n){h=n,u()}function i(n,l,e){let b=n[e];n[e]=n[l],n[l]=b}};new k(d);