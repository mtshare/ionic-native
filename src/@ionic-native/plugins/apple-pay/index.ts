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
	@Cordova()
	getAllowsApplePay(onSuccess?: Function, onFailure?: Function): Promise<any> { return; }

	/**
	* Manually hide any currently visible toast.
	* @returns {Promise<any>} Returns a Promise that resolves on success.
	*/
	@Cordova()
	setStripePublishableKey(publishableKey:string, onSuccess?: Function, onFailure?: Function): Promise<any> { return; }

	/**
	* Manually hide any currently visible toast.
	* @returns {Promise<any>} Returns a Promise that resolves on success.
	*/
	@Cordova()
	setMerchantId(merchantId:string, onSuccess?: Function, onFailure?: Function): Promise<any> { return; }

	/**
	* Manually hide any currently visible toast.
	* @returns {Promise<any>} Returns a Promise that resolves on success.
	*/
	@Cordova()
	getStripeToken(infos:any, onSuccess?: Function, onFailure?: Function): Promise<any> { return; }
}

