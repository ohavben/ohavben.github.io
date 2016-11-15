(function(){
  var definitions, Elements, sheet, myStyleSheet, currentTransition, active = false, myPrefix =  prefix(), timeout, lastTap = 0 ,propeties = [

        {
            "type": "class",
            "ID":":root",
            "CSS":"--width-factor: totalWidth; --height-factor: totalHeight; --font-factor: 0;"
        },

        {
            "type": "div",
            "ID": "#board",
            "parent": "body",
            "class": "",
            "text": "",
            "html":"",
            "CSS":  "width: calc(var(--boardWidth-factor) * 1px);\
                     height: calc(var(--boardHeight-factor) * 1px);\
                     position: relative;\
                     display:block;\
                     position:absolute;\
                     overflow:hidden;\
                     left: calc(calc(var(--width-factor) - var(--boardWidth-factor)) * 0.5px);\
                     top: calc(calc(var(--height-factor) - var(--boardHeight-factor)) * 0.5px);"
        }, 
        
         {
            "type": "div",
            "ID": "#name",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<div class = 'name'>OHAV BEN YANAI</div><div class = 'webdev'>Full Stack Web Developer</div>",
            "CSS":  "width: calc(var(--boardWidth-factor) * 0.72px);\
                    height: calc(var(--boardHeight-factor) * 0.38px);\
                    top: note2Top;\
                    left: note2Left;\
                    position:absolute;\
                    overflow:hidden;"
        }, 

        {
            "type": "div",
            "ID": "#about",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"<div class = 'AboutTitle'>ABOUT</div><div class = 'AboutDescription'>I create single page web applications with Node.js Express and MongoDb</div>",
            "CSS": "width: calc(var(--boardWidth-factor) * var(--aboutWidth-factor) * 0.95px);\
                    height: calc(var(--boardHeight-factor) * (1/var(--aboutWidth-factor)) * 0.52px);\
                    top: note5Top;\
                    left: note5Left;\
                    position:absolute;\
                    overflow:hidden;"
        }, 

        {
            "type": "div",
            "ID": "#skills",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"<div class = 'skillsTitle'>SKILLS</div><div class = 'skillHolder'><span>JavaScript</span><span>Socket.io</span><span>HTML5</span><span>jQuery</span><span>CSS3</span><span>Linux</span><span>Node.js</span><span></span><span>Express</span><span>Git</span><span>Gimp </span><span>Jade</span><span>SVG</span><span>InkScape</span><span>CANVAS</span><span>GreenSock</span><span>JSON</span><span>Ajax</span><span>MongoDb</span><span>Docker</span></div>",
            "CSS":  "width: calc(var(--boardWidth-factor) * var(--aboutWidth-factor) * 0.95px);\
                    height: calc(var(--boardHeight-factor) * (1/var(--aboutWidth-factor)) * 0.4px);\
                    top: note3Top;\
                    left: note3Left;\
                    position:absolute;\
                    overflow:hidden;"
        }, 
        /*
        {
            "type": "div",
            "ID": "#todo",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"<div class = 'todoTitle'>TODO</div><ul type = 'none' class = 'todoList'><li>The Internet</li><li>Cool Sites</li><li>Apps</li><li>Learn</li><li>Have Fun</li></ul>",
            "CSS":  "width: calc(var(--width-factor) * 0.45px);\
                    height: calc(var(--width-factor) * 0.66 * 0.60px);\
                    top: note4Top;\
                    left: note4Left;\
                    position:absolute;\
                    overflow:hidden;"
        }, 
        */
        {
            "type": "div",
            "ID": "#links",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"<div class = 'linksTitle'>LINKS</div><ul type = 'none' class = 'ulLinks items'><li id = 'LinkedIn'>LinkedIn</li><li id = 'GitHub'>GitHub</li><li id = 'Project'>Project</li></ul>",
            "CSS":  " --about-factor: 1;\
                    width: calc(var(--linksDimension-factor));\
                    height: calc(var(--linksDimension-factor));\
                    top: note6Top;\
                    right: note6Left;\
                    position:absolute;\
                    overflow:hidden;"
        },

        {
            "type": "class",
            "ID":".name",
            "CSS": "font-family: 'BasicScratch';\
                    font-size: calc(var(--nameFont-factor)  * 1.5rem);\
                    position:relative;\
                    display:block;\
                    top: calc(1/(var(--aboutName-factor)) * 1rem);\
                    left: 50%;\
                    transform: translateX(-50%) scale(1,4);\
                    -webkit-transform: translateX(-50%) scale(1,4);\
                    text-align: center;\
                    z-index: -1;\
                    color: #27CDE7;"
        },// green  = #07D846   // blue = #5755C8 // light blue = // turqize = #27CDE7

        {
            "type": "class",
            "ID":".webdev",
            "CSS": "font-family: 'KG Second Chances Sketch';\
                    font-size: calc(var(--nameFont-factor) *  0.925rem);\
                    position:relative;\
                    display:block;\
                    top: calc((1/var(--aboutName-factor)) * 1.7777rem);\
                    left: 50%;\
                    transform: translateX(-50%) scale(1,1.33);\
                    -webkit-transform: translateX(-50%) scale(1,1.33);\
                    text-align: center;\
                    z-index: -1;\
                    color:white;\
                    padding-top: calc(var(--aboutName-factor) * 0.25rem);"
        },

        {  
            "type": "class",
            "ID":".AboutTitle",
            "CSS": "font-family: 'BasicScratch';\
                    font-size: calc((1/(var(--aboutFont-factor))) * 2.8125rem);\
                    position:relative;\
                    display:block;\
                    left: 50%;\
                    transform: translateX(-50%) scale(1,1);\
                    -webkit-transform: translateX(-50%) scale(1,1);\
                    text-align: center;\
                    z-index: -1;\
                    color:#DDA1DB;"
        },// yellow = #F2EC42   //purple  = #730C69

        {
            "type": "class",
            "ID":".AboutDescription",
            "CSS": "font-family: 'KG Second Chances Sketch';\
                    font-size: calc((1/(var(--aboutFont-factor)))  * .9375rem);\
                    text-align: center;\
                    position:absolute;\
                    z-index: -1;\
                    color:white;\
                    top:calc(var(--boardHeight-factor) * calc(var(--aboutName-factor) / var(--aboutName-factor)) * 0.16px);"
        },

        {
            "type": "class",
            "ID":".skillsTitle",
            "CSS": "width: calc(var(--boardWidth-factor) * var(--aboutWidth-factor) * 0.95px);\
                    font-family: 'BasicScratch';\
                    font-size: calc((1/(var(--skillsFont-factor))) *  2.8125rem);\
                    position:absolute;\
                    display:inline;\
                    top: 0px;\
                    transform: scale(1,1);\
                    -webkit-transform: scale(1,1);\
                    text-align: center;\
                    z-index: -1;\
                    color:#F8FB50;"
        },
        // red = #F34658;"   ligtht yellow = #F8FB50  orange = #DD8A0C
         {
            "type": "class",
            "ID":".skillHolder>span",
            "CSS": "color:white;\
                    font-size: calc((1/(var(--skillsListFont-factor))) * 0.71rem);\
                    font-family: 'KG Second Chances Sketch';\
                    padding-left: 0.4rem;"
        },

        {
            "type": "class",
            "ID":".todoTitle",
            "CSS": "font-family: 'BasicScratch';\
                    font-size: calc(var(--font-factor) * 21px);\
                    position:relative;\
                    display:block;\
                    left: 25%;\
                    transform: scale(1,1);\
                    -webkit-transform: scale(1,1);\
                    line-height: calc(var(--width-factor) * 0.15px);\
                    text-align: left;\
                    z-index: -1;\
                    color:#F34658;"
        },

         {
            "type": "class",
            "ID":".todoList",
            "CSS": "font-family: 'KG Second Chances Sketch';\
                    font-size: calc(var(--font-factor) * 7px);\
                    text-align: left;\
                    left: 30%;\
                    transform: scale(1,1);\
                    -webkit-transform: scale(1,1);\
                    position:relative;\
                    display:block;\
                    z-index: -1;\
                    color:white;\overflow: hidden;"
        },

        {
            "type": "class",
            "ID":".linksTitle",
            "CSS": "font-family: 'BasicScratch';\
                     font-size: calc(var(--nameFont-factor) * 1.75rem);\
                    position:relative;\
                    display:block;\
                    left: ;\
                    transform: scale(1,1.6);\
                    -webkit-transform: scale(1,1.6);\
                    text-align: left;\
                    z-index: -1;\
                    color: #F8FB50;"
        },// red = #F34658; orange = #DD8A0C    light yellow = #F8FB50
        
        {
            "type": "class",
            "ID":".ulLinks",
            "CSS": "font-family: 'KG Second Chances Sketch';\
                     font-size: calc(var(--linksFont-factor) * 0.8125rem);\
                    text-align: left;\
                    position:relative;\
                    display:block;\
                    top: -1%;\
                    right: -15%;\
                    transform: scale(1.2,1);\
                    -webkit-transform: scale(1.2,1);\
                    z-index: 1;\
                    color:white;"
        },

        {
            "type": "class",
            "ID":"*",
            "CSS":"-webkit-user-select: none;\
                   -moz-select: none;\
                   -o-select: none;\
                   -ms-select: none;\
                   user-select: none;\
                   overflow: hidden;\
                   margin: 0 auto;\
                   padding: 0px 0px;"
        },
       
        {
            "type":"class",
            "ID":"body",
            "CSS":"margin: 0 auto;\
                   overflow: hidden;\
                   width: calc(var(--width-factor) * 1px);\
                   height: calc(var(--height-factor) * 1px);\
                   background: url('./images/chalkboard_gb6dnb.jpg') no-repeat center center fixed;\
                   -webkit-background-size: cover;\
                   -moz-background-size: cover;\
                   -o-background-size: cover;\
                   background-size: cover;"
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
                    top:calc(var(--boardHeight-factor) * calc(var(--aboutName-factor) / var(--aboutName-factor)) * 0.1777px);" //calc(var(--boardHeight-factor) * (1/var(--aboutWidth-factor))
        },//calc(calc(var(--height-factor) - var(--boardHeight-factor)) * 0.5px);"

        {
            "type":"class",
            "ID":".items",
            "CSS":  ""
        },

         {
            "type":"class",
            "ID":".hide",
            "CSS":  "opacity:0;"
        },

        {
            "type":"class",
            "ID":"html",
            "CSS":  "font-size: calc(var(--font-factor) * 1px);"
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
                    result = ['7%',  '2.5%', '3.5%', '3.5%', '66%', '2.5%', '80%', '52.5%', '23.5%', '2.5%', '3%', '2%' ];
                }
            return result;
        };

    var DivHeight = window.innerHeight;
    var totalWidth = window.innerWidth;
    var itemsToBeReplaced = ['totalWidth', 'totalHeight','carouselHeight', 'marginWidth', 'marginHeight', 'marginCarouselHeight', 'note1Top', 'note1Left',  'note2Top', 'note2Left',  'note3Top', 'note3Left',  'note4Top', 'note4Left',  'note5Top', 'note5Left',  'note6Top', 'note6Left', 'myFontSize'];
        var newValues = [totalWidth+'px', DivHeight+'px', Math.floor(DivHeight-130)+'px', Math.floor(totalWidth/-2)+'px', Math.floor(DivHeight/-2)+'px', Math.floor((DivHeight-130)/-2)+'px', NotesPosition()[0], NotesPosition()[1], NotesPosition()[2], NotesPosition()[3], NotesPosition()[4], NotesPosition()[5], NotesPosition()[6], NotesPosition()[7], NotesPosition()[8], NotesPosition()[9], NotesPosition()[10], NotesPosition()[11], NotesPosition()[12], fontSize()];///
    var length = defs.length;
    var itemsLength = itemsToBeReplaced.length;

    for (var s = 0 ; s < length; ++s){
        for (var r = 0; r < itemsLength; ++r){
          (function(oldValue,newValue,u){
            defs[u].css = defs[u].css.replace(oldValue, newValue);
          }(itemsToBeReplaced[r],newValues[r],s))
        }
    }

    return defs;
  };

  function buildDoMM(data){
    var objects = data.map(function(defs){
      var parent;
      if (defs.type == 'class' || defs.type == 'keyframe') return null;
      if (defs.parent == 'body')  Parent =  document.getElementsByTagName('body')[0];
      else Parent = document.getElementById(defs.parent);
      var Child = document.createElement(defs.type);
      Child.id = defs.ID.substring(1);;
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
//
  function setStyleSheet(object){
    myStyleSheet = document.createElement('style');
    myStyleSheet.appendChild(document.createTextNode('')); // this is for webkit
    document.head.appendChild(myStyleSheet);

    //var fontSizeFactor = new fontSize();
    document.documentElement.style.setProperty('--font-factor',  fontSize());
    document.documentElement.style.setProperty('--height-factor',  window.innerHeight);
    document.documentElement.style.setProperty('--boardWidth-factor',  window.innerWidth);
    document.documentElement.style.setProperty('--boardHeight-factor',  window.innerHeight);

    if (window.innerWidth > window.innerHeight){
            document.documentElement.style.setProperty('--width-factor', window.innerWidth); ///Math.floor(Number(window.innerWidth / (window.innerWidth / window.innerHeight))));
            document.documentElement.style.setProperty('--nameFont-factor',  Number(1));
            document.documentElement.style.setProperty('--aboutWidth-factor',  Number(0.5));
            document.documentElement.style.setProperty('--aboutName-factor',  Number(0.77));
            document.documentElement.style.setProperty('--linksDimension-factor',  window.innerHeight *0.33);
            document.documentElement.style.setProperty('--aboutFont-factor',  Number(1));
            document.documentElement.style.setProperty('--skillsFont-factor',  Number(1));
            document.documentElement.style.setProperty('--linksFont-factor',  Number(1));
            document.documentElement.style.setProperty('--skillsListFont-factor',  Number(1));
            document.documentElement.style.setProperty('--boardWidth-factor',  window.innerHeight*1.333);
        } else {
            document.documentElement.style.setProperty('--width-factor',  window.innerWidth);
            document.documentElement.style.setProperty('--linksFont-factor',  Number(0.77));
            document.documentElement.style.setProperty('--nameFont-factor',  Number(0.77));
            document.documentElement.style.setProperty('--aboutWidth-factor',  Number(1));
            document.documentElement.style.setProperty('--linksDimension-factor',  window.innerWidth *0.33);
            document.documentElement.style.setProperty('--aboutFont-factor',  Number(0.85));
            document.documentElement.style.setProperty('--skillsFont-factor',  Number(0.80));
            document.documentElement.style.setProperty('--skillsListFont-factor',  Number(1.25));
            document.documentElement.style.setProperty('--boardHeight-factor',  window.innerWidth*1.3333);
            document.documentElement.style.setProperty('--aboutName-factor',  Number(1)); 
    }
    

    var length = object.length, i;
    for (i = 0; i< length; ++i){
      (function(target){
        if(target.type == 'class' || target.type == 'div' || target.type == 'canvas'){try {
              myStyleSheet.sheet.insertRule( target.id + ' {' + target.css + '}' , 0 );
          }
          catch(err) {
              console.log(err)
          }
        }else if(target.type == 'keyframe'){
          return myStyleSheet.sheet.insertRule( '@' + myPrefix + 'keyframes ' + target.id + '{'+ target.css + '}', 0 );
        }else return console.log(target.id + 'is not valid for CSS rules')
      }(object[i]));
    }
    
    return myStyleSheet.sheet;
  };

  function fontSize(){
      var Width = window.innerWidth , Height = window.innerHeight , factor;
      if (Width > Height) {
          //factor = small font + (Current width - smallWidth)*(1920 - smallWidth/54) //   1024 - 320 = 992 50-16 = 34 
          factor = Math.floor(Number(16 +  (((Height  * 1.3333333333333) - 320)/21)));
      } else {
          //factor = goodSmallFactor + slope * ( Width - SmallWidth );
          factor = Math.floor(Number(16 + (((Width * 1.3333333333333333) -320)/21)));
      }
      //console.log('factor:  ', factor)
    return factor;
  }

  var sizeCanvas = function(){
    console.log('resizing canvas')
    canvas = document.getElementsByTagName('canvas');
    for (a = 0; a < canvas.length; a++){
      (function(a){
        var parent = canvas[a].parentNode;
        canvas[a].width = parent.clientWidth;
        canvas[a].height = parent.clientHeight;
      }(a));
    };
  }

  function resize(){
    console.log('resize');
    var element = document.getElementsByTagName('style')[1];
        element.parentNode.removeChild(element);
        console.log(fontSize())

    return new setStyleSheet(adjustDefs(propeties));
  };

  function OpenInNewTabWinBrowser(url){
    var win = window.open(url, '_blank');
    win.focus();
  }
/*
  var transition = function(element){
        var i;
        var currentElement;
        var tl = new TimelineMax();
        var elements = document.getElementsByClassName('items');
        for ( i = 0 ; i < elements.length; i ++){
            if (elements[i] === element) {
                  currentElement = elements[i];
                 //tl.to(elements[i], 0.25, {left: 0, top: 0, width: window.innerWidth, height: window.innerHeight, fontSize: 50});
            } else {
                tl.to(elements[i], 0.25, {opacity:0});

            }
        }
        tl.to(currentElement, 0.25, { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight });
        //tl.to(currentElement, 0.25, { fontSize: 6 +'vmin',  autoRound: false });
        active = true;
        return tl;
    };
    */
  var transition = function(element){
      var elements = document.getElementById('board').childNodes;
      return elements
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

  window.onload = function(){
    console.log('loaded')
    Elements = new buildDoMM(propeties);
    definitions = new adjustDefs(propeties);
    sheet = new setStyleSheet(definitions);
    console.log(sheet)
    console.log(Elements);
    window.addEventListener('resize', debounce(resize, 250), false);

    Elements[1].addEventListener('dblclick', function (event) {
        console.log(' double clicked;  ' , event.target)
            event.preventDefault();
            if (!event.target.classList.contains('items') || event.target.classList.contains('name')) return
            if (active == true){ 
                active = false;
                return currentTransition.reverse(); 
            }
            else if (active == false) {
                currentTransition = new transition(event.target);
            }
        }, false);

    Elements[1].addEventListener('click', function (event) {
        event.preventDefault();
        if (event.target.nodeName !== 'LI') return;
        switch(event.target.id) {
            case 'LinkedIn':
                OpenInNewTabWinBrowser('https://ca.linkedin.com/in/ohavb');
                break;
            case 'GitHub':
                OpenInNewTabWinBrowser('https://github.com/ohavben');
                break;
            case 'Project':
                OpenInNewTabWinBrowser('http://carousel.mobi');
                break;
            default: return
        }
    }, false);

    Elements[1].addEventListener('touchend', function(event) {
        event.preventDefault();
        if (!event.target.classList.contains('items') || event.target.classList.contains('name')) return
        var currentTime = new Date().getTime();
        var tapLength = currentTime - lastTap;
        clearTimeout(timeout);
        if (tapLength < 500 && tapLength > 0) {
            //elm2.innerHTML = 'Double Tap';
            event.preventDefault();
            if (active == true){ 
                active = false;
                return currentTransition.reverse(); 
            }
            else if (active == false) {
                currentTransition = new transition(event.target);
            }
        } else {
            timeout = setTimeout(function() {
                clearTimeout(timeout);
            }, 500);
        }
        lastTap = currentTime;
    });
    console.log(transition(1));
  };
}()); // end of main scope
