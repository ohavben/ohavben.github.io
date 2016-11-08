(function(){
  var definitions, Elements, sheet, myStyleSheet, currentTransition, active = false, myPrefix =  prefix(), timeout, lastTap = 0 ,propeties = [

        {
            "type": "class",
            "ID":":root",
            "CSS":"--width-factor: totalWidth; --height-factor: totalHeight;"
        },

        {
            "type": "div",
            "ID": "#board",
            "parent": "body",
            "class": "",
            "text": "",
            "html":"",
            "CSS":  "width: calc(var(--boardWidth-factor) * 1px);\
                     height: calc(var(--height-factor) * 1px);\
                     position: relative;\
                     display:block;\
                     overflow:hidden;\
                     background: url('/images/chalkboard_gb6dnb.jpg');\
                     background-size: 100%;\
                     background-repeat: no-repeat;\
                     background-position: center center;\
                     background-attachment: scroll;\
                     -webkit-background-size: 100%;\
                     -webkit-background-repeat: no-repeat;\
                     -webkit-background-position: center center;"
        }, 
        
         {
            "type": "div",
            "ID": "#name",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"",
            "CSS":  "width: calc(var(--width-factor) * 0.95px);\
                    height: calc(var(--width-factor) * 0.223 * 0.95px);\
                    top: note2Top;\
                    left: note2Left;\
                    background: url('/images/name.png');\
                    background-size: 100%;\
                    background-repeat: no-repeat;\
                    background-position: center center;\
                    background-attachment: scroll;\
                    -webkit-background-size: 100%;\
                    -webkit-background-repeat: no-repeat;\
                    -webkit-background-position: center center;\
                    -webkit-background-attachment: scroll;"
        }, 

        {
            "type": "div",
            "ID": "#about",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"",
            "CSS":  "width: calc(var(--width-factor) * 0.95px);\
                     height: calc(var(--width-factor) * 0.66 * 0.95px);\
                    top: note5Top;\
                    left: note5Left;\
                    background: url('/images/About.png');\
                    background-size: 100%;\
                    background-repeat: no-repeat;\
                    background-position: center center;\
                    background-attachment: scroll;\
                    -webkit-background-size: 100%;\
                    -webkit-background-repeat: no-repeat;\
                    -webkit-background-position: center center;\
                    -webkit-background-attachment: scroll;"
        }, 

        {
            "type": "div",
            "ID": "#skills",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"",
            "CSS":  "width: calc(var(--width-factor) * 0.45px);\
                    height: calc(var(--width-factor) * 0.66 * 1px);\
                    top: note3Top;\
                    left: note3Left;\
                    background: url('/images/skillsChalk.png');\
                    background-size: 100%;\
                    background-repeat: no-repeat;\
                    background-position: center center;\
                    background-attachment: scroll;\
                    -webkit-background-size: 100%;\
                    -webkit-background-repeat: no-repeat;\
                    -webkit-background-position: center center;\
                    -webkit-background-attachment: scroll;"
        }, 

        {
            "type": "div",
            "ID": "#todo",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"",
            "CSS":  "width: calc(var(--width-factor) * 0.45px);\
                    height: calc(var(--width-factor) * 0.66 * 0.45px);\
                    top: note4Top;\
                    left: note4Left;\
                    background: url('/images/ToDo.png');\
                    background-size: 100%;\
                    background-repeat: no-repeat;\
                    background-position: center center;\
                    background-attachment: scroll;\
                    -webkit-background-size: 100%;\
                    -webkit-background-repeat: no-repeat;\
                    -webkit-background-position: center center;\
                    -webkit-background-attachment: scroll;"
        }, 

        {
            "type": "div",
            "ID": "#links",
            "parent": "board",
            "class": "items photo",
            "text": "",
            "html":"",
            "CSS":  "width: calc(var(--width-factor) * 0.45px);\
                    height: calc(var(--width-factor) * 0.66 * 0.45px);\
                    top: note6Top;\
                    left: note6Left;\
                    background: url('/images/LinksChalk5.png');\
                    background-size: 100%;\
                    background-repeat: no-repeat;\
                    background-position: center center;\
                    background-attachment: scroll;\
                    -webkit-background-size: 100%;\
                    -webkit-background-repeat: no-repeat;\
                    -webkit-background-position: center center;\
                    -webkit-background-attachment: scroll;"
        }, 
        //    <a href='http://www.w3schools.com'>   1. LinkedIn</a><br><a href='http://www.w3schools.com'>   2. GitHub</a><br><a href='http://www.w3schools.com'>   3. Project</a>
        
         {
            "type": "class",
            "ID":".a:link",
            "CSS":"text-decoration:none; color:white; font-size: 3vmin;"
        },
       
        {
            "type":"class",
            "ID":"body",
            "CSS":"margin: 0 auto;  overflow: hidden;"
        },
        
        {
            "type":"class",
            "ID":".items",
            "CSS":  "font-size: 2vmin;\
                     position: absolute;\
                     background: none;\
                     overflow:hidden;\
                     color:white;\
                     font-family: 'CoalhandLuke';"
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
                    result = [ '8%',  '24%', '5%',  '25%',  '30%', '74%', '30%', '2.5%', '30%', '28%', '62%', '2.5%' ];
                }
                else { //portrait
                    result = ['7%',  '2.5%', '5%', '2.5%', '60%', '2.5%', '80%', '52.5%', '20%', '2.5%', '60%', '52.5%' ];
                }
            return result;
        };

    var DivHeight = window.innerHeight;
    var totalWidth = window.innerWidth;
    var itemsToBeReplaced = ['totalWidth', 'totalHeight','carouselHeight', 'marginWidth', 'marginHeight', 'marginCarouselHeight', 'note1Top', 'note1Left',  'note2Top', 'note2Left',  'note3Top', 'note3Left',  'note4Top', 'note4Left',  'note5Top', 'note5Left',  'note6Top', 'note6Left'];
        var newValues = [totalWidth+'px', DivHeight+'px', Math.floor(DivHeight-130)+'px', Math.floor(totalWidth/-2)+'px', Math.floor(DivHeight/-2)+'px', Math.floor((DivHeight-130)/-2)+'px', NotesPosition()[0], NotesPosition()[1], NotesPosition()[2], NotesPosition()[3], NotesPosition()[4], NotesPosition()[5], NotesPosition()[6], NotesPosition()[7], NotesPosition()[8], NotesPosition()[9], NotesPosition()[10], NotesPosition()[11], NotesPosition()[12]];///
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
    document.documentElement.style.setProperty('--height-factor',  window.innerHeight);
    document.documentElement.style.setProperty('--boardWidth-factor',  window.innerWidth);

    if (window.innerWidth > window.innerHeight){
            document.documentElement.style.setProperty('--width-factor',  Math.floor(Number(window.innerWidth / (window.innerWidth / window.innerHeight))));
        } else {
            document.documentElement.style.setProperty('--width-factor',  window.innerWidth);
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

  var sizeCanvas = function(){
    console.log('resizing canvas')
    canvas = document.getElementsByTagName('canvas');
    for (a = 0; a < canvas.length; a++){
      (function(a){
        var parent = canvas[a].parentNode;
        canvas[a].width = parent.clientWidth;
        canvas[a].height = parent.clientHeight;
      }(a))
    };
    //photos[0].render(document.getElementById('canvas1'))};
  }

  function resize(){
    console.log('resize');
    var element = document.getElementsByTagName('style')[0];
        element.parentNode.removeChild(element);

    return new setStyleSheet(adjustDefs(propeties));
  };

  var transition = function(element){
        console.log(active)
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
    console.log(Elements);
    window.addEventListener('resize', debounce(resize, 250), false);

    Elements[1].addEventListener('dblclick', function (event) {
            e.preventDefault();
            if (!event.target.classList.contains('items')) return
            if (active == true){ 
                active = false;
                return currentTransition.reverse(); 
            }
            else if (active == false) {
                currentTransition = new transition(event.target);
            }
        }, false);

    Elements[1].addEventListener('touchend', function(event) {
        if (!event.target.classList.contains('items')) return
        var currentTime = new Date().getTime();
        var tapLength = currentTime - lastTap;
        clearTimeout(timeout);
        if (tapLength < 500 && tapLength > 0) {
            //elm2.innerHTML = 'Double Tap';
            event.preventDefault();
            console.log(event.target);
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
  };
}()); // end of main scope
