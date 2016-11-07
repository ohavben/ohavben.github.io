(function(){
  var definitions, Elements, sheet, myStyleSheet, Canvas, lastImage, location, propeties = [
    {
    "type": "div",
    "ID": "carousel",
    "parent": "body",
    "class": "",
    "text": "",
    "CSS":"width: DivWidth; height: DivHeight; margin-top: marginHeight95; margin-left: marginWidth95; top: 50%; left: 50%; display: block; position: fixed; transform-style: preserve-3d; perspective:1000px; font-family: sans-serif; opacity: .99; background-color:black;"
    }
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
      if (defs.type == 'class' || defs.type == 'keyframe') return null;
      var Parent = document.getElementById(defs.parent)
      var Child = document.createElement(defs.type);
      Child.id = defs.ID;
      if (defs.class && defs.class !=='') { Child.classList.add(defs.class) }
      if (defs.html) {Child.innerHTML = defs.html;}
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
    if(document.readyState === "complete") {
      sizeCanvas();
      if (!lastImage){
        document.getElementById('canvas1').renderImage(photos[0]);
      }else if (lastImage) {
        document.getElementById('canvas1').renderImage(lastImage);
      }
    };
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
    console.log(Elements)
    window.addEventListener('resize', debounce(resize, 250), false);

    
  };
}()); // end of main scope

