const button1=document.getElementById("bt1");
const button2=document.getElementById("bt2");
const drinks=document.getElementById("drinks");

document.addEventListener("DOMContentLoaded",e=>{
    let images=[
        {
            name:"water meron",
            src:"metwgh.jpg"
        },
        {
            name:"martin",
            src:"mrt.jpg"
        },
        {
            name:"carrot",
            src:"negro.jpg"
        },
        {
            name:"stawberry",
            src:"nkwr4c.jpg"
        },
        {
            name:"avocado",
            src:"vrwquq1.jpg"
        },
        {
            name:"mango",
            src:"wsky.jpg"
        }
    ];

    
    const displayImage=(src,name)=>{
    const card=`
    <div class="card">
      <div class="card-body"><img src=${src}></div>
      <div class="card-footer">${name}</div>
    </div>
    
    `
    drinks.innerHTML+=card;
    
    }
    // displayImage();
    
    images.map(item=>{
        // console.log(item.src);
        displayImage(item.src,item.name)
    })

    let searching=(value)=>{
        drinks.innerHTML=" ";
        const search=images.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()));
            search.map(item=>displayImage(item.src,item.name))
    }
    button1.addEventListener("keyup",e=>{
    searching(button1.value);
    })
    button2.addEventListener("keydown",e=>{
        if(e.keyCode==13){
            searching(button2.value); 
        }
    })



    // button1.addEventListener('keyup', ()=>{
    //     // console.log(btn)
    //     for(const image of images){
    //         const btn = button1.value;
    //         const imageW = image.name;
    //         // console.log(image.name)
    //         if(imageW.includes(button1.value)){
    //             // console.log('yes')
    //             image.style.display ="";
    //         }else{
    //             // console.log('no')
    //             image.style.display ='none'
    //         }
    //     }
    // })


}) 

// let search=(value)=>{
// drinks.innerHTML=" ";
// const searching=images.filter(item=>item.name.toLowerCase().includes(value.toLowerCase()));
// searching.map(item=>displayImage(item.src,item.name))
// console.log(searching);
// }
// search();


