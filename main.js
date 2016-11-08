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
  CSSPlugin.defaultTransformPerspective = 1000;

//-------------------------------- building and setting up the domm ---------------------------------------------//
  function requestNewCarousel(type, callback) {
    var options = { enableHighAccuracy: false };

    function success(pos) {
      var crd = [pos.coords.longitude, pos.coords.latitude];
      return callback(type, crd);
    };

    function error(err) {
      console.warn('ERROR(' + err.code + '): ' + err.message);
      return callback(type, null, null);
    };
    return navigator.geolocation.getCurrentPosition(success, error, options);
  }

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

  //-------  rotation controller ------//
  function Rotate(direction){
    var element, To, activeWindow  = Math.abs((GreenProp.rotationY(Elements[0]) % 360)/180), activeCanvas, activeImage;
    switch(direction) {
      case 'up':
        target = Elements[1];
        To = GreenProp.rotationX(target) - 180;
        activeCanvas = Math.abs((To % 360)/180);
        activeImage = Math.abs(To/180) % photos.length;
      break;

      case 'down':
        target = Elements[1];
        To = GreenProp.rotationX(target)+ 180;
        activeCanvas = Math.abs((To % 360)/180);
        activeImage = Math.abs(To/180) % photos.length;
      break;

      case 'left':
        target = Elements[0];
        To = GreenProp.rotationY(target)- 180;
      break;

      case 'right':
        target = Elements[0];
        To = GreenProp.rotationY(target) + 180;
      break;
      default: return;//other keys
    }
    //console.log('activeWindow ' + activeWindow + ' and activeCanvas: ' + activeCanvas + ' rotations: ' + rotations + ' active image: ' + activeImage);
    return Rotation(target, To, activeWindow, activeCanvas, activeImage);
  };

  function Rotation(target, to, ActiveWindow, ActiveCanvas, image){

    if (target == Elements[0]){
      console.log('y rotation');
      return TweenLite.to(target, 0.34, {rotationY:to});
    }else if(target == Elements[1] && ActiveWindow == '0'){
      console.log('x rotation to active image: ' + image);
      lastImage = photos[image];
      return TweenLite.to(target, 0.34, {rotationX:to, onComplete: Canvas[ActiveCanvas].renderImage(photos[image])});
    }
    return
  };

  function toggleVisibility(y){
    return console.log(y);
  }

  //------------------- canvas related functions -----------------------------------------------//


  HTMLCanvasElement.prototype.renderImage = function(data){
    var canvas = this;
    var ctx = canvas.getContext('2d');
    var canvasWidth = canvas.width;
    var canvasHeight = canvas.height;
    var width, height, dx, dy;
    var img = new Image();

    img.onload = function(){
      var aspect = this.width/this.height;
      var orientation = canvasWidth/canvasHeight;

      if (orientation > 1){ //landscape
        if (aspect == 1){ //square
          width = height = Math.min(canvasWidth, canvasHeight);
          dx = Math.floor(Math.abs((canvasWidth - width)/2));
          dy = Math.floor(Math.abs((canvasHeight - height)/2));
        }else if (aspect > 1){ //natural landscape
          width = canvasWidth;
          height = Math.floor(width / aspect);
          dx = Math.floor(Math.abs((canvasWidth -width)/2));
          dy = Math.floor(Math.abs((canvasHeight - height)/2));
        }else if (aspect < 1){ //por.message-personaltrait to landscape
          height = canvasHeight;
          width = Math.floor(height * aspect);
          dx = Math.floor(Math.abs((canvasWidth - width)/2));
          dy = Math.floor(Math.abs((canvasHeight - height)/2));
        }
      }else if (orientation < 1){//portrait
        if (aspect == 1){ //square
          width = height = Math.min(canvasWidth, canvasHeight);
          dx = Math.floor(Math.abs((canvasWidth - width)/2));
          dy = Math.floor(Math.abs((canvasHeight - height)/2));
        }else if (aspect < 1){  //natural portrait
          console.log(1)
          height = canvasHeight;
          width = Math.floor(height * aspect);
          dx = Math.floor(Math.abs((canvasWidth -width)/2));
          dy = Math.floor(Math.abs((canvasHeight - height)/2));
        }else if (aspect > 1){//landscape to portrait
          console.log(2)
          width = canvasWidth;
          height = Math.floor(width / aspect);
          dx = Math.floor(Math.abs((canvasWidth - width)/2));
          dy = Math.floor(Math.abs((canvasHeight - height)/2));
        }
      }
      ctx.clearRect(0,0,canvasWidth,canvasHeight);
      ctx.drawImage(img, dx, dy, width, height);
      URL.revokeObjectURL(data);
    };
    img.src = data;
  }

  //------------ http://stackoverflow.com/questions/7584794/accessing-jpeg-exif-rotation-data-in-javascript-on-the-client-side -------//
  function getOrientation(file, callback) {
    var reader = new FileReader();
    reader.onload = function(e) {

      var view = new DataView(e.target.result);
      if (view.getUint16(0, false) != 0xFFD8) return callback(-2);
      var length = view.byteLength, offset = 2;
      while (offset < length) {
        var marker = view.getUint16(offset, false);
        offset += 2;
        if (marker == 0xFFE1) {
          if (view.getUint32(offset += 2, false) != 0x45786966) return callback(-1);
          var little = view.getUint16(offset += 6, false) == 0x4949;
          offset += view.getUint32(offset + 4, little);
          var tags = view.getUint16(offset, little);
          offset += 2;
          for (var i = 0; i < tags; i++)
          if (view.getUint16(offset + (i * 12), little) == 0x0112)
          return callback(view.getUint16(offset + (i * 12) + 8, little));
        }
      else if ((marker & 0xFF00) != 0xFF00) break;
      else offset += view.getUint16(offset, false);
      }
    return callback(-1);
    };
  console.log(file);
  reader.readAsArrayBuffer(file.slice(0, 64 * 1024));
  };

  //--------------generic ajax request dunction from: http://www.javascriptkit.com/dhtmltutors/ajaxgetpost.shtml ----------//
  //--------------to use: var myajaxrequest=new ajaxRequest() -------------------------------------------------------------//
  function ajaxRequest(){
    var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"]
    if (window.ActiveXObject){
      for (var i=0; i<activexmodes.length; i++){
        try{
          return new ActiveXObject(activexmodes[i])
        }
        catch(e){
          //suppress error
          console.log('message not sent');
        }
      }
    } else if (window.XMLHttpRequest) // if Mozilla, Safari etc
    return new XMLHttpRequest();
    else
      return false;
  };

  //---------------- ajax post request from: http://www.javascriptkit.com/dhtmltutors/ajaxgetpost2.shtml -----//
  //---------------- to use:var request = new doPost('private') or var request = new doPost('public'); ------//

  function doPost(type, location){
    console.log('posting')
    var  time = new Date(), data = {};
    if (type == 'public'){
      data = {url:'null', tag:type, time:time, geo:location, photos: []}
    }else if( type =='private'){
      data = {url:'null', tag:'private', time:time, geo:location, photos: []}
    }
    console.log(data);

    var myPostRequest = new ajaxRequest();
    myPostRequest.onreadystatechange = function(){
      if (myPostRequest.readyState == 4){
        if (myPostRequest.status == 200){
          window.location = this.responseText;
          console.log(this.responseText);
          // close request
          // delete form
        }
    console.log('socket id: ' + id );
      }
    };

    myPostRequest.open('POST', '/new', true);
    myPostRequest.setRequestHeader('Content-type', 'application/json;charset=UTF-8');
    myPostRequest.send(JSON.stringify(data));
  };

  //------------------------------ setting up swipe, keyboard and scrollwheel event listeners --------------------------------------//
  function swipedetect(el,callback){
    var touchsurface = el,swipedir,startX,startY,distX,distY,threshold = 100,restraint = 100,allowedTime = 300,elapsedTime,startTime,handleswipe = callback || function(swipedir){};

    touchsurface.addEventListener('touchstart', function(e){
      var touchobj = e.changedTouches[0];
      swipedir = 'none';
      dist = 0;
      startX = touchobj.pageX;
      startY = touchobj.pageY;
      startTime = new Date().getTime();
      //e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchmove', function(e){
      //e.preventDefault()
    }, false)

    touchsurface.addEventListener('touchend', function(e){
      var touchobj = e.changedTouches[0];
      distX = touchobj.pageX - startX
      distY = touchobj.pageY - startY
      elapsedTime = new Date().getTime() - startTime
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint){
        swipedir = (distX < 0)? 'left' : 'right'
      }
      else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint){
        swipedir = (distY < 0)? 'up' : 'down'
      }
      handleswipe(swipedir)
      //e.preventDefault()
    }, false);

    document.addEventListener('keyup', throttle(400, function(event) {
      event.preventDefault();
      switch(event.which) {
        case 37: direction = "left"; //left
        break;

        case 39: direction = "right"; // right
        break;

        case 40: direction = "down";// down
        break;

        case 38: direction = "up";// up
        break;

        default: return;//other keys
      }
    handleswipe(direction);
    }));

    window.addEventListener('mousewheel', throttle(350,function(event){
      event.preventDefault;
      wDelta = event.wheelDelta < 0 ? 'down' : 'up';
      if (wDelta == 'up') { direction = 'left'}
      else if (wDelta == 'down') { direction = 'right'}
      handleswipe(direction);
    }));
  };

  function randomString(length) {
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var result = '';
    for (var i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
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
    Canvas = [Elements[5],Elements[6]];
    console.log(Elements)

    TweenLite.set([Elements[0],Elements[1]], {css:{x:0}});
    swipedetect(document.getElementsByTagName('body')[0], throttle(500,function(direction){Rotate(direction)}));

    window.addEventListener('resize', debounce(resize, 250), false);

    Elements[7].addEventListener('click', function (e) {
        //console.log('new carousel requested');
       return requestNewCarousel('private', doPost);//doPost('private');
    }, false);
  };
}()); // end of main scope
/*
//requestNewCarousel(type, callback)
requestNewCarousel('private', doPost)
{
  //doSomethingWith loc
});
*/
