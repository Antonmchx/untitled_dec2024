function gR(i){
        let val =  i[Math.floor(Math.random(i)*i.length)];
        return val;
    }

let positions, ps;



//function
let amplitude;

//noisevalue params 
let uvY, uvX, start;

//colors
let c1, c2, c3, c4, c5, c6, mixC;

//ssteps
let mix1, mix2, smStep1, smStep2;

// positions = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26"];
positions = ["1","2","3","5","6","8","12","16","15","17","18","19","20","21","22","23","24","26"];
ps = gR(positions);
//  ps = "6";

// Q
// 13, 10, 4, 14, 9, 11, 25, 7
console.log(ps);
console.log("curated vers");
if (ps === "1"){
     amplitude = "0.35";
     uvY = "3.";
     uvX = ".5";
     start = "0.";
     c1 = "vec3(0.0471, 0.1255, 0.251)";
     c2 = "vec3(0.1255, 0.6431, 0.7882)";
     c3 = "vec3(0.2784, 0.2784, 0.7098)";
     c4 = "vec3(0.5843, 0.349, 0.1294)";
     c5 = "vec3(0.5216, 0.4157, 0.6157)";
     c6 = "vec3(0.1176, 0.1059, 0.1059)";
     mixC = "vec3(0.3255, 0.5412, 0.8392)";
     mix1 = "0.5";
     mix2 = "delta";
     smStep1 ="c,col2,smoothstep(0.4, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="2"){
     amplitude = "0.45";
     uvY = "3.";
     uvX = ".6";
     start = "12.";
     c1 = "vec3(0.0471, 0.1255, 0.251)";
     c2 = "vec3(0.1608, 0.5255, 0.5804)";
     c3 = "vec3(0.6275, 0.7098, 0.098)";
     c4 = "vec3(0.6588, 0.6745, 0.7529)";
     c5 = "vec3(0.3137, 0.1804, 0.4314)";
     c6 = "vec3(0.1176, 0.1059, 0.1059)";
     mixC = "vec3(0.2863, 0.6196, 0.8235)";
     mix1 = "0.5";
     mix2 = "delta";
     smStep1 ="col2,c,smoothstep(0.35, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="3"){
        amplitude = "0.55";
        uvY = "3.";
        uvX = ".7";
        start = "1.8";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.1608, 0.5255, 0.5804)";
        c3 = "vec3(0.6275, 0.7098, 0.098)";
        c4 = "vec3(0.6588, 0.6745, 0.7529)";
        c5 = "vec3(0.3137, 0.1804, 0.4314)";
        c6 = "vec3(0.1176, 0.1059, 0.1059)";
        mixC = "vec3(0.2863, 0.6196, 0.8235)";
        mix1 = "0.95";
        mix2 = "0.5";
        smStep1 ="col2,c,smoothstep(0.55, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="4"){
        amplitude = "0.5";
        uvY = "6.";
        uvX = "0.8";
        start = "4.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.6314, 0.6784, 0.702)";
        c3 = "vec3(0.9216, 0.898, 0.1373)";
        c4 = "vec3(0.7294, 0.6196, 0.2196)";
        c5 = "vec3(0.702, 0.2118, 0.7373)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.4431, 0.4902, 0.9216)";
        mix1 = "0.95";
        mix2 = "0.5";
        smStep1 ="col2,c,smoothstep(0.55, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="5"){
        amplitude = "0.5";//0.55
        uvY = "5.";
        uvX = "1.2";
        start = "4.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.0706, 0.2941, 0.4039)";
        c3 = "vec3(0.7961, 0.1098, 0.3137)";
        c4 = "vec3(0.7294, 0.6196, 0.2196)";
        c5 = "vec3(0.3137, 0.1804, 0.4314)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.2588, 0.3059, 0.7333)";
        mix1 = "0.95";
        mix2 = "0.85";
        smStep1 ="col2,c,smoothstep(0.55, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }
   else if(ps ==="6"){
        amplitude = "0.45";//0.55
        uvY = "5.";
        uvX = "0.9";
        start = "7.8";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.251, 0.2784, 0.2902)";
        c3 = "vec3(0.6667, 0.5333, 0.102)";
        c4 = "vec3(0.4588, 0.098, 0.6157)";
        c5 = "vec3(0.7373, 0.2118, 0.6941)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.6314, 0.5804, 0.9255)";
        mix1 = "0.75";
        mix2 = "smoothstep(0.5, 0.9, noiseValue)";
        smStep1 ="c,col2,smoothstep(0.4, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="7"){
        amplitude = "0.55";//0.55
        uvY = "7.";
        uvX = "1.2";
        start = "5.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.1882, 0.2745, 0.4157)";
        c3 = "vec3(0.8078, 0.2784, 0.5608)";
        c4 = "vec3(0.8784, 0.7882, 0.0902)";
        c5 = "vec3(0.2941, 0.1412, 0.2431)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.1882, 0.2745, 0.4157)";
        mix1 = "0.5";
        mix2 = "0.5";
        smStep1 ="c,col2,smoothstep(0.55, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="8"){
        amplitude = "0.55";//0.55
        uvY = "5.";
        uvX = "0.75";
        start = "5.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.1882, 0.2745, 0.4157)";
        c3 = "vec3(0.8078, 0.2784, 0.5608)";
        c4 = "vec3(0.6353, 0.4314, 0.1059)";
        c5 = "vec3(0.2941, 0.1412, 0.2431)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.0784, 0.2235, 0.6627)";
        mix1 = "0.5";
        mix2 = "smoothstep(0.5, 0.9, noiseValue)";
        smStep1 ="col2,col,smoothstep(0.55, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="9"){
        amplitude = "0.5";//0.55
        uvY = "4.";
        uvX = "0.75";
        start = "4.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.6314, 0.6784, 0.702)";
        c3 = "vec3(0.9216, 0.898, 0.1373)";
        c4 = "vec3(0.7294, 0.6196, 0.2196)";
        c5 = "vec3(0.702, 0.2118, 0.7373)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        //mixC = "vec3(0.498, 0.2941, 0.6745)";
        mixC = "vec3(0.1647, 0.0863, 0.2314)";
        mix1 = "0.95";
        mix2 = "0.5";
        smStep1 ="col2,c,smoothstep(0.6, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="10"){
        amplitude = "0.45";//0.55
        uvY = "5.";
        uvX = "0.9";
        start = "4.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.2863, 0.3216, 0.3373)";
        c3 = "vec3(0.8196, 0.298, 0.0902)";
        c4 = "vec3(0.1412, 0.1216, 0.6392)";
        c5 = "vec3(0.5961, 0.2118, 0.7373)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        //mixC = "vec3(0.8549, 0.6157, 0.5216)";
        mixC = "vec3(0.5216, 0.6118, 0.8549)";
        mix1 = "0.75";
        mix2 = "smoothstep(0.5, 0.9, noiseValue)";
        smStep1 ="col2,c,smoothstep(0.4, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="11"){
        amplitude = "0.55";//0.55
        uvY = "4.";
        uvX = "1.2";
        start = "1.5";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.1882, 0.2745, 0.4157)";
        c3 = "vec3(0.8078, 0.2784, 0.5686)";
        c4 = "vec3(0.1804, 0.5059, 0.6902)";
        c5 = "vec3(0.2549, 0.051, 0.1843)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.1373, 0.1294, 0.3137)";
        mix1 = "0.9";
        mix2 = "smoothstep(0.65, 0.9, noiseValue)";
        smStep1 ="col2,col,smoothstep(0.55, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="12"){
        amplitude = "0.45";//0.55
        uvY = "5.";
        uvX = "0.9";
        start = "3.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.2863, 0.3216, 0.3373)";
        c3 = "vec3(0.902, 0.7451, 0.1255)";
        c4 = "vec3(0.8157, 0.0745, 0.5922)";
        c5 = "vec3(0.502, 0.0588, 0.2588)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        //mixC = "vec3(0.8588, 0.6431, 0.8392)";
        //mixC = "vec3(0.6431, 0.7216, 0.8588)";
        mixC = "vec3(0.1843, 0.3412, 0.6118)";
        mix1 = "0.75";
        mix2 = "0.2";
        smStep1 ="c,col2,smoothstep(0.4, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="13"){
        amplitude = "0.45";//0.55
        uvY = "4.5";
        uvX = "0.5";
        start = "3.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.2863, 0.3216, 0.3373)";
        c3 = "vec3(0.902, 0.7451, 0.1255)";
        c4 = "vec3(0.8157, 0.0745, 0.5922)";
        c5 = "vec3(0.502, 0.0588, 0.2588)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.8078, 0.4039, 0.7686)";
        mix1 = "0.75";
        mix2 = "0.2";
        smStep1 ="col2,c,smoothstep(0.4, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="14"){
        amplitude = "0.5";//0.55
        uvY = "4.5";
        uvX = "0.8";
        start = "3.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.2863, 0.3216, 0.3373)";
        c3 = "vec3(0.902, 0.1255, 0.5647)";
        c4 = "vec3(0.8157, 0.0745, 0.5922)";
        c5 = "vec3(0.502, 0.451, 0.0588)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.4784, 0.2431, 0.7686)";
        mix1 = "0.75";
        mix2 = "0.2";
        smStep1 ="c,col2,smoothstep(0.4, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="15"){
        amplitude = "0.5";//0.55
        uvY = "4.";
        uvX = "0.75";
        start = "1.";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        //c2 = "vec3(0.1882, 0.2745, 0.4157)";
        c2 = "vec3(0.0471, 0.1412, 0.2941)";
        //c3 = "vec3(0.2118, 0.502, 0.6784)";
        c3 = "vec3(0.2118, 0.2118, 0.6784)";
        //c4 = "vec3(0.702, 0.6745, 0.1804)";
        c4 = "vec3(0.051, 0.4392, 0.4314)";
        c5 = "vec3(0.4, 0.0549, 0.251)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.051, 0.1647, 0.3647)";
        mix1 = "0.9";
        mix2 = "smoothstep(0.65, 0.9, noiseValue)";
        smStep1 ="col,col2,smoothstep(0.5, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="16"){
        amplitude = "0.5";//0.55
        uvY = "5.";
        uvX = "0.9";
        start = "3.8";
        c1 = "vec3(0.0471, 0.1255, 0.251)";
        c2 = "vec3(0.1882, 0.2745, 0.4157)";
        c3 = "vec3(0.5412, 0.2588, 0.4667)";
        c4 = "vec3(0.7686, 0.6588, 0.1216)";
        c5 = "vec3(0.3569, 0.0667, 0.0667)";
        c6 = "vec3(0.0275, 0.0549, 0.0941)";
        mixC = "vec3(0.5882, 0.5804, 0.7176)";
        mix1 = "0.9";
        mix2 = "smoothstep(0.65, 0.9, noiseValue)";
        smStep1 ="col2,c,smoothstep(0.5, 0.9, noiseValue)";
        smStep2 = "0.3, 0.9";
   }else if(ps ==="17"){
     amplitude = "0.5";//0.55
     uvY = "6.";
     uvX = "1.2";
     start = "11.";
     c1 = "vec3(0.0471, 0.1255, 0.251)";
     c2 = "vec3(0.1882, 0.2745, 0.4157)";
     c3 = "vec3(0.8235, 0.3686, 0.6118)";
     c4 = "vec3(0.8314, 0.4706, 0.2471)";
     c5 = "vec3(0.1059, 0.0549, 0.4)";
     c6 = "vec3(0.0275, 0.0549, 0.0941)";
     mixC = "vec3(0.1059, 0.4, 0.6353)";
     mix1 = "0.9";
     mix2 = "smoothstep(0.5, 0.9, noiseValue)";
     smStep1 ="col2,c,smoothstep(0.5, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="18"){
     amplitude = "0.5";//0.55
     uvY = "4.";
     uvX = "0.5";
     start = "20.";
     c1 = "vec3(0.0471, 0.1255, 0.251)";
     c2 = "vec3(0.3176, 0.4745, 0.7216)";
     c3 = "vec3(0.8863, 0.6196, 0.6196)";
     c4 = "vec3(0.8745, 0.7333, 0.3529)";
     c5 = "vec3(0.7647, 0.6863, 0.5765)";
     c6 = "vec3(0.0275, 0.0549, 0.0941)";
     // mixC = "vec3(0.3176, 0.4745, 0.7216)";
     mixC = "vec3(0.1843, 0.2235, 0.6745)";
     mix1 = "0.5";
     mix2 = "0.9"; //smoothstep(0.5, 0.9, noiseValue)
     smStep1 ="col2,c,smoothstep(0.4, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="19"){
     amplitude = "0.45";//0.55
     uvY = "4.";
     uvX = "1.1";
     start = "15.";
     c1 = "vec3(0.0627, 0.3059, 0.702)";
     c2 = "vec3(0.0078, 0.2235, 0.3412)";
     c3 = "vec3(0.8784, 0.6941, 0.0902)";
     c4 = "vec3(0.8941, 0.2745, 0.0667)";
     c5 = "vec3(0.5882, 0.0941, 0.6157)";
     c6 = "vec3(0.0275, 0.0549, 0.0941)";
     mixC = "vec3(0.0275, 0.4078, 0.3647)";
     mix1 = "0.9";
     mix2 = "smoothstep(0.4, 0.9, noiseValue)"; 
     smStep1 ="col2,c,smoothstep(0.4, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="20"){
     amplitude = "0.45";//0.55
     uvY = "5.5";
     uvX = "1.2";
     start = "2.";
     c1 = "vec3(0.0627, 0.3059, 0.702)";
     c2 = "vec3(0.0196, 0.1961, 0.1333)";
     c3 = "vec3(0.902, 0.8039, 0.0627)";
     c4 = "vec3(0.702, 0.1922, 0.0784)";
     c5 = "vec3(0.3333, 0.0745, 0.4784)";
     c6 = "vec3(0.0275, 0.0549, 0.0941)";
     // mixC = "vec3(0.2196, 0.4118, 0.6353)";
     // mixC = "vec3(0.2392, 0.2196, 0.6353)";
     mixC = "vec3(0.0667, 0.2, 0.451)";
     mix1 = "smoothstep(0.2, 0.9, noiseValue)";
     mix2 = "smoothstep(0.4, 0.9, noiseValue)"; 
     smStep1 ="col2,c,smoothstep(0.4, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="21"){
     amplitude = "0.55";//0.55
     uvY = "5.";
     uvX = "0.5";
     start = "2.";
     c1 = "vec3(0.0471, 0.1255, 0.251)";
     c2 = "vec3(0.1882, 0.2745, 0.4157)";
     c3 = "vec3(0.6706, 0.1176, 0.0549)";
     c4 = "vec3(0.8157, 0.5137, 0.0941)";
     c5 = "vec3(0.3529, 0.0353, 0.4235)";
     c6 = "vec3(0.0275, 0.0549, 0.0941)";
     mixC = "vec3(0.0392, 0.1412, 0.2235)";
     mix1 = "0.5";
     mix2 = "smoothstep(0.5, 0.9, noiseValue)"; 
     smStep1 ="c,col2,smoothstep(0.5, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="22"){
     amplitude = "0.35";//0.55
     uvY = "3.5";
     uvX = "0.8";
     start = "7.";
     c1 = "vec3(0.051, 0.0235, 0.1882)";
     c2 = "vec3(0.1412, 0.0667, 0.3529)";
     c3 = "vec3(0.7255, 0.1216, 0.3608)";
     c4 = "vec3(0.8863, 0.4118, 0.1373)";
     c5 = "vec3(0.5608, 0.3451, 0.8196)";
     c6 = "vec3(0.0275, 0.0549, 0.0941)";
     mixC = "vec3(0.0627, 0.4627, 0.5255)";
     // mixC = "vec3(0.6706, 0.2, 0.0706)";
     mix1 = "0.5";
     mix2 = "smoothstep(0.5, 0.9, noiseValue)"; 
     smStep1 ="col2,c,smoothstep(0.4, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="23"){
     amplitude = "0.5";//0.55
     uvY = "4.";
     uvX = "0.8";
     start = "8.";
     c1 = "vec3(0.2118, 0.1059, 0.7333)";
     c2 = "vec3(0.1412, 0.0667, 0.3529)";
     c3 = "vec3(0.9098, 0.3804, 0.2471)";
     c4 = "vec3(0.6196, 0.7569, 0.8588)";
     c5 = "vec3(0.498, 0.0706, 0.5725)";
     c6 = "vec3(0.3608, 0.0353, 0.302)";
     mixC = "vec3(0.1098, 0.0235, 0.1843)";
     mix1 = "0.9";
     mix2 = "smoothstep(0.5, 0.9, noiseValue)"; 
     smStep1 ="col2,c,smoothstep(0.5, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="24"){
     amplitude = "0.5";//0.55
     uvY = "4.5";
     uvX = "0.8";
     start = "3.";
     c1 = "vec3(0.051, 0.0235, 0.1882)";
     c2 = "vec3(0.1412, 0.0667, 0.3529)";
     c3 = "vec3(0.6667, 0.1608, 0.051)";
     c4 = "vec3(0.1686, 0.0353, 0.3294)";
     c5 = "vec3(0.7647, 0.102, 0.5333)";
     c6 = "vec3(0.0275, 0.0549, 0.0941)";
     mixC = "vec3(0.2824, 0.1765, 0.5098)";
     mix1 = "0.5";
     mix2 = "smoothstep(0.5, 0.9, noiseValue)"; 
     smStep1 ="c,col2,smoothstep(0.5, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="25"){
     amplitude = "0.55";//0.55
     uvY = "4.";
     uvX = "0.9";
     start = "2.";
     c1 = "vec3(0.0471, 0.2784, 0.2941)";
     c2 = "vec3(0.2588, 0.4235, 0.8078)";
     c3 = "vec3(0.8196, 0.5725, 0.1098)";
     c4 = "vec3(0.7882, 0.4, 0.6902)";
     c5 = "vec3(0.7216, 0.1333, 0.4275)";
     c6 = "vec3(0.0706, 0.0078, 0.102)";
     mixC = "vec3(0.1608, 0.2706, 0.5725)";
     mix1 = "0.5";
     mix2 = "smoothstep(0.5, 0.9, noiseValue)"; 
     smStep1 ="col2,c,smoothstep(0.4, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}else if(ps ==="26"){
     amplitude = "0.5";//0.55
     uvY = "4.";
     uvX = "0.6";
     start = "3.";
     c1 = "vec3(0.0863, 0.0824, 0.2745)";
     c2 = "vec3(0.5882, 0.6471, 0.6275)";
     c3 = "vec3(0.8392, 0.2627, 0.1608)";
     c4 = "vec3(0.3529, 0.3961, 0.7961)";
     c5 = "vec3(0.7647, 0.4196, 0.1922)";
     c6 = "vec3(0.0706, 0.0078, 0.102)";
     mixC = "vec3(0.4588, 0.5686, 0.8078)";
     mix1 = "0.5";
     mix2 = "smoothstep(0.5, 0.9, noiseValue)"; 
     smStep1 ="c,col2,smoothstep(0.4, 0.9, noiseValue)";
     smStep2 = "0.3, 0.9";
}

const vertexShader = `#version 300 es
  in vec2 position;
  void main() {
	gl_Position = vec4(position, 0, 1);
  }`;

const fShader = `#version 300 es
precision highp float;
uniform vec2 u_resolution;
uniform float toggle, u_time;
out vec4 final;

// float noise(vec2 p) {
//     vec2 period = vec2(5.0);
//     vec2 wrapped = mod(p, period);
//     return fract(sin(dot(wrapped, vec2(127.1, 311.7))) * 43758.5453123);
// }

// Функция для генерации псевдошума
float noise(vec2 p) {
    return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453123);
}

    vec3 desaturate(vec3 color, float amount) {
    float gray = dot(color, vec3(0.1098, 0.1725, 0.5882)); // стандартный способ получить яркость
    return mix(color, vec3(gray), amount); // смешиваем исходный цвет с оттенком серого
}

// Функция сглаженного шума
float smoothNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);

    float a = noise(i);
    float b = noise(i + vec2(1.0, 0.0));
    float c = noise(i + vec2(0.0, 1.0));
    float d = noise(i + vec2(1.0, 1.0));

    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(a, b, u.x) + (c - a) * u.y * (1.0 - u.x) + (d - b) * u.x * u.y;
}

// Функция фрактального шума
float fbm(vec2 p) {
    float value = 0.20;
    //                amplitude
    float amplitude = ${amplitude}; //0.75
    float frequency = .0;
    for (int i = 0; i < 5; i++) {
        value += amplitude * smoothNoise(p);
        p *= 2.0;
        amplitude *= 0.5;
    }
    return value;
}

vec3 c1 = ${c1};
vec3 c11 = ${c2};
vec3 c2 = ${c3};
vec3 c21 = ${c4};
vec3 c22 = ${c5};
vec3 c3 = ${c6};




void main(){

    vec2 uv = gl_FragCoord.xy / u_resolution.xy;
    uv.x *= u_resolution.x / u_resolution.y;

    float t = u_time / 1000.;

    // Анимация северного сияния
    float timeShift = t * 0.051;
    //                           uvY        uvX        start
    float noiseValue = fbm(vec2(uv.y * ${uvY}, uv.x * ${uvX} - ${start} - timeShift));

    // Создание градиента цвета для северного сияния

   vec2 coord = gl_FragCoord.xy/u_resolution.xy;
   float color = 0.0;
   vec3 c = ${mixC};
   color +=sin(coord.x * 5. + cos(t + coord.y*10.+sin(coord.x*5.+t*2.)))*2.;
   color +=cos(coord.x * 2. + sin(t + coord.y*1.+cos(coord.x*5.+t *2.)))*1.;
   color +=sin(coord.x * 3. + cos(t + coord.y*1.+sin(coord.x*5.+t*0.2)))*2.;
   color +=cos(coord.x * 1. + sin(t + coord.y*1.+cos(coord.x*5.+t*0.1)))*2.;


    vec2 xy = gl_FragCoord.xy/u_resolution;

    float tx = smoothstep(0.8,.9,xy.y+sin(t*0.5))*color*0.1;
    float tx1 = sin((xy.y)+t*.055)*(color*.15);
    float delta = sin(t*0.015)+1.0/2.;
    float h0 = .5*tx1;
    float h = .015;
    c1 = mix(c1,c11,${mix1});
    c2= mix(c2,c21,${mix2});
    c22 = mix(c22,c2,xy.y);
    vec3 cmix = mix(c1,c22,(xy.x*xy.y)/h); //*xy.y
    vec3 cmixA = mix(c2,c1,xy.x);
    vec3 cmix0 = mix(cmix,cmixA,(xy.x-h)/(1.-h));
    
    vec3 col=mix(mix(c3,cmix0,xy.y/h0),mix(cmix0,c1,(xy.y-h0)/(1.-h0)),smoothstep(xy.x-xy.x,xy.y,xy.y));
    vec3 col2 = mix(col,cmixA,smoothstep(xy.x,h0,xy.x));
    float gamma = 1.0;

    vec3 auroraColor =vec3(1.0);
    auroraColor = (mix(${smStep1}));

    // Добавление яркости и анимации шума
    auroraColor *= smoothstep(${smStep2}, noiseValue + sin(t * 0.015 + uv.y * 1.0) * 0.2);
   


    
    final = vec4(auroraColor,1.);
   
}
    
`;

const createShader = (str, type) => {
        const s = gl.createShader(type);
        gl.shaderSource(s, str);
        gl.compileShader(s);
        if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) {
                console.error(gl.getShaderInfoLog(s));
                return false;
        }
        return s;
};

const createProgram = (vstr, fstr) => {
        const p = gl.createProgram();
        gl.attachShader(p, createShader(vstr, gl.VERTEX_SHADER));
        gl.attachShader(p, createShader(fstr, gl.FRAGMENT_SHADER));
        gl.linkProgram(p);
        return p;
};

const linkProgram = (p) => {
        gl.attachShader(p, createShader(p.vshaderSource, gl.VERTEX_SHADER));
        gl.attachShader(p, createShader(p.fshaderSource, gl.FRAGMENT_SHADER));
        gl.linkProgram(p);
};
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const gl = canvas.getContext("webgl2", {"alpha": false, "preserveDrawingBuffer": true});
gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
const q = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]);
gl.bufferData(gl.ARRAY_BUFFER, q, gl.STATIC_DRAW);
const p = createProgram(vertexShader, fShader);
p.pos = gl.getAttribLocation(p, "position");
p.res = gl.getUniformLocation(p, "u_resolution");
p.time = gl.getUniformLocation(p, "u_time");
gl.enableVertexAttribArray(p.pos);
gl.vertexAttribPointer(p.pos, 2, gl.FLOAT, false, 0, 0);
gl.useProgram(p);
gl.drawingBufferColorSpace='display-p3';

const tick = (time) => {
        gl.uniform1f(p.time, time);
        gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
        requestAnimationFrame(tick);
};

const dpr = window.devicePixelRatio || 1;
const last = { width: 0, height: 0 };
let w, h, rect;

const isDifferent = (a, b) => a.width != b.width || a.height != b.height;
const resizeObserver = new ResizeObserver((entries) => {
        for (let entry of entries) {
                rect = entry.contentRect;
                if (isDifferent(last, rect)) {
                        last.width = rect.width;
                        last.height = rect.height;
                        w = Math.floor(rect.width * dpr);
                        h = Math.floor(rect.height * dpr);
                        canvas.width = w;
                        canvas.height = h;
                        gl.viewport(0, 0, w, h);
                        gl.clear(gl.COLOR_BUFFER_BIT);
                        gl.uniform2f( p.res, w, h);
                }
        }
});

resizeObserver.observe(document.documentElement);

tick(0);

const fullscreen = (event) => {
        const d = document.documentElement;
        if (d.requestFullscreen) {
                d.requestFullscreen();
        } else if (d.webkitRequestFullScreen) {
                d.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
};

document.body.addEventListener("dblclick", fullscreen);

const keyHandler = (event) => {
        if (event.key === "f") {
                fullscreen();
        }
};
document.addEventListener("keypress", keyHandler);
