(self.webpackChunkcovid19_helix=self.webpackChunkcovid19_helix||[]).push([[636],{114:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var a=n(643);class o extends a.Z{static getConfig(){return{className:"Neo.main.draggable.sensor.Base",currentElement:null,dragTargetClasses:["neo-draggable","neo-resizable"],isDragging:!1,lastEvent:null,startEvent:null}}onConstructed(){this.attach(),super.onConstructed()}attach(){}detach(){}trigger(e,t){const n=document.createEvent("Event");return n.detail=t,n.initEvent(t.type,!0,!0),e.dispatchEvent(n),this.lastEvent=t,t}}Neo.applyClassConfig(o)},147:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>c});var a=n(114),o=n(799);let r=!1;window.addEventListener("touchmove",(e=>{r&&e.cancelable&&e.preventDefault()}),{cancelable:!0,passive:!1});class c extends a.Z{static getConfig(){return{className:"Neo.main.draggable.sensor.Touch",delay:200,minDistance:0,pageX:null,pageY:null,tapTimeout:null,touchStartTime:0}}constructor(e){super(e),Neo.bindMethods(this,["onDistanceChange","onTouchEnd","onTouchMove","onTouchStart","startDrag"])}attach(){document.addEventListener("touchstart",this.onTouchStart)}detach(){document.removeEventListener("touchstart",this.onTouchStart)}onDistanceChange(e){let t=this;if(t.currentElement){const{pageX:n,pageY:a}=o.Z.getTouchCoords(e),r=o.Z.getTouchCoords(t.startEvent),c=Date.now()-t.touchStartTime,s=o.Z.getDistance(r.pageX,r.pageY,n,a)||0;Object.assign(t,{pageX:n,pageY:a}),c>=t.delay&&s>=t.minDistance&&(clearTimeout(t.tapTimeout),document.removeEventListener("touchmove",t.onDistanceChange),t.startDrag())}}onTouchEnd(e){r=!1;let t=this;if(clearTimeout(t.tapTimeout),document.removeEventListener("dragstart",s),document.removeEventListener("touchcancel",t.onTouchEnd),document.removeEventListener("touchend",t.onTouchEnd),document.removeEventListener("touchmove",t.onDistanceChange),t.dragging){const{pageX:n,pageY:a}=o.Z.getTouchCoords(e);let r=t.currentElement,c=document.elementFromPoint(n-window.scrollX,a-window.scrollY);e.preventDefault(),t.trigger(r,{clientX:n,clientY:a,element:r,eventPath:o.Z.getPathFromElement(c),originalEvent:e,path:t.startEvent.path||t.startEvent.composedPath(),target:c,type:"drag:end"}),document.removeEventListener("contextmenu",s,!0),document.removeEventListener("touchmove",t.onTouchMove),Object.assign(t,{currentElement:null,dragging:!1,startEvent:null})}t.dragging=!1}onTouchMove(e){let t=this;if(t.dragging){const{pageX:n,pageY:a}=o.Z.getTouchCoords(e);let r=t.currentElement,c=document.elementFromPoint(n-window.scrollX,a-window.scrollY);t.trigger(r,{clientX:n,clientY:a,element:r,eventPath:o.Z.getPathFromElement(c),originalEvent:e,path:t.startEvent.path||t.startEvent.composedPath(),target:c,type:"drag:move"})}}onTouchStart(e){let t=this,n=o.Z.testPathInclusion(e,t.dragTargetClasses);if(n){const{pageX:a,pageY:r}=o.Z.getTouchCoords(e);Object.assign(t,{currentElement:n.node,pageX:a,pageY:r,startEvent:e,touchStartTime:Date.now()}),document.addEventListener("dragstart",s),document.addEventListener("touchcancel",t.onTouchEnd),document.addEventListener("touchend",t.onTouchEnd),document.addEventListener("touchmove",t.onDistanceChange,{cancelable:!0}),t.tapTimeout=setTimeout((()=>{t.onDistanceChange({touches:[{pageX:t.pageX,pageY:t.pageY}]})}),t.delay)}}startDrag(){let e=this,t=e.currentElement,n=e.startEvent,a=o.Z.getTouchCoords(e.startEvent);e.trigger(t,{clientX:a.pageX,clientY:a.pageY,element:t,originalEvent:n,path:n.path||n.composedPath(),target:n.target,type:"drag:start"}),e.dragging=!0,e.dragging&&(document.addEventListener("contextmenu",s,!0),document.addEventListener("touchmove",e.onTouchMove)),r=e.dragging}}function s(e){e.preventDefault(),e.stopPropagation()}Neo.applyClassConfig(c)}}]);