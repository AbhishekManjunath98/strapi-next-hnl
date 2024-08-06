'use strict';

/**
 * segregation service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::segregation.segregation');
