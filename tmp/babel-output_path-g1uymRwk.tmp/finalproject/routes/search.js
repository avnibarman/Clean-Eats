define('finalproject/routes/search', ['exports', 'ember'], function (exports, _ember) {
   exports['default'] = _ember['default'].Route.extend({

      model: function model(params) {

         var url = 'https://api.nutritionix.com/v1_1/search/' + params.userSearch + '?results=0:20&fields=item_name,brand_name,item_id,nf_calories&appId=74327998&appKey=674d7a56170dd05aeba19fcaa0f672a3';

         return $.ajax({
            url: url,
            type: 'get',
            dataType: 'json'
         }).then(function (model) {

            return model.hits;
         });
      }

   });
});