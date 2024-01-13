let funFact = document.getElementById("funFact");
let container2 = document.getElementById("container2");
let container3 = document.getElementById("container3");
let img1 = document.querySelector(".img1");
let img2 = document.querySelector(".img2");
let img3 = document.querySelector(".img3");
let img4 = document.querySelector(".img4");
let img5 = document.querySelector(".img5");
let img6 = document.querySelector(".img6");
let img7 = document.querySelector(".img7");
let img8 = document.querySelector(".img8");
let img9 = document.querySelector(".img9");
let arrowAboutLeft = document.querySelector(".arrowAboutLeft");
let arrowAboutRight = document.querySelector(".arrowAboutRight");
let about1 = document.getElementById("about1");
let about2 = document.getElementById("about2");
let about3 = document.getElementById("about3");
let moBox1 = document.querySelector(".moBox1");
let mo1 = document.querySelector(".mo1");
let mouseOver1 = document.querySelector(".mouseOver1");
let moBox2 = document.querySelector(".moBox2");
let mo2 = document.querySelector(".mo2");
let mouseOver2 = document.querySelector(".mouseOver2");
let moBox3 = document.querySelector(".moBox3");
let mo3 = document.querySelector(".mo3");
let mouseOver3 = document.querySelector(".mouseOver3");

let rightArrowWhite = document.querySelector(".rightArrowWhite");
let leftArrowWhite = document.querySelector(".leftArrowWhite");
let miniTitleFeat = document.querySelector(".miniTitleFeat");
let displayProject = document.querySelector(".displayProject");
let projectTitle = document.querySelector(".projectTitle");
let projectDescription = document.querySelector(".projectDescription");
let slot2Img = document.querySelector(".slot2Img");
let slot3Img = document.querySelector(".slot3Img");
let slot2Title = document.querySelector(".slot2Title");
let slot3Title = document.querySelector(".slot3Title");
let link1 = document.querySelector(".link1");
let link2 = document.querySelector(".link2");
let link3 = document.querySelector(".link3");
let featLiveLink = document.querySelector(".featLiveLink");
let imgBox3 = document.querySelector(".imgBox3");
let imgBox2 = document.querySelector(".imgBox2");
let codeImgLink1=document.querySelector(".codeImgLink1");
let codeImgLink2=document.querySelector(".codeImgLink2");
let projectImgPopUp=document.querySelector(".projectImgPopUp");
let projCodeImg = document.querySelector(".projCodeImg");
let rightProjImgArrow = document.querySelector(".rightProjImgArrow");
let leftProjImgArrow = document.querySelector(".leftProjImgArrow");
let exitCodeImg = document.querySelector(".exitCodeImg");

let button = document.querySelector(".button");


let arrowCount = 0;
let count=0;

//Project Details (Title, Description, Image, Links)
let p1Title="Interactive Cover Letter";
let p1Description="This project is my attempt to stand out to potential employers.  While I will continue to submit cover letters, for someone who wants a break from the usual, they can click the link and learn a little about me, while also seeing my work in action.  This was also a chance for me to practice DOM manipulation and CSS animations. The biggest challenges in this project have been getting the Drag and Drop feature to behave exactly as I want it and also the responsiveness. I really enjoyed this project page the most, particularly coming up with the JS code to switch back and forth between projects."
let p1Image="./imgs/discordCV1.png";
let p1link1="https://github.com/PBadila/cvFedEx";
let p1link1Inner="GitHub"
let p1Live="https://cvfedex.onrender.com";

let p2Title="Personal Blog";
let p2Description="The goal of this blog was to document my journey from the end of bootcamp to getting a job as a Software Engineer. I used this project to practice creating a database and get comfortable with React. I encountered a few obstacles, all which I actually chronicled in the blog, such as password protection and being able to edit a post. Another issue, one that I keep encountering, is getting the info from the API's to show up on the web page.  I think this may be an issue with the host that I am using, but the work around is to have the LOADING... message. If you encounter it, wait awhile, trust me - it will load eventually.";
let p2Image="./imgs/blog.png";
let p2link1="https://www.youtube.com/watch?v=NRrTH-7el38";
let p2link1Inner="Video"
let p2link2="https://github.com/PBadila/blog";
let p2link2Inner="GitHub Backend";
let p2Live = "https://journeytosoftwareengineer.onrender.com/";

let p3Title="Community Garden";
let p3Description="An app aimed at addressing food deserts by allowing users to join and interact with a community garden. As an urban agriculturist, this project was of particular interest to me. I played a key role in building the backend, creating the database and routes, and implementing API fetches. This project provided valuable experience in team dynamics, user story-driven programming, GitHub collaboration, as well as deployment through Render.com and database hosting with ElephantSQL.";
let p3Image="./imgs/garden.png";
let p3link1="https://github.com/PBadila/community-garden-front-end";
let p3link1Inner="GitHub Frontend"
let p3link2="https://github.com/PBadila/community-garden-backend";
let p3link2Inner="GitHub Backend"
let p3link3="https://community-garden-api.onrender.com/";
let p3link3Inner="API"
let p3Live = "https://community-garden.onrender.com/";

let p4Title="DOS Card Counter";
let p4Description="An app designed for a statistics class to use to count cards in the game of DOS. Probability calculation capability will be added soon. For now, you can click on the card color, then number, and a tally will be kept. Created using JavaScript, HTML, CSS.";
let p4Image="./imgs/dosGame.png";
let p4link1="https://github.com/PBadila/dosCardCounter";
let p4Live="https://doscardcounter.onrender.com/";
let p4linkInner="GitHub";

let p5Title="Squarespace Customization";
let p5Description="This was a group project.  Actually, my wonderful Son, who is a 3D Artist and a phenomenal Coder, was the designer and coder for this site.  My role was to write the JavaScript code for the About Me Page buttons and integrate it into the Squarespace site.  This required me to actually learn how to use JQuery.  Now the About Me buttons are clickable and the appropriate divs appear and disappear.";
let p5Image="./imgs/solSiteMain.png";
let p5Live="https://www.cantkillmysol.com/about";
let p5link1Inner="Code Snippets";
let codeImgNum = 2;
let p5link1Img="./imgs/solSiteCode.png";
let p5link2Img="./imgs/solSiteCode2.png";
let p5linkImgs = ["./imgs/solSiteCode.png", "./imgs/solSiteCode2.png"];

let p6Title="Homeschool Division";
let p6Description="I homeschool my children and I designed this site to help my girls practice the concept of division. For my final bootcamp solo project, I used REACT to design a homeschool app.  I am re-creating that (but better and more elaborate now that I have a better understanding of REACT) and this division practice will be a part of the final Homeschool REACT app. This was created with HTML, CSS, and JavaScript, as I focus on writing cleaner, re-usable code."
let p6Image="./imgs/ldProjectCode1.png";
let p6link1Inner="Code Snippets";
let p6Live="https://homeschooldivision.onrender.com/";
let p6linkImgs = ["./imgs/divSS3.png","./imgs/divSS4.png","./imgs/divSS5.png"];

let p7Title="Green Squares Challenge";
let p7Description="I was reading an article on Free Code Camp entitled 'How to Build Successful Projects as a Junior Developer' and it mentioned this coding challenge, so I decided to try it.  Setting up the squares and getting them to turn green was easy.  Getting them to de-colorize with a time lapse in between proved to be a challenge that led me to a deeper understanding of the asynchronicity of the setTimeout function and how to work around it."
let p7Image="./imgs/greenSquares.png";
let p7link1Inner="Code Snippets";
let p7Live="https://greensquares.onrender.com/";
let p7LinkImgs=["./imgs/gs1.png","./imgs/gs2.png"];

let scrollToSection = () =>{
  if(container2){
    console.log('should scroll');
    container2.scrollIntoView({
    behavior:'smooth'
    })
  }
}

button.addEventListener('click', ()=>{
  console.log('clicked button');
  scrollToSection();
})


let images = [img1,img2,img3,img4,img5,img6,img8,img9];
let radians = (2*Math.PI/images.length)
console.log(radians);
document.addEventListener("DOMContentLoaded", function() {
images.forEach((img, index) => {
    console.log("index: "+index);
    //200 is the radius of the circle
    //adding the first number moves the circle's origin so that it is not at 0 top, 0 left corner of the div it is in
    let x = 250+ Math.cos(index * radians) * 200; 
    let y = 125 + Math.sin(index * radians) * 200;
    console.log(x)
    console.log(y)
    img.style.transform = `translate(${x}px, ${y}px)`;
  });
})
 

let facts = ["Prince is my muse.","I don't eat animals.", "A dinosaur lives with me (actually, she's a Great Dane).","I LOVE programming.","I'm moving to Maryland in March.","I homeschooled all 5 of my children.","I am a Kemetic Yoga Basu","I lead Cacao Ceremonies.","I have a Chiweenie named Tofu.","I am intellectually curious - I'm always learning, be it herbs and wellness, chakras and enlightenment, AI, statistics, or whatever.  I love learning!","I like to inspire and innovate - Everything I learn, I pass on to my youth technology club.  I love showing them what I do and watching them come up with ways to use programming and technology to improve their lives.", "I like being a part of a collaborative team - I love working with others and seeing the result of our different minds working towards some common goal."];
let fact;
let chooseFact = () =>{
    let num = Math.floor(Math.random() * facts.length);
    fact = facts[num];
    funFact.innerText=fact;
}



let handleIntersection = (entries, observer) =>{
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        chooseFact();
      }
    });
  }

  const observer = new IntersectionObserver(handleIntersection, { threshold: 0.5 });

  observer.observe(container3);

  arrowAboutRight.addEventListener('click',()=>{
    console.log('Clicked. count= '+arrowCount);
    switch (arrowCount){
      case 0://we're on about1
        about1.style.display="none";
        about3.style.display="none";
        about2.style.display="flex";
        arrowCount++;
        break;
      case 1://we're on about2
        about2.style.display="none";
        about1.style.display="none";
        about3.style.display="flex";
        arrowCount++;
        break;
      case 2://we're on about3
        about2.style.display="none";
        about1.style.display="block";
        about3.style.display="none";
        arrowCount=0;
        break;
    }
  })
  arrowAboutLeft.addEventListener('click',()=>{
    console.log('Clicked. count= '+arrowCount);
    switch (arrowCount){
      case 0://we're on about1
        about1.style.display="none";
        about3.style.display="flex";
        about2.style.display="none";
        arrowCount=2;
        break;
      case 1://we're on about2
        about2.style.display="none";
        about1.style.display="block";
        about3.style.display="none";
        arrowCount--;
        break;
      case 2://we're on about3
        about2.style.display="flex";
        about1.style.display="none";
        about3.style.display="none";
        arrowCount--;
        break;
    }
  })

  moBox1.addEventListener('mouseover', () =>{
    mo1.style.display="none";
    mouseOver1.style.display="block";
  })

  moBox1.addEventListener('mouseleave',() =>{
    mo1.style.display="block";
    mouseOver1.style.display="none";
  })

  moBox2.addEventListener('mouseover', () =>{
    mo2.style.display="none";
    mouseOver2.style.display="flex";
  })

  moBox2.addEventListener('mouseleave',() =>{
    mo2.style.display="block";
    mouseOver2.style.display="none";
  })
  moBox3.addEventListener('mouseover', () =>{
    mo3.style.display="none";
    mouseOver3.style.display="block";
  })

  moBox3.addEventListener('mouseleave',() =>{
    mo3.style.display="block";
    mouseOver3.style.display="none";
  })

  rightArrowWhite.addEventListener('click', () => {

    
    switch(count){
        //Project 2 is now the feature
        case 0:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p2Title;
            displayProject.src=p2Image;
            projectTitle.innerText=p2Title;
            projectDescription.innerText=p2Description;
            featLiveLink.setAttribute("href",p2Live);
            link1.setAttribute("href",p2link1);
            link2.setAttribute("href",p2link2);
            link1.innerText=p2link1Inner;
            link2.innerText=p2link2Inner;
            link3.setAttribute("href","#");
            link3.innerText="";
            codeImgLink1.innerText="";

            //switching the 2nd box
            slot2Title.innerText=p3Title;
            slot2Img.src=p3Image;
            //switching the 3rd box
            slot3Title.innerText=p4Title;
            slot3Img.src=p4Image;
            count++;
            break;
        //Project 3 is now the feature
        case 1:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p3Title;
            displayProject.src=p3Image;
            projectTitle.innerText=p3Title;
            projectDescription.innerText=p3Description;
            featLiveLink.setAttribute("href",p3Live);
            link1.setAttribute("href",p3link1);
            link2.setAttribute("href",p3link2);
            link3.setAttribute("href",p3link3);
            link1.innerText=p3link1Inner;
            link2.innerText=p3link2Inner;
            link3.innerText=p3link3Inner;
            codeImgLink1.innerText="";

            //switching the 2nd box
            slot2Title.innerText=p4Title;
            slot2Img.src=p4Image;
            //switching the 3rd box
            slot3Title.innerText=p5Title;
            slot3Img.src=p5Image;
            count++;
            break;
             //Project 4 is now the feature
            case 2:
                //switching the feature
                console.log("Count: "+count)
                miniTitleFeat.innerText=p4Title;
                displayProject.src=p4Image;
                projectTitle.innerText=p4Title;
                projectDescription.innerText=p4Description;
                featLiveLink.setAttribute("href",p4Live);
                link1.setAttribute("href",p4link1);
                link1.innerText=p4linkInner;
                link2.setAttribute("href","#");
                link2.innerText="";
                link3.setAttribute("href","#");
                link3.innerText="";
                codeImgLink1.innerText="";
                
               
                //switching the 2nd box
                slot2Title.innerText=p5Title;
                slot2Img.src=p5Image;
                //switching the 3rd box
                slot3Title.innerText=p6Title;
                slot3Img.src=p6Image;
                count++;
            
                break;
             //Project 5 is now the feature
            case 3:
                 //switching the feature
                console.log("Count: "+count)
                miniTitleFeat.innerText=p5Title;
                displayProject.src=p5Image;
                projectTitle.innerText=p5Title;
                projectDescription.innerText=p5Description;
                featLiveLink.setAttribute("href",p5Live);
                link1.setAttribute("href","");
                link1.innerText="";
                link2.setAttribute("href","");
                link2.innerText="";
                link3.setAttribute("href","");
                link3.innerText="";
                codeImgLink1.innerText=p5link1Inner;
                projCodeImgArray=p5linkImgs;
                
                    
                   
                //switching the 2nd box
                slot2Title.innerText=p6Title;
                slot2Img.src=p6Image;
                //switching the 3rd box
                slot3Title.innerText=p7Title;
                slot3Img.src=p7Image;
                count++;
                
                break;

            //Project 6 is now the feature
            case 4:
                //switching the feature
                console.log("Count: "+count)
                miniTitleFeat.innerText=p6Title;
                displayProject.src=p6Image;
                projectTitle.innerText=p6Title;
                projectDescription.innerText=p6Description;
                featLiveLink.setAttribute("href",p6Live);
                link1.setAttribute("href","");
                link1.innerText="";
                link2.setAttribute("href","");
                link2.innerText="";
                link3.setAttribute("href","");
                link3.innerText="";
                codeImgLink1.innerText=p6link1Inner;
                projCodeImgArray=p6linkImgs;
                
                
                
            //switching the 2nd box
            slot2Title.innerText=p7Title;
            slot2Img.src=p7Image;
            //switching the 3rd box
            slot3Title.innerText=p1Title;
            slot3Img.src=p1Image;
            count++;
            
            break;


        //Project 7 is now the feature
        case 5:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p7Title;
            displayProject.src=p7Image;
            projectTitle.innerText=p7Title;
            projectDescription.innerText=p7Description;
            featLiveLink.setAttribute("href",p7Live);
            link1.setAttribute("href","");
            link1.innerText="";
            link2.setAttribute("href","");
            link2.innerText="";
            link3.setAttribute("href","");
            link3.innerText="";
            codeImgLink1.innerText=p7link1Inner;
            projCodeImgArray=p7LinkImgs;
            
            
            
        //switching the 2nd box
        slot2Title.innerText=p1Title;
        slot2Img.src=p1Image;
        //switching the 3rd box
        slot3Title.innerText=p2Title;
        slot3Img.src=p2Image;
        count++;
        
        break;
    
        //back to project 1     
        case 6:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p1Title;
            displayProject.src=p1Image;
            projectTitle.innerText=p1Title;
            projectDescription.innerText=p1Description;
            featLiveLink.setAttribute("href",p1Live);
            link1.setAttribute("href",p1link1);
            link2.setAttribute("href","");
            link1.innerText=p1link1Inner;
            link2.innerText="";
            link3.setAttribute("href","#");
            link3.innerText="";
            codeImgLink1.innerText="";
           
            //switching the 2nd box
            slot2Title.innerText=p4Title;
            slot2Img.src=p4Image;
            //switching the 3rd box
            slot3Title.innerText=p5Title;
            slot3Img.src=p5Image;
            count=0;
        
            break;

    }
})

leftArrowWhite.addEventListener('click', () => {
    
    switch(count){
        case 0:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p7Title;
            displayProject.src=p7Image;
            projectTitle.innerText=p7Title;
            projectDescription.innerText=p7Description;
            featLiveLink.setAttribute("href",p7Live);
            link1.setAttribute("href","");
            link2.setAttribute("href","");
            link3.setAttribute("href","");
            link1.innerText="";
            link2.innerText="";
            link3.innerText="";
            codeImgLink1.innerText=p7link1Inner;
            projCodeImgArray=p7LinkImgs;

            //switching the 2nd box
            slot2Title.innerText=p1Title;
            slot2Img.src=p1Image;
            //switching the 3rd box
            slot3Title.innerText=p2Title;
            slot3Img.src=p2Image;
            count=6;
            break;
        case 6:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p6Title;
            displayProject.src=p6Image;
            projectTitle.innerText=p6Title;
            projectDescription.innerText=p6Description;
            featLiveLink.setAttribute("href",p6Live);
            link1.setAttribute("href","");
            link2.setAttribute("href","");
            link3.setAttribute("href","");
            link1.innerText="";
            link2.innerText="";
            link3.innerText="";
            codeImgLink1.innerText=p6link1Inner;
            projCodeImgArray=p6linkImgs;
            //switching the 2nd box
            slot2Title.innerText=p7Title;
            slot2Img.src=p7Image;
            //switching the 3rd box
            slot3Title.innerText=p1Title;
            slot3Img.src=p1Image;
            count--;
            break;
        case 5:
            //switching the feature
            console.log("Count: "+count)
            miniTitleFeat.innerText=p5Title;
            displayProject.src=p5Image;
            projectTitle.innerText=p5Title;
            projectDescription.innerText=p5Description;
            featLiveLink.setAttribute("href",p5Live);
            link1.setAttribute("href","");
            link1.innerText="";
            link2.setAttribute("href","");
            link2.innerText="";
            link3.setAttribute("href","#");
            link3.innerText="";
            codeImgLink1.innerText=p5link1Inner;
            projCodeImgArray=p5linkImgs;
            //switching the 2nd box
            slot2Title.innerText=p6Title;
            slot2Img.src=p6Image;
            //switching the 3rd box
            slot3Title.innerText=p7Title;
            slot3Img.src=p7Image;
            count--;
            break;
        case 4:
            //switching the feature
            
            console.log("Count: "+count)
            miniTitleFeat.innerText=p4Title;
            displayProject.src=p4Image;
            projectTitle.innerText=p4Title;
            projectDescription.innerText=p4Description;
            featLiveLink.setAttribute("href",p4Live);
            link1.setAttribute("href","");
            link2.setAttribute("href","");
            link1.innerText="";
            link2.innerText="";
            link3.setAttribute("href","");
            link3.innerText="";
            codeImgLink1.innerText="";
            //switching the 2nd box
            slot2Title.innerText=p5Title;
            slot2Img.src=p5Image;
            //switching the 3rd box
            slot3Title.innerText=p6Title;
            slot3Img.src=p6Image;
            count--;
            break;

        case 3:
            //switching the feature
                
            console.log("Count: "+count)
            miniTitleFeat.innerText=p3Title;
            displayProject.src=p3Image;
            projectTitle.innerText=p3Title;                
            projectDescription.innerText=p3Description;
            featLiveLink.setAttribute("href",p3Live);
            link1.setAttribute("href",p3link1);
            link2.setAttribute("href",p3link2);
            link3.setAttribute("href",p3link3);
            link1.innerText=p3link1Inner;
            link2.innerText=p3link2Inner;
            link3.innerText=p3link3Inner;
            codeImgLink1.innerText="";
            //switching the 2nd box
            slot2Title.innerText=p4Title;
            slot2Img.src=p4Image;
            //switching the 3rd box
            slot3Title.innerText=p5Title;
            slot3Img.src=p5Image;
            count--;
            break;
        case 2:
            //switching the feature
                
            console.log("Count: "+count)
            miniTitleFeat.innerText=p2Title;
            displayProject.src=p2Image;
            projectTitle.innerText=p2Title;                
            projectDescription.innerText=p2Description;
            featLiveLink.setAttribute("href",p2Live);
            link1.setAttribute("href",p2link1);
            link2.setAttribute("href",p2link2);
            link1.innerText=p2link1Inner;
            link2.innerText=p2link2Inner;
            link3.setAttribute("href","#");
            link3.innerText="";
            codeImgLink1.innerText="";
            //switching the 2nd box
            slot2Title.innerText=p3Title;
            slot2Img.src=p3Image;
            //switching the 3rd box
            slot3Title.innerText=p4Title;
            slot3Img.src=p4Image;
            count--;
            break;

            case 1:
                //switching the feature
                    
                console.log("Count: "+count)
                miniTitleFeat.innerText=p1Title;
                displayProject.src=p1Image;
                projectTitle.innerText=p1Title;                
                projectDescription.innerText=p1Description;
                featLiveLink.setAttribute("href",p1Live);
                link1.setAttribute("href",p1link1);
                link2.setAttribute("href","");
                link1.innerText=p1link1Inner;
                link2.innerText="";
                link3.setAttribute("href","#");
                link3.innerText="";
                codeImgLink1.innerText="";
                //switching the 2nd box
                slot2Title.innerText=p2Title;
                slot2Img.src=p2Image;
                //switching the 3rd box
                slot3Title.innerText=p3Title;
                slot3Img.src=p3Image;
                count--;
                break;
      
    }
})

codeImgLink1.addEventListener('click', ()=> {
    console.log("imgs should be visible");
    projectImgPopUp.style.display="flex";
    projCodeImg.src=projCodeImgArray[0];
    projNumber=0;
    
    
})

exitCodeImg.addEventListener('click' , () => {
    projectImgPopUp.style.display="none";
})



rightProjImgArrow.addEventListener('click', () =>{
    // let currentImg=0;
    // console.log("right button through array");
    // console.log("This is project img array: "+ projCodeImgArray);
    // console.log("array length type: "+ typeof(projCodeImgArray.length));
    // console.log(projCodeImgArray.length - 1);
    // console.log("projCodeImg.src = "+ projCodeImg.src);

    if(projNumber < (projCodeImgArray.length-1)){
        projCodeImg.src=projCodeImgArray[projNumber + 1];
        projNumber ++;
    }else{
        projCodeImg.src = projCodeImgArray[0];
        projNumber = 0;
    }
})

leftProjImgArrow.addEventListener('click', () =>{
    // let currentImg=0;
    // console.log("right button through array");
    // console.log("This is project img array: "+ projCodeImgArray);
    // console.log("array length type: "+ typeof(projCodeImgArray.length));
    // console.log(projCodeImgArray.length - 1);
    // console.log("projCodeImg.src = "+ projCodeImg.src);

    if(projNumber > 0){
        projCodeImg.src=projCodeImgArray[projNumber - 1];
        projNumber --;
    }else{
        projCodeImg.src = projCodeImgArray[projCodeImgArray.length - 1];
        projNumber = projCodeImgArray.length - 1;
    }
})
  