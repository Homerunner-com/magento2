/**
 *  cr_gls
 *
 * @copyright Copyright © 2020 HeadWayIt https://headwayit.com/ All rights reserved.
 * @author  Ilya Kushnir  ilya.kush@gmail.com
 */
define([
    'uiComponent',
    'Magento_Checkout/js/model/shipping-rates-validator',
    'Magento_Checkout/js/model/shipping-rates-validation-rules',
    'CoolRunner_Shipping/js/model/shipping-rates-validator',
    'CoolRunner_Shipping/js/model/shipping-rates-validation-rules'
], function (
    Component,
    defaultShippingRatesValidator,
    defaultShippingRatesValidationRules,
    coolRunnerShippingRatesValidator,
    coolRunnerShippingRatesValidationRules
) {
    'use strict';
    defaultShippingRatesValidator.registerValidator('coolrunnergls', coolRunnerShippingRatesValidator);
    defaultShippingRatesValidationRules.registerRules('coolrunnergls', coolRunnerShippingRatesValidationRules);
    return Component;
});
