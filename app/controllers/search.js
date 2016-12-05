import Ember from 'ember';

var $ = Ember.$;

export default Ember.Controller.extend({

  actions: {
    postList(itemName) {
   //console.log(itemName);
   var promise = $.ajax({
     url: 'https://avni-clean-eats.herokuapp.com/api/favorites',
     type: "POST",
     data: {item: itemName},
     success: function(data) {
       console.log(data);
       controller.set('response', data);
     },
     dataType: 'json'
   });

   alert("You have added '" + itemName + "' to your grocery list!" );
 },

    selectPreference(preference) {

      this.set('preference', preference);
    },

    search() {

      var pref = this.get('preference');

      // if(pref == null){
      //   pref = "lowcalorie";
      // }
      // else{
      //   pref = this.get('preference');
      // }

      var url = 'https://api.nutritionix.com/v1_1/search';
      var data = {};

      if(pref == "lowcarb"){
        data = {
          "appId":"74327998",
          "appKey":"674d7a56170dd05aeba19fcaa0f672a3",
          "query": this.get("foodItem"),
          "fields":["item_name","brand_name","nf_serving_size_qty", "nf_calories", "nf_calories_from_fat", "nf_sugars", "nf_sodium", "nf_ingredient_statement","nf_total_carbohydrate", "nf_protein", "images_front_full_url"],
          "offset": 0,
          "limit":50,
          "sort":{
            "field":"nf_total_carbohydrate",
            "order":"asc"
          },
          "filters":{
            // "nf_total_carbohydrate":{
            //   "lte": 15
            // },
            "item_type":2
          }
        };
      }
      else if(pref == "highcarb"){
        data = {
          "appId":"74327998",
          "appKey":"674d7a56170dd05aeba19fcaa0f672a3",
          "query": this.get("foodItem"),
          "fields":["item_name","brand_name","nf_serving_size_qty", "nf_calories", "nf_calories_from_fat", "nf_sugars", "nf_sodium", "nf_ingredient_statement","nf_total_carbohydrate", "nf_protein"],
          "offset": 0,
          "limit":50,
          "sort":{
            "field":"nf_total_carbohydrate",
            "order":"desc"
          },
          "filters":{
            // "nf_total_carbohydrate":{
            //   "lte": 15
            // },
            "item_type":2
          }
        };
      }
      else if(pref == "lowcalorie"){
        data = {
          "appId":"74327998",
          "appKey":"674d7a56170dd05aeba19fcaa0f672a3",
          "query": this.get("foodItem"),
          "fields":["item_name","brand_name","nf_calories", "nf_calories_from_fat", "nf_sugars", "nf_sodium", "nf_serving_size_qty", "nf_ingredient_statement", "nf_total_carbohydrate", "nf_protein"],
          "offset": 0,
          "limit":50,
          "sort":{
            "field":"nf_calories",
            "order":"asc"
          },
          "filters":{
            // "nf_total_carbohydrate":{
            //   "lte": 15
            // },
            "item_type":2
          }
        };
      }
      else if (pref == "lowsugar"){

        data = {
          "appId":"74327998",
          "appKey":"674d7a56170dd05aeba19fcaa0f672a3",
          "query": this.get("foodItem"),
          "fields":["item_name","brand_name","nf_ingredient_statement","nf_serving_size_qty", "nf_sugars", "nf_sodium", "nf_calories", "nf_calories_from_fat", "nf_total_carbohydrate", "nf_protein"],
          "offset": 0,
          "limit":50,
          "sort":{
            "field":"nf_sugars",
            "order":"asc"
          },
          "filters":{
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
            "item_type":2
          }
        };
      }
      else if(pref == "lowsodium"){
        data = {
          "appId":"74327998",
          "appKey":"674d7a56170dd05aeba19fcaa0f672a3",
          "query": this.get("foodItem"),
          "fields":["item_name","brand_name","nf_ingredient_statement", "nf_calories", "nf_calories_from_fat", "nf_serving_size_qty", "nf_sugars", "nf_sodium", "nf_total_carbohydrate", "nf_protein"],
          "offset": 0,
          "limit":50,
          "sort":{
            "field":"nf_sodium",
            "order":"asc"
          },
          "filters":{
            // "nf_total_carbohydrate":{
            //   "lte": 15
            // },
            "item_type":2
          }
        };
      }
      else if (pref == "highprotein"){
        data = {
          "appId":"74327998",
          "appKey":"674d7a56170dd05aeba19fcaa0f672a3",
          "query": this.get("foodItem"),
          "fields":["item_name","brand_name","nf_calories", "nf_ingredient_statement", "nf_calories_from_fat","nf_serving_size_qty","nf_total_carbohydrate", "nf_sugars", "nf_protein", "nf_sodium"],
          "offset": 0,
          "limit":50,
          "sort":{
            "field":"nf_protein",
            "order":"desc"
          },
          "filters":{
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
            "item_type":2
          }
        };
      }

      var controller = this;

      var promise = $.ajax({
        url: url,
        type: "POST",
        data: data,
        success: function(data) {
          console.log(data);
          controller.set('response', data);
        },
        dataType: 'json'
      });
    }
  }
});
