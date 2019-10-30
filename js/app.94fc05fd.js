(function(t){function e(e){for(var a,i,s=e[0],l=e[1],u=e[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);c&&c(e);while(p.length)p.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,s=1;s<n.length;s++){var l=n[s];0!==r[l]&&(a=!1)}a&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},r={app:0},o=[];function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/wealth-visualizer/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var u=0;u<s.length;u++)e(s[u]);var c=l;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"0ba3":function(t,e,n){"use strict";var a=n("a6a3"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:{backgroundColor:t.backgroundColor}},[n("div",{staticClass:"container mx-auto p-4"},[n("p",{staticClass:"font-serif text-center font-thin text-3xl"},[t._v("3D Wealth Visualizer")]),t._m(0),n("p",{staticClass:"font-serif text-center italic mb-4"},[t._v("Input your wealth to visualize it's physicality...")]),n("table",{staticClass:"table-fixed w-full"},[n("tbody",[n("tr",[n("td",{staticClass:"border px-4 py-2 font-bold"},[t._v("Text Input")]),n("td",{staticClass:"border px-4 py-2"},[n("div",{staticClass:"flex flex-row items-center"},[n("span",{staticClass:"mr-1 font-bold"},[t._v("$")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.textModel,expression:"textModel"}],staticClass:"w-full border border-blue-500 rounded",attrs:{type:"number"},domProps:{value:t.textModel},on:{input:function(e){e.target.composing||(t.textModel=e.target.value)}}})])])]),n("tr",{staticClass:"table-odd"},[n("td",{staticClass:"border px-4 py-2 w-1/4 font-bold"},[t._v("Range Input")]),n("td",{staticClass:"border px-4 pt-2"},[n("range-input",{on:{change:t.calculateFromRange},model:{value:t.rangeModel,callback:function(e){t.rangeModel=e},expression:"rangeModel"}})],1)]),n("tr",[n("td",{staticClass:"border px-4 py-2 font-bold"},[t._v("Current Value")]),n("td",{staticClass:"border px-4 py-2 font-bold font-serif italic text-xl"},[t._v("$"+t._s(t.valueLogFormatted))])])])]),n("div",{staticClass:"relative w-full"},[n("wealth-3d",{attrs:{value:t.valueLog}})],1),n("app-footer")],1)])},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"py-2"},[n("hr")])}],i=(n("542d"),function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"w-full"},[n("input",{staticClass:"w-full py-3",attrs:{id:"wealth_quantity",type:"range",min:"0",max:"100",step:"1"},domProps:{value:t.value},on:{input:function(e){return t.$emit("change",e.target.value)}}})])}),s=[],l={props:["value"],model:{prop:"value",event:"change"}},u=l,c=(n("0ba3"),n("2877")),d=Object(c["a"])(u,i,s,!1,null,null,null),p=d.exports,h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"inline-block relative w-64"},[n("select",{staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",domProps:{value:t.value},on:{input:function(e){return t.$emit("change",e.target.value)}}},t._l(t.options,(function(e){return n("option",{key:e},[t._v(t._s(e))])})),0),n("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[n("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[n("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])},f=[],v={props:["options","value"],model:{prop:"value",event:"change"}},m=v,w=Object(c["a"])(m,h,f,!1,null,null,null),g=w.exports,x=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{attrs:{id:"container-3d"}})])}],M=(n("d81d"),n("284c")),C=n("5a89"),_=(n("b0c0"),100),y=1e4,k=1e6,j=1e8,P=1e10,L={length:108,width:45,height:7e-4},B={length:L.length,width:L.width,height:10*L.height*1e3},F=window.location.pathname,O=new C["F"],T=new C["u"]({map:O.load(F+"textures/us_100.jpeg")}),z=[L.length,L.height,L.width],S=z[0],$=z[1],E=z[2];function I(){var t=new C["b"](S,$,E);t.translate(S/2,0,-E/2);var e=new C["t"](t,T),n=.05,a=Math.random()*n-n/2;return e.rotateY(a),e.rotateY(Math.PI),e}function R(){var t=new C["l"];t.name="Group10k";for(var e=0,n=0;n<y;n+=_){var a=I();a.position.x=0,a.position.y=n/_*.1,a.position.z=0,a.updateMatrix(),a.matrixAutoUpdate=!1,a.visible=!1,t.add(a),e++}return console.log("makeGroup10k(): finished added meshes",{meshCount:e}),t}var A=R(),U=A,D=new C["F"],G=[new C["u"]({map:D.load(F+"textures/us_100_side.jpeg")}),new C["u"]({map:D.load(F+"textures/us_100_side.jpeg")}),new C["u"]({map:D.load(F+"textures/us_100.jpeg")}),new C["u"]({map:D.load(F+"textures/us_100_side.jpeg")}),new C["u"]({map:D.load(F+"textures/us_100_side.jpeg")}),new C["u"]({map:D.load(F+"textures/us_100_side.jpeg")})],W=[B.length,B.height,B.width],Y=W[0],H=W[1],Z=W[2];function J(){var t=new C["b"](Y,H,Z);t.translate(Y/2,0,-Z/2);var e=new C["t"](t,G),n=.05,a=Math.random()*n-n/2,r=Math.random()*n-n/2;return e.rotateY(a),e.rotateY(Math.PI),e.rotateX(r),e}function V(){var t=new C["l"];t.name="Group1M";for(var e=2,n=10,a=5,r=0,o=0;o<k;o+=y){var i=J(),s=o/y,l=Math.floor(s/a)%e*(-1-Y),u=5+Math.floor(s/(e*a))%n*(H+1),c=s%a*(1+Z);i.position.x=l,i.position.y=u,i.position.z=c,i.updateMatrix(),i.matrixAutoUpdate=!1,i.visible=!1,t.add(i),r++}return console.log("makeGroup1M(): finished added meshes",{meshCount:r}),t}var X=V(),q=X,N=(n("38cf"),new C["F"]),K=N.load(F+"textures/us_100.jpeg");K.wrapS=C["B"],K.wrapT=C["B"],K.repeat.set(2,5);var Q=N.load(F+"textures/us_100_side_2.jpeg");Q.wrapS=C["B"],Q.wrapT=C["B"],Q.repeat.set(2,8);var tt=[new C["u"]({map:Q}),new C["u"]({map:Q}),new C["u"]({map:K}),new C["u"]({map:Q}),new C["u"]({map:Q}),new C["u"]({map:Q})],et=2*B.length,nt=10*B.height,at=5*B.width;function rt(){var t=new C["b"](et,nt,at);t.translate(et/2,nt/2,-at/2);var e=new C["t"](t,tt);return e.rotateY(Math.PI),e}var ot=3,it=10,st=3;function lt(){var t=new C["l"];t.name="Group100M";for(var e=0,n=0;n<j;n+=k){var a=rt(),r=n/k,o=Math.floor(r/st)%ot*(-1-et),i=Math.floor(r/(ot*st))%it*(nt+1),s=r%st*(1+at);a.position.x=o,a.position.y=i,a.position.z=s,a.updateMatrix(),a.matrixAutoUpdate=!1,a.visible=!1,t.add(a),e++}return console.log("makeGroup100M(): finished added meshes",{meshCount:e}),t}var ut=lt(),ct=ut,dt=new C["F"],pt=dt.load(F+"textures/us_100.jpeg");pt.wrapS=C["B"],pt.wrapT=C["B"],pt.repeat.set(6,15);var ht=dt.load(F+"textures/us_100_side_2.jpeg");ht.wrapS=C["B"],ht.wrapT=C["B"],ht.repeat.set(10,50);var ft=[new C["u"]({map:ht}),new C["u"]({map:ht}),new C["u"]({map:pt}),new C["u"]({map:ht}),new C["u"]({map:ht}),new C["u"]({map:ht})],vt=2*B.length*3,mt=10*B.height*10,wt=5*B.width*3;function gt(){var t=new C["b"](vt,mt,wt);t.translate(vt/2,mt/2,-wt/2);var e=new C["t"](t,ft);return e.rotateY(Math.PI),e}var xt=new C["u"]({color:new C["d"](12294540)}),bt=100,Mt=100,Ct=100;function _t(){var t=new C["b"](80,Mt-20,80);t.translate(-vt/2,-Mt/2,wt/2);var e=new C["t"](t,xt);return e}function yt(){var t=new C["b"](vt,20,wt);t.translate(-vt/2,10-Mt,wt/2);var e=new C["t"](t,xt);return e}function kt(){var t=new C["l"];t.add(yt().translateY(Mt-20));for(var e=0;e<=vt;e+=(vt-80)/2)for(var n=0;n<=wt;n+=(wt-80)/2)t.add(_t().translateX(e-(vt-80)/2).translateZ(n-(wt-80)/2));return t}function jt(){var t=new C["l"];return t.add(gt()),t.add(kt()),t}var Pt=10,Lt=1,Bt=10;function Ft(){var t=new C["l"];t.name="Group100M";for(var e=0,n=0;n<P;n+=j){var a=jt(),r=n/j,o=Math.floor(r/Bt)%Pt*(-bt-vt),i=Math.floor(r/(Pt*Bt))%Lt*mt+Mt,s=r%Bt*(Ct+wt);a.position.x=o,a.position.y=i,a.position.z=s,a.updateMatrix(),a.matrixAutoUpdate=!1,a.visible=!1,t.add(a),e++}return console.log("makeGroup10B(): finished added meshes",{meshCount:e,group:t}),t}var Ot=Ft(),Tt=Ot,zt=[U,q,ct,Tt];function St(t){function e(t,e){console.log("showChildrenUntil",{g:t,name:t.name,showUntil:e}),t.children.map((function(t,n){return t.visible=n<e}))}function n(){zt.map((function(t){return e(t,0)}))}if(n(),t>j){var a=Math.round(t/j);e(Tt,a)}else if(t>k){var r=Math.round(t/k);e(ct,r)}else if(t>y){var o=Math.round(t/y);e(q,o)}else if(t>=_){var i=Math.round(t/_);e(U,i)}}var $t=n("4721"),Et=n("e642"),It=n("4086"),Rt={props:["value"],watch:{value:function(t,e){St(t)}},data:function(){return{camera:null,controls:null,scene:null,renderer:null,container:null}},methods:{init:function(){var t=document.getElementById("container-3d"),e=new C["J"]({antialias:!0});e.setPixelRatio(window.devicePixelRatio),e.setSize(t.clientWidth,t.clientHeight),t.appendChild(e.domElement);var n=new C["C"];n.background=new C["d"](16774072),n.fog=new C["j"](13421772,3e-4);var a=new C["x"](60,t.clientWidth/t.clientHeight,1,1e6);a.position.set(300,1200,-300),a.lookAt(new C["H"](0,0,0));var r=new $t["a"](a,e.domElement);r.enableKeys=!1,r.autoRotate=!0,r.enableDamping=!0,r.dampingFactor=.05,r.screenSpacePanning=!1,r.minDistance=10,r.maxDistance=1e6,r.maxPolarAngle=Math.PI/2,n.add.apply(n,Object(M["a"])(zt));var o=new C["f"](16777215);o.position.set(1,1,1),n.add(o);o=new C["f"](8840);o.position.set(-1,-1,-1),n.add(o);o=new C["a"](2236962);n.add(o),this.addPerson(n),window.addEventListener("resize",this.onWindowResize,!1),this.camera=a,this.controls=r,this.scene=n,this.renderer=e,this.container=t,St(this.value)},addPerson:function(t){var e=F+"models/newman/man2.obj",n=F+"models/newman/man2.obj.mtl",a=F+"models/newman/man2_dff.jpg";(new It["a"]).load(n,(function(n){n.preload(),(new Et["a"]).setMaterials(n).load(e,(function(e){e.scale.set(4,4,4),e.rotateY(C["s"].degToRad(60)),e.translateX(100),e.translateZ(-150);var n=(new C["F"]).load(a);e.traverse((function(t){t instanceof C["t"]&&(t.material.map=n)})),t.add(e)}))}))},onWindowResize:function(){this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)},animate:function(){requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init(),this.animate()}},At=Rt,Ut=(n("85c4"),Object(c["a"])(At,x,b,!1,null,"afb7df9a",null)),Dt=Ut.exports,Gt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-col items-center p-5"},[n("div",{staticClass:"flex flex-row items-center"},[n("a",{staticClass:"flex flex-row items-center opacity-50 hover-opacity",attrs:{href:"https://benwinding.com/projects",target:"_blank"}},[n("svg",{staticClass:"mr-2",attrs:{id:"i-link",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"16",height:"16",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14\n        24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15"}})]),n("span",{staticClass:"mr-2"},[t._v("Made by Ben Winding")]),n("img",{staticClass:"rounded-full",attrs:{width:"30",src:"https://benwinding.com/images/pic.jpg",alt:"benwinding logo"}})])]),n("div",{staticClass:"flex flex-row items-center"},[n("a",{staticClass:"flex flex-row items-center opacity-50 hover-opacity",attrs:{href:"https://github.com/benwinding/wealth-visualizer",target:"_blank"}},[n("svg",{staticClass:"mr-2",attrs:{id:"i-link",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32",width:"16",height:"16",fill:"none",stroke:"currentcolor","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2"}},[n("path",{attrs:{d:"M18 8 C18 8 24 2 27 5 30 8 29 12 24 16 19 20 16 21 14 17 M14 24 C14\n        24 8 30 5 27 2 24 3 20 8 16 13 12 16 11 18 15"}})]),n("span",{staticClass:"mr-2"},[t._v("Source code")]),n("svg",{attrs:{id:"i-github",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 64 64",width:"28",height:"28"}},[n("path",{attrs:{"stroke-width":"0",fill:"currentColor",d:"M32 0 C14 0 0 14 0 32 0 53 19 62 22 62 24 62 24 61 24 60 L24 55 C17\n        57 14 53 13 50 13 50 13 49 11 47 10 46 6 44 10 44 13 44 15 48 15 48 18\n        52 22 51 24 50 24 48 26 46 26 46 18 45 12 42 12 31 12 27 13 24 15 22\n        15 22 13 18 15 13 15 13 20 13 24 17 27 15 37 15 40 17 44 13 49 13 49\n        13 51 20 49 22 49 22 51 24 52 27 52 31 52 42 45 45 38 46 39 47 40 49\n        40 52 L40 60 C40 61 40 62 42 62 45 62 64 53 64 32 64 14 50 0 32 0 Z"}})]),n("img",{staticClass:"m-2",attrs:{width:"45",alt:"MIT logo",src:"https://i.imgur.com/z0VT0Qb.png"}})])])])},Wt=[],Yt={},Ht=Yt,Zt=Object(c["a"])(Ht,Gt,Wt,!1,null,null,null),Jt=Zt.exports,Vt=n("aa57"),Xt={name:"app",components:{"range-input":p,"select-input":g,"wealth-3d":Dt,"app-footer":Jt},data:function(){return{rangeModel:50,textModel:100,selectModel:"AUD",valueLog:0,currencies:["AUD","USD","NZD"],backgroundColorMap:Vt(["white","#e9f4e9","#bbf1bb"]),backgroundColor:"#ff0000"}},watch:{textModel:function(t){this.calculateFromText()}},computed:{valueLogFormatted:function(){return this.valueLog.toLocaleString()}},mounted:function(){this.calculateFromRange()},methods:{calculateFromRange:function(){this.valueLog=this.convertToLog(this.rangeModel),this.textModel=this.valueLog,this.setBackgroundColor()},calculateFromText:function(){this.valueLog=+this.textModel,this.rangeModel=this.convertFromLog(this.textModel),this.setBackgroundColor(),console.log("calculateFromText",{valueLog:this.valueLog,rangeModel:this.rangeModel})},calculateFromCurrency:function(){},setBackgroundColor:function(){var t=this.rangeModel;this.backgroundColor=this.backgroundColorMap(t/100)},convertFromLog:function(t){var e=+t,n=0,a=100,r=Math.log(100),o=Math.log(1e10),i=(o-r)/(a-n),s=(Math.log(e)-r)/i+n,l=+s;return l},convertToLog:function(t){var e=+t,n=0,a=100,r=Math.log(100),o=Math.log(1e10),i=(o-r)/(a-n),s=Math.exp(r+i*(e-n)),l=+s.toPrecision(1);return l}}},qt=Xt,Nt=(n("e88e"),Object(c["a"])(qt,r,o,!1,null,"8d684468",null)),Kt=Nt.exports;n("def6");a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(Kt)}}).$mount("#app")},"70c0":function(t,e,n){},"81f4":function(t,e,n){},"85c4":function(t,e,n){"use strict";var a=n("70c0"),r=n.n(a);r.a},a6a3:function(t,e,n){},def6:function(t,e,n){},e88e:function(t,e,n){"use strict";var a=n("81f4"),r=n.n(a);r.a}});
//# sourceMappingURL=app.94fc05fd.js.map