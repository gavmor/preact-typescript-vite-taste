(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}})();var T,d,X,A,R,O={},Y=[],ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function k(e,t){for(var n in t)e[n]=t[n];return e}function Z(e){var t=e.parentNode;t&&t.removeChild(e)}function $(e,t,n){var l,o,r,c={};for(r in t)r=="key"?l=t[r]:r=="ref"?o=t[r]:c[r]=t[r];if(arguments.length>2&&(c.children=arguments.length>3?T.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(r in e.defaultProps)c[r]===void 0&&(c[r]=e.defaultProps[r]);return C(e,c,l,o,null)}function C(e,t,n,l,o){var r={type:e,props:t,key:n,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:o??++X};return o==null&&d.vnode!=null&&d.vnode(r),r}function U(e){return e.children}function F(e,t){this.props=e,this.context=t}function x(e,t){if(t==null)return e.__?x(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?x(e):null}function ee(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return ee(e)}}function q(e){(!e.__d&&(e.__d=!0)&&A.push(e)&&!D.__r++||R!==d.debounceRendering)&&((R=d.debounceRendering)||setTimeout)(D)}function D(){for(var e;D.__r=A.length;)e=A.sort(function(t,n){return t.__v.__b-n.__v.__b}),A=[],e.some(function(t){var n,l,o,r,c,p;t.__d&&(c=(r=(n=t).__v).__e,(p=n.__P)&&(l=[],(o=k({},r)).__v=r.__v+1,B(p,r,o,n.__n,p.ownerSVGElement!==void 0,r.__h!=null?[c]:null,l,c??x(r),r.__h),_e(l,r),r.__e!=c&&ee(r)))})}function te(e,t,n,l,o,r,c,p,f,a){var _,h,s,i,u,S,y,v=l&&l.__k||Y,g=v.length;for(n.__k=[],_=0;_<t.length;_++)if((i=n.__k[_]=(i=t[_])==null||typeof i=="boolean"?null:typeof i=="string"||typeof i=="number"||typeof i=="bigint"?C(null,i,null,null,i):Array.isArray(i)?C(U,{children:i},null,null,null):i.__b>0?C(i.type,i.props,i.key,i.ref?i.ref:null,i.__v):i)!=null){if(i.__=n,i.__b=n.__b+1,(s=v[_])===null||s&&i.key==s.key&&i.type===s.type)v[_]=void 0;else for(h=0;h<g;h++){if((s=v[h])&&i.key==s.key&&i.type===s.type){v[h]=void 0;break}s=null}B(e,i,s=s||O,o,r,c,p,f,a),u=i.__e,(h=i.ref)&&s.ref!=h&&(y||(y=[]),s.ref&&y.push(s.ref,null,i),y.push(h,i.__c||u,i)),u!=null?(S==null&&(S=u),typeof i.type=="function"&&i.__k===s.__k?i.__d=f=ne(i,f,e):f=re(e,i,s,v,u,f),typeof n.type=="function"&&(n.__d=f)):f&&s.__e==f&&f.parentNode!=e&&(f=x(s))}for(n.__e=S,_=g;_--;)v[_]!=null&&(typeof n.type=="function"&&v[_].__e!=null&&v[_].__e==n.__d&&(n.__d=x(l,_+1)),le(v[_],v[_]));if(y)for(_=0;_<y.length;_++)oe(y[_],y[++_],y[++_])}function ne(e,t,n){for(var l,o=e.__k,r=0;o&&r<o.length;r++)(l=o[r])&&(l.__=e,t=typeof l.type=="function"?ne(l,t,n):re(n,l,l,o,l.__e,t));return t}function re(e,t,n,l,o,r){var c,p,f;if(t.__d!==void 0)c=t.__d,t.__d=void 0;else if(n==null||o!=r||o.parentNode==null)e:if(r==null||r.parentNode!==e)e.appendChild(o),c=null;else{for(p=r,f=0;(p=p.nextSibling)&&f<l.length;f+=2)if(p==o)break e;e.insertBefore(o,r),c=r}return c!==void 0?c:o.nextSibling}function ce(e,t,n,l,o){var r;for(r in n)r==="children"||r==="key"||r in t||M(e,r,null,n[r],l);for(r in t)o&&typeof t[r]!="function"||r==="children"||r==="key"||r==="value"||r==="checked"||n[r]===t[r]||M(e,r,t[r],n[r],l)}function G(e,t,n){t[0]==="-"?e.setProperty(t,n):e[t]=n==null?"":typeof n!="number"||ie.test(t)?n:n+"px"}function M(e,t,n,l,o){var r;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof l=="string"&&(e.style.cssText=l=""),l)for(t in l)n&&t in n||G(e.style,t,"");if(n)for(t in n)l&&n[t]===l[t]||G(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")r=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+r]=n,n?l||e.addEventListener(t,r?J:V,r):e.removeEventListener(t,r?J:V,r);else if(t!=="dangerouslySetInnerHTML"){if(o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n!=null&&(n!==!1||t[0]==="a"&&t[1]==="r")?e.setAttribute(t,n):e.removeAttribute(t))}}function V(e){this.l[e.type+!1](d.event?d.event(e):e)}function J(e){this.l[e.type+!0](d.event?d.event(e):e)}function B(e,t,n,l,o,r,c,p,f){var a,_,h,s,i,u,S,y,v,g,P,z,w,m=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(f=n.__h,p=t.__e=n.__e,t.__h=null,r=[p]),(a=d.__b)&&a(t);try{e:if(typeof m=="function"){if(y=t.props,v=(a=m.contextType)&&l[a.__c],g=a?v?v.props.value:a.__:l,n.__c?S=(_=t.__c=n.__c).__=_.__E:("prototype"in m&&m.prototype.render?t.__c=_=new m(y,g):(t.__c=_=new F(y,g),_.constructor=m,_.render=ue),v&&v.sub(_),_.props=y,_.state||(_.state={}),_.context=g,_.__n=l,h=_.__d=!0,_.__h=[]),_.__s==null&&(_.__s=_.state),m.getDerivedStateFromProps!=null&&(_.__s==_.state&&(_.__s=k({},_.__s)),k(_.__s,m.getDerivedStateFromProps(y,_.__s))),s=_.props,i=_.state,h)m.getDerivedStateFromProps==null&&_.componentWillMount!=null&&_.componentWillMount(),_.componentDidMount!=null&&_.__h.push(_.componentDidMount);else{if(m.getDerivedStateFromProps==null&&y!==s&&_.componentWillReceiveProps!=null&&_.componentWillReceiveProps(y,g),!_.__e&&_.shouldComponentUpdate!=null&&_.shouldComponentUpdate(y,_.__s,g)===!1||t.__v===n.__v){_.props=y,_.state=_.__s,t.__v!==n.__v&&(_.__d=!1),_.__v=t,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(E){E&&(E.__=t)}),_.__h.length&&c.push(_);break e}_.componentWillUpdate!=null&&_.componentWillUpdate(y,_.__s,g),_.componentDidUpdate!=null&&_.__h.push(function(){_.componentDidUpdate(s,i,u)})}if(_.context=g,_.props=y,_.__v=t,_.__P=e,P=d.__r,z=0,"prototype"in m&&m.prototype.render)_.state=_.__s,_.__d=!1,P&&P(t),a=_.render(_.props,_.state,_.context);else do _.__d=!1,P&&P(t),a=_.render(_.props,_.state,_.context),_.state=_.__s;while(_.__d&&++z<25);_.state=_.__s,_.getChildContext!=null&&(l=k(k({},l),_.getChildContext())),h||_.getSnapshotBeforeUpdate==null||(u=_.getSnapshotBeforeUpdate(s,i)),w=a!=null&&a.type===U&&a.key==null?a.props.children:a,te(e,Array.isArray(w)?w:[w],t,n,l,o,r,c,p,f),_.base=t.__e,t.__h=null,_.__h.length&&c.push(_),S&&(_.__E=_.__=null),_.__e=!1}else r==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=se(n.__e,t,n,l,o,r,c,f);(a=d.diffed)&&a(t)}catch(E){t.__v=null,(f||r!=null)&&(t.__e=p,t.__h=!!f,r[r.indexOf(p)]=null),d.__e(E,t,n)}}function _e(e,t){d.__c&&d.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(l){l.call(n)})}catch(l){d.__e(l,n.__v)}})}function se(e,t,n,l,o,r,c,p){var f,a,_,h=n.props,s=t.props,i=t.type,u=0;if(i==="svg"&&(o=!0),r!=null){for(;u<r.length;u++)if((f=r[u])&&"setAttribute"in f==!!i&&(i?f.localName===i:f.nodeType===3)){e=f,r[u]=null;break}}if(e==null){if(i===null)return document.createTextNode(s);e=o?document.createElementNS("http://www.w3.org/2000/svg",i):document.createElement(i,s.is&&s),r=null,p=!1}if(i===null)h===s||p&&e.data===s||(e.data=s);else{if(r=r&&T.call(e.childNodes),a=(h=n.props||O).dangerouslySetInnerHTML,_=s.dangerouslySetInnerHTML,!p){if(r!=null)for(h={},u=0;u<e.attributes.length;u++)h[e.attributes[u].name]=e.attributes[u].value;(_||a)&&(_&&(a&&_.__html==a.__html||_.__html===e.innerHTML)||(e.innerHTML=_&&_.__html||""))}if(ce(e,s,h,o,p),_)t.__k=[];else if(u=t.props.children,te(e,Array.isArray(u)?u:[u],t,n,l,o&&i!=="foreignObject",r,c,r?r[0]:n.__k&&x(n,0),p),r!=null)for(u=r.length;u--;)r[u]!=null&&Z(r[u]);p||("value"in s&&(u=s.value)!==void 0&&(u!==e.value||i==="progress"&&!u||i==="option"&&u!==h.value)&&M(e,"value",u,h.value,!1),"checked"in s&&(u=s.checked)!==void 0&&u!==e.checked&&M(e,"checked",u,h.checked,!1))}return e}function oe(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(l){d.__e(l,n)}}function le(e,t,n){var l,o;if(d.unmount&&d.unmount(e),(l=e.ref)&&(l.current&&l.current!==e.__e||oe(l,null,t)),(l=e.__c)!=null){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(r){d.__e(r,t)}l.base=l.__P=null,e.__c=void 0}if(l=e.__k)for(o=0;o<l.length;o++)l[o]&&le(l[o],t,typeof e.type!="function");n||e.__e==null||Z(e.__e),e.__=e.__e=e.__d=void 0}function ue(e,t,n){return this.constructor(e,n)}function fe(e,t,n){var l,o,r;d.__&&d.__(e,t),o=(l=typeof n=="function")?null:n&&n.__k||t.__k,r=[],B(t,e=(!l&&n||t).__k=$(U,null,[e]),o||O,O,t.ownerSVGElement!==void 0,!l&&n?[n]:o?null:t.firstChild?T.call(t.childNodes):null,r,!l&&n?n:o?o.__e:t.firstChild,l),_e(r,e)}T=Y.slice,d={__e:function(e,t,n,l){for(var o,r,c;t=t.__;)if((o=t.__c)&&!o.__)try{if((r=o.constructor)&&r.getDerivedStateFromError!=null&&(o.setState(r.getDerivedStateFromError(e)),c=o.__d),o.componentDidCatch!=null&&(o.componentDidCatch(e,l||{}),c=o.__d),c)return o.__E=o}catch(p){e=p}throw e}},X=0,F.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=k({},this.state),typeof e=="function"&&(e=e(k({},n),this.props)),e&&k(n,e),e!=null&&this.__v&&(t&&this.__h.push(t),q(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),q(this))},F.prototype.render=U,A=[],D.__r=0;const I=Symbol(),W=Symbol(),K=Symbol(),L=Symbol();function b(e,t){function n(...l){if(l.length>=e.length)return e(...l);{const o=(...r)=>n(...l,...r);return o[I]=e,o[W]=n,o[K]=l,o[L]=n[L],o}}return n[I]=e,n[W]=n,n[K]=[],n[L]=t||ae(e),n}function H(e){return e[I]}function pe(e){return e[W]}function j(e){return e[K]||[]}function ae(e){return e[L]||e.name}class de extends Error{constructor(t){super("Expectation failed"),this.expectArgs=t}}const he=b(function(e,t){return e(t)},"which"),N=b(function(e,t){var n,l;if(ye(e))return e(t);if(Array.isArray(e)&&Array.isArray(t))return e.length===t.length&&e.every((o,r)=>N(e[r],t[r]));if(e instanceof Function&&t instanceof Function)return H(e)&&H(e)===H(t)?N(j(e),j(t)):e===t;if(e instanceof Date&&t instanceof Date)return e.toISOString()===t.toISOString();if(e instanceof Set&&t instanceof Set)return e.size===t.size&&[...e.values()].every(o=>t.has(o));if(e instanceof Error&&t instanceof Error)return e.message===t.message&&e.__proto__.constructor===t.__proto__.constructor;if(Q(e)&&Q(t)){const o=Object.keys(e),r=Object.keys(t);return o.length===r.length&&o.every(c=>N(e[c],t[c]))&&((n=e.__proto__)==null?void 0:n.constructor)===((l=t.__proto__)==null?void 0:l.constructor)}return e===t},"equals");b(function(e,t){return e===t},"is");b(function(e,t,...n){return!e(t,...n)},"not");b(function(e){return/^\s*$/.test(e)},"isBlank");function Q(e){return!!e&&typeof e=="object"}function ye(e){return e instanceof Function&&pe(e)===he&&j(e).length===1}b(function(t,n){return n.slice(0,t.length)===t?n.slice(t.length):n});b(function(t,n){return n instanceof de&&N(t,n.expectArgs)});function ve(){return $("h1",null,"Hello from Preact!")}fe($(ve,null),document.getElementById("app"));
