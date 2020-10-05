// document.onscroll = function() {
//     if( $(window).scrollTop() > $('header').height() ) {
//         $('nav > div.navbar').removeClass('navbar-static-top').addClass('navbar-fixed-top');
//     }
//     else {
//         $('nav > div.navbar').removeClass('navbar-fixed-top').addClass('navbar-static-top');
//     }
// };

// let anc1 = CreateElement('a');
// anc1.innerHTML = 'Click me';
// //anc1.setAttribute
//  //let div1=document.getElementById('Headline1')
// //div1.append(anc1);
// document.body.append(anc1);
function CreateElement(tag){
    let tmp = document.createElement(tag);
    return tmp;
};

execute();
//console.log(typeof articles);
//console.log(var1);
function execute() {
    let articles='';
    const url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=9tN4hbC7EKi8Qdqo24A7TfzqA9xXVcbd";
    const options = {
        method: "GET",
        headers: {
            "Accept": "application/json"
        },
    };
    fetch(url, options).then(
        response => {
            if (response.ok) {
                return response.text();
            }
            return response.text().then(err => {
                return Promise.reject({
                    status: response.status,
                    statusText: response.statusText,
                    errorMessage: err,
                });
            });
        })
        .then(data => {
          // document.getElementById('Headline').innerHTML = data;
           data = JSON.parse(data);
           console.log(data.results);
         articles = data.results;
        // console.log(articles); 
        // //  console.log(data);
        // console.log(typeof articles);
        // console.log(articles.length);
        for (news in articles){
            GroupElement1(news,articles[news])
        //     abstract=articles[news];
        //    document.getElementById('Headline1').innerHTML = abstract.abstract;
        //     console.log(abstract.lead_paragraph);
        //     break;
        }
        
        return articles;
           
        })
        .catch(err => {
            console.error(err);
        });
       
}
//let maintmpdiv=CreateElement('div');
//maintmpdiv.classList.add('row','m-2')
let containerdiv = document.getElementById('container');
let worlddiv =document.getElementById('world');
let politics =document.getElementById('politics');
let sports =document.getElementById('sports');
let arts =document.getElementById('arts');
let travel =document.getElementById('travel');
let health =document.getElementById('health');
let magazine =document.getElementById('magazine');
let technology =document.getElementById('technology');
let science =document.getElementById('science');
let fashion =document.getElementById('fashion');
let food =document.getElementById('food');
let others =document.getElementById('others');


worlddiv.classList.add('mt-5')
containerdiv.append(worlddiv,politics,sports,arts,travel,health,magazine,technology,science,fashion,food);
function GroupElement1(id,arr){
     console.log(arr.section + ' '+arr.subsection)
    let tmpdiv=CreateElement('div');
    let tmpdiv1=CreateElement('div');
    tmpdiv1.classList.add('col-sm-9');
    let tmpdiv2=CreateElement('div');
    tmpdiv2.classList.add('col-sm-3')
    let tmpp=CreateElement('p');
    tmpp.innerHTML=arr.abstract;
    let tmpimg=CreateElement('img');
    let tmpa = CreateElement('a');
    let tmph5 = CreateElement('h5');
    let tmph6 = CreateElement('h6');
    tmph6.innerHTML = arr.published_date.split('T')[0];
    tmpdiv.classList.add('row','border','my-2')
    tmpimg.src =getImage(arr);
    tmpa.setAttribute('href',arr.short_url);
    // tmpa.classList.add('col-sm-9');
    tmpimg.classList.add('rounded','float-right','img-thumbnail','my-1');
    
    tmpa.innerHTML='Continue Reading';
    tmpdiv1.append(tmph5,tmph6,tmpp,tmpa);
    tmpdiv2.append(tmpimg);
    tmpdiv.append(tmpdiv1,tmpdiv2);
    let world_arr=['us','world'];
    let hlth_arr=['health','dining'];
    if(world_arr.includes(arr.section)){
        tmph5.innerHTML = 'WORLD';
        worlddiv.append(tmpdiv)
        
    }
   else if(arr.section=='food'){
        tmph5.innerHTML = 'FOOD';
        food.append(tmpdiv); 
        
       
    }
    else if(arr.section=='health'){
        tmph5.innerHTML = '';
        //console.log('Im in');
        tmph5.innerHTML = 'HEALTH';
        health.append(tmpdiv);
        
    }
    else if(arr.section=='sports'){
        tmph5.innerHTML = 'SPORTS';
        sports.append(tmpdiv) 
    }
    else if(arr.section=='t-magazine'){
        tmph5.innerHTML = 'MAGAZINE';
        magazine.append(tmpdiv) 
    }
    else if(arr.section=='arts'){
        tmph5.innerHTML = 'ARTS';
        arts.append(tmpdiv) 
    }
    else if(arr.section=='science'){
        tmph5.innerHTML = 'SCIENCE';
        science.append(tmpdiv) 
    }
    else if(arr.section=='us'){
        tmph5.innerHTML = 'POLITICS';
        politics.append(tmpdiv) 
    }
    else if(arr.section=='fashion'){
        tmph5.innerHTML = 'FASHION';
        fashion.append(tmpdiv) 
    }
    else if(arr.section=='technology'){
        tmph5.innerHTML = 'TECHNOLOGY';
        fashion.append(tmpdiv) 
    }
    else if(arr.section=='travel'){
        tmph5.innerHTML = 'TRAVEL';
        fashion.append(tmpdiv) 
    }
    else{
        tmph5.innerHTML = arr.section.toUpperCase();
        others.append(tmpdiv)
    }
    // //set1=range(0,100,4);
    // set2=range(1,100,4);
    // set3=range(2,100,4);
    // set4=range(3,100,4);
    
  // let imgsrc  = arr.multimedia[0].url;
   //console.log(imgsrc);
//    console.log(getImage(arr));
   //imgname='images/2020/10/04/nyregion/04NYVIRUS-SHUTDOWN/04NYVIRUS-SHUTDOWN-articleLarge.jpg';
  
   //tmpimg.setAttribute('src',imgsrc);
   
   
     //tmpdiv.innerHTML = arr.abstract;

    // if( set1.includes(parseInt(id))){
    //   //  console.log(id+' Set1');
    //     tmpdiv.classList.add("col-sm-2");
    //     tmpimg.setAttribute('width','100%');
    //   //  tmpimg.setAttribute('heigth','50%');
    // }
    // else if (set2.includes(parseInt(id))) {
    //     tmpdiv.classList.add("col-sm-4");
    //     tmpimg.setAttribute('width','100%');
    //  //   tmpimg.setAttribute('heigth','50%');
    // } 
    // else if (set3.includes(parseInt(id))){
    //     tmpdiv.classList.add("col-sm-4");
    //     tmpimg.setAttribute('width','100%');
    //     tmpimg.setAttribute('heigth','50%');
    // }
    // else{
    //     //console.log( id +' SET4'); 
    //     tmpdiv.classList.add("col-sm-2");
    //     tmpimg.setAttribute('width','100%');
    //     tmpimg.setAttribute('heigth','50%');
    // }
    // var dummyid= id+1;
    // if(dummyid > 4){
    //     dummyid = 0;
    // }
    // console.log(id);
    // console.log(arr);
    
    
   
    document.body.append(containerdiv);
    
}

function getImage(arr){
    var ind=0;
    var multi_arr =arr.multimedia;
    for(let i=0;i<multi_arr.length;i++){
        if(multi_arr[i].url.includes('arcticleInline.jpg')){
            ind=i;
        }
    }
    return multi_arr[ind].url;
}


// console.log(range(0,100,4))

function range(start, stop, step) {
    if (typeof stop == 'undefined') {
        // one param defined
        stop = start;
        start = 0;
    }

    if (typeof step == 'undefined') {
        step = 1;
    }

    if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
        return [];
    }

    var result = [];
    for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
        result.push(i);
    }

    return result;
};