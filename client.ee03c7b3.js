webpackJsonp([1],{113:function(t,e,n){t.exports=n(114)},114:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(115),s=n(119);n(298);i.a.config.productionTip=!1,e.default=new i.a({el:"#app",render:function(t){return t(s.a)}})},119:function(t,e,n){"use strict";function i(t){n(120)}var s=n(121),a=n(297),r=n(1),o=i,u=r(s.a,a.a,!1,o,null,null);e.a=u.exports},120:function(t,e){},121:function(t,e,n){"use strict";var i=n(122),s=n.n(i),a=n(55),r=n.n(a),o=n(125),u=(n.n(o),n(22)),c=n(13),l=n(129),h=n(278),f=n(281),d=n(292),p=n(294);e.a={name:"root",components:{Carousel:o.Carousel,Slide:o.Slide,Controls:h.a,Settings:f.a,Timer:l.a,About:d.a,Tabs:p.a},filters:{json:function(t){return JSON.stringify(t,null,2)}},data:function(){return{visible:!0,focus:u.d.load(),activeTab:0}},mounted:function(){var t=this;this.focus.start(),this.focus.on("finish",function(t){var e=t.type,n=t.duration;Object(c.f)("pomodoro."+e,{duration:r()(n)})}),this.focus.on("daily",function(){var e=t.focus.statistics();Object(c.f)("daily",Object.assign({},e,{time:r()(e.time)}))}),this.$watch("focus.state",function(){return t.focus.save()},{deep:!0}),s.a.change(function(e,n){t.visible="visible"===n,0!==t.activeTab&&t.focus.isActive&&t.$refs.carousel.goToPage(0)})},computed:{classes:function(){var t=this.focus,e=t.isShort,n=t.isLong;return{root:{"b-application--break":e||n,"b-application--short":e,"b-application--long":n}}}},methods:{handlePageChange:function(t){this.activeTab=t}}}},127:function(t,e,n){"use strict";function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return r});var s=n(56),a=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),r=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};i(this,t),this.state=Object(s.a)(t.state,e),this.time=Date.now(),this.tick()}return a(t,null,[{key:"state",get:function(){return{createdAt:Date.now(),duration:0,skipped:!1,type:null,pauses:[]}}}]),a(t,[{key:"tick",value:function(){this.finished||(this.time=Date.now())}},{key:"pause",value:function(){var t=this.state.pauses,e=t[t.length-1];void 0!==e&&null===e.end||t.push({start:this.time,end:null})}},{key:"unpause",value:function(){var t=this.state.pauses,e=t[t.length-1];if(void 0!==e&&null===e.end){var n=this.time;e.start===n?t.pop():e.end=n}}},{key:"pauses",get:function(){var t=this;return this.state.pauses.reduce(function(e,n){var i=new Date(n.start);return e+((null!==n.end?n.end:t.time)-i)},0)}},{key:"paused",get:function(){var t=this.state.pauses,e=t[t.length-1];return void 0!==e&&null===e.end}},{key:"createdAt",get:function(){return this.state.createdAt}},{key:"type",get:function(){return this.state.type}},{key:"duration",get:function(){return this.state.duration}},{key:"skipped",get:function(){return this.state.skipped}},{key:"interval",get:function(){return this.skipped?this.duration+1:this.time-(this.createdAt+this.pauses)}},{key:"elapsed",get:function(){var t=this.duration-this.interval;return t>0?t:0}},{key:"finished",get:function(){return this.skipped||this.elapsed<=0}}]),t}()},128:function(t,e,n){"use strict";var i=function(t,e){var n=new Notification(t,e);return n.onclick=function(){return window.focus()},n},s=null;try{navigator.serviceWorker.register("sw.js"),navigator.serviceWorker.ready.then(function(t){s=function(e,n){return t.showNotification(e,n)}})}catch(t){}var a=function(t,e){try{return i(t,e)}catch(t){}return s?s(t,e):alert(t)};e.a=a},129:function(t,e,n){"use strict";var i=n(130),s=n(277),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},13:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}n.d(e,"e",function(){return a}),n.d(e,"a",function(){return r}),n.d(e,"h",function(){return o}),n.d(e,"b",function(){return u}),n.d(e,"g",function(){return c}),n.d(e,"d",function(){return h}),n.d(e,"c",function(){return d}),n.d(e,"f",function(){return p});var s=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],a=function(t,e){var n={};return Object.keys(t).slice(0,e).forEach(function(e){n[e]=t[e]}),n},r=function(t){return[].concat(i(Array(t)))},o=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;return("0".repeat(e-1)+t).slice(-e)},u=function(t){t=new Date(t);var e=s[t.getMonth()];return t.getDate()+" "+e},c=function(){return u(new Date)},l=function(t){return 1e3*t},h=function(t){return t*l(60)},f=function(t){return t*h(60)},d=function(t){return t*f(24)},p=function(){if(window.yaCounter){var t;(t=window.yaCounter).reachGoal.apply(t,arguments)}}},130:function(t,e,n){"use strict";var i=n(22),s=n(131),a=n(134),r=n(207),o=n(210);e.a={name:"timer",components:{Process:a.a,Target:r.a,Clock:s.a,Heatmap:o.a},props:{focus:{type:i.d,required:!0}},data:function(){return{stats:[]}},mounted:function(){this.setStats(),this.focus.on("update",this.setStats)},methods:{setStats:function(){this.stats=JSON.parse(localStorage.getItem("statistics"))}}}},131:function(t,e,n){"use strict";var i=n(132),s=n(133),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},132:function(t,e,n){"use strict";var i=n(13);e.a={props:{elapsed:{type:Number,default:0},pauses:{type:Number,default:0},paused:{type:Boolean,default:!1}},filters:{zeroify:i.h},computed:{clock:function(){var t=Math.floor(this.elapsed/1e3),e=t%60;return{seconds:e,minutes:(t-e)/60}},pause:function(){var t=Math.floor(this.pauses/1e3),e=t%60;return{seconds:e,minutes:(t-e)/60}},pauseClock:function(){var t=this.pause.minutes,e=Object(i.h)(this.pause.seconds);return 0===t?e:t+":"+e},classes:function(){return{clock:{"b-clock":!0,"b-clock--paused":this.paused},minutes:{"b-clock__minutes":!0},seconds:{"b-clock__seconds":!0},pauses:{"b-clock__pauses":!0,"b-clock__pauses--hidden":0===this.pauses,"b-clock__pauses--small":0!==this.pause.minutes}}}}}},133:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.classes.clock},[n("div",{class:t.classes.minutes},[t._v(t._s(t._f("zeroify")(t.clock.minutes)))]),t._v(" "),n("div",{class:t.classes.seconds},[t._v(t._s(t._f("zeroify")(t.clock.seconds)))]),t._v(" "),n("div",{class:t.classes.pauses},[t._v(t._s(t.pauseClock))])])},s=[],a={render:i,staticRenderFns:s};e.a=a},134:function(t,e,n){"use strict";var i=n(135),s=n(206),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},135:function(t,e,n){"use strict";var i=n(57),s=n.n(i),a=n(2),r=n(5),o=n(71);e.a={name:"process",props:{value:{type:Number,required:!0},max:{type:Number,required:!0}},data:function(){return{width:500,height:500,weight:4}},created:function(){this.update=s()(this.update.bind(this),200)},mounted:function(){var t=this;this.arcTween=function(e){var n=Object(r.a)(this.$angle,e);return this.$angle=n(0),function(e){return t.arc(n(e))}},this.svg=Object(a.c)(this.$el),this.root=this.svg.append("g").attr("transform","translate("+this.width/2+", "+this.height/2+")"),this.pie=Object(o.b)().sort(null).value(function(t){return t}),this.arc=Object(o.a)().outerRadius(this.radius).innerRadius(this.radius-this.weight).padAngle(.03).cornerRadius(this.weight),this.root.selectAll("path").data(this.pie(this.values)).enter().append("path").attr("d",this.arc).classed("b-process__value",function(t){return 0===t.index}).classed("b-process__bar",function(t){return 0!==t.index}).each(function(t){this.$angle=t}),document.addEventListener("visibilitychange",this.update)},computed:{viewBox:function(){return"0 0 "+this.width+" "+this.height},radius:function(){return Math.min(this.width,this.height)/2},values:function(){return[this.value,this.max-this.value||1]}},watch:{values:function(){this.update()}},methods:{update:function(){this.root.selectAll("path").data(this.pie(this.values)).transition().duration(200).attrTween("d",this.arcTween).style("fill",function(t){return t.data.color})}}}},206:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{staticClass:"b-process",attrs:{viewBox:t.viewBox}})},s=[],a={render:i,staticRenderFns:s};e.a=a},207:function(t,e,n){"use strict";var i=n(208),s=n(209),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},208:function(t,e,n){"use strict";var i=n(57),s=n.n(i),a=n(2),r=n(5),o=n(71);e.a={name:"target",props:{goal:{type:Number,required:!0},completed:{type:Array,default:function(){return[]}}},data:function(){return{width:500,height:500,weight:4}},created:function(){this.update=s()(this.update.bind(this),500)},mounted:function(){var t=this;this.svg=Object(a.c)(this.$el),this.pie=Object(o.b)().sort(null).value(function(t){return t.value}),this.arcTween=function(e){var n=Object(r.a)(this.$angle,e);return this.$angle=n(0),function(e){return t.arc(n(e))}},this.root=this.svg.append("g").attr("transform","translate("+this.width/2+", "+this.height/2+")"),this.arc=Object(o.a)().outerRadius(this.radius).innerRadius(this.radius-this.weight).padAngle(.03).cornerRadius(this.weight),this.root.selectAll("path").data(this.pie(this.values)).enter().append("path").attr("d",this.arc).classed("b-target__item",!0).classed("b-target__item--finished",function(t){return t.data.finished}).classed("b-target__item--extra",function(t){return t.data.extra}).classed("b-target__item--skipped",function(t){return t.data.skipped}).each(function(t){this.$angle=t}),document.addEventListener("visibilitychange",this.update)},computed:{amount:function(){return this.completed.length},viewBox:function(){return"0 0 "+this.width+" "+this.height},radius:function(){return Math.min(this.width,this.height)/2},values:function(){var t=this,e=this.amount,n=this.completed,i=e>=this.goal?e+1:this.goal;return new Array(i).fill().map(function(i,s){var a=s<e;return{value:1,finished:a,extra:a&&s>=t.goal,skipped:!!n[s]&&n[s].skipped}})}},watch:{values:function(){this.update()}},methods:{update:function(){var t=this.root.selectAll("path").data(this.pie(this.values)).classed("b-target__item",!0).classed("b-target__item--finished",function(t){return t.data.finished}).classed("b-target__item--extra",function(t){return t.data.extra}).classed("b-target__item--skipped",function(t){return t.data.skipped}),e=t.enter().append("path").classed("b-target__item",!0).each(function(t){this.$angle=t});t.transition().duration(200).attrTween("d",this.arcTween),t.exit().remove(),e.transition().delay(200).duration(400).attrTween("d",this.arcTween)}}}},209:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("svg",{staticClass:"b-target",attrs:{viewBox:t.viewBox}})},s=[],a={render:i,staticRenderFns:s};e.a=a},210:function(t,e,n){"use strict";var i=n(211),s=n(276),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},211:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var s=n(2),a=n(212),r=n(55),o=n.n(r),u=n(13);e.a={name:"heatmap",props:{stats:{required:!0,default:function(){return{}}}},computed:{values:function(){var t=Date.now(),e=Object(u.a)(30).map(function(t,e){return e}),n=this.stats||{};return e.map(function(e){var i=Object(u.b)(t-Object(u.c)(e)),s=n[i]||{completed:0,time:0,target:0};return Object.assign({day:i},s)})},completedMax:function(){var t=this.values.map(function(t){return t.completed});return Math.max.apply(Math,i(t))},color:function(){return Object(a.a)().range(["#4c525f","#97ce28"]).domain([0,this.completedMax])}},mounted:function(){var t=this;this.heatmap=Object(s.c)(this.$el),this.heatmap.selectAll(".b-heatmap__box").data(this.values).enter().append("div").classed("b-heatmap__box",!0).style("background-color",function(e){return t.color(e.completed)}).append("div").classed("b-heatmap__title",!0).html(this.title)},watch:{values:function(){this.update()}},methods:{title:function(t){var e='\n        <div class="b-heatmap__day">'+t.day+"</div>\n      ";return 0!==t.completed&&(e+='\n          <div class="b-heatmap__pomodoros"><b>'+t.completed+"</b>/"+t.target+" pomidorus</div>\n        "),0!==t.time&&(e+='\n          <div class="b-heatmap__time">'+o()(t.time)+"</div>\n        "),e},update:function(){var t=this;this.heatmap.selectAll(".b-heatmap__box").data(this.values).style("background-color",function(e){return t.color(e.completed)}),this.heatmap.selectAll(".b-heatmap__title").data(this.values).html(this.title)}}}},22:function(t,e,n){"use strict";function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}n.d(e,"a",function(){return d}),n.d(e,"c",function(){return p}),n.d(e,"b",function(){return v}),n.d(e,"d",function(){return m});var r=n(56),o=n(126),u=n.n(o),c=n(13),l=n(127),h=n(128),f=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),d="DEFAULT",p="SHORT",v="LONG",m=function(){function t(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};a(this,t);var n=new u.a;this.state=Object(r.a)(t.state,e),this.pending=null,this.touched=!1,this.on=n.on,this.emit=n.emit,this.isEmpty||(this.state.items=this.items.map(function(t){return new l.a(t)}))}return f(t,null,[{key:"load",value:function(){return new this(JSON.parse(localStorage.getItem("state"))||{})}},{key:"state",get:function(){var t;return{items:[],options:{auto:!1,notifications:!1,target:10,longAfter:4,durations:(t={},s(t,d,Object(c.d)(25)),s(t,p,Object(c.d)(5)),s(t,v,Object(c.d)(15)),t)}}}}]),f(t,[{key:"start",value:function(){setInterval(this.tick.bind(this),1e3),this.touched=this.isActive}},{key:"tick",value:function(){if(this.items.forEach(function(t){return t.tick()}),this.isActive)return void this.emit("tick");this.isFinished&&this.touched&&null==this.pending&&(this.current.skipped||(this.emit("finish",this.current),this.notify()),this.pending=this.current,this.options.auto&&this.play())}},{key:"play",value:function(){if(!0!==this.isActive){var t=void 0,e=void 0;(this.isEmpty||this.isShort||this.isLong)&&(t=d,e=this.durations[d]),this.isWork&&(t=this.isTimeToLong?v:p,e=this.durations[t]),this.touched=!0,this.pending=null;var n=new l.a({type:t,duration:e});this.state.items=[].concat(i(this.state.items),[n])}}},{key:"pause",value:function(){this.current&&this.current.pause()}},{key:"unpause",value:function(){this.current&&this.current.unpause()}},{key:"stop",value:function(){this.isActive&&this.items.pop()}},{key:"reset",value:function(){this.state.items=[]}},{key:"skip",value:function(){this.isActive&&(this.current.state.skipped=!0)}},{key:"toJson",value:function(){var t=Object.assign({},this.state);return 0!==t.items.length&&(t.items=t.items.map(function(t){return Object.assign({},t.state)})),t}},{key:"statistics",value:function(){return{completed:this.completed.length,target:this.target,time:this.time}}},{key:"save",value:function(){var t=Object(c.g)(),e=this.toJson(),n=JSON.parse(localStorage.getItem("statistics"));n&&!n[t]?(this.emit("daily"),this.reset(),this.play()):n=Object.assign({},n),n[t]=Object(c.e)(this.statistics(),100),localStorage.setItem("state",JSON.stringify(e)),localStorage.setItem("statistics",JSON.stringify(n)),this.emit("update")}},{key:"notify",value:function(){if(this.options.notifications){var t=this.current.type,e="It's time to work",n=200;return t===d&&(e=this.isTimeToLong?"It's time to long break":"It's time to break",n=700),Object(h.a)(e,{icon:"android-chrome-192x192.png",vibrate:n})}}},{key:"items",get:function(){return this.state.items}},{key:"options",get:function(){return this.state.options}},{key:"target",get:function(){return this.options.target}},{key:"completed",get:function(){return this.items.filter(function(t){return t.type===d&&t.finished})}},{key:"time",get:function(){return this.completed.reduce(function(t,e){return t+e.duration},0)}},{key:"durations",get:function(){return this.options.durations}},{key:"longAfter",get:function(){return this.options.longAfter}},{key:"isTimeToLong",get:function(){return this.completed.length%this.longAfter==0}},{key:"elapsed",get:function(){return this.current?this.current.elapsed:0}},{key:"pauses",get:function(){return this.current?this.current.pauses:0}},{key:"interval",get:function(){return this.current?this.current.interval:0}},{key:"duration",get:function(){return this.current?this.current.duration:0}},{key:"current",get:function(){return this.items[this.items.length-1]}},{key:"isWork",get:function(){return this.current&&this.current.type===d}},{key:"isShort",get:function(){return this.current&&this.current.type===p}},{key:"isLong",get:function(){return this.current&&this.current.type===v}},{key:"isEmpty",get:function(){return 0===this.items.length}},{key:"isActive",get:function(){return this.current&&!this.current.finished}},{key:"isFinished",get:function(){return this.current&&this.current.finished}},{key:"isPaused",get:function(){return void 0!==this.current&&this.current.paused}}]),t}()},276:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"b-heatmap"})},s=[],a={render:i,staticRenderFns:s};e.a=a},277:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-timer"},[n("clock",{attrs:{elapsed:t.focus.elapsed,paused:t.focus.isPaused,pauses:t.focus.pauses}}),t._v(" "),n("process",{attrs:{value:t.focus.interval,max:t.focus.duration,"is-break":t.focus.isLong||t.focus.isShort}}),t._v(" "),n("heatmap",{attrs:{stats:t.stats}}),t._v(" "),n("target",{attrs:{goal:t.focus.target,completed:t.focus.completed}})],1)},s=[],a={render:i,staticRenderFns:s};e.a=a},278:function(t,e,n){"use strict";var i=n(279),s=n(280),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},279:function(t,e,n){"use strict";var i=n(22);e.a={props:{focus:{type:i.d,required:!0}},computed:{buttonText:function(){return this.focus.isActive&&!this.focus.isPaused?"Pause":this.focus.isPaused?"Resume":"Start"}},created:function(){this.hotkeys=this.hotkeys.bind(this)},mounted:function(){window.addEventListener("keyup",this.hotkeys)},destroyed:function(){window.removeEventListener("keyup",this.hotkeys)},methods:{buttonAction:function(){return this.focus.isActive&&!this.focus.isPaused?void this.focus.pause():this.focus.isPaused?void this.focus.unpause():void this.focus.play()},hotkeys:function(t){32===t.keyCode&&this.buttonAction()},stop:function(){confirm("Current timer will be stopped.")&&this.focus.stop()},skip:function(){confirm("Current timer will be skipped.")&&this.focus.skip()}}}},280:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-controls"},[n("div",{staticClass:"b-controls__body"},[n("a",{staticClass:"b-controls__action",on:{click:function(e){e.preventDefault(),t.skip(e)}}},[t._v("Skip")]),t._v(" "),n("button",{staticClass:"b-controls__button",on:{click:function(e){e.preventDefault(),t.buttonAction(e)}}},[t._v("\n      "+t._s(t.buttonText)+"\n    ")]),t._v(" "),n("a",{staticClass:"b-controls__action",on:{click:function(e){e.preventDefault(),t.stop(e)}}},[t._v("Stop")])])])},s=[],a={render:i,staticRenderFns:s};e.a=a},281:function(t,e,n){"use strict";var i=n(282),s=n(291),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},282:function(t,e,n){"use strict";var i=n(283),s=n(287),a=n.n(s),r=n(22),o=n(13),u=n(288);e.a={name:"settings",components:{SettingsField:u.a,Toggle:i.a,Slider:a.a},props:{focus:{type:r.d,required:!0}},data:function(){return{DEFAULT_TYPE:r.a,LONG_TYPE:r.b,SHORT_TYPE:r.c,notifications:{pending:!1,status:null}}},mounted:function(){document.addEventListener("transitionend",this.refresh,{passive:!0}),this.$watch("focus.options.notifications",this.notificationPerms),this.notifications.status=Notification.permission},destroyed:function(){document.removeEventListener("transitionend",this.refresh)},methods:{minutes:o.d,refresh:function(){this.$el.querySelectorAll(".vue-slider-component").forEach(function(t){t.__vue__&&t.__vue__.refresh()})},notificationPerms:function(t){var e=this;if(t&&!this.pending){this.notifications.pending=!0;var n=Notification.requestPermission();n.then(function(t){e.notifications.pending=!1,e.notifications.status=t}),n.catch(function(){alert(1)})}},restoreDefault:function(){confirm("Reset settings to default values?")&&(this.focus.state.options=r.d.state.options)},resetSession:function(){confirm("Today's completed pomodoros will be reset.")&&this.focus.reset()}}}},288:function(t,e,n){"use strict";var i=n(289),s=n(290),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},289:function(t,e,n){"use strict";e.a={name:"settings-field",props:{label:String},mounted:function(){var t=this.$refs.control;this.hasSlider()&&(t.addEventListener("mousedown",this.conceal),t.addEventListener("touchstart",this.conceal))},destroyed:function(){var t=this.$refs.control;t.addEventListener("mousedown",this.conceal),t.addEventListener("touchstart",this.conceal)},methods:{hasSlider:function(){return null!==this.$el.querySelector(".vue-slider-component")},conceal:function(t){t.stopPropagation()}}}},290:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-settings__field"},[n("div",{staticClass:"b-settings__label"},[t._v(t._s(t.label))]),t._v(" "),n("div",{ref:"control",staticClass:"b-settings__control"},[t._t("default")],2)])},s=[],a={render:i,staticRenderFns:s};e.a=a},291:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-settings"},[n("settings-field",{attrs:{label:"Daily target"}},[n("slider",{attrs:{min:0,max:50,interval:1,formatter:function(t){return t+" pomirorus"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.target,callback:function(e){t.$set(t.focus.options,"target",e)},expression:"focus.options.target"}})],1),t._v(" "),n("settings-field",{attrs:{label:"Work interval"}},[n("slider",{attrs:{min:t.minutes(1),max:t.minutes(60),interval:t.minutes(1),formatter:function(t){return t/1e3/60+" minutes"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.durations[t.DEFAULT_TYPE],callback:function(e){t.$set(t.focus.options.durations,t.DEFAULT_TYPE,e)},expression:"focus.options.durations[DEFAULT_TYPE]"}})],1),t._v(" "),n("settings-field",{attrs:{label:"Short break"}},[n("slider",{attrs:{min:t.minutes(1),max:t.minutes(60),interval:t.minutes(1),formatter:function(t){return t/1e3/60+" minutes"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.durations[t.SHORT_TYPE],callback:function(e){t.$set(t.focus.options.durations,t.SHORT_TYPE,e)},expression:"focus.options.durations[SHORT_TYPE]"}})],1),t._v(" "),n("settings-field",{attrs:{label:"Long break"}},[n("slider",{attrs:{min:t.minutes(1),max:t.minutes(60),interval:t.minutes(1),formatter:function(t){return t/1e3/60+" minutes"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.durations[t.LONG_TYPE],callback:function(e){t.$set(t.focus.options.durations,t.LONG_TYPE,e)},expression:"focus.options.durations[LONG_TYPE]"}})],1),t._v(" "),n("settings-field",{attrs:{label:"Long break after"}},[n("slider",{attrs:{min:0,max:50,interval:1,formatter:function(t){return t+" pomirorus"},height:3,"stop-propagation":!0,tooltip:"hover"},model:{value:t.focus.options.longAfter,callback:function(e){t.$set(t.focus.options,"longAfter",e)},expression:"focus.options.longAfter"}})],1),t._v(" "),n("settings-field",{attrs:{label:"Auto-start timer"}},[n("toggle",{attrs:{height:20,width:45,"css-colors":!0,sync:!0},model:{value:t.focus.options.auto,callback:function(e){t.$set(t.focus.options,"auto",e)},expression:"focus.options.auto"}})],1),t._v(" "),n("settings-field",{attrs:{label:"Notifications"}},[n("toggle",{attrs:{height:20,width:45,"css-colors":!0,sync:!0},model:{value:t.focus.options.notifications,callback:function(e){t.$set(t.focus.options,"notifications",e)},expression:"focus.options.notifications"}}),t._v(" "),"denied"===t.notifications.status?n("span",{staticClass:"b-settings__warning"},[t._v("\n      Permissions denied\n    ")]):"granted"!==t.notifications.status?n("span",{staticClass:"b-settings__warning"},[t._v("\n      Requires user permissions\n    ")]):t._e()],1),t._v(" "),n("div",{staticClass:"b-settings__buttons"},[n("button",{staticClass:"b-settings__button",on:{click:t.restoreDefault}},[t._v("Restore defaults")]),t._v(" "),n("button",{staticClass:"b-settings__button",on:{click:t.resetSession}},[t._v("Reset current session")])])],1)},s=[],a={render:i,staticRenderFns:s};e.a=a},292:function(t,e,n){"use strict";var i=n(293),s=n(1),a=s(null,i.a,!1,null,null,null);e.a=a.exports},293:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-about"},[t._m(0),t._v(" "),n("div",{staticClass:"b-about__title"},[t._v("Pomidorus")]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"b-about__links"},[n("a",{attrs:{href:"https://github.com/tatyshev/pomidorus",target:"_blank"}},[n("svg",{staticClass:"b-about__github",attrs:{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"}},[n("path",{attrs:{d:"M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"}})])])])])},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("a",{attrs:{href:"https://github.com/tatyshev/pomidorus",target:"_blank"}},[n("img",{staticClass:"b-about__image",attrs:{src:"android-chrome-192x192.png",width:"100",height:"100"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-about__desc"},[t._v("\n    Pomodoro time tracker build using Vue and D3"),n("br"),t._v("\n    Created with ❤️ by "),n("a",{attrs:{href:"https://twitter.com/tatysh3v"}},[t._v("@tatyshev")])])}],a={render:i,staticRenderFns:s};e.a=a},294:function(t,e,n){"use strict";var i=n(295),s=n(296),a=n(1),r=a(i.a,s.a,!1,null,null,null);e.a=r.exports},295:function(t,e,n){"use strict";e.a={name:"Tabs",props:["current"],methods:{active:function(t){return this.current===t?{"b-tabs__item--active":!0}:{}},goTo:function(t){this.$emit("go-to",t)}}}},296:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{staticClass:"b-tabs"},[n("li",{staticClass:"b-tabs__item",class:t.active(0),on:{click:function(e){t.goTo(0)}}},[t._v("Timer")]),t._v(" "),n("li",{staticClass:"b-tabs__item",class:t.active(1),on:{click:function(e){t.goTo(1)}}},[t._v("Settings")]),t._v(" "),n("li",{staticClass:"b-tabs__item",class:t.active(2),on:{click:function(e){t.goTo(2)}}},[t._v("About")])])},s=[],a={render:i,staticRenderFns:s};e.a=a},297:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"b-application",class:t.classes.root},[n("div",{staticClass:"b-application__middle"},[n("div",{staticClass:"b-application__header"},[n("tabs",{attrs:{current:t.activeTab},on:{"go-to":function(e){return t.$refs.carousel.goToPage(e)}}})],1),t._v(" "),n("div",{staticClass:"b-application__body"},[n("carousel",{ref:"carousel",staticClass:"b-application__sections",attrs:{perPage:1,paginationEnabled:!1,easing:"cubic-bezier(0.165, 0.84, 0.44, 1)"},on:{pageChange:t.handlePageChange}},[n("slide",{staticClass:"b-application__section"},[n("div",{staticClass:"b-application__wrapper b-application__wrapper--timer"},[t.visible?n("timer",{attrs:{focus:t.focus}}):t._e(),t._v(" "),t.visible?n("controls",{attrs:{focus:t.focus}}):t._e()],1)]),t._v(" "),n("slide",{staticClass:"b-application__section"},[n("div",{staticClass:"b-application__wrapper b-application__wrapper--settings"},[n("settings",{ref:"settings",attrs:{focus:t.focus}})],1)]),t._v(" "),n("slide",{staticClass:"b-application__section"},[n("div",{staticClass:"b-application__wrapper b-application__wrapper--about"},[n("about")],1)])],1)],1)])])},s=[],a={render:i,staticRenderFns:s};e.a=a}},[113]);