/*!
 * Code Utils - (c) Keith Clark freely distributable under the terms of the MIT license.
 *
 * twitter.com/keithclarkcouk
 * www.keithclark.co.uk
 */
(function(l){function e(b){return"<span class="+b+">"}function f(){return"</span>"}function k(b,c){return e(b)+c+f()}var m=/&lt;(?:(\/?[a-z-:0-9]+|!doctype|!--)?)|(?:--)?&gt;|([a-z-:]+=)(("[^"]+")|('[^']+'))/gi,p=/((?:"(?:\\.|[^"\\])*")|(?:'(?:\\.|[^'\\])*'))|((?:\/\/[^\n]*)|(?:\/\*[^*]*\*+(?:[^\/][^*]*\*+)*\/))|\b(break|case|catch|continue|default|delete|do|else|finally|for|function|if|in|new|return|switch|throw|try|var|while|with)\b|(\/(?:\\[\/\\]|[^*\/])(?:\\.|[^\/\n\\])*\/(?!\/)[gim]*)|(true|false|[+-]?\.?\b(?:\d*\.)?\d+)|(&lt;|&gt;|&amp;|[-+*\/=\[\]{}(),&|!?:;<>%])|\b(([A-Z][a-z0-9_]*)(?=\.))/g,
q=/((?:"(?:\\.|[^"\\])*")|(?:'(?:\\.|[^'\\])*'))|((?:\b(?:red|orange|yellow|green|blue)\b)|(?:#[0-9a-f]{6}\b)|(?:#[0-9a-f]{3}\b)|(?:rgba?\(.*?\)))|([:;{}]|\/\*|\*\/|@media[^{]+{)/g;l.CodeUtils={colorMixed:function(b){var c=[];return CodeUtils.colorHTML(b.replace(/(&lt;(style|script)[\w\W]*?&gt;)([\w\W]*?)(&lt;\/\2&gt;)/g,function(d,a,b,g,e){"script"===b?c.push({type:"js",source:CodeUtils.colorJS(g)}):c.push({type:"css",source:CodeUtils.colorCSS(g)});return a+"\ufffe"+(c.length-1)+"\uffff"+e})).replace(/\ufffe(\d+)\uffff/g,
function(d,a){return"<code class="+c[a].type+">"+c[a].source+"</code>"})},colorHTML:function(b){var c=!1,d=!1;return b.replace(m,function(a,b,g,n){"!--"!=b||d?b&&!d?(c=!0,a=e("!"==b[0]?"dtd":"tag")+a):"&gt;"!=a||d?"--&gt;"==a&&d?(d=!1,a+=f()):g&&n&&c&&(a=k("attname",g)+k("attvalue",n)):(c=!1,a+=f()):(d=!0,a=e("comment")+a);return a})},colorJS:function(b){return b.replace(p,function(c,b,a,e,g,f,l,m){var h;b?h="string":a?h="comment":e?h="keyword":g?h="regex":m?h="obj":f?h="num":l&&(h="punc");return h?
k(h,c):c})},colorCSS:function(b){var c=!1,d=!1;return b.replace(q,function(a,b,g){c?"*/"==a&&(c=!1,a+=f()):g?a+="<span class='color' style='background:"+g+"''></span>":b?a=k("string",a):"/*"==a?(c=!0,a=e("comment")+a):"{"!=a||d?":"==a&&d?a=f()+a+e("value"):";"==a&&d?a=f()+a+e("property"):"}"==a&&d?(d=!1,a=f()+a):"@"==a.charAt(0)&&(a=e("atblock")+a.substring(0,a.length-1)+f()+"{"):(d=!0,a+=e("property"));return a})}}})(this);

(function(win) {
	var doc = win.document
	var ael = !!doc.addEventListener;
	var qsa = !!doc.querySelectorAll;

	var bind = (ael) ?
		function( ev, obj, handler ) {
			obj.addEventListener(ev, handler, false);
		}
	:
		function( ev, obj, handler ) {
			if (ev=="DOMContentLoaded") {
				ev = "load";
				obj = win;
			}
			obj.attachEvent("on"+ev, function(e) {
				e.target = e.srcElement;
				e.preventDefault = function() {
					this.returnValue = false;
				};
				return handler.call(e.target, e);
			});
		}

	var select = qsa ? 
		function(s) {
			return doc.querySelectorAll(s);
		}
	: (NW && NW.Dom) ?
		NW.Dom.select
	: null;

	bind("DOMContentLoaded", doc, function() {

		// syntax hilighting (for w3c compat browsers)
		if (ael) {
			var languages = {
				"html": CodeUtils.colorMixed,
				"php": CodeUtils.colorJS,
				"js": CodeUtils.colorJS,
				"css": CodeUtils.colorCSS
			}
			var codeBlocks = select("code[class]");
			for (var c=0; c<codeBlocks.length; c++) {
				var block = codeBlocks[c];
				var language = languages[block.className];
				if (language) {
					block.innerHTML = language(block.innerHTML);
				}
			}
		}
		
		// post comment form
		var commentForm = doc.getElementById("respond");
		var replyLinks = select("a[data-comment-id]");

		for (var c=0; c<replyLinks.length; c++) {
			bind("click", replyLinks[c], function(e) {
				addComment.moveForm("comment-"+this.getAttribute("data-comment-id"), this.getAttribute("data-comment-id")	, "respond", this.getAttribute("data-post-id"))
				var ip = e.target.parentNode;
				ip.parentNode.insertBefore(commentForm, ip.nextSibling);
				e.preventDefault();
				if (commentForm.scrollIntoView) {
					commentForm.scrollIntoView()
				}
				return false;
			}, false);
		}
	});

}(this))