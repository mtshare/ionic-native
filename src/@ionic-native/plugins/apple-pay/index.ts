import { Injectable } from '@angular/core';
import { Plugin, Cordova, CordovaProperty, CordovaInstance, InstanceProperty, IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs/Observable';

@Plugin({
	pluginName: 'ApplePay',
	plugin: 'cordova-plugin-applepay',
	pluginRef: 'ApplePay',
	repo: 'https://github.com/mtshare/cordova-plugin-applepay.git',
	platforms: ['iOS']
})

@Injectable()

export declare class ApplePay extends IonicNativePlugin {

	/**
	* Manually hide any currently visible toast.
	* @returns {Promise<any>} Returns a Promise that resolves on success.
	*/
	getAllowsApplePay(onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

	/**
	* Manually hide any currently visible toast.
	* @returns {Promise<any>} Returns a Promise that resolves on success.
	*/
	setStripePublishableKey(publishableKey:string, onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

	/**
	* Manually hide any currently visible toast.
	* @returns {Promise<any>} Returns a Promise that resolves on success.
	*/
	setMerchantId(merchantId:string, onSuccess?: Function, onFailure?: Function): Observable<any> { return; }

	/**
	* Manually hide any currently visible toast.
	* @returns {Promise<any>} Returns a Promise that resolves on success.
	*/
	getStripeToken(infos:any, onSuccess?: Function, onFailure?: Function): Observable<any> { return; }
}

