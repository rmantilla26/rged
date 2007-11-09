/*
 * Ext JS Library 2.0 RC 1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.SplitButton=Ext.extend(Ext.Button,{arrowSelector:"button:last",initComponent:function(){Ext.SplitButton.superclass.initComponent.call(this);this.addEvents("arrowclick")},onRender:function(D,A){var B=new Ext.Template("<table cellspacing=\"0\" class=\"x-btn-menu-wrap x-btn\"><tr><td>","<table cellspacing=\"0\" class=\"x-btn-wrap x-btn-menu-text-wrap\"><tbody>","<tr><td class=\"x-btn-left\"><i>&#160;</i></td><td class=\"x-btn-center\"><button class=\"x-btn-text\" type=\"{1}\">{0}</button></td></tr>","</tbody></table></td><td>","<table cellspacing=\"0\" class=\"x-btn-wrap x-btn-menu-arrow-wrap\"><tbody>","<tr><td class=\"x-btn-center\"><button class=\"x-btn-menu-arrow-el\" type=\"button\">&#160;</button></td><td class=\"x-btn-right\"><i>&#160;</i></td></tr>","</tbody></table></td></tr></table>");var C,F=[this.text||"&#160;",this.type];if(A){C=B.insertBefore(A,F,true)}else{C=B.append(D,F,true)}var E=C.child(this.buttonSelector);this.initButtonEl(C,E);this.arrowBtnTable=C.child("table:last");if(this.arrowTooltip){C.child(this.arrowSelector).dom[this.tooltipType]=this.arrowTooltip}},autoWidth:function(){if(this.el){var C=this.el.child("table:first");var B=this.el.child("table:last");this.el.setWidth("auto");C.setWidth("auto");if(Ext.isIE7&&Ext.isStrict){var A=this.el.child(this.buttonSelector);if(A&&A.getWidth()>20){A.clip();A.setWidth(Ext.util.TextMetrics.measure(A,this.text).width+A.getFrameWidth("lr"))}}if(this.minWidth){if((C.getWidth()+B.getWidth())<this.minWidth){C.setWidth(this.minWidth-B.getWidth())}}this.el.setWidth(C.getWidth()+B.getWidth())}},setArrowHandler:function(B,A){this.arrowHandler=B;this.scope=A},onClick:function(A){A.preventDefault();if(!this.disabled){if(A.getTarget(".x-btn-menu-arrow-wrap")){if(this.menu&&!this.menu.isVisible()&&!this.ignoreNextClick){this.showMenu()}this.fireEvent("arrowclick",this,A);if(this.arrowHandler){this.arrowHandler.call(this.scope||this,this,A)}}else{if(this.enableToggle){this.toggle()}this.fireEvent("click",this,A);if(this.handler){this.handler.call(this.scope||this,this,A)}}}},getClickEl:function(B,A){if(!A){return(this.lastClickEl=B.getTarget("table",10,true))}return this.lastClickEl},onDisable:function(){if(this.el){if(!Ext.isIE6){this.el.addClass("x-item-disabled")}this.el.child(this.buttonSelector).dom.disabled=true;this.el.child(this.arrowSelector).dom.disabled=true}this.disabled=true},onEnable:function(){if(this.el){if(!Ext.isIE6){this.el.removeClass("x-item-disabled")}this.el.child(this.buttonSelector).dom.disabled=false;this.el.child(this.arrowSelector).dom.disabled=false}this.disabled=false},isMenuTriggerOver:function(A){return this.menu&&A.within(this.arrowBtnTable)&&!A.within(this.arrowBtnTable,true)},isMenuTriggerOut:function(B,A){return this.menu&&!B.within(this.arrowBtnTable)},onDestroy:function(){Ext.destroy(this.arrowBtnTable);Ext.SplitButton.superclass.onDestroy.call(this)}});Ext.MenuButton=Ext.SplitButton;Ext.reg("splitbutton",Ext.SplitButton);