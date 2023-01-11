/**
 *  shipping-rates-validator
 *
 * @copyright Copyright © 2020 HeadWayIt https://headwayit.com/ All rights reserved.
 * @author  Ilya Kushnir  ilya.kush@gmail.com
 */
define([
    'jquery',
    'mageUtils',
    'CoolRunner_Shipping/js/model/shipping-rates-validation-rules',
    'mage/translate'
], function ($, utils, validationRules, $t) {
    'use strict';

    return {
        validationErrors: [],

        /**
         * @param {Object} address
         * @return {Boolean}
         */
        validate: function (address) {
            let self = this;

            this.validationErrors = [];
            $.each(validationRules.getRules(), function (field, rule) {
                let message;
                if (rule.required && utils.isEmpty(address[field])) {
                    message = $t('Field ') + field + $t(' is required.');
                    self.validationErrors.push(message);
                }
            });
            return !this.validationErrors.length;
        }
    };
});
