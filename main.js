(function(){
  var definitions, Elements, sheet, myStyleSheet, Canvas, lastImage, location, propeties = [
    {
    "type": "div",
    "ID": "carousel",
    "parent": "body",
    "class": "",
    "text": "",
    "CSS":"width: DivWidth; height: DivHeight; margin-top: marginHeight95; margin-left: marginWidth95; top: 50%; left: 50%; display: block; position: fixed; transform-style: preserve-3d; perspective:1000px; font-family: sans-serif; opacity: .99;"
    },

    {
    "type": "div",
    "ID": "gallery",
    "parent":"carousel",
    "class": "",
    "text": "",
    "CSS":"background-color:; width: DivWidth; height: DivHeight; margin-top: marginHeight95; margin-left: marginWidth95; top: 50%; left: 50%; display: block; position: fixed; transform-style: preserve-3d; backface-visibility: hidden; -webkit-backface-visibility: hidden; z-index:1; opacity: .99;"
    },

    {
    "type": "div",
    "ID": "search",
    "parent":"carousel",
    "class": "",
    "text": "",
    "html":"serach is coming",
    "CSS":"width: DivWidth; height: DivHeight; margin-top: marginHeight95; margin-left: marginWidth95; top: 50%; left: 50%; display: block; position: fixed; transform-style: preserve-3d;transform: rotateX(180deg) rotate(180deg); backface-visibility: hidden; -webkit-backface-visibility: hidden; overflow: hidden;background: white;z-index:3;"
    },

    {
    "type": "div",
    "ID": "face1",
    "parent": "gallery",
    "class": "",
    "text": "",
    "CSS":"background-color:; width: DivWidth; height: calc( DivHeight * 0.7); margin-top: marginHeight70; margin-left: marginWidth95; top: 50%; left: 50%; display: block; position: fixed; -webkit-backface-visibility: hidden; backface-visibility: hidden; transform: rotateX(0deg); overflow: hidden; background: white;"
    },

    {
    "type": "div",
    "ID": "face2",
    "parent": "gallery",
    "class": "",
    "text": "",
    "CSS":"background-color:;width: DivWidth; height: calc( DivHeight * 0.7); margin-top: marginHeight70; margin-left: marginWidth95; top: 50%; left: 50%; display: block; position: fixed; transform: rotateX(180deg); backface-visibility: hidden; -webkit-backface-visibility: hidden; overflow: hidden;background:white;"
    },

    {
    "type": "canvas",
    "ID": "canvas1",
    "parent": "face1",
    "class": "",
    "text": "",
    "CSS": ""
    },

    {
    "type": "canvas",
    "ID": "canvas2",
    "parent": "face2",
    "class": "",
    "text": "",
    "CSS": ""
    },

    {
    "type": "div",
    "ID": "NewCarousel",
    "parent": "carousel",
    "class": "",
    "text": "",
    "html":"NEW CAROUSEL",
    "CSS": "width: 200px; height: 2.5em; position: fixed; display: block; bottom: 2%; left: calc(50% - 100px); z-index:3; line-height: 2.5em; border-radius: 2px;font-size: 0.9em;background-color: #4285f4;;color: #fff;text-align: center; transition: box-shadow 0.2s cubic-bezier(0.4, 0, 0.2, 1);transition-delay: 0.2s;box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26); font-family: 'Roboto', sans-serif; font-size:1.2em;" //border-radius: 15px;border: 0; background: #F44336; color: #fff; font-size: 200%; font-weight: 100; text-align:center; line-height:60px;"
    },

    {
      "type":"class",
      "ID":".bottom .send:hover",
      "CSS":"cursor: pointer;"
    },

    {
      "type":"class",
      "ID":"*",
      "CSS":"box-sizing: border-box;  backface-visibility: hidden;-webkit-backface-visibility: hidden; "
    },

    {
    "type": "class",
    "ID": "body",
    "CSS": "margin: 0 auto; overflow: hidden; background: white;"
    },

    {
    "type":"class",
    "ID":"::-webkit-scrollbar",
    "CSS":"display: none;"
    },

    {
      "type":"class",
      "ID":".center",
      "CSS":"width: 100%; height:50%; display: inline-block; position: relative; top: 70%; -webkit-transform: translateY(-50%);transform: translateY(-50%); color: #FF5722; text-align:center; font-size:20px; -webkit-backface-visibility: hidden;backface-visibility: hidden;"
    },

    {
      "type":"class",
      "ID":".title",
      "CSS":"color: #fff; font-size: 200%; font-weight: 100; text-align:center;"
    },

    {
      "type":"class",
      "ID":"#NewCarousel:active",
      "CSS":"box-shadow: 0 8px 17px 0 rgba(0, 0, 0, 0.2);transition-delay: 0s; x: -2px;"
    }
  ];

  var  photos = [
    'http://res.cloudinary.com/carousel/image/upload/v1471644763/SwipeUpDown_r8ow3m.svg',
    'http://res.cloudinary.com/carousel/image/upload/v1471644763/swipeleftright_jouk2w.svg',
    'http://res.cloudinary.com/carousel/image/upload/v1471644919/launchNewChatRoomsvg_ooxpsa.svg',
    'http://res.cloudinary.com/carousel/image/upload/v1471644764/searchChats_znjbs8.svg',
    'http://res.cloudinary.com/carousel/image/upload/v1471644764/shareFriends_kojad9.svg'
  ];
 

//-------------------------------- building and setting up the domm ---------------------------------------------//

  function adjustDefs(obj){
    var defs = obj.map(function(value){
      var newText = {id:value.ID , type: value.type, css:value.CSS};
      return newText;
    });

    var DivHeight = window.innerHeight;
    var DivWidth = window.innerWidth;
    var itemsToBeReplaced = ['DivWidth', 'DivHeight','Div95Width', 'Div95Height', 'marginWidth95', 'marginHeight95', 'marginHeight70'];
    var newValues = [DivWidth+'px', DivHeight+'px', Math.floor(DivWidth*0.95)+'px', Math.floor(DivHeight*0.95)+'px', Math.floor(DivWidth/-2)+'px', Math.floor(DivHeight/-2)+'px', Math.floor((DivHeight*0.7)/-2)+'px'];
    var length = defs.length;///
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
      console.log(defs)
      var parent;
      if (defs.type == 'class' || defs.type == 'keyframe') return null;
      if (defs.parent == 'body')  Parent =  document.getElementsByTagName('body')[0];
      else Parent = document.getElementById(defs.parent);
      var Child = document.createElement(defs.type);
      Child.id = defs.ID;
      if (defs.class && defs.class !=='') { Child.classList.add(defs.class) }
      if (defs.html) {Child.innerHTML = defs.html;}
      console.log(Parent);
      Parent.appendChild(Child);
      return Child;
    });
  return objects;
  };
//
  function setStyleSheet(object){
    myStyleSheet = document.createElement('style');
    myStyleSheet.appendChild(document.createTextNode('')); // this is for webkit
    document.head.appendChild(myStyleSheet);
    var length = object.length, i;
    for (i = 0; i< length; ++i){
      (function(target){
        if (target.type == 'div' || target.type == 'canvas'){
          return myStyleSheet.sheet.insertRule( '#' + target.id + ' {' + target.css + '}' , 0 );
        }else if(target.type == 'class'){try {
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

  };
}()); // end of main scope
/*
//requestNewCarousel(type, callback)
requestNewCarousel('private', doPost)
{
  //doSomethingWith loc
});
*/
