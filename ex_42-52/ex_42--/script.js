window.onload=()=>{
    // const path=require('path')
    const imgArray=['batmanwb.png','flashwb.png','supermanwb.png','wonder_womanwb.png'];
    const imgArrayColor=['batman.png','flash.png','superman.png','wonder_woman.png'];
    for(let i=0;i<imgArray.length;i++){
        var img=document.createElement('img');
        img.textContent=imgArray[i];
        img.src=`./img/${imgArray[i]}`;
        document.body.appendChild(img);
    };    

    img.addEventListener('mouseover',function(){        
        img.src=img.src.replace('wb','');
    });
    img.addEventListener('mouseout',function(){        
        img.src=img.src.replace('wb','');
    });



    }




