define('finalproject/controllers/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Controller.extend({

    actions: {
      selectPreference: function selectPreference(preference) {
        // console.log(preference);
        this.set('preference', preference);
      },

      search: function search() {
        var pref = this.get('preference');
        var url = 'https://api.nutritionix.com/v1_1/search';
        var data = {};

        if (pref == "lowcarb") {
          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_calories", "nf_serving_size_qty", "item_description", "nf_total_carbohydrate", "nf_sugars", "images_front_full_url"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_calories",
              "order": "asc"
            },
            "filters": {
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        } else if (pref == "lowsugar") {

          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_calories", "nf_serving_size_qty", "nf_total_carbohydrate", "nf_sugars"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_sugars",
              "order": "asc"
            },
            "filters": {
              // "nf_calories":{
              //   "lte": 200
              // },
              // "nf_total_fat":{
              //   "lte": 10
              // },
              // "nf_sugars":{
              //   "lte": 5
              // },
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        } else {
          data = {
            "appId": "74327998",
            "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
            "query": this.get("foodItem"),
            "fields": ["item_name", "brand_name", "nf_calories", "nf_serving_size_qty", "nf_total_carbohydrate", "nf_sugars"],
            "offset": 0,
            "limit": 50,
            "sort": {
              "field": "nf_protein",
              "order": "asc"
            },
            "filters": {
              // "nf_calories":{
              //   "lte": 200
              // },
              // "nf_total_fat":{
              //   "lte": 10
              // },
              // "nf_sugars":{
              //   "lte": 5
              // },
              // "nf_total_carbohydrate":{
              //   "lte": 15
              // },
              "item_type": 2
            }
          };
        }

        var controller = this;
        var promise = $.ajax({
          url: url,
          type: "POST",
          data: data,
          success: function success(data) {
            console.log(data);
            controller.set('response', data);
          },
          dataType: 'json'
        });
      }
    }
  });
});