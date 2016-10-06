(function(){
    var definitions, Elements, sheet, myStyleSheet, myPrefix =  prefix(), propeties = [

        {
            "type": "div",
            "ID": "board",
            "parent": "body",
            "class": "",
            "text": "",
            "html":"",
            "CSS":  "width: totalWidth;\
                     height: totalHeight;\
                     position: relative;\
                     display:block;\
                     overflow:hidden;"
        }, 

        {
            "type": "div",
            "ID": "item_1",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<i class='pin'></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia.</p>",
            "CSS":  "width: 30vmin;\
                     height:30vmin;\
                     overflow:hidden;\
                     top: note1Top;\
                     left: note1Left;\
                     color:white;\
                     -webkit-transition-property: width height font-size left top;\
                     -webkit-transition-duration: 2s;\
                     -webkit-transition-timing-function: ease;\
                     transition-property: width height background-color font-size left top color;\
                     transition-duration: 2s;\
                     transition-timing-function: ease;"
        }, 

         {
            "type": "div",
            "ID": "item_2",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<i class='pin'></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor. <br></p>",
            "CSS":  "width: 40vmin;\
                    height:30vmin;\
                    top: note2Top;\
                    left: note2Left;\
                    overflow:hidden;\
                    opacity: 1;\
                    color:white;\
                    -webkit-transition-property: width height font-size left top opacity;\
                    -webkit-transition-duration: 2s;\
                    -webkit-transition-timing-function: ease;\
                    transition-property: width height font-size left top opacity;\
                    transition-duration: 2s;\
                    transition-timing-function: ease;"
        }, 

         {
            "type": "div",
            "ID": "item_3",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<i class='pin'></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor.</p>",
            "CSS":  "width: 20vmin;\
                    height:30vmin;\
                    overflow:hidden;\
                    top: note3Top;\
                    left: note3Left;\
                    opacity: 1;\
                    color:white;\
                    -webkit-transition-property: width height font-size left top opacity;\
                    -webkit-transition-duration: 2s;\
                    -webkit-transition-timing-function: ease;\
                    transition-property: width height font-size left top opacity;\
                    transition-duration: 2s;\
                    transition-timing-function: ease;"
        }, 

         {
            "type": "div",
            "ID": "item_4",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<i class='pin'></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
            "CSS":  "width: 40vmin;\
                    height:30vmin;\
                    overflow:hidden;\
                    top: note4Top;\
                    left: note4Left;\
                    opacity: 1;\
                    color:white;\
                    -webkit-transition-property: width height font-size left top opacity;\
                    -webkit-transition-duration: 2s;\
                    -webkit-transition-timing-function: ease;\
                    transition-property: width height font-size left top opacity;\
                    transition-duration: 2s;\
                    transition-timing-function: ease;"
        }, 

         {
            "type": "div",
            "ID": "item_5",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<i class='pin'></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor.</p>",
            "CSS":  "width: 50vmin;\
                    height:20vmin;\
                    overflow:hidden;\
                    top: note5Top;\
                    left: note5Left;\
                    opacity: 1;\
                    color:white;\
                    -webkit-transition-property: width height font-size left top opacity;\
                    -webkit-transition-duration: 2s;\
                    -webkit-transition-timing-function: ease;\
                    transition-property: width height font-size left top opacity;\
                    transition-duration: 2s;\
                    transition-timing-function: ease;"
        }, 

        {
            "type": "div",
            "ID": "item_6",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<i class='pin'></i><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor. <br></p>",
            "CSS":  "width:20vmin;\
                    height:30vmin;\
                    overflow:hidden;\
                    opacity: 1;\
                    color:white;\
                    top: note6Top; left: note6Left;\
                    -webkit-transition-property: width height font-size left top opacity;\
                    -webkit-transition-duration: 2s;\
                    -webkit-transition-timing-function: ease;\
                    transition-property: width height font-size left top opacity;\
                    transition-duration: 2s;\
                    transition-timing-function: ease;"
        }, 
        /*
         {
            "type": "div",
            "ID": "item_7",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor.</p>",
            "CSS":"background-color:grey; width:30vmin; height: 20vmin; overflow:hidden;top: note7Top; left: note7Left;"
        }, 

         {
            "type": "div",
            "ID": "item_8",
            "parent": "board",
            "class": "items",
            "text": "",
            "html":"<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et consequat elit.<br>Donec viverra eros eget ipsum semper lacinia. Sed dictum mattis arcu. <br> Proin ipsum tellus, gravida ac dui quis, venenatis venenatis dolor. <br>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>",
            "CSS":"background-color:cyan ; width:30vmin; height:40vmin; overflow:hidden; top: note8Top; left: note8Left;"
        }, 
        */
         {
            "type": "class",
            "ID":"*",
            "CSS":""
        },
        
        {
            "type": "class",
            "ID":"html",
            "CSS":"background: url('https://res.cloudinary.com/carousel/image/upload/v1475538924/chalkboard_1_w619v4.jpg') no-repeat center center fixed; background-size: 100%; -webkit-background-size: 100%;"
        },

        {
            "type":"class",
            "ID":"body",
            "CSS":"width: totalWidth; height: totalHeight; margin: 0 auto;  overflow: hidden;"
        },
        /*
        {
            "type":"class",
            "ID":".items",
            "CSS":"font-size: 2vmin; position: absolute; background: none;"
        },
        
        {
            "type":"class",
            "ID":".pin",
            "CSS":"background-color: #aaa;display: block;height: 32px;width: 2px;position: absolute;left: 50%;top: -16px;z-index: 1;"
        },

        {
            "type":"class",
            "ID":".pin:after",
            "CSS":"background-color: #A31;background-image: radial-gradient(25% 25%, circle, hsla(0,0%,100%,.3), hsla(0,0%,0%,.3));border-radius: 50%;box-shadow: inset 0 0 0 1px hsla(0,0%,0%,.1),inset 3px 3px 3px hsla(0,0%,100%,.2),inset -3px -3px 3px hsla(0,0%,0%,.2),23px 20px 3px hsla(0,0%,0%,.15);content: '';height: 12px;left: -5px;position: absolute;top: -10px; width: 12px;"
        },

        {
            "type":"class",
            "ID":".pin:before",
            "CSS":"background-color: hsla(0,0%,0%,0.1);box-shadow: 0 0 .25em hsla(0,0%,0%,.1);content: '';height: 24px;width: 2px;left: 0;position: absolute;top: 8px;transform: rotate(57.5deg);-moz-transform: rotate(57.5deg);-webkit-transform: rotate(57.5deg);-o-transform: rotate(57.5deg);-ms-transform: rotate(57.5deg);transform-origin: 50% 100%;-moz-transform-origin: 50% 100%;-webkit-transform-origin: 50% 100%;-ms-transform-origin: 50% 100%;-o-transform-origin: 50% 100%;"
        },
        */
        {
            "type":"class",
            "ID":".fullScreen",
            "CSS":"animation: zoomIn 1s 2s 3 alternate backwards;"
        },

        {
            "type":"keyframe",
            "ID":"zoomIn",
            "CSS":"100% { width: 100vw;height: 100vh;}"
        }
    ];

    //-------------------------------- building and setting up the domm ---------------------------------------------//


    function adjustDefs(obj, totalWidth, DivHeight, rotation){
        var defs = obj.map(function(value){
            var newText = {id:value.ID , type: value.type, css:value.CSS};
            return newText;
        });

        var NotesPosition = function(){
            var width = window.innerWidth, height = window.innerHeight, result;
                if(width/height > 1){ //landscape
                    result = [ '6%',  '8%', '7%',  '35%',  '7%', '65%', '52%', '8%', '55%', '35%', '47%', '65%' ];
                }
                else { //portrait
                    result = ['7%',  '8%', '9%',  '47%', '35%', '9%', '35%', '46%', '58%', '7%', '65%', '60%' ];
                }
            return result;
        };
        //console.log(NotesPosition());
        //var DivHeight = window.innerHeight;
        //var totalWidth = window.innerWidth;
        var itemsToBeReplaced = ['totalWidth', 'totalHeight','carouselHeight', 'marginWidth', 'marginHeight', 'marginCarouselHeight', 'note1Top', 'note1Left',  'note2Top', 'note2Left',  'note3Top', 'note3Left',  'note4Top', 'note4Left',  'note5Top', 'note5Left',  'note6Top', 'note6Left'];
        var newValues = [totalWidth+'px', DivHeight+'px', Math.floor(DivHeight-130)+'px', Math.floor(totalWidth/-2)+'px',Math.floor(DivHeight/-2)+'px', Math.floor((DivHeight-130)/-2)+'px', NotesPosition()[0], NotesPosition()[1], NotesPosition()[2], NotesPosition()[3], NotesPosition()[4], NotesPosition()[5], NotesPosition()[6], NotesPosition()[7], NotesPosition()[8], NotesPosition()[9], NotesPosition()[10], NotesPosition()[11], NotesPosition()[12]];
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
            if (defs.class && defs.class !=='') { Child.classList.add(defs.class); }
            if (defs.html) {Child.innerHTML = defs.html;}
            Child.id = defs.ID;
            Parent.appendChild(Child);
            return Child;
        });
        resize();
        return objects;
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
        return myStyleSheet.sheet;
    }

    

    var sizeCanvas = function(){
        //console.log('resizing canvas')
        canvas = document.getElementsByTagName('canvas');
        for (a = 0; a < canvas.length; a++){
            (function(a){
                var parent = canvas[a].parentNode;
                canvas[a].width = parent.clientWidth;
                canvas[a].height = parent.clientHeight;
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
        //sizeCanvas(); //uncomment this line if you have canvas elements
        window.addEventListener('resize', debounce(resize, 50), false);

        Elements[0].addEventListener('dblclick', function (e) {
            e.preventDefault();
            if (!e.target.parentElement.classList.contains('items')) return
            console.log(e.target.parentElement);
            e.target.parentElement.classList.toggle('fullScreen');
        }, false);
    };
}()); 