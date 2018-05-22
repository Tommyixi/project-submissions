/*!
 * froala_editor v2.8.1 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2018 Froala Labs
 */


!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):"object"==typeof module&&module.exports?module.exports=function(e,o){return o===undefined&&(o="undefined"!=typeof window?require("jquery"):require("jquery")(e)),t(o)}:t(window.jQuery)}(function(g){g.extend(g.FE.POPUP_TEMPLATES,{emoticons:"[_BUTTONS_][_EMOTICONS_]"}),g.extend(g.FE.DEFAULTS,{emoticonsStep:8,emoticonsSet:[{code:"1f600",desc:"Grinning face"},{code:"1f601",desc:"Grinning face with smiling eyes"},{code:"1f602",desc:"Face with tears of joy"},{code:"1f603",desc:"Smiling face with open mouth"},{code:"1f604",desc:"Smiling face with open mouth and smiling eyes"},{code:"1f605",desc:"Smiling face with open mouth and cold sweat"},{code:"1f606",desc:"Smiling face with open mouth and tightly-closed eyes"},{code:"1f607",desc:"Smiling face with halo"},{code:"1f608",desc:"Smiling face with horns"},{code:"1f609",desc:"Winking face"},{code:"1f60a",desc:"Smiling face with smiling eyes"},{code:"1f60b",desc:"Face savoring delicious food"},{code:"1f60c",desc:"Relieved face"},{code:"1f60d",desc:"Smiling face with heart-shaped eyes"},{code:"1f60e",desc:"Smiling face with sunglasses"},{code:"1f60f",desc:"Smirking face"},{code:"1f610",desc:"Neutral face"},{code:"1f611",desc:"Expressionless face"},{code:"1f612",desc:"Unamused face"},{code:"1f613",desc:"Face with cold sweat"},{code:"1f614",desc:"Pensive face"},{code:"1f615",desc:"Confused face"},{code:"1f616",desc:"Confounded face"},{code:"1f617",desc:"Kissing face"},{code:"1f618",desc:"Face throwing a kiss"},{code:"1f619",desc:"Kissing face with smiling eyes"},{code:"1f61a",desc:"Kissing face with closed eyes"},{code:"1f61b",desc:"Face with stuck out tongue"},{code:"1f61c",desc:"Face with stuck out tongue and winking eye"},{code:"1f61d",desc:"Face with stuck out tongue and tightly-closed eyes"},{code:"1f61e",desc:"Disappointed face"},{code:"1f61f",desc:"Worried face"},{code:"1f620",desc:"Angry face"},{code:"1f621",desc:"Pouting face"},{code:"1f622",desc:"Crying face"},{code:"1f623",desc:"Persevering face"},{code:"1f624",desc:"Face with look of triumph"},{code:"1f625",desc:"Disappointed but relieved face"},{code:"1f626",desc:"Frowning face with open mouth"},{code:"1f627",desc:"Anguished face"},{code:"1f628",desc:"Fearful face"},{code:"1f629",desc:"Weary face"},{code:"1f62a",desc:"Sleepy face"},{code:"1f62b",desc:"Tired face"},{code:"1f62c",desc:"Grimacing face"},{code:"1f62d",desc:"Loudly crying face"},{code:"1f62e",desc:"Face with open mouth"},{code:"1f62f",desc:"Hushed face"},{code:"1f630",desc:"Face with open mouth and cold sweat"},{code:"1f631",desc:"Face screaming in fear"},{code:"1f632",desc:"Astonished face"},{code:"1f633",desc:"Flushed face"},{code:"1f634",desc:"Sleeping face"},{code:"1f635",desc:"Dizzy face"},{code:"1f636",desc:"Face without mouth"},{code:"1f637",desc:"Face with medical mask"}],emoticonsButtons:["emoticonsBack","|"],emoticonsUseImage:!0}),g.FE.PLUGINS.emoticons=function(E){function n(){if(!E.selection.isCollapsed())return!1;var e=E.selection.element(),o=E.selection.endElement();if(e&&E.node.hasClass(e,"fr-emoticon"))return e;if(o&&E.node.hasClass(o,"fr-emoticon"))return o;var t=E.selection.ranges(0),s=t.startContainer;if(s.nodeType==Node.ELEMENT_NODE&&0<s.childNodes.length&&0<t.startOffset){var n=s.childNodes[t.startOffset-1];if(E.node.hasClass(n,"fr-emoticon"))return n}return!1}return{_init:function(){var e=function(){for(var e=E.el.querySelectorAll(".fr-emoticon:not(.fr-deletable)"),o=0;o<e.length;o++)e[o].className+=" fr-deletable"};e(),E.events.on("html.set",e),E.events.on("keydown",function(e){if(E.keys.isCharacter(e.which)&&E.selection.inEditor()){var o=E.selection.ranges(0),t=n();E.node.hasClass(t,"fr-emoticon-img")&&t&&(0===o.startOffset&&E.selection.element()===t?g(t).before(g.FE.MARKERS+g.FE.INVISIBLE_SPACE):g(t).after(g.FE.INVISIBLE_SPACE+g.FE.MARKERS),E.selection.restore())}}),E.events.on("keyup",function(e){for(var o=E.el.querySelectorAll(".fr-emoticon"),t=0;t<o.length;t++)"undefined"!=typeof o[t].textContent&&0===o[t].textContent.replace(/\u200B/gi,"").length&&g(o[t]).remove();if(!(e.which>=g.FE.KEYCODE.ARROW_LEFT&&e.which<=g.FE.KEYCODE.ARROW_DOWN)){var s=n();E.node.hasClass(s,"fr-emoticon-img")&&(g(s).append(g.FE.MARKERS),E.selection.restore())}})},insert:function(e,o){var t=n(),s=E.selection.ranges(0);t?(0===s.startOffset&&E.selection.element()===t?g(t).before(g.FE.MARKERS+g.FE.INVISIBLE_SPACE):0<s.startOffset&&E.selection.element()===t&&s.commonAncestorContainer.parentNode.classList.contains("fr-emoticon")&&g(t).after(g.FE.INVISIBLE_SPACE+g.FE.MARKERS),E.selection.restore(),E.html.insert('<span class="fr-emoticon fr-deletable'+(o?" fr-emoticon-img":"")+'"'+(o?' style="background: url('+o+');"':"")+">"+(o?"&nbsp;":e)+"</span>&nbsp;"+g.FE.MARKERS,!0)):E.html.insert('<span class="fr-emoticon fr-deletable'+(o?" fr-emoticon-img":"")+'"'+(o?' style="background: url('+o+');"':"")+">"+(o?"&nbsp;":e)+"</span>&nbsp;",!0)},showEmoticonsPopup:function(){var e=E.$tb.find('.fr-command[data-cmd="emoticons"]'),o=E.popups.get("emoticons");if(o||(o=function(){var e="";E.opts.toolbarInline&&0<E.opts.emoticonsButtons.length&&(e='<div class="fr-buttons fr-emoticons-buttons">'+E.button.buildList(E.opts.emoticonsButtons)+"</div>");var h,o={buttons:e,emoticons:function(){for(var e='<div style="text-align: center">',o=0;o<E.opts.emoticonsSet.length;o++)0!==o&&o%E.opts.emoticonsStep==0&&(e+="<br>"),e+='<span class="fr-command fr-emoticon" tabIndex="-1" data-cmd="insertEmoticon" title="'+E.language.translate(E.opts.emoticonsSet[o].desc)+'" role="button" data-param1="'+E.opts.emoticonsSet[o].code+'">'+(E.opts.emoticonsUseImage?'<img src="https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/'+E.opts.emoticonsSet[o].code+'.svg"/>':"&#x"+E.opts.emoticonsSet[o].code+";")+'<span class="fr-sr-only">'+E.language.translate(E.opts.emoticonsSet[o].desc)+"&nbsp;&nbsp;&nbsp;</span></span>";return E.opts.emoticonsUseImage&&(e+='<p style="font-size: 12px; text-align: center; padding: 0 5px;">Emoji free by <a class="fr-link" tabIndex="-1" href="http://emojione.com/" target="_blank" rel="nofollow" role="link" aria-label="Open Emoji One website.">Emoji One</a></p>'),e+="</div>"}()},t=E.popups.create("emoticons",o);return E.tooltip.bind(t,".fr-emoticon"),h=t,E.events.on("popup.tab",function(e){var o=g(e.currentTarget);if(!E.popups.isVisible("emoticons")||!o.is("span, a"))return!0;var t,s,n,c=e.which;if(g.FE.KEYCODE.TAB==c){if(o.is("span.fr-emoticon")&&e.shiftKey||o.is("a")&&!e.shiftKey){var i=h.find(".fr-buttons");t=!E.accessibility.focusToolbar(i,!!e.shiftKey)}if(!1!==t){var a=h.find("span.fr-emoticon:focus:first, span.fr-emoticon:visible:first, a");o.is("span.fr-emoticon")&&(a=a.not("span.fr-emoticon:not(:focus)")),s=a.index(o),s=e.shiftKey?((s-1)%a.length+a.length)%a.length:(s+1)%a.length,n=a.get(s),E.events.disableBlur(),n.focus(),t=!1}}else if(g.FE.KEYCODE.ARROW_UP==c||g.FE.KEYCODE.ARROW_DOWN==c||g.FE.KEYCODE.ARROW_LEFT==c||g.FE.KEYCODE.ARROW_RIGHT==c){if(o.is("span.fr-emoticon")){var f=o.parent().find("span.fr-emoticon");s=f.index(o);var d=E.opts.emoticonsStep,r=Math.floor(f.length/d),l=s%d,m=Math.floor(s/d),u=m*d+l,p=r*d;g.FE.KEYCODE.ARROW_UP==c?u=((u-d)%p+p)%p:g.FE.KEYCODE.ARROW_DOWN==c?u=(u+d)%p:g.FE.KEYCODE.ARROW_LEFT==c?u=((u-1)%p+p)%p:g.FE.KEYCODE.ARROW_RIGHT==c&&(u=(u+1)%p),n=g(f.get(u)),E.events.disableBlur(),n.focus(),t=!1}}else g.FE.KEYCODE.ENTER==c&&(o.is("a")?o[0].click():E.button.exec(o),t=!1);return!1===t&&(e.preventDefault(),e.stopPropagation()),t},!0),t}()),!o.hasClass("fr-active")){E.popups.refresh("emoticons"),E.popups.setContainer("emoticons",E.$tb);var t=e.offset().left+e.outerWidth()/2,s=e.offset().top+(E.opts.toolbarBottom?10:e.outerHeight()-10);E.popups.show("emoticons",t,s,e.outerHeight())}},hideEmoticonsPopup:function(){E.popups.hide("emoticons")},back:function(){E.popups.hide("emoticons"),E.toolbar.showInline()}}},g.FE.DefineIcon("emoticons",{NAME:"smile-o",FA5NAME:"smile"}),g.FE.RegisterCommand("emoticons",{title:"Emoticons",undo:!1,focus:!0,refreshOnCallback:!1,popup:!0,callback:function(){this.popups.isVisible("emoticons")?(this.$el.find(".fr-marker").length&&(this.events.disableBlur(),this.selection.restore()),this.popups.hide("emoticons")):this.emoticons.showEmoticonsPopup()},plugin:"emoticons"}),g.FE.RegisterCommand("insertEmoticon",{callback:function(e,o){this.emoticons.insert("&#x"+o+";",this.opts.emoticonsUseImage?"https://cdnjs.cloudflare.com/ajax/libs/emojione/2.0.1/assets/svg/"+o+".svg":null),this.emoticons.hideEmoticonsPopup()}}),g.FE.DefineIcon("emoticonsBack",{NAME:"arrow-left"}),g.FE.RegisterCommand("emoticonsBack",{title:"Back",undo:!1,focus:!1,back:!0,refreshAfterCallback:!1,callback:function(){this.emoticons.back()}})});
