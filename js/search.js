// build time:Thu Apr 23 2020 07:17:17 GMT+0800 (CST)
function initSearch(){var e=$("#keywords"),t=$("#back"),n=$("#search-container"),r=$("#search-result"),s=$("#search-tpl").html(),o="/content.json?v="+ +new Date,i;function a(e){if(!i){var t=new XMLHttpRequest;t.open("GET",o,true);t.onload=function(){if(this.status>=200&&this.status<300){var t=JSON.parse(this.response||this.responseText);i=t instanceof Array?t:t.posts;e(i)}else{console.error(this.statusText)}};t.onerror=function(){console.error(this.statusText)};t.send()}else{e(i)}}function c(e,t){return e.replace(/\{\w+\}/g,function(e){var n=e.replace(/\{|\}/g,"");return t[n]||""})}function u(e){var t="";if(e.length){t=e.map(function(e){return c(s,{title:e.title,url:window.mihoConfig.root+"/"+e.path})}).join("")}else{t='<li class="search-result-item-tips"><p>No Result found!</p></li>'}r.html(t);l(true)}function l(e){if(e){n.addClass("search-container-show")}else{n.removeClass("search-container-show")}}function f(e){var t=this.value.trim().toLowerCase();if(!t){l(false);return}a(function(e){var n=[];e.forEach(function(e){if(e.title.toLowerCase().indexOf(t)>-1||e.text.toLowerCase().indexOf(t)>-1){n.push(e)}});u(n)});e.preventDefault()}e.bind("input propertychange",f)}
//rebuild by neat 