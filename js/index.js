

$(function(){

    
    var showBanner=0;
        showBanner++;

  

    setInterval(fadeBanner,6000);
    function fadeBanner(){
        if(showBanner==0){
            showBanner++;
            $(".banner>li").eq(showBanner).stop().fadeIn(1500)
            .siblings().fadeOut(1000);
        }
       
        else if(showBanner==1){
            showBanner--;
            $(".banner>li").eq(showBanner).stop().fadeIn(1500)
        .siblings().fadeOut(1000);
        }
}

})

//media 배너

$(function(){
    mBanner=0;

    var clo=$(".mWrap>.clone").clone();
    $(".mWrap").append(clo);
    var clo2=$(".mWrap>li:eq(1)").clone();
    $(".mWrap").append(clo2);
    var clo3=$(".mWrap>li:eq(2)").clone();
    $(".mWrap").append(clo3);
        var wWidth=$(window).outerWidth();
        
      
        
        $(window).resize(function(){
            wWidth=$(window).outerWidth();
        
        })
                $(".mediaBtn .rightBtn").on("click",function(){
                    if(wWidth>360){
                        if(mBanner<6){
                            mBanner++;  
                            $(".mWrap").stop().animate({
                                "margin-left":-mBanner*33.333+"%"
                            },1000)
                          
                        }    
                    }else{
                        if(mBanner<6){
                            mBanner++;  
                            $(".mWrap").stop().animate({
                                "margin-left":-mBanner*50+"%"
                            },1000)
                            
                        }    
                    }
                })
                $(".mediaBtn>ul>.leftBtn").on("click",function(){
                    if(wWidth>360){
                        if(mBanner>0)
                            mBanner--;
                            $(".mWrap").stop().animate({
                                "margin-left":-mBanner*33.333+"%"
                            },1000)
                    }else{
                        if(mBanner>0)
                        mBanner--;
                        $(".mWrap").stop().animate({
                            "margin-left":-mBanner*50+"%"
                        },1000)
                    }
                })
})

//guide 배너


$(function(){
    gBanner=0;

    var clon=$(".gWrap>li:eq(0)").clone();
    $(".gWrap").append(clon);
    var clon2=$(".gWrap>li:eq(1)").clone();
    $(".gWrap").append(clon2);
    var clon3=$(".gWrap>li:eq(2)").clone();
    $(".gWrap").append(clon3);
        var wWidth=$(window).outerWidth();
        
      
        
        $(window).resize(function(){
            wWidth=$(window).outerWidth();
        
        })
             
                $(".guideBtn .rightBtn").on("click",function(){
                    if(wWidth>360){   
                        if(gBanner<6){
                            gBanner++;  
                            $(".gWrap").stop().animate({
                                "margin-left":-gBanner*33.333+"%"
                            },1000)
                     
                        }    
                    }
                    else{
                        if(gBanner<6){
                            gBanner++;
                            $(".gWrap").stop().animate({
                                "margin-left":-gBanner*50+"%"
                            },1000)
                              
                        }    
                    }
                })
                $(".guideBtn .leftBtn").on("click",function(){
                    if(wWidth>360){
                        if(gBanner>0)
                            gBanner--;
                            $(".gWrap").stop().animate({
                                "margin-left":-gBanner*33.333+"%"
                            },1000)
                    }else{
                        if(gBanner>0)
                        gBanner--;
                        $(".gWrap").stop().animate({
                            "margin-left":-gBanner*50+"%"
                        },1000)
                    }
                })
})
        
//slide

$(function(){
    var slideBanner=0;
   var obj=$(".slideBanner>.banner3").clone();

    $(".slideBanner").append(obj);

   
   var wWidth=$(window).outerWidth();       
   $(window).resize(function(){
       wWidth=$(window).outerWidth();
       rollBanner();   
   })

   function rollBanner(){
   
    
       if(wWidth>360){
       
        if(slideBanner>4){
            $(".slideBanner").css
            ("margin-left","0")
            slideBanner=0;
        }
            slideBanner++;
            $(".slideBanner").stop().animate({
                "margin-left":-slideBanner*33.333+"%"
                },3000)     
        }else{
                if(slideBanner>4){
                    $(".slideBanner").css
                    ("margin-left","0")
                    slideBanner=0;
                }
                    slideBanner++;
                    $(".slideBanner").stop().animate({
                        "margin-left":-slideBanner*50+"%"
                        },3000)          
        } 

    }

    setInterval(rollBanner,4500);
})
//ham  
$(function(){
    $(".ham").on("click",function(){
        $(".nav").stop().animate({
            "left":0
        },1000)
    })
    $(".x").on("click",function(){
        $(".nav").stop().animate({
            "left":-100+"%"
        },1000)
    })
})
