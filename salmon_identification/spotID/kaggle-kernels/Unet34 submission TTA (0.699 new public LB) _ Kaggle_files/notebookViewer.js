webpackJsonp([5],{1393:function(e,t,n){"use strict";function o(){var e=document.getElementById("notebook-container")||document.getElementById("dashboard-container")||document.getElementsByClassName("main-container")[0]||document.getElementsByClassName("bk-root")[0];if(e&&e.offsetHeight){var t=r(e)+30;null!==t&&t!==i&&(i=t,parent.postMessage({iFrameHeight:t},"*"))}}function r(e){try{var t=e.offsetHeight,n=getComputedStyle(e);return n&&n.marginTop&&n.marginBottom?t+=parseInt(n.marginTop)+parseInt(n.marginBottom):null}catch(e){return console.error("An error occurred in outerHeight"),null}}Object.defineProperty(t,"__esModule",{value:!0});var i=-1;t.postHeight=o},3177:function(e,t,n){n(3178),e.exports=n(3180)},3178:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(3179),r=n(1393);new(function(){function e(){var e=this;this.domLoaded=function(){e.setKaggleAnchorsToLoadInPage(),e.setAnchorsToScrollIntoView(),e.startUpdatingHeight(),o.CellHiding.registerNotebookCells(),o.CellHiding.registerScriptCells()},this.pageLoaded=function(){e.stopUpdatingHeight()},this.setKaggleAnchorsToLoadInPage=function(){Array.from(document.getElementsByTagName("a")).forEach(function(e){"www.kaggle.com"===e.hostname&&(e.target="_top")})},this.setAnchorsToScrollIntoView=function(){Array.from(document.getElementsByTagName("a")).forEach(function(e){var t=e.hash;null!=t&&t.startsWith("#")&&e.hostname===document.location.hostname&&(e.target="_self",e.onclick=function(){parent.postMessage({anchorClicked:!0},"*");var e=document.getElementById(t.substr(1));return e&&e.scrollIntoView&&e.scrollIntoView(),!1})})},this.startUpdatingHeight=function(){r.postHeight(),e.heightIntervalHandle=window.setInterval(r.postHeight,200)},this.stopUpdatingHeight=function(){clearTimeout(e.heightIntervalHandle),r.postHeight()},document.addEventListener("DOMContentLoaded",this.domLoaded),window.addEventListener("load",this.pageLoaded,!1),window.addEventListener("resize",r.postHeight,!1)}return e}())},3179:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var o=n(1),r=n(43),i=n(1393),s=function(){function t(){}return t.registerNotebookCells=function(){try{var e=document.getElementsByClassName("_kg_hide-input-true"),n=document.getElementsByClassName("_kg_hide-output-true");t.addControls(e,"Code"),t.addControls(n,"Output")}catch(e){console.error("An error occurred registering CellHiding for notebook cells.",e)}},t.registerScriptCells=function(){try{Array.from(document.getElementsByClassName("btn")).forEach(function(e){e.addEventListener("click",function(){setTimeout(i.postHeight,1e3)})})}catch(e){console.error("An error occurred registering CellHiding for script cells.",e)}},t.addControls=function(t,n){Array.from(t).forEach(function(t){try{var o=document.createElement("div");t.insertBefore(o,t.firstChild),r.render(e.createElement(a,{type:n,cell:t}),o)}catch(e){console.error("An error occurred adding controls to cell.",e)}})},t}();t.CellHiding=s;var a=function(t){function n(){var e=null!==t&&t.apply(this,arguments)||this;return e.showAreaClassName="cell-area-visible--"+e.props.type,e.state={visible:!1},e.onClick=function(){try{var t=e.props.cell,n=!e.state.visible;n&&t&&t.classList?t.classList.add(e.showAreaClassName):t.classList.remove(e.showAreaClassName),e.setState({visible:n}),i.postHeight()}catch(e){console.error("An error occurred toggling cell visibility.",e)}},e}return o.__extends(n,t),n.prototype.render=function(){return e.createElement("div",{className:"cell-visibility-toggle",onClick:this.onClick},this.state.visible?"Hide":this.props.type)},n}(e.Component)}).call(t,n(0))},3180:function(e,t){}},[3177]);