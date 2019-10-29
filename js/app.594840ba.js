(function(e){function t(t){for(var n,i,s=t[0],l=t[1],u=t[2],d=0,p=[];d<s.length;d++)i=s[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);c&&c(t);while(p.length)p.shift()();return o.push.apply(o,u||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},r={app:0},o=[];function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var u=0;u<s.length;u++)t(s[u]);var c=l;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0ba3":function(e,t,a){"use strict";var n=a("a6a3"),r=a.n(n);r.a},"11cc":function(e,t,a){"use strict";var n=a("c0a3"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container mx-auto p-4"},[a("p",{staticClass:"text-3xl"},[e._v("Wealth Visualisation")]),a("p",{staticClass:"italic mb-4"},[e._v("Input your wealth to visualize it's physicality...")]),a("table",{staticClass:"table-fixed w-full"},[a("tbody",[a("tr",[a("td",{staticClass:"border px-4 py-2 w-1/4"},[e._v("Range Input")]),a("td",{staticClass:"border px-4 py-2"},[a("range-input",{on:{change:e.calculateFromRange},model:{value:e.rangeModel,callback:function(t){e.rangeModel=t},expression:"rangeModel"}})],1)]),a("tr",{staticClass:"bg-gray-100"},[a("td",{staticClass:"border px-4 py-2"},[e._v("Text Input")]),a("td",{staticClass:"border px-4 py-2"},[a("div",{staticClass:"flex flex-row items-center"},[a("span",{staticClass:"mr-1"},[e._v("$")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.textModel,expression:"textModel"}],staticClass:"w-full border border-blue-500 rounded",attrs:{type:"number"},domProps:{value:e.textModel},on:{input:function(t){t.target.composing||(e.textModel=t.target.value)}}})])])]),a("tr",{staticClass:"bg-gray-100"},[a("td",{staticClass:"border px-4 py-2"},[e._v("Currency")]),a("td",{staticClass:"border px-4 py-2"},[a("select-input",{attrs:{options:e.currencies},on:{change:e.calculateFromCurrency},model:{value:e.selectModel,callback:function(t){e.selectModel=t},expression:"selectModel"}})],1)]),a("tr",[a("td",{staticClass:"border px-4 py-2"},[e._v("Current Value")]),a("td",{staticClass:"border px-4 py-2"},[e._v("$"+e._s(e.valueLogFormatted))])])])]),a("div",{staticClass:"relative w-full"},[a("wealth-3d",{attrs:{value:e.valueLog}})],1)])},o=[],i=(a("542d"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-full"},[a("input",{staticClass:"w-full py-3",attrs:{id:"wealth_quantity",type:"range",min:"0",max:"100",step:"1"},domProps:{value:e.value},on:{input:function(t){return e.$emit("change",t.target.value)}}})])}),s=[],l={props:["value"],model:{prop:"value",event:"change"}},u=l,c=(a("0ba3"),a("2877")),d=Object(c["a"])(u,i,s,!1,null,null,null),p=d.exports,h=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"inline-block relative w-64"},[a("select",{staticClass:"block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline",domProps:{value:e.value},on:{input:function(t){return e.$emit("change",t.target.value)}}},e._l(e.options,(function(t){return a("option",{key:t},[e._v(e._s(t))])})),0),a("div",{staticClass:"pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"},[a("svg",{staticClass:"fill-current h-4 w-4",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20"}},[a("path",{attrs:{d:"M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"}})])])])},v=[],m={props:["options","value"],model:{prop:"value",event:"change"}},f=m,g=Object(c["a"])(f,h,v,!1,null,null,null),w=g.exports,M=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},x=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{attrs:{id:"container-3d"}})])}],b=(a("d81d"),a("284c")),_=a("5a89"),y=(a("b0c0"),100),j=1e4,C=1e6,B=1e8,L=1e10,P={length:108,width:45,height:7e-4},G={length:P.length,width:P.width,height:10*P.height*1e3},T=new _["TextureLoader"],k=new _["MeshBasicMaterial"]({map:T.load("/textures/us_100.jpeg")}),O=[P.length,P.height,P.width],F=O[0],R=O[1],S=O[2];function W(){var e=new _["BoxGeometry"](F,R,S);e.translate(F/2,0,-S/2);var t=new _["Mesh"](e,k),a=.05,n=Math.random()*a-a/2;return t.rotateY(n),t.rotateY(Math.PI),t}function z(){var e=new _["Group"];e.name="Group10k";for(var t=0,a=0;a<j;a+=y){var n=W();n.position.x=0,n.position.y=a/y*.1,n.position.z=0,n.updateMatrix(),n.matrixAutoUpdate=!1,n.visible=!1,e.add(n),t++}return console.log("makeGroup10k(): finished added meshes",{meshCount:t}),e}var A=z(),E=A,$=new _["TextureLoader"],D=[new _["MeshBasicMaterial"]({map:$.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:$.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:$.load("/textures/us_100.jpeg")}),new _["MeshBasicMaterial"]({map:$.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:$.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:$.load("/textures/us_100_side.jpeg")})],I=[G.length,G.height,G.width],U=I[0],Y=I[1],H=I[2];function V(){var e=new _["BoxGeometry"](U,Y,H);e.translate(U/2,0,-H/2);var t=new _["Mesh"](e,D),a=.05,n=Math.random()*a-a/2,r=Math.random()*a-a/2;return t.rotateY(n),t.rotateY(Math.PI),t.rotateX(r),t}function X(){var e=new _["Group"];e.name="Group1M";for(var t=2,a=10,n=5,r=0,o=0;o<C;o+=j){var i=V(),s=o/j,l=Math.floor(s/n)%t*(-1-U),u=5+Math.floor(s/(t*n))%a*(Y+1),c=s%n*(1+H);i.position.x=l,i.position.y=u,i.position.z=c,i.updateMatrix(),i.matrixAutoUpdate=!1,i.visible=!1,e.add(i),r++}return console.log("makeGroup1M(): finished added meshes",{meshCount:r}),e}var Z=X(),q=Z,J=(a("38cf"),new _["TextureLoader"]),N=J.load("/textures/us_100.jpeg");N.wrapS=_["RepeatWrapping"],N.wrapT=_["RepeatWrapping"],N.repeat.set(2,5);var K=[new _["MeshBasicMaterial"]({map:J.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:J.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:N}),new _["MeshBasicMaterial"]({map:J.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:J.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:J.load("/textures/us_100_side.jpeg")})],Q=2*G.length,ee=10*G.height,te=5*G.width;function ae(){var e=new _["BoxGeometry"](Q,ee,te);e.translate(Q/2,ee/2,-te/2);var t=new _["Mesh"](e,K);return t.rotateY(Math.PI),t}var ne=3,re=10,oe=3;function ie(){var e=new _["Group"];e.name="Group1M";for(var t=0,a=0;a<B;a+=C){var n=ae(),r=a/C,o=Math.floor(r/oe)%ne*(-1-Q),i=Math.floor(r/(ne*oe))%re*(ee+1),s=r%oe*(1+te);n.position.x=o,n.position.y=i,n.position.z=s,n.updateMatrix(),n.matrixAutoUpdate=!1,n.visible=!1,e.add(n),t++}return console.log("makeGroup100M(): finished added meshes",{meshCount:t}),e}var se=ie(),le=se,ue=new _["TextureLoader"],ce=ue.load("/textures/us_100.jpeg");ce.wrapS=_["RepeatWrapping"],ce.wrapT=_["RepeatWrapping"],ce.repeat.set(6,15);var de=[new _["MeshBasicMaterial"]({map:ue.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:ue.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:ce}),new _["MeshBasicMaterial"]({map:ue.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:ue.load("/textures/us_100_side.jpeg")}),new _["MeshBasicMaterial"]({map:ue.load("/textures/us_100_side.jpeg")})],pe=2*G.length*3,he=10*G.height*10,ve=5*G.width*3;function me(){var e=new _["BoxGeometry"](pe,he,ve);e.translate(pe/2,he/2,-ve/2);var t=new _["Mesh"](e,de);return t.rotateY(Math.PI),t}var fe=new _["MeshBasicMaterial"]({color:new _["Color"](12294540)}),ge=100,we=100,Me=100;function xe(){var e=new _["BoxGeometry"](80,we-20,80);e.translate(-pe/2,-we/2,ve/2);var t=new _["Mesh"](e,fe);return t}function be(){var e=new _["BoxGeometry"](pe,20,ve);e.translate(-pe/2,10-we,ve/2);var t=new _["Mesh"](e,fe);return t}function _e(){var e=new _["Group"];e.add(be().translateY(we-10));for(var t=0;t<=pe;t+=(pe-80)/2)for(var a=0;a<=ve;a+=(ve-80)/2)e.add(xe().translateX(t-(pe-80)/2).translateZ(a-(ve-80)/2));return e}function ye(){var e=new _["Group"];return e.add(me()),e.add(_e()),e}var je=10,Ce=1,Be=10;function Le(){var e=new _["Group"];e.name="Group100M";for(var t=0,a=0;a<L;a+=B){var n=ye(),r=a/B,o=Math.floor(r/Be)%je*(-ge-pe),i=Math.floor(r/(je*Be))%Ce*he+we,s=r%Be*(Me+ve);n.position.x=o,n.position.y=i,n.position.z=s,n.updateMatrix(),n.matrixAutoUpdate=!1,n.visible=!1,e.add(n),t++}return console.log("makeGroup10B(): finished added meshes",{meshCount:t,group:e}),e}var Pe=Le(),Ge=Pe,Te=[E,q,le,Ge];function ke(e){function t(e,t){console.log("showChildrenUntil",{g:e,name:e.name,showUntil:t}),e.children.map((function(e,a){return e.visible=a<t}))}function a(){Te.map((function(e){return t(e,0)}))}if(a(),e>B){var n=Math.round(e/B);t(Ge,n)}else if(e>C){var r=Math.round(e/C);t(le,r)}else if(e>j){var o=Math.round(e/j);t(q,o)}else if(e>=y){var i=Math.round(e/y);t(E,i)}}var Oe=a("6397"),Fe=a("e642"),Re=a("4086"),Se={props:["value"],watch:{value:function(e,t){ke(e)}},data:function(){return{camera:null,controls:null,scene:null,renderer:null,container:null}},methods:{init:function(){var e=document.getElementById("container-3d"),t=new _["WebGLRenderer"]({antialias:!0});t.setPixelRatio(window.devicePixelRatio),t.setSize(e.clientWidth,e.clientHeight),e.appendChild(t.domElement);var a=new _["Scene"];a.background=new _["Color"](16774072),a.fog=new _["FogExp2"](13421772,3e-4);var n=new _["PerspectiveCamera"](60,e.clientWidth/e.clientHeight,1,1e6);n.position.set(800,1e3,-800),n.lookAt(new _["Vector3"](0,0,0));var r=new Oe(n,t.domElement);r.enableKeys=!1,r.enableDamping=!0,r.dampingFactor=.05,r.screenSpacePanning=!1,r.minDistance=10,r.maxDistance=1e6,r.maxPolarAngle=Math.PI/2,a.add.apply(a,Object(b["a"])(Te));var o=new _["DirectionalLight"](16777215);o.position.set(1,1,1),a.add(o);o=new _["DirectionalLight"](8840);o.position.set(-1,-1,-1),a.add(o);o=new _["AmbientLight"](2236962);a.add(o);var i=new _["AxesHelper"](50);a.add(i),this.addPerson(a),window.addEventListener("resize",this.onWindowResize,!1),this.camera=n,this.controls=r,this.scene=a,this.renderer=t,this.container=e,ke(this.value)},addPerson:function(e){var t="/models/newman/man2.obj",a="/models/newman/man2.obj.mtl",n="/models/newman/man2_dff.jpg";(new Re["a"]).load(a,(function(a){a.preload(),(new Fe["a"]).setMaterials(a).load(t,(function(t){t.scale.set(4,4,4),t.rotateY(_["Math"].degToRad(60)),t.translateX(100),t.translateZ(-150);var a=(new _["TextureLoader"]).load(n);t.traverse((function(e){e instanceof _["Mesh"]&&(e.material.map=a)})),e.add(t)}))}))},onWindowResize:function(){this.camera.aspect=this.container.clientWidth/this.container.clientHeight,this.camera.updateProjectionMatrix(),this.renderer.setSize(this.container.clientWidth,this.container.clientHeight)},animate:function(){requestAnimationFrame(this.animate),this.controls.update(),this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init(),this.animate()}},We=Se,ze=(a("11cc"),Object(c["a"])(We,M,x,!1,null,"b3eeb340",null)),Ae=ze.exports,Ee={name:"app",components:{"range-input":p,"select-input":w,"wealth-3d":Ae},data:function(){return{rangeModel:30,textModel:100,selectModel:"AUD",valueLog:0,currencies:["AUD","USD","NZD"]}},watch:{textModel:function(e){this.calculateFromText()}},computed:{valueLogFormatted:function(){return this.valueLog.toLocaleString()}},mounted:function(){this.calculateFromRange()},methods:{calculateFromRange:function(){this.valueLog=this.convertToLog(this.rangeModel),this.textModel=this.valueLog},calculateFromText:function(){this.valueLog=+this.textModel,this.rangeModel=this.convertFromLog(this.textModel),console.log("calculateFromText",{valueLog:this.valueLog,rangeModel:this.rangeModel})},calculateFromCurrency:function(){},convertFromLog:function(e){var t=+e,a=0,n=100,r=Math.log(100),o=Math.log(1e14),i=(o-r)/(n-a),s=(Math.log(t)-r)/i+a,l=+s;return l},convertToLog:function(e){var t=+e,a=0,n=100,r=Math.log(100),o=Math.log(1e14),i=(o-r)/(n-a),s=Math.exp(r+i*(t-a)),l=+s.toPrecision(1);return l}}},$e=Ee,De=Object(c["a"])($e,r,o,!1,null,null,null),Ie=De.exports;a("def6");n["a"].config.productionTip=!1,new n["a"]({render:function(e){return e(Ie)}}).$mount("#app")},a6a3:function(e,t,a){},c0a3:function(e,t,a){},def6:function(e,t,a){}});
//# sourceMappingURL=app.594840ba.js.map