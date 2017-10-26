import { Cordova, Plugin, IonicNativePlugin } from '@ionic-native/core';
import { Injectable } from '@angular/core';

export interface ApplePayStripeOptions {
  /** Value of the transaction */
  amount: number;
  /** Description */
  description?: string;
  /** Currency like 'EUR', 'USD' */
  currency?: string;
}

/**
 * @name Apple Pay
 * @description
 *
 * @usage
 * ```typescript
 * import { ApplePay } from '@ionic-native/apple-pay';
 *
 *
 * constructor(private applePay: ApplePay) { }
 *
 * ...
 *
 *
 * ```
 */
@Plugin({
  pluginName: 'ApplePay',
  plugin: 'cordova-plugin-applepay',
  pluginRef: 'ApplePay',
  repo: 'https://github.com/mtshare/cordova-plugin-applepay.git',
  platforms: ['iOS']
})
@Injectable()
export class TextToSpeech extends IonicNativePlugin {

  /**
   * Check if Apple Pay is available
   * @return {Promise<any>} Returns a promise that resolves if Apple Pay is available
   */
  @Cordova()
  getAllowsApplePay(): Promise<any> { return; }

  /**
   * Stop any current TTS playback
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setStripePublishableKey(publishableKey: string): Promise<any> { return; }

  /**
   * Stop any current TTS playback
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  setMerchantId(merchantId: string): Promise<any> { return; }

  /**
   * Stop any current TTS playback
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2
  })
  getStripeToken(infos: object | ApplePayStripeOptions): Promise<any> { return; }

}
