(function(){
    var definitions, Elements, sheet, myStyleSheet, currentTransition, active = false, myPrefix =  prefix(), propeties = [

        {
            "type": "div",
            "ID": "board",
            "parent": "body",
            "class": "board",
            "text": "",
            "html":"<canvas id = 'canvas1'></canvas>",
            "CSS":  "width: totalWidth;\
                     height: totalHeight;\
                     position: relative;\
                     display:block;\
                     overflow:hidden;\
                     background: url('https://res.cloudinary.com/carousel/image/upload/v1475538924/chalkboard_1_w619v4.jpg');\
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
            "ID": "face",
            "parent": "board",
            "class": "items face",
            "text": "",
            "html":"<canvas id = 'canvas2'></canvas>",
            "CSS":  "width: 20vmin;\
                     height:20vmin;\
                     top: note1Top;\
                     left: note1Left;\
                     background: url('https://res.cloudinary.com/carousel/image/upload/v1476750072/profileChalk11_l7kwpv.png');\
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
            "ID": "name",
            "parent": "board",
            "class": "items name",
            "text": "",
            "html":"<canvas id = 'canvas3'></canvas>",
            "CSS":  "width: 70vmin;\
                    height:50vmin;\
                    top: note2Top;\
                    left: note2Left;\
                    background: url('https://res.cloudinary.com/carousel/image/upload/v1476757921/nameChalk_tjso43.png');\
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
            "ID": "skills",
            "parent": "board",
            "class": "items skills",
            "text": "",
            "html":"<canvas id = 'canvas4'></canvas>",
            "CSS":  "width: 45vmin;\
                    height:60vmin;\
                    top: note3Top;\
                    left: note3Left;\
                    background: url('https://res.cloudinary.com/carousel/image/upload/v1476755902/skillsChalk1_ozesbu.png');\
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
            "ID": "todo",
            "parent": "board",
            "class": "items todo",
            "text": "",
            "html":"<canvas id = 'canvas5'></canvas>",
            "CSS":  "width: 40vmin;\
                    height:30vmin;\
                    top: note4Top;\
                    left: note4Left;\
                    background: url('https://res.cloudinary.com/carousel/image/upload/v1476757506/ToDOChalk_dchn9s.png');\
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
            "ID": "about",
            "parent": "board",
            "class": "items about",
            "text": "",
            "html":"<canvas id = 'canvas6'></canvas>",
            "CSS":  "width: 80vmin;\
                    height:50vmin;\
                    top: note5Top;\
                    left: note5Left;\
                    background: url('https://res.cloudinary.com/carousel/image/upload/v1476756447/AboutChalk_meph53.png');\
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
            "ID": "links",
            "parent": "board",
            "class": "items links",
            "text": "",
            "html":"<canvas id = 'canvas7'></canvas>",
            "CSS":  "width:30vmin;\
                    height:35vmin;\
                    opacity: 1;\
                    top: note6Top;\
                    left: note6Left;\
                    background: url('https://res.cloudinary.com/carousel/image/upload/v1476753735/LinksChalk5_igjohp.png');\
                    background-size: 100%;\
                    background-repeat: no-repeat;\
                    background-position: center center;\
                    background-attachment: scroll;\
                    -webkit-background-size: 100%;\
                    -webkit-background-repeat: no-repeat;\
                    -webkit-background-position: center center;\
                    -webkit-background-attachment: scroll;"
        }, 
          //<a href='http://www.w3schools.com'>   1. LinkedIn</a><br><a href='http://www.w3schools.com'>   2. GitHub</a><br><a href='http://www.w3schools.com'>   3. Project</a>
         
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

    var backgroundImages = []

    //-------------------------------- building and setting up the domm ---------------------------------------------//


    function adjustDefs(obj, totalWidth, DivHeight, rotation){
        var defs = obj.map(function(value){
            var newText = {id:value.ID , type: value.type, css:value.CSS};
            return newText;
        });

        var NotesPosition = function(){
            var width = window.innerWidth, height = window.innerHeight, result;
                if(width/height > 1){ //landscape
                    result = [ '8%',  '24%', '-5%',  '36%',  '30%', '71%', '30%', '6%', '30%', '28%', '59%', '7%' ];
                }
                else { //portrait
                    result = ['7%',  '4%', '-2%',  '24%', '55%', '6%', '55%', '55%', '22%', '12%', '76%', '57%' ];
                }
            return result;
        };
        //console.log(NotesPosition());
        //var DivHeight = window.innerHeight;
        //var totalWidth = window.innerWidth;
        var itemsToBeReplaced = ['totalWidth', 'totalHeight','carouselHeight', 'marginWidth', 'marginHeight', 'marginCarouselHeight', 'note1Top', 'note1Left',  'note2Top', 'note2Left',  'note3Top', 'note3Left',  'note4Top', 'note4Left',  'note5Top', 'note5Left',  'note6Top', 'note6Left'];
        var newValues = [totalWidth+'px', DivHeight+'px', Math.floor(DivHeight-130)+'px', Math.floor(totalWidth/-2)+'px',Math.floor(DivHeight/-2)+'px', Math.floor((DivHeight-130)/-2)+'px', NotesPosition()[0], NotesPosition()[1], NotesPosition()[2], NotesPosition()[3], NotesPosition()[4], NotesPosition()[5], NotesPosition()[6], NotesPosition()[7], NotesPosition()[8], NotesPosition()[9], NotesPosition()[10], NotesPosition()[11], NotesPosition()[12]];
        ///
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
    }

    function buildDoMM(data){
        var objects = data.map(function(defs){
            if (defs.type == 'class' || defs.type == 'keyframe') return;
            var Parent = document.getElementById(defs.parent);
            var Child = document.createElement(defs.type);
            if (!Parent) { Parent = document.getElementsByTagName('body')[0];}
            if (defs.class && defs.class !=='') {  addClasses(Child,defs.class);}
            if (defs.html) {Child.innerHTML = defs.html;}
            Child.id = defs.ID;
            Parent.appendChild(Child);
            return Child;
        });
        resize();
        return objects;
    }

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
                if (target.type == 'div' || target.type == 'canvas'){
                    return myStyleSheet.sheet.insertRule( '#' + target.id + ' {' + target.css + '}' , 0 );
                }
                else if(target.type == 'class'){
                    try {
                        myStyleSheet.sheet.insertRule( target.id + ' {' + target.css + '}' , 0 );
                    }
                    catch(err) {
                        console.log(err)
                    }
                    return
                }
                else if(target.type == 'keyframe'){
                    return myStyleSheet.sheet.insertRule( '@' + myPrefix.css + 'keyframes ' + target.id + '{'+ target.css + '}', 0 );
                }
                else return console.log(target.id + 'is not valid target for CSS rules')
            }(object[i]));
        }
        console.log(myStyleSheet.sheet)
        sizeCanvas();
        return myStyleSheet.sheet;
    }

    var transition = function(element){
        console.log(active)
        var i;
        var currentElement;
        var tl = new TimelineLite();
        var elements = document.getElementsByClassName('items');
        for ( i = 0 ; i < elements.length; i ++){
            if (elements[i] === element) {
                  currentElement = elements[i];
                 //tl.to(elements[i], 0.25, {left: 0, top: 0, width: window.innerWidth, height: window.innerHeight, fontSize: 50});
            } else {
                tl.to(elements[i], 0.25, {opacity:0, onUpdate:myFunction});

            }
        }
        tl.to(currentElement, 0.25, { left: 0, top: 0, width: window.innerWidth, height: window.innerHeight });
        //tl.to(currentElement, 0.25, { fontSize: 6 +'vmin',  autoRound: false });
        active = true;
        return tl;
    };

    function myFunction(){ console.log('update')}

    var sizeCanvas = function(){
        //console.log('resizing canvas')
        canvas = document.getElementsByTagName('canvas');
        for (a = 0; a < canvas.length; a++){
            (function(A){
                var parent = canvas[A].parentNode;
                canvas[A].width = parent.clientWidth;
                canvas[A].height = parent.clientHeight;
            }(a));
        };
    };

    function resize(){
        var width = window.outerWidth;
        var height = window.outerHeight;
        var orientation = width/height;
        var styleSheet = document.getElementsByTagName('style')[1];
        if (styleSheet) styleSheet.parentNode.removeChild(styleSheet);
        if (orientation < 1 ) return new setStyleSheet(adjustDefs(propeties, width, height, 0));
        else if (orientation > 1 ) return new setStyleSheet(adjustDefs(propeties, width, height, 0));
        return
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
        Elements = new buildDoMM(propeties);
        console.log(Elements)
        //sizeCanvas(); //uncomment this line if you have canvas elements in div containers
        window.addEventListener('resize', debounce(resize, 50), false);

        Elements[0].addEventListener('dblclick', function (e) {
            e.preventDefault();
            if (!e.target.classList.contains('items')) return
            if (active == true){ 
                active = false;
                return currentTransition.reverse(); 
            }
            else if (active == false) {
                currentTransition = new transition(e.target);
            }
        }, false);
    };
}()); 
