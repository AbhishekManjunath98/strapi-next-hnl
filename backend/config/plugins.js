"use strict";
module.exports = () => ({
  //   "location-plugin": {
	// 	enabled:  false,
	// },
  //   "location-field": {
	// 	enabled: true,
	// 	config: {
	// 		fields: ["photo", "rating"], // optional
	// 		// You need to enable "Autocomplete API" and "Places API" in your Google Cloud Console
	// 		googleMapsApiKey: "AIzaSyCLVG_eBiuKsXQuqmA0VgHdcXWK8KeGt1Y",
	// 		// See https://developers.google.com/maps/documentation/javascript/reference/places-autocomplete-service#AutocompletionRequest
	// 		autocompletionRequestOptions: {},
	// 	},
	// },
    "entity-relationship-chart": {
        enabled: true,
        config: {
          // By default all contentTypes and components are included.
          // To exlclude strapi's internal models, use:
          exclude: [
            "strapi::core-store",
            "webhook",
            "admin::permission",
            "admin::user",
            "admin::role",
            "admin::api-token",
            "plugin::upload.file",
            "plugin::i18n.locale",
            "plugin::users-permissions.permission",
            "plugin::users-permissions.role",
          ],
        },
      },    
});
