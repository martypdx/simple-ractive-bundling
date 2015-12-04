(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('ractive')) :
	typeof define === 'function' && define.amd ? define(['ractive'], factory) :
	factory(global.Ractive);
}(this, function (Ractive) { 'use strict';

	Ractive = 'default' in Ractive ? Ractive['default'] : Ractive;

	var __options__ = {
		template: {v:3,t:[{p:[1,1,0],t:7,e:"li",f:[{t:2,r:"name",p:[1,5,4]}," the ",{t:2,r:"animal",p:[1,18,17]}]}]},
		css:"li{color:#4682b4}",
	};
	var component={};
	var __prop__;
	var __export__;
	component.exports = {
		onrender () {
			console.log('hello from pet onrendered!');
			someGlobal.sayHello();
		}
	};

	if ( typeof component.exports === "object" ) {
		for ( __prop__ in component.exports ) {
			if ( component.exports.hasOwnProperty(__prop__) ) {
				__options__[__prop__] = component.exports[__prop__];
			}
		}
	}

	__export__ = Ractive.extend( __options__ );

	var pet = __export__;

	var __options__$1 = {
		template: {v:3,t:[{p:[1,1,0],t:7,e:"ul",f:[{t:4,f:[{p:[3,2,22],t:7,e:"pet",a:{pet:[{t:2,r:".",p:[3,12,32]}]}}],n:52,r:"pets",p:[2,2,6]}]}]},
		css:"ul{list-style:none;font-family:sans-serif}",
	};
	var component$1={};
	var __prop__$1;
	var __export__$1;
	component$1.exports = {
		oninit () {
			this.observe('pets', function(pets){
				console.log('pets', pets);
			})
		}
	};

	if ( typeof component$1.exports === "object" ) {
		for ( __prop__$1 in component$1.exports ) {
			if ( component$1.exports.hasOwnProperty(__prop__$1) ) {
				__options__$1[__prop__$1] = component$1.exports[__prop__$1];
			}
		}
	}

	__export__$1 = Ractive.extend( __options__$1 );

	var pets = __export__$1;

	Ractive.components.pet = pet;

	Ractive.components.pets = pets;

}));