'use strict';

/**
 * recommended-project service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::recommended-project.recommended-project');
