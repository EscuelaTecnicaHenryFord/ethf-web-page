'use strict';

/**
 * showcase-post service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::showcase-post.showcase-post');
