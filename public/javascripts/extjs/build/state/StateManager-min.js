/*
 * Ext JS Library 2.0 RC 1
 * Copyright(c) 2006-2007, Ext JS, LLC.
 * licensing@extjs.com
 * 
 * http://extjs.com/license
 */

Ext.state.Manager=function(){var A=new Ext.state.Provider();return{setProvider:function(B){A=B},get:function(C,B){return A.get(C,B)},set:function(B,C){A.set(B,C)},clear:function(B){A.clear(B)},getProvider:function(){return A}}}();