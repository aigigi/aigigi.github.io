var e=globalThis,t={},n={},o=e.parcelRequire5b70;null==o&&((o=function(e){if(e in t)return t[e].exports;if(e in n){var o=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,o.call(a.exports,a,a.exports),a.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequire5b70=o),(0,o.register)("5Rd1x",function(e,t){Object.defineProperty(e.exports,"OrbitControls",{get:()=>m,set:void 0,enumerable:!0,configurable:!0});var n=o("ilwiq");let a={type:"change"},i={type:"start"},r={type:"end"},c=new n.Ray,s=new n.Plane,l=Math.cos(70*n.MathUtils.DEG2RAD);class m extends n.EventDispatcher{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new n.Vector3,this.cursor=new n.Vector3,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:n.MOUSE.ROTATE,MIDDLE:n.MOUSE.DOLLY,RIGHT:n.MOUSE.PAN},this.touches={ONE:n.TOUCH.ROTATE,TWO:n.TOUCH.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return d.phi},this.getAzimuthalAngle=function(){return d.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(e){e.addEventListener("keydown",en),this._domElementKeyEvents=e},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",en),this._domElementKeyEvents=null},this.saveState=function(){o.target0.copy(o.target),o.position0.copy(o.object.position),o.zoom0=o.object.zoom},this.reset=function(){o.target.copy(o.target0),o.object.position.copy(o.position0),o.object.zoom=o.zoom0,o.object.updateProjectionMatrix(),o.dispatchEvent(a),o.update(),p=m.NONE},this.update=function(){let t=new n.Vector3,i=new(0,n.Quaternion)().setFromUnitVectors(e.up,new n.Vector3(0,1,0)),r=i.clone().invert(),E=new n.Vector3,f=new n.Quaternion,y=new n.Vector3,O=2*Math.PI;return function(T=null){let v=o.object.position;t.copy(v).sub(o.target),t.applyQuaternion(i),d.setFromVector3(t),o.autoRotate&&p===m.NONE&&C(null!==T?2*Math.PI/60*o.autoRotateSpeed*T:2*Math.PI/60/60*o.autoRotateSpeed),o.enableDamping?(d.theta+=h.theta*o.dampingFactor,d.phi+=h.phi*o.dampingFactor):(d.theta+=h.theta,d.phi+=h.phi);let j=o.minAzimuthAngle,P=o.maxAzimuthAngle;isFinite(j)&&isFinite(P)&&(j<-Math.PI?j+=O:j>Math.PI&&(j-=O),P<-Math.PI?P+=O:P>Math.PI&&(P-=O),j<=P?d.theta=Math.max(j,Math.min(P,d.theta)):d.theta=d.theta>(j+P)/2?Math.max(j,d.theta):Math.min(P,d.theta)),d.phi=Math.max(o.minPolarAngle,Math.min(o.maxPolarAngle,d.phi)),d.makeSafe(),!0===o.enableDamping?o.target.addScaledVector(g,o.dampingFactor):o.target.add(g),o.target.sub(o.cursor),o.target.clampLength(o.minTargetRadius,o.maxTargetRadius),o.target.add(o.cursor);let w=!1;if(o.zoomToCursor&&M||o.object.isOrthographicCamera)d.radius=U(d.radius);else{let e=d.radius;d.radius=U(d.radius*b),w=e!=d.radius}if(t.setFromSpherical(d),t.applyQuaternion(r),v.copy(o.target).add(t),o.object.lookAt(o.target),!0===o.enableDamping?(h.theta*=1-o.dampingFactor,h.phi*=1-o.dampingFactor,g.multiplyScalar(1-o.dampingFactor)):(h.set(0,0,0),g.set(0,0,0)),o.zoomToCursor&&M){let a=null;if(o.object.isPerspectiveCamera){let e=t.length();a=U(e*b);let n=e-a;o.object.position.addScaledVector(L,n),o.object.updateMatrixWorld(),w=!!n}else if(o.object.isOrthographicCamera){let e=new n.Vector3(A.x,A.y,0);e.unproject(o.object);let i=o.object.zoom;o.object.zoom=Math.max(o.minZoom,Math.min(o.maxZoom,o.object.zoom/b)),o.object.updateProjectionMatrix(),w=i!==o.object.zoom;let r=new n.Vector3(A.x,A.y,0);r.unproject(o.object),o.object.position.sub(r).add(e),o.object.updateMatrixWorld(),a=t.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),o.zoomToCursor=!1;null!==a&&(this.screenSpacePanning?o.target.set(0,0,-1).transformDirection(o.object.matrix).multiplyScalar(a).add(o.object.position):(c.origin.copy(o.object.position),c.direction.set(0,0,-1).transformDirection(o.object.matrix),Math.abs(o.object.up.dot(c.direction))<l?e.lookAt(o.target):(s.setFromNormalAndCoplanarPoint(o.object.up,o.target),c.intersectPlane(s,o.target))))}else if(o.object.isOrthographicCamera){let e=o.object.zoom;o.object.zoom=Math.max(o.minZoom,Math.min(o.maxZoom,o.object.zoom/b)),e!==o.object.zoom&&(o.object.updateProjectionMatrix(),w=!0)}return b=1,M=!1,!!(w||E.distanceToSquared(o.object.position)>u||8*(1-f.dot(o.object.quaternion))>u||y.distanceToSquared(o.target)>u)&&(o.dispatchEvent(a),E.copy(o.object.position),f.copy(o.object.quaternion),y.copy(o.target),!0)}}(),this.dispose=function(){o.domElement.removeEventListener("contextmenu",ea),o.domElement.removeEventListener("pointerdown",B),o.domElement.removeEventListener("pointercancel",J),o.domElement.removeEventListener("wheel",$),o.domElement.removeEventListener("pointermove",Q),o.domElement.removeEventListener("pointerup",J),o.domElement.getRootNode().removeEventListener("keydown",ee,{capture:!0}),null!==o._domElementKeyEvents&&(o._domElementKeyEvents.removeEventListener("keydown",en),o._domElementKeyEvents=null)};let o=this,m={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},p=m.NONE,u=1e-6,d=new n.Spherical,h=new n.Spherical,b=1,g=new n.Vector3,E=new n.Vector2,f=new n.Vector2,y=new n.Vector2,O=new n.Vector2,T=new n.Vector2,v=new n.Vector2,j=new n.Vector2,P=new n.Vector2,w=new n.Vector2,L=new n.Vector3,A=new n.Vector2,M=!1,N=[],x={},R=!1;function k(e){return Math.pow(.95,o.zoomSpeed*Math.abs(.01*e))}function C(e){h.theta-=e}function S(e){h.phi-=e}let Y=function(){let e=new n.Vector3;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),g.add(e)}}(),D=function(){let e=new n.Vector3;return function(t,n){!0===o.screenSpacePanning?e.setFromMatrixColumn(n,1):(e.setFromMatrixColumn(n,0),e.crossVectors(o.object.up,e)),e.multiplyScalar(t),g.add(e)}}(),I=function(){let e=new n.Vector3;return function(t,n){let a=o.domElement;if(o.object.isPerspectiveCamera){let i=o.object.position;e.copy(i).sub(o.target);let r=e.length();Y(2*t*(r*=Math.tan(o.object.fov/2*Math.PI/180))/a.clientHeight,o.object.matrix),D(2*n*r/a.clientHeight,o.object.matrix)}else o.object.isOrthographicCamera?(Y(t*(o.object.right-o.object.left)/o.object.zoom/a.clientWidth,o.object.matrix),D(n*(o.object.top-o.object.bottom)/o.object.zoom/a.clientHeight,o.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),o.enablePan=!1)}}();function V(e){o.object.isPerspectiveCamera||o.object.isOrthographicCamera?b/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),o.enableZoom=!1)}function z(e){o.object.isPerspectiveCamera||o.object.isOrthographicCamera?b*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),o.enableZoom=!1)}function H(e,t){if(!o.zoomToCursor)return;M=!0;let n=o.domElement.getBoundingClientRect(),a=e-n.left,i=t-n.top,r=n.width,c=n.height;A.x=a/r*2-1,A.y=-(i/c*2)+1,L.set(A.x,A.y,1).unproject(o.object).sub(o.object.position).normalize()}function U(e){return Math.max(o.minDistance,Math.min(o.maxDistance,e))}function _(e){E.set(e.clientX,e.clientY)}function K(e){O.set(e.clientX,e.clientY)}function X(e){if(1===N.length)E.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);E.set(n,o)}}function F(e){if(1===N.length)O.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);O.set(n,o)}}function Z(e){let t=er(e),n=e.pageX-t.x,o=e.pageY-t.y;j.set(0,Math.sqrt(n*n+o*o))}function q(e){if(1==N.length)f.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);f.set(n,o)}y.subVectors(f,E).multiplyScalar(o.rotateSpeed);let t=o.domElement;C(2*Math.PI*y.x/t.clientHeight),S(2*Math.PI*y.y/t.clientHeight),E.copy(f)}function G(e){if(1===N.length)T.set(e.pageX,e.pageY);else{let t=er(e),n=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);T.set(n,o)}v.subVectors(T,O).multiplyScalar(o.panSpeed),I(v.x,v.y),O.copy(T)}function W(e){let t=er(e),n=e.pageX-t.x,a=e.pageY-t.y;P.set(0,Math.sqrt(n*n+a*a)),w.set(0,Math.pow(P.y/j.y,o.zoomSpeed)),V(w.y),j.copy(P),H((e.pageX+t.x)*.5,(e.pageY+t.y)*.5)}function B(e){if(!1!==o.enabled)0===N.length&&(o.domElement.setPointerCapture(e.pointerId),o.domElement.addEventListener("pointermove",Q),o.domElement.addEventListener("pointerup",J)),!function(e){for(let t=0;t<N.length;t++)if(N[t]==e.pointerId)return!0;return!1}(e)&&(N.push(e.pointerId),"touch"===e.pointerType?eo(e):function(e){let t;switch(e.button){case 0:t=o.mouseButtons.LEFT;break;case 1:t=o.mouseButtons.MIDDLE;break;case 2:t=o.mouseButtons.RIGHT;break;default:t=-1}switch(t){case n.MOUSE.DOLLY:if(!1===o.enableZoom)return;H(e.clientX,e.clientX),j.set(e.clientX,e.clientY),p=m.DOLLY;break;case n.MOUSE.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===o.enablePan)return;K(e),p=m.PAN}else{if(!1===o.enableRotate)return;_(e),p=m.ROTATE}break;case n.MOUSE.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===o.enableRotate)return;_(e),p=m.ROTATE}else{if(!1===o.enablePan)return;K(e),p=m.PAN}break;default:p=m.NONE}p!==m.NONE&&o.dispatchEvent(i)}(e))}function Q(e){!1!==o.enabled&&("touch"===e.pointerType?function(e){switch(ei(e),p){case m.TOUCH_ROTATE:if(!1===o.enableRotate)return;q(e),o.update();break;case m.TOUCH_PAN:if(!1===o.enablePan)return;G(e),o.update();break;case m.TOUCH_DOLLY_PAN:if(!1===o.enableZoom&&!1===o.enablePan)return;o.enableZoom&&W(e),o.enablePan&&G(e),o.update();break;case m.TOUCH_DOLLY_ROTATE:if(!1===o.enableZoom&&!1===o.enableRotate)return;o.enableZoom&&W(e),o.enableRotate&&q(e),o.update();break;default:p=m.NONE}}(e):function(e){switch(p){case m.ROTATE:if(!1===o.enableRotate)return;!function(e){f.set(e.clientX,e.clientY),y.subVectors(f,E).multiplyScalar(o.rotateSpeed);let t=o.domElement;C(2*Math.PI*y.x/t.clientHeight),S(2*Math.PI*y.y/t.clientHeight),E.copy(f),o.update()}(e);break;case m.DOLLY:if(!1===o.enableZoom)return;P.set(e.clientX,e.clientY),w.subVectors(P,j),w.y>0?V(k(w.y)):w.y<0&&z(k(w.y)),j.copy(P),o.update();break;case m.PAN:if(!1===o.enablePan)return;T.set(e.clientX,e.clientY),v.subVectors(T,O).multiplyScalar(o.panSpeed),I(v.x,v.y),O.copy(T),o.update()}}(e))}function J(e){switch(function(e){delete x[e.pointerId];for(let t=0;t<N.length;t++)if(N[t]==e.pointerId){N.splice(t,1);return}}(e),N.length){case 0:o.domElement.releasePointerCapture(e.pointerId),o.domElement.removeEventListener("pointermove",Q),o.domElement.removeEventListener("pointerup",J),o.dispatchEvent(r),p=m.NONE;break;case 1:let t=N[0],n=x[t];eo({pointerId:t,pageX:n.x,pageY:n.y})}}function $(e){if(!1!==o.enabled&&!1!==o.enableZoom&&p===m.NONE){var t;e.preventDefault(),o.dispatchEvent(i),H((t=function(e){let t=e.deltaMode,n={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100}return e.ctrlKey&&!R&&(n.deltaY*=10),n}(e)).clientX,t.clientY),t.deltaY<0?z(k(t.deltaY)):t.deltaY>0&&V(k(t.deltaY)),o.update(),o.dispatchEvent(r)}}function ee(e){"Control"===e.key&&(R=!0,o.domElement.getRootNode().addEventListener("keyup",et,{passive:!0,capture:!0}))}function et(e){"Control"===e.key&&(R=!1,o.domElement.getRootNode().removeEventListener("keyup",et,{passive:!0,capture:!0}))}function en(e){!1!==o.enabled&&!1!==o.enablePan&&function(e){let t=!1;switch(e.code){case o.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?S(2*Math.PI*o.rotateSpeed/o.domElement.clientHeight):I(0,o.keyPanSpeed),t=!0;break;case o.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?S(-2*Math.PI*o.rotateSpeed/o.domElement.clientHeight):I(0,-o.keyPanSpeed),t=!0;break;case o.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?C(2*Math.PI*o.rotateSpeed/o.domElement.clientHeight):I(o.keyPanSpeed,0),t=!0;break;case o.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?C(-2*Math.PI*o.rotateSpeed/o.domElement.clientHeight):I(-o.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),o.update())}(e)}function eo(e){switch(ei(e),N.length){case 1:switch(o.touches.ONE){case n.TOUCH.ROTATE:if(!1===o.enableRotate)return;X(e),p=m.TOUCH_ROTATE;break;case n.TOUCH.PAN:if(!1===o.enablePan)return;F(e),p=m.TOUCH_PAN;break;default:p=m.NONE}break;case 2:switch(o.touches.TWO){case n.TOUCH.DOLLY_PAN:if(!1===o.enableZoom&&!1===o.enablePan)return;o.enableZoom&&Z(e),o.enablePan&&F(e),p=m.TOUCH_DOLLY_PAN;break;case n.TOUCH.DOLLY_ROTATE:if(!1===o.enableZoom&&!1===o.enableRotate)return;o.enableZoom&&Z(e),o.enableRotate&&X(e),p=m.TOUCH_DOLLY_ROTATE;break;default:p=m.NONE}break;default:p=m.NONE}p!==m.NONE&&o.dispatchEvent(i)}function ea(e){!1!==o.enabled&&e.preventDefault()}function ei(e){let t=x[e.pointerId];void 0===t&&(t=new n.Vector2,x[e.pointerId]=t),t.set(e.pageX,e.pageY)}function er(e){return x[e.pointerId===N[0]?N[1]:N[0]]}o.domElement.addEventListener("contextmenu",ea),o.domElement.addEventListener("pointerdown",B),o.domElement.addEventListener("pointercancel",J),o.domElement.addEventListener("wheel",$,{passive:!1}),o.domElement.getRootNode().addEventListener("keydown",ee,{passive:!0,capture:!0}),this.update()}}});
//# sourceMappingURL=aoRender.fc8349f1.js.map