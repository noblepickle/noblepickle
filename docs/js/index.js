let tl = gsap.timeline({delay:1, repeat:-1, yoyo:true});
tl.to('.c1', {duration:0.5, x:945, ease:'expo.out'}, .3)
    .add("squareSpin", "-=0.5")
    .to('.s1', {duration:2, rotate:360, x:945, ease:'expo.out'}, "squareSpin")
    .to('.c3', {duration:2.5, x:945, ease:'expo.out'}, "+=0.5");
