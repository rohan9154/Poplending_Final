/**
 * Copyright (c) 2014, 2016, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(["ojs/ojcore","jquery","ojs/ojdatasource-common","ojs/ojmodel"],function(a){a.Ff=function(g,b,c,d,e){a.o.bF(e);this.za=g;this.kb=b;this.Jp=c;this.Tw=d;this.Tf=e};o_("CollectionCellSet",a.Ff,a);a.Ff.prototype.tja=function(g){a.o.ZL(g);null!=g&&g.length===this.getCount("row")&&(this.Ww=g)};a.Ff.prototype.getData=function(a){var b,c;c=this.Tc(a);if(null==c)return null;b=this.Tf[a.column];a={};Object.defineProperty(a,"data",{get:function(){return c.get(b)},set:function(a){c.set(b,a,{silent:!0})}});
return a};a.b.g("CollectionCellSet.prototype.getData",{getData:a.Ff.prototype.getData});a.Ff.prototype.getMetadata=function(g){var b;b=this.Tc(g);return null==b?null:{keys:{row:a.su.Ry(b),column:this.Tf[g.column]}}};a.b.g("CollectionCellSet.prototype.getMetadata",{getMetadata:a.Ff.prototype.getMetadata});a.Ff.prototype.Tc=function(g){var b;if(null==this.Ww)return null;a.o.oi(g);b=g.row;g=g.column;a.o.assert(b>=this.za&&b<=this.kb&&g>=this.Jp&&g<=this.Tw);return this.Ww[b-this.za]};a.Ff.prototype.getCount=
function(a){return"row"===a?Math.max(0,this.kb-this.za):"column"===a?Math.max(0,this.Tw-this.Jp):0};a.b.g("CollectionCellSet.prototype.getCount",{getCount:a.Ff.prototype.getCount});a.Ff.prototype.yp=function(){return this.za};a.b.g("CollectionCellSet.prototype.getStartRow",{yp:a.Ff.prototype.yp});a.Ff.prototype.Vfa=function(){return this.kb};a.b.g("CollectionCellSet.prototype.getEndRow",{Vfa:a.Ff.prototype.Vfa});a.Ff.prototype.xp=function(){return this.Jp};a.b.g("CollectionCellSet.prototype.getStartColumn",
{xp:a.Ff.prototype.xp});a.Ff.prototype.Ufa=function(){return this.Tw};a.b.g("CollectionCellSet.prototype.getEndColumn",{Ufa:a.Ff.prototype.Ufa});a.Ff.prototype.Ct=function(){return this.Tf};a.b.g("CollectionCellSet.prototype.getColumns",{Ct:a.Ff.prototype.Ct});a.Ua=function(g,b){this.gb=g;null!=b&&(this.oG=b.rowHeader,this.columns=b.columns);this.Tca();a.Ua.u.constructor.call(this)};o_("CollectionDataGridDataSource",a.Ua,a);a.b.sa(a.Ua,a.Pr,"oj.CollectionDataGridDataSource");a.Ua.prototype.Init=function(){a.Ua.u.Init.call(this);
this.Dr={};this.qE()};a.b.g("CollectionDataGridDataSource.prototype.Init",{Init:a.Ua.prototype.Init});a.Ua.prototype.qE=function(){this.gb.on("add",this.Vwa.bind(this));this.gb.on("remove",this.Zwa.bind(this));this.gb.on("change",this.Wwa.bind(this));this.gb.on("refresh",this.Uva.bind(this));this.gb.on("reset",this.Vva.bind(this))};a.Ua.prototype.Mya=function(){return null!=this.data};a.Ua.prototype.getCount=function(a){var b;void 0==this.precision&&(this.precision={});if("row"==a){b=this.Pf();if(-1===
b||0===b&&(!this.Mya()||0<this.kt()))return this.precision[a]="estimate",-1;this.precision[a]="exact";return this.kt()}if("column"==a){if(null!=this.columns)return this.precision[a]="exact",this.columns.length;this.precision[a]="estimate";return-1}return 0};a.b.g("CollectionDataGridDataSource.prototype.getCount",{getCount:a.Ua.prototype.getCount});a.Ua.prototype.getCountPrecision=function(a){null!=this.precision&&null!=this.precision[a]||this.getCount(a);return this.precision[a]};a.b.g("CollectionDataGridDataSource.prototype.getCountPrecision",
{getCountPrecision:a.Ua.prototype.getCountPrecision});a.Ua.prototype.fetchHeaders=function(a,b,c){var d,e;null!=b&&(d=a.axis,e={},e.cha=a,e.callbacks=b,e.cF=c,this.Dr[d]=e)};a.b.g("CollectionDataGridDataSource.prototype.fetchHeaders",{fetchHeaders:a.Ua.prototype.fetchHeaders});a.Ua.prototype.Gwa=function(g,b,c,d){var e,f,h,k;e=g.axis;f=g.start;h=g.count;if("column"===e)null!=this.columns&&(d=Math.min(this.columns.length,f+h),k=new a.me(f,d,this.columns,void 0,this.DE));else if("row"===e&&null!=this.oG){null!=
d&&(h=d.count);d=Math.min(this.kt(),f+h);k=new a.me(f,d,this.columns,this.oG);this.aca(f,d,k,g,b,c);return}null!=b&&b.success&&b.success.call(c.success,k,g,null)};a.Ua.prototype.n8=function(a){var b,c,d,e,f,h;for(b=0;b<a.length;b+=1)c=a[b],"row"===c.axis?(d=c.start,e=c.count):"column"===c.axis&&(f=c.start,h=c.count);return{rowStart:d,rowCount:e,colStart:f,colCount:h}};a.Ua.prototype.Mva=function(g,b,c,d){var e,f,h;e=this.n8(g);f=e.rowStart;d=null!=d?Math.min(this.kt(),f+d.count):Math.min(this.kt(),
f+e.rowCount);h=e.colStart;e=Math.min(null==this.columns?0:this.columns.length,h+e.colCount);e=new a.Ff(f,d,h,e,this.columns);this.aca(f,d,e,g,b,c)};a.Ua.prototype.aca=function(a,b,c,d,e,f){var h;for(h=[];a<b;a++)h.push(this.gb.at(a,{deferred:!0}));Promise.all(h).then(function(a){c.tja(a);e.success.call(f.success,c,d)})};a.Ua.prototype.fetchCells=function(a,b,c){null!=b&&(this.Ci={},this.Ci.NX=a,this.Ci.callbacks=b,this.Ci.cF=c);this.jta(a)};a.b.g("CollectionDataGridDataSource.prototype.fetchCells",
{fetchCells:a.Ua.prototype.fetchCells});a.Ua.prototype.Yaa=function(a){var b,c,d,e,f;b=this.Dr[a];null!=b&&(c=b.cha,d=b.callbacks,e=b.cF,"row"===a&&(f=b.yX),this.Gwa(c,d,e,f),this.Dr[a]=null)};a.Ua.prototype.WAa=function(){this.Mva(this.Ci.NX,this.Ci.callbacks,this.Ci.cF,this.Ci.yX)};a.Ua.prototype.jta=function(a){var b,c;b=this.n8(a);c=b.rowStart;this.gb.pG(c,b.rowCount).then(function(b){this.data=!0;this.PCa(b.start,b.count);void 0===this.columns?this.gb.at(c,{deferred:!0}).then(function(b){null!=
b&&this.wW(b);this.D6(a)}.bind(this)):this.D6(a)}.bind(this),function(a){this.kta(a)}.bind(this))};a.Ua.prototype.kta=function(g){a.t.error(g);null!=this.Dr&&(this.Zaa("column",g),this.Zaa("row",g));null!=this.Ci&&this.XAa(g)};a.Ua.prototype.Zaa=function(a,b){var c,d,e;c=this.Dr[a];null!=c&&(d=c.callbacks,e=c.cF,c=c.cha,d.error&&d.error.call(e.error,b,c),this.Dr[a]=null)};a.Ua.prototype.XAa=function(a){var b,c,d;b=this.Ci.callbacks;c=this.Ci.cF;d=this.Ci.NX;b.error&&b.error.call(c.error,a,d);this.Ci=
null};a.Ua.prototype.D6=function(a){this.Ci.NX==a&&(null!=this.Dr&&(this.Yaa("column"),this.Yaa("row")),null!=this.Ci&&this.WAa())};a.Ua.prototype.PCa=function(a,b){var c={start:a,count:b};null!=this.Dr.row&&(this.Dr.row.yX=c);null!=this.Ci&&(this.Ci.yX=c)};a.Ua.prototype.wW=function(a){this.columns=a.keys();-1!=this.columns.indexOf(this.oG)&&this.columns.splice(this.columns.indexOf(this.oG),1)};a.Ua.prototype.keys=function(g){var b,c,d,e,f;b=g.row;c=g.column;f=this;return new Promise(function(g){f.gb.at(b,
{deferred:!0}).then(function(b){null==b?g({row:null,column:null}):(d=a.su.Ry(b),null==f.columns&&f.wW(b),e=f.columns[c],g({row:d,column:e}))}.bind(f))})};a.b.g("CollectionDataGridDataSource.prototype.keys",{keys:a.Ua.prototype.keys});a.Ua.prototype.indexes=function(a){var b,c,d,e;b=a.row;c=a.column;e=this;return new Promise(function(a){e.gb.indexOf(b,{deferred:!0}).then(function(b){-1===b?a({row:-1,column:-1}):null==e.columns?e.gb.at(b,{deferred:!0}).then(function(g){e.wW(g);d=e.columns.indexOf(c);
-1===d&&(b=-1);a({row:b,column:d})}.bind(e)):(d=e.columns.indexOf(c),-1===d&&(b=-1),a({row:b,column:d}))}.bind(e))})};a.b.g("CollectionDataGridDataSource.prototype.indexes",{indexes:a.Ua.prototype.indexes});a.Ua.prototype.getCapability=function(a){return"sort"===a?"column":"move"===a?"row":null};a.b.g("CollectionDataGridDataSource.prototype.getCapability",{getCapability:a.Ua.prototype.getCapability});a.Ua.prototype.sort=function(a,b,c){var d,e,f;null==c&&(c={});null==a?this.dW(b,c):(e=a.direction,
f=a.key,a=a.axis,"column"===a?(this.gb.Kb()?(this.gb.comparator=f,this.gb.sortDirection="ascending"===e?1:-1):("ascending"===e&&(d=function(a,b){var c,d;a=a.get(f);b=b.get(f);c=isNaN(a);d=isNaN(b);a instanceof Date&&(a=a.toISOString(),c=!0);b instanceof Date&&(b=b.toISOString(),d=!0);return c&&d?a<b?-1:a===b?0:1:c?1:d?-1:a-b}),"descending"===e&&(d=function(a,b){var c,d;a=a.get(f);b=b.get(f);c=isNaN(a);d=isNaN(b);a instanceof Date&&(a=a.toISOString());b instanceof Date&&(b=b.toISOString());return c&&
d?a>b?-1:a===b?0:1:c?-1:d?1:b-a}),this.gb.comparator=d),this.gb.sort(),this.Tca(f),null!=b&&null!=b.success&&b.success.call(c.success)):null!=b&&null!=b.error&&b.error.call(c.error,"Axis value not supported"))};a.b.g("CollectionDataGridDataSource.prototype.sort",{sort:a.Ua.prototype.sort});a.Ua.prototype.dW=function(a,b){this.gb.comparator=null;this.gb.reset();null!=a&&null!=a.success&&a.success.call(b.success)};a.Ua.prototype.Tca=function(a){var b,c;b=this.gb.comparator;c=-1===this.gb.sortDirection?
"descending":"ascending";null==a&&"function"===typeof b?this.DE={}:(this.DE={},this.DE.axis="column",this.DE.direction=c,this.DE.key=null==a?b:null)};a.Ua.prototype.move=function(a,b,c,d,e){var f;this.gb.get(a,{deferred:!0}).then(function(c){null==b?(this.gb.remove(c),this.gb.add(c),null!=d&&null!=d.success&&d.success.call(e.success)):(a===b?(f=this.gb.indexOf(b,{deferred:!0}),this.gb.remove(c)):(this.gb.remove(c),f=this.gb.indexOf(b,{deferred:!0})),f.then(function(a){this.gb.add(c,{at:a,ZMa:!0});
null!=d&&null!=d.success&&d.success.call(e.success)}.bind(this)))}.bind(this))};a.b.g("CollectionDataGridDataSource.prototype.move",{move:a.Ua.prototype.move});a.Ua.prototype.moveOK=function(){return"valid"};a.b.g("CollectionDataGridDataSource.prototype.moveOK",{moveOK:a.Ua.prototype.moveOK});a.Ua.prototype.Io=function(a,b,c,d,e){var f={source:this};f.operation=a;f.keys={row:b,column:c};f.indexes={row:d,column:e};return f};a.Ua.prototype.Vwa=function(g){this.handleEvent("change",this.Io("insert",
a.su.Ry(g),null,g.index,-1))};a.Ua.prototype.Zwa=function(g,b,c){this.handleEvent("change",this.Io("delete",a.su.Ry(g),null,c.index,-1))};a.Ua.prototype.Wwa=function(g){this.handleEvent("change",this.Io("update",a.su.Ry(g),null,g.index,-1))};a.Ua.prototype.Uva=function(){this.data=null;this.handleEvent("change",this.Io("refresh",null,null))};a.Ua.prototype.Vva=function(){this.data=null;this.handleEvent("change",this.Io("reset",null,null))};a.Ua.prototype.kt=function(){return this.gb.size()};a.Ua.prototype.Pf=
function(){return void 0===this.gb.totalResults?-1:this.gb.totalResults};a.Ua.prototype.Kfa=function(){return this.gb};a.b.g("CollectionDataGridDataSource.prototype.getCollection",{Kfa:a.Ua.prototype.Kfa});a.Ua.prototype.Ct=function(){return this.columns};a.b.g("CollectionDataGridDataSource.prototype.getColumns",{Ct:a.Ua.prototype.Ct});a.Ua.prototype.rF=function(){return this.oG};a.b.g("CollectionDataGridDataSource.prototype.getRowHeader",{rF:a.Ua.prototype.rF});a.Ua.prototype.getData=function(){return this.data};
a.b.g("CollectionDataGridDataSource.prototype.getData",{getData:a.Ua.prototype.getData});a.su=function(){};a.su.Ry=function(a){var b;b=a.Li();null==b&&(b=a.Bu());return b};a.me=function(g,b,c,d,e){a.o.bF(c);this.fd=g;this.rg=b;this.tN=c;this.oa=d;this.Rd=e};o_("CollectionHeaderSet",a.me,a);a.me.prototype.tja=function(g){a.o.ZL(g);null!=g&&g.length===this.getCount()&&(this.Ww=g)};a.me.prototype.getData=function(g,b){var c;a.o.assert(g<=this.rg&&g>=this.fd,"index out of bounds");a.o.assert(null==b||
0==b,"level out of bounds");if(null!=this.oa){if(null==this.Ww)return null;c=this.Ww[g-this.fd];return c.get(this.oa)}return this.tN[g]};a.b.g("CollectionHeaderSet.prototype.getData",{getData:a.me.prototype.getData});a.me.prototype.getMetadata=function(g,b){var c;a.o.assert(g<=this.rg&&g>=this.fd,"index out of bounds");a.o.assert(null==b||0==b,"level out of bounds");if(null!=this.oa){if(null==this.Ww)return null;c=this.Ww[g-this.fd];return{key:a.su.Ry(c)}}c=this.getData(g,b);return this.Rd.key===
c?{key:c,sortDirection:this.Rd.direction}:{key:c}};a.b.g("CollectionHeaderSet.prototype.getMetadata",{getMetadata:a.me.prototype.getMetadata});a.me.prototype.getLevelCount=function(){return 0<this.getCount()?1:0};a.b.g("CollectionHeaderSet.prototype.getLevelCount",{getLevelCount:a.me.prototype.getLevelCount});a.me.prototype.getExtent=function(g,b){a.o.assert(g<=this.rg&&g>=this.fd,"index out of bounds");a.o.assert(null==b||0==b,"level out of bounds");return{extent:1,more:{before:!1,after:!1}}};a.b.g("CollectionHeaderSet.prototype.getExtent",
{getExtent:a.me.prototype.getExtent});a.me.prototype.getDepth=function(g,b){a.o.assert(g<=this.rg&&g>=this.fd,"index out of bounds");a.o.assert(null==b||0==b,"level out of bounds");return 1};a.b.g("CollectionHeaderSet.prototype.getDepth",{getDepth:a.me.prototype.getDepth});a.me.prototype.getCount=function(){return Math.max(0,this.rg-this.fd)};a.b.g("CollectionHeaderSet.prototype.getCount",{getCount:a.me.prototype.getCount});a.me.prototype.getStart=function(){return this.fd};a.b.g("CollectionHeaderSet.prototype.getStart",
{getStart:a.me.prototype.getStart});a.me.prototype.Tfa=function(){return this.rg};a.b.g("CollectionHeaderSet.prototype.getEnd",{Tfa:a.me.prototype.Tfa});a.me.prototype.Zfa=function(){return this.tN};a.b.g("CollectionHeaderSet.prototype.getHeaders",{Zfa:a.me.prototype.Zfa});a.me.prototype.rF=function(){return this.oa};a.b.g("CollectionHeaderSet.prototype.getRowHeader",{rF:a.me.prototype.rF})});