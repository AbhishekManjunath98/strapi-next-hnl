'use strict';

/**
 * top-builder service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::top-builder.top-builder');
