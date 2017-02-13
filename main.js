(function(){

    window.onload = function(){

        Elements = new buildDoMM(propeties);
        definitions = new adjustDefs(propeties).definitions;
        sheet = new setStyleSheet(definitions);
        //animation = new adjustDefs(propeties).animation();

        document.addEventListener('click', function (event) {
            if (!event.target.id) return
            switch(event.target.id) {
                case 'LinkedIn':
                    event.preventDefault();
                    OpenInNewTabWinBrowser('https://ca.linkedin.com/in/ohavb');
                    break;
                case 'GitHub':
                    event.preventDefault();
                    OpenInNewTabWinBrowser('https://github.com/ohavben');
                    break;
                case 'Carousel':
                    event.preventDefault();
                    OpenInNewTabWinBrowser('http://carousel.mobi');
                    break;
                case 'about':
                    event.preventDefault();
                    if (event.target.classList.contains('big')) {
                        //return animation.about.reverse();
                    }
                    else {
                        //return animation.about.play();
                    }
                    break;
                case 'skills':
                    event.preventDefault();
                    if (event.target.classList.contains('big')) {
                        //return animation.skills.reverse();
                    }
                    else {
                        //return animation.skills.play();
                    }  
                    break;
                case 'links':
                    event.preventDefault();
                    if (event.target.classList.contains('big')) {
                        //return animation.links.reverse();
                    }
                    else {
                        //return animation.links.play();
                    }
                    break;
                default: return
            }
        }, false);

        window.addEventListener('resize', debounce(resize, 50), false);

        //console.log(sheet);
        //console.log(Elements);
        //console.log(animation.about)
        //console.log(animation.skills)
        //console.log(animation.links)
    };

    var definitions,
        Elements,
        sheet,
        myStyleSheet,
        myPrefix =  prefix(),
        animation;

    const propeties = [

        {
            "type": "div",
            "ID": "#board",
            "parent": "body",
            "class": "",
            "text": "",
            "html":"",
            "CSS":  "width: boardWidth;\
                     height: boardHeight;\
                     position: relative;\
                     display:block;\
                     position:absolute;\
                     overflow:hidden;\
                     left: boardLeft;\
                     top: boardTop;" 
        }, 

        {
            "type": "div",
            "ID": "#name",
            "parent": "board",
            "class": "",
            "text": "",
            "html":"<div class = 'name'>OHAV BEN YANAI</div><div class = 'webdev Hide'>Full Stack Web Developer</div>",
            "CSS":  "width: nameWidth;\
                    height: nameHeight;\
                    top: note2Top;\
                    left: note2Left;\
                    position:absolute;\
                    overflow:hidden;"
        }, 

        {
            "type": "div",
            "ID": "#about",
            "parent": "board",
            "class": "clickable",
            "text": "",
            "html":"<div class = 'AboutTitle Hide'>ABOUT</div><div class = 'AboutDescription Hide zoom'>I create progressive web applications with Node.js, webworkers and MongoDb</div>",
            "CSS": "width: aboutWidth;\
                    height: aboutHeight;\
                    top: note5Top;\
                    left: note5Left;\
                    position:absolute;\
                    overflow:hidden;"
        }, 

        {
            "type": "div",
            "ID": "#skills",
            "parent": "board",
            "class": "clickable",
            "text": "",
            "html":"<div class = 'skillsTitle Hide'>SKILLS</div><div class = 'skillHolder Hide zoom'><span>JavaScript</span><span>Socket.io</span><span>HTML5</span><span>jQuery</span><span>CSS3</span><span>Linux</span><span>Node.js</span><span></span><span>Express</span><span>Git</span><span>Gimp </span><span>Jade</span><span>SVG</span><span>InkScape</span><span>CANVAS</span><span>GreenSock</span><span>JSON</span><span>Ajax</span><span>MongoDb</span><span>Docker</span></div>",
            "CSS":  "width: skillsWidth;\
                    height: skillsHeight;\
                    top: note3Top;\
                    left: note3Left;\
                    position:absolute;\
                    overflow:hidden;"
        }, 

        {
            "type": "div",
            "ID": "#links",
            "parent": "board",
            "class": "clickable",
            "text": "",
            "html":"<div class = 'linksTitle Hide'>LINKS</div><ul type = 'none' class = 'ulLinks Hide zoom'><li id = 'LinkedIn'>LinkedIn</li><li id = 'GitHub'>GitHub</li><li id = 'Carousel'>Carousel</li></ul>",
            "CSS":  "width: linksWidth;\
                    height: linksHeight;\
                    top: note6Top;\
                    right: note6Left;\
                    position:absolute;\
                    overflow:hidden;"
        },

        {
            "type": "class",
            "ID":".name",
            "CSS": "font-family: 'BasicScratch';\
                    font-size: nameFontSize;\
                    position:relative;\
                    display:block;\
                    top: nameTop;\
                    left: 50%;\
                    -prefix-transform: translateX(-50%) scale(1,4);\
                    text-align: center;\
                    z-index: -1;\
                    color: #27CDE7;"
        },

        {
            "type": "class",
            "ID":".webdev",
            "CSS": "font-family: 'KG Second Chances Sketch';\
                    font-size: webDevFontSize;\
                    position:relative;\
                    display:block;\
                    top: webDevTop;\
                    left: 50%;\
                    -prefix-transform: translateX(-50%) scale(1,1.33);\
                    text-align: center;\
                    z-index: -1;\
                    color:white;\
                    padding-top: webDevPaddingTop;" 
        },

        {  
            "type": "class",
            "ID":".AboutTitle",
            "CSS": "font-family: 'BasicScratch';\
                    font-size: AboutTitleFontSize;\
                    position:relative;\
                    display:block;\
                    left: 50%;\
                    -prefix-transform: translateX(-50%) scale(1,1);\
                    text-align: center;\
                    z-index: -1;\
                    color:#DDA1DB;"
        },

        {
            "type": "class",
            "ID":".AboutDescription",
            "CSS": "font-family: 'KG Second Chances Sketch';\
                    font-size: AboutDescriptionFontSize;\
                    text-align: center;\
                    position:absolute;\
                    z-index: -1;\
                    color:white;\
                    top:AboutDescriptionTop;"  
        },

        {
            "type": "class",
            "ID":".skillsTitle",
            "CSS": "width: skillsWidth;\
                    font-family: 'BasicScratch';\
                    font-size: SkillsTitleFontSize;\
                    position:absolute;\
                    display:inline;\
                    top: 0px;\
                    text-align: center;\
                    z-index: -1;\
                    color:#F8FB50;"
        },

        {
            "type": "class",
            "ID":".skillHolder>span",
            "CSS": "color:white;\
                    font-size: skillsHolderFontSize;\
                    font-family: 'KG Second Chances Sketch';\
                    padding-left: 0.4rem;"
        },

        {
            "type": "class",
            "ID":".linksTitle",
            "CSS": "font-family: 'BasicScratch';\
                    font-size: linksTitleFontSize;\
                    position:relative;\
                    display:block;\
                    -prefix-transform: scale(1,1.6);\
                    text-align: center;\
                    z-index: -1;\
                    color: #F8FB50;"
        },
        
        {
            "type": "class",
            "ID":".ulLinks",
            "CSS": "font-family: 'KG Second Chances Sketch';\
                    font-size: linkFontSize;\
                    text-align: left;\
                    position:relative;\
                    display:block;\
                    top: linksTop;\
                    right: -15%;\
                    -prefix-transform: scale(1.2,1);\
                    z-index: 1;\
                    color:white;"
        },

        {
            "type": "class",
            "ID":"*",
            "CSS":"-prefix-user-select: none;\
                   overflow: hidden;\
                   margin: 0 auto;\
                   padding: 0px 0px;"
        },
       
        {
            "type":"class",
            "ID":"body",
            "CSS":"margin: 0 auto;\
                   overflow: hidden;\
                   width: totalWidth;\
                   height: totalHeight;\
                   background: url('https://res.cloudinary.com/carousel/image/upload/v1479181707/board_puhjy7.jpg') no-repeat center center fixed;\
                   -prefix-background-size: cover;"
        },
        
        {
            "type":"class",
            "ID":".skillHolder",
            "CSS":  "display:flex;\
                    flex-direction: row;\
                    flex-wrap: wrap;\
                    justify-content:center;\
                    align-items: center;\
                    align-content: stretch;\
                    position: absolute;\
                    top: skillHolderTop;" 
        }
    ];

//-------------------------------- building and setting up the domm ---------------------------------------------//

  function adjustDefs(obj){
        var defs = obj.map(function(value){
            var newText = {id:value.ID , type: value.type, css:value.CSS};
            return newText;
        });

    var NotesPosition = function(){
            var width = window.innerWidth, height = window.innerHeight, result;
                if(width/height > 1){ //landscape
                    result = [ '8%',  '24%', '3.5%',  '3.5%',  '38%', '50%', '44%', '77.5%', '38%', '2.5%', '4%', '2.5%' ];
                }
                else { //portrait
                    result = ['7%',  '2.5%', '3.5%', '3.5%', '66%', '2.5%', '80%', '52.5%', '24%', '2.5%', '4%', '1%' ];
                }
            return result;
    };

    var totalHeight = window.innerHeight;
    var totalWidth = window.innerWidth;
    var itemsToBeReplaced = [
                                'totalWidth',               
                                'totalHeight',              
                                'marginWidth',              
                                'marginHeight',             
                                'marginCarouselHeight',     
                                'note1Top',                 
                                'note1Left',                
                                'note2Top',                 
                                'note2Left',                
                                'note3Top',                 
                                'note3Left',                
                                'note4Top',                 
                                'note4Left',                
                                'note5Top',                 
                                'note5Left',                
                                'note6Top',                 
                                'note6Left',               
                                'boardLeft',                
                                'boardTop',                 
                                'boardWidth',               
                                'boardHeight',              
                                'aboutWidth',               
                                'aboutHeight',              
                                'skillsWidth',              
                                'skillsHeight',             
                                'linksWidth',               
                                'linksHeight',              
                                'webDevTop',                
                                'webDevPaddingTop',         
                                'AboutDescriptionTop',      
                                'skillHolderTop',           
                                'nameWidth',
                                'nameHeight',
                                'nameTop',
                                'skillsWidth',
                                'linkFontSize',
                                'linksTitleFontSize',
                                'nameFontSize',
                                'webDevFontSize',
                                'AboutTitleFontSize',
                                'SkillsTitleFontSize',
                                'skillsHolderFontSize',
                                'AboutDescriptionFontSize',
                                'linksTop',
                                '-prefix-'
                            ];

        var newValues = [
                            totalWidth+'px',                        
                            totalHeight+'px',                       
                            Math.floor(totalWidth/-2)+'px',         
                            Math.floor(totalHeight/-2)+'px',        
                            Math.floor((totalHeight-130)/-2)+'px',  
                            NotesPosition()[0],                     
                            NotesPosition()[1],                     
                            NotesPosition()[2],                     
                            NotesPosition()[3],                     
                            NotesPosition()[4],                     
                            NotesPosition()[5],                     
                            NotesPosition()[6],                     
                            NotesPosition()[7],                     
                            NotesPosition()[8],                     
                            NotesPosition()[9],                     
                            NotesPosition()[10],                    
                            NotesPosition()[11],                   
                            boardLeft(),                            
                            boardTop(),                             
                            boardWidth(),                           
                            boardHeight(),                          
                            aboutWidth(),                           
                            aboutHeight(),                          
                            skillsWidth(),                          
                            skillsHeight(),                         
                            linksWidth(),                           
                            linksHeight(),                          
                            webDevTop(),                            
                            webDevPaddingTop(),                     
                            AboutDescriptionTop(),                  
                            skillHolderTop(),                       
                            nameWidth(),
                            nameHeight(),
                            nameTop(), 
                            skillsWidth(),
                            linkFontSize(),
                            linksTitleFontSize(),
                            nameFontSize(),
                            webDevFontSize(),
                            AboutTitleFontSize(),
                            SkillsTitleFontSize(),
                            skillsHolderFontSize(),
                            AboutDescriptionFontSize(),
                            linksTop(),
                            myPrefix.css
                         ];

    var length = defs.length;
    var itemsLength = itemsToBeReplaced.length;

    for (var s = 0 ; s < length; ++s){
        for (var r = 0; r < itemsLength; ++r){
          (function(oldValue,newValue,u){
            defs[u].css = defs[u].css.replaceAll(oldValue, newValue);
          }(itemsToBeReplaced[r],newValues[r],s))
        }
    }

    function boardLeft(){
         var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor((totalWidth - (totalHeight * 1.333))/2);
        } 
        else {
            size = 0;
        }
        return size.toString() + 'px';
    }

    function boardTop(){
         var size;
        if (totalWidth > totalHeight){ //landscape
            size = 0;
        } 
        else {
            size = Math.floor(( totalHeight - (totalWidth * 1.333))/2);
        }
        return size.toString() + 'px';
    }

    function boardWidth(){
      var size;
      if (totalWidth > totalHeight){ //landscape
        size = Math.floor(totalHeight * 1.333);
      } 
      else {
        size = Math.floor(totalWidth);
      }
      return size.toString() + 'px';
    }

    function boardHeight(){
      var size;
      if (totalWidth > totalHeight){ //landscape
        size = Math.floor(totalHeight);
      } 
      else {
        size = Math.floor(totalWidth * 1.333);
      }
      return size.toString() + 'px';
    }

    function nameWidth(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 1.333 * 0.72);
        } 
        else {
            size = Math.floor(totalWidth * 0.72);
        }
        return size.toString() + 'px';
    }

    function nameHeight(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.38);
        } 
        else {
            size = Math.floor(totalWidth * 1.333 * 0.38);
        }
        return size.toString() + 'px';
    }

    function skillsWidth(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 1.333 * 0.5 * 0.95);
        } 
        else {
            size = Math.floor(totalWidth * 0.95);
        }
        return size .toString() + 'px';
    }

    function skillsHeight(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 2 * 0.4);
        } 
        else {
            size = Math.floor(totalWidth * 1.333 * 0.4);
        }
        return size.toString() + 'px';
    }

    function linksWidth(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.33);
        } 
        else {
            size = Math.floor(totalWidth * 0.25);
        }
        return size.toString() + 'px';
    }

    function linksHeight(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.33);
        } 
        else {
            size = Math.floor(totalWidth * 0.33);
        }
        return size.toString() + 'px';
    }

    function webDevTop(){
        var size;
            if (totalWidth > totalHeight){ //landscape
                size = Math.floor(totalHeight * 0.38 * 0.3666);
            } 
            else {
                size = Math.floor(totalWidth * 1.333 * 0.38 * 0.2);
            }
        return size.toString() + 'px';
    }

    function linksTop(){
        var size;
            if (totalWidth > totalHeight){ //landscape
                size = Math.floor(totalHeight * -0.008);
            } 
            else {
                size = Math.floor(totalWidth * 0.0117);
            }
        return size.toString() + 'px';
    }

    function nameTop(){
        var size;
            if (totalWidth > totalHeight){ //landscape
                size = Math.floor(totalHeight * 0.38 * 0.22);
            } 
            else {
                size = Math.floor(totalWidth * 1.333 * 0.38 * 0.125);
            }
        return size.toString() + 'px';
    }

    function webDevPaddingTop(){
        var size;
            if (totalWidth > totalHeight){ //landscape
                size = Math.floor(totalHeight * 0.38 * 0.03125);
            } 
            else {
                size = Math.floor(totalWidth * 1.333 * 0.38 * 0.03125);
            }
        return size.toString() + 'px';
    }

    function AboutDescriptionTop(){
        var size;
            if (totalWidth > totalHeight){ //landscape
                size = Math.floor(totalHeight * 0.16667);
            } 
            else {
                size = Math.floor(totalWidth * 0.2);
            }
        return size.toString() + 'px';
    }

    function skillHolderTop(){
        var size;
            if (totalWidth > totalHeight){ //landscape
                size = Math.floor(totalHeight * 0.1777);
            } 
            else {
                size = Math.floor(totalWidth * 0.225);
            }
        return size.toString() + 'px';
    }

    function aboutWidth(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 1.333 * 0.5 * 0.95);
        } 
        else {
            size = Math.floor(totalWidth * 0.95);
        }
        return size.toString() + 'px';
    }

    function aboutHeight(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 2 * 0.52);
        } 
        else {
            size = Math.floor(totalWidth * 1.333 * 0.52);
        }
        return size.toString() + 'px';
    }

    function skillsWidth(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 1.333 * 0.5 * 0.95);
        } 
        else {
            size = Math.floor(totalWidth * 0.95);
        }
        return size.toString() + 'px';
    }

    function linkFontSize(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.0556);
        } 
        else {
            size = Math.floor(totalWidth * 0.04125);
        }
        return size.toString() + 'px';
    }

    function linksTitleFontSize(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.1177);
        } 
        else {
            size = Math.floor(totalWidth * 0.09);
        }
        return size.toString() + 'px';
    }

    function nameFontSize(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.1);
        } 
        else {
            size = Math.floor(totalWidth * 0.08);
        }
        return size.toString() + 'px';
    }

    function webDevFontSize(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.06);
        } 
        else {
            size = Math.floor(totalWidth * 0.0475);
        }
        return size.toString() + 'px';
    }

    function AboutTitleFontSize(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.1887);
        } 
        else {
            size = Math.floor(totalWidth * 0.2125);
        }
        return size.toString() + 'px';
    }

    function SkillsTitleFontSize(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.1887);
        } 
        else {
            size = Math.floor(totalWidth * 0.2325);
        }
        return size.toString() + 'px';
    }

    function skillsHolderFontSize(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.0475);
        } 
        else {
            size = Math.floor(totalWidth * 0.035);
        }
        return size.toString() + 'px';
    }

    function AboutDescriptionFontSize(){
        var size;
        if (totalWidth > totalHeight){ //landscape
            size = Math.floor(totalHeight * 0.055);
        } 
        else {
            size = Math.floor(totalWidth * 0.077);
        }
        return size.toString() + 'px';
    }

    var setAnimationValues = function(){
        var top = totalHeight * 0.38;

        var animateAbout = new TimelineMax({
            paused:true,
            onComplete: function(){ Elements[2].classList.add('big')},
            onReverseComplete: function(){Elements[2].classList.remove('big')}
        });

        var animateSkills = new TimelineMax({
            paused:true,
            onComplete: function(){Elements[3].classList.add('big')},
            onReverseComplete: function(){Elements[3].classList.remove('big')}
        });

        var animateLinks = new TimelineMax({
            paused:true,
            onComplete: function(){Elements[4].classList.add('big')},
            onReverseComplete: function(){Elements[4].classList.remove('big')}
        });
        var x = 0;

        animateAbout.add(TweenMax.to(Elements[2], 1, {
            top: top,
            left: 0,
            //width: x,
            //height: x,
            fontSize: 16
        } ));

        animateAbout.add(TweenMax.to(Elements[1], 1, { css:{width: window.innerWidth, left:0 }}),'-=1');
        animateAbout.add(TweenMax.to(Elements[3], 1, { autoAlpha: 0} ),'-=2');
        animateAbout.add(TweenMax.to(Elements[4], 1, { autoAlpha: 0} ),'-=3');

        animateSkills.add(TweenMax.to(Elements[3], 1, { 
            top:top,
            left: 0,
            //width: x,
            //height: x,
            fontSize: 16
        } ));

        animateSkills.add(TweenMax.to(Elements[1], 1, { width: window.innerWidth, left:0} ),'-=1');
        animateSkills.add(TweenMax.to(Elements[2], 1, { autoAlpha: 0} ),'-=2');
        animateSkills.add(TweenMax.to(Elements[4], 1, { autoAlpha: 0} ),'-=3');

        animateLinks.add(TweenMax.to(Elements[4], 1, { 
            top: top,
            left: 0,
           // width: x,
            //height: x,
            //fontSize: 36
        } ));
        animateLinks.add(TweenMax.to(Elements[4].children[0], 1, { fontSize:30, autoRound: false}));
        animateLinks.add(TweenMax.to(Elements[4].children[1], 1, { fontSize:30, autoRound: false}));
        animateLinks.add(TweenMax.to(Elements[1], 1, { width: window.innerWidth, left:0} ),'-=1');
        animateLinks.add(TweenMax.to(Elements[2], 1, { autoAlpha: 0} ),'-=2');
        animateLinks.add(TweenMax.to(Elements[3], 1, { autoAlpha: 0} ),'-=3');

        return {
            about: animateAbout,
            skills: animateSkills,
            links: animateLinks
        }
    }

    return {
        definitions: defs,
        animation: function(){
            return setAnimationValues()
        }
     }
  };

  function buildDoMM(data){
        var objects = data.map(function(defs){
            var parent;
            if (defs.type == 'class' || defs.type == 'keyframe') return null;
            if (defs.parent == 'body')  Parent =  document.getElementsByTagName('body')[0];
            else Parent = document.getElementById(defs.parent);
            var Child = document.createElement(defs.type);
            Child.id = defs.ID.substring(1);
            if (defs.class && defs.class !=='') {  addClasses(Child,defs.class); }
            if (defs.html) {Child.innerHTML = defs.html;}
            Parent.appendChild(Child);
            return Child;
        });
  return objects;
  };

  function addClasses(target, defs) {
        var classes = defs.split(' ');
        var Clength = classes.length;
        var i;

        for (i = 0 ; i < Clength ; i++){
            (function(counter){
                target.classList.add(classes[counter]);
            }(i));
        }
    }

  function setStyleSheet(object){
        myStyleSheet = document.createElement('style');
        myStyleSheet.appendChild(document.createTextNode('')); // this is for webkit
        document.head.appendChild(myStyleSheet);

        var length = object.length, i;
        for (i = 0; i< length; ++i){
            (function(target){
                if(target.type == 'class' || target.type == 'div' || target.type == 'canvas'){
                    try {
                        myStyleSheet.sheet.insertRule( target.id + ' {' + target.css + '}' , 0 );
                    }
                    catch(err) {
                        console.log(err)
                    }
                }
                else if(target.type == 'keyframe'){
                    return myStyleSheet.sheet.insertRule( '@' + myPrefix + 'keyframes ' + target.id + '{'+ target.css + '}', 0 );
                }
                else return console.log(target.id + 'is not valid for CSS rules')
            }(object[i]));
        }
        
        return myStyleSheet.sheet;
  };

  function resize(){
        TweenMax.killAll();
        var element = document.getElementsByTagName('style');
                //console.log(element)
                element[1].parentNode.removeChild(element[1]);

        return new setStyleSheet(adjustDefs(propeties).definitions);
  };

  function OpenInNewTabWinBrowser(url){
        var win = window.open(url, '_blank');
        win.focus();
  }
 
  //------- debounce and throttle functions courtsey of David Walsh https://davidwalsh.name/javascript-debounce-function ------//
  function debounce(func, wait, immediate) {
        var timeout;
            return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
  };

  function throttle(delay, callback) {
        var previousCall = new Date().getTime();
        return function() {
            var time = new Date().getTime();
            if ((time - previousCall) >= delay) {
                previousCall = time;
                callback.apply(null, arguments);
            }
        };
  };

  function prefix() { // courtosy of David Walch https://davidwalsh.name/vendor-prefix
        var styles = window.getComputedStyle(document.documentElement, ''),
        pre = (Array.prototype.slice
        .call(styles)
        .join('')
        .match(/-(moz|webkit|ms)-/) || (styles.OLink === '' && ['', 'o']))[1],
        dom = ('WebKit|Moz|MS|O').match(new RegExp('(' + pre + ')', 'i'))[1];
    return {
      dom: dom,
      lowercase: pre,
      css: '-' + pre + '-',
      js: pre[0].toUpperCase() + pre.substr(1)
    }
  };

  String.prototype.replaceAll = function(str1, str2, ignore) {
        return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
  };
}()); // end of main scope






