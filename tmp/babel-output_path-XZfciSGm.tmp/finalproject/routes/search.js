define('finalproject/routes/search', ['exports', 'ember'], function (exports, _ember) {
  exports['default'] = _ember['default'].Route.extend({

    model: function model(params) {

      var url = 'https://api.nutritionix.com/v1_1/search';
      var data = {
        "appId": "74327998",
        "appKey": "674d7a56170dd05aeba19fcaa0f672a3",
        "query": "Kashi",
        "fields": ["item_name", "brand_name", "nf_calories", "nf_serving_size_qty", "nf_serving_size_unit"],
        "sort": {
          "field": "_score",
          "order": "desc"
        },
        "filters": {
          "item_type": 2
        }
      };

      return $.ajax({
        type: "POST",
        url: url,
        data: data,
        success: function success(data) {
          console.log(data);
        },
        dataType: 'json'
      });
    }

  });
});