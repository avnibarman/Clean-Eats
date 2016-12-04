define("finalproject/templates/search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 12,
              "column": 8
            },
            "end": {
              "line": 12,
              "column": 64
            }
          },
          "moduleName": "finalproject/templates/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Clean Eats");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child1 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 18,
              "column": 14
            },
            "end": {
              "line": 18,
              "column": 54
            }
          },
          "moduleName": "finalproject/templates/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("Your Grocery List");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child2 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 19,
              "column": 14
            },
            "end": {
              "line": 19,
              "column": 43
            }
          },
          "moduleName": "finalproject/templates/search.hbs"
        },
        isEmpty: false,
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("About");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() {
          return [];
        },
        statements: [],
        locals: [],
        templates: []
      };
    })();
    var child3 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 57,
              "column": 2
            },
            "end": {
              "line": 76,
              "column": 4
            }
          },
          "moduleName": "finalproject/templates/search.hbs"
        },
        isEmpty: false,
        arity: 1,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("br");
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          dom.setAttribute(el1, "style", "background-color: #e3e3e3; padding: 2.5%; border: 2px solid #419641;");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h3");
          var el3 = dom.createElement("b");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(", ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("em");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("h5");
          var el3 = dom.createTextNode("Ingredients: ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Calories:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Calories from Fat:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Total Carbohydrates:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Protein:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Sugars:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createTextNode("Sodium:");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("span");
          dom.setAttribute(el2, "style", "color: #419641;");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("form");
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment(" {{input type=\"text\" value=listItem}} ");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "text");
          dom.setAttribute(el3, "id", "listItem");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n      ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("input");
          dom.setAttribute(el3, "type", "submit");
          dom.setAttribute(el3, "value", "Add to Grocery List!");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n    ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [4]);
          var element1 = dom.childAt(element0, [1]);
          var element2 = dom.childAt(element0, [42]);
          var element3 = dom.childAt(element2, [3]);
          var element4 = dom.childAt(element2, [5]);
          var morphs = new Array(11);
          morphs[0] = dom.createMorphAt(dom.childAt(element1, [0]), 0, 0);
          morphs[1] = dom.createMorphAt(dom.childAt(element1, [2]), 0, 0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [3]), 1, 1);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [9]), 0, 0);
          morphs[4] = dom.createMorphAt(dom.childAt(element0, [15]), 0, 0);
          morphs[5] = dom.createMorphAt(dom.childAt(element0, [21]), 0, 0);
          morphs[6] = dom.createMorphAt(dom.childAt(element0, [27]), 0, 0);
          morphs[7] = dom.createMorphAt(dom.childAt(element0, [32]), 0, 0);
          morphs[8] = dom.createMorphAt(dom.childAt(element0, [37]), 0, 0);
          morphs[9] = dom.createAttrMorph(element3, 'value');
          morphs[10] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [["content", "item.fields.item_name", ["loc", [null, [60, 11], [60, 36]]], 0, 0, 0, 0], ["content", "item.fields.brand_name", ["loc", [null, [60, 46], [60, 72]]], 0, 0, 0, 0], ["content", "item.fields.nf_ingredient_statement", ["loc", [null, [61, 21], [61, 60]]], 0, 0, 0, 0], ["content", "item.fields.nf_calories", ["loc", [null, [62, 51], [62, 78]]], 0, 0, 0, 0], ["content", "item.fields.nf_calories_from_fat", ["loc", [null, [63, 60], [63, 96]]], 0, 0, 0, 0], ["content", "item.fields.nf_total_carbohydrate", ["loc", [null, [64, 62], [64, 99]]], 0, 0, 0, 0], ["content", "item.fields.nf_protein", ["loc", [null, [65, 50], [65, 76]]], 0, 0, 0, 0], ["content", "item.fields.nf_sugars", ["loc", [null, [66, 49], [66, 74]]], 0, 0, 0, 0], ["content", "item.fields.nf_sodium", ["loc", [null, [67, 49], [67, 74]]], 0, 0, 0, 0], ["attribute", "value", ["get", "item.fields.item_name", ["loc", [null, [71, 47], [71, 68]]], 0, 0, 0, 0], 0, 0, 0, 0], ["element", "action", ["postList"], [], ["loc", [null, [72, 56], [72, 77]]], 0, 0]],
        locals: ["item"],
        templates: []
      };
    })();
    return {
      meta: {
        "revision": "Ember@2.8.2",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 80,
            "column": 0
          }
        },
        "moduleName": "finalproject/templates/search.hbs"
      },
      isEmpty: false,
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1, "style", "padding-top: 70px;");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("nav");
        dom.setAttribute(el2, "class", "navbar navbar-inverse navbar-fixed-top");
        dom.setAttribute(el2, "role", "navigation");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3, "class", "container");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Brand and toggle get grouped for better mobile display ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "navbar-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5, "type", "button");
        dom.setAttribute(el5, "class", "navbar-toggle");
        dom.setAttribute(el5, "data-toggle", "collapse");
        dom.setAttribute(el5, "data-target", "#bs-example-navbar-collapse-1");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "sr-only");
        var el7 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("span");
        dom.setAttribute(el6, "class", "icon-bar");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment(" <a class=\"navbar-brand\" href=\"#\">Clean Eats</a> ");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" Collect the nav links, forms, and other content for toggling ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4, "class", "collapse navbar-collapse");
        dom.setAttribute(el4, "id", "bs-example-navbar-collapse-1");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("ul");
        dom.setAttribute(el5, "class", "nav navbar-nav");
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n          ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("li");
        var el7 = dom.createComment("");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n        ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment(" /.navbar-collapse ");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.container ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" <div>\n  <form>\n  {{input type=\"text\" value=listItem}}\n  <input type=\"submit\" {{action \"postList\"}}/>\n</form>\n</div> ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" Page Content ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2, "class", "container");
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("form");
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h1");
        var el5 = dom.createTextNode("What do you want to eat?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode(" ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createTextNode("(i.e. fish, candy, oatmeal)");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createComment("");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h2");
        var el5 = dom.createTextNode("Diet Preferences?");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "lowcarb");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  Low Carb");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "highcarb");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  High Carb");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "highprotein");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  High Protein");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "lowcalorie");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  Low Calorie");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "lowsugar");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  Low Sugar");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("h4");
        var el5 = dom.createElement("input");
        dom.setAttribute(el5, "type", "radio");
        dom.setAttribute(el5, "name", "diet");
        dom.setAttribute(el5, "value", "lowsodium");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("  Low Sodium");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("input");
        dom.setAttribute(el4, "type", "submit");
        dom.setAttribute(el4, "class", "btn btn-success");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("br");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n\n  ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("br");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element5 = dom.childAt(fragment, [0]);
        var element6 = dom.childAt(element5, [1, 1]);
        var element7 = dom.childAt(element6, [7, 1]);
        var element8 = dom.childAt(element5, [7]);
        var element9 = dom.childAt(element8, [1]);
        var element10 = dom.childAt(element9, [11, 0]);
        var element11 = dom.childAt(element9, [13, 0]);
        var element12 = dom.childAt(element9, [15, 0]);
        var element13 = dom.childAt(element9, [17, 0]);
        var element14 = dom.childAt(element9, [19, 0]);
        var element15 = dom.childAt(element9, [21, 0]);
        var element16 = dom.childAt(element9, [25]);
        var morphs = new Array(12);
        morphs[0] = dom.createMorphAt(dom.childAt(element6, [3]), 3, 3);
        morphs[1] = dom.createMorphAt(dom.childAt(element7, [1]), 0, 0);
        morphs[2] = dom.createMorphAt(dom.childAt(element7, [3]), 0, 0);
        morphs[3] = dom.createMorphAt(element9, 5, 5);
        morphs[4] = dom.createAttrMorph(element10, 'onclick');
        morphs[5] = dom.createAttrMorph(element11, 'onclick');
        morphs[6] = dom.createAttrMorph(element12, 'onclick');
        morphs[7] = dom.createAttrMorph(element13, 'onclick');
        morphs[8] = dom.createAttrMorph(element14, 'onclick');
        morphs[9] = dom.createAttrMorph(element15, 'onclick');
        morphs[10] = dom.createElementMorph(element16);
        morphs[11] = dom.createMorphAt(element8, 5, 5);
        return morphs;
      },
      statements: [["block", "link-to", ["search"], ["class", "navbar-brand"], 0, null, ["loc", [null, [12, 8], [12, 64]]]], ["block", "link-to", ["list"], [], 1, null, ["loc", [null, [18, 14], [18, 54]]]], ["block", "link-to", ["about"], [], 2, null, ["loc", [null, [19, 14], [19, 43]]]], ["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "foodItem", ["loc", [null, [38, 30], [38, 38]]], 0, 0, 0, 0]], [], [], 0, 0], "class", "searchbar"], ["loc", [null, [38, 4], [38, 58]]], 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowcarb"], [], ["loc", [null, [null, null], [43, 103]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "highcarb"], [], ["loc", [null, [null, null], [44, 105]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "highprotein"], [], ["loc", [null, [null, null], [45, 111]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowcalorie"], [], ["loc", [null, [null, null], [46, 109]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowsugar"], [], ["loc", [null, [null, null], [47, 105]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowsodium"], [], ["loc", [null, [null, null], [48, 107]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["search"], [], ["loc", [null, [50, 49], [50, 68]]], 0, 0], ["block", "each", [["get", "response.hits", ["loc", [null, [57, 10], [57, 23]]], 0, 0, 0, 0]], [], 3, null, ["loc", [null, [57, 2], [76, 13]]]]],
      locals: [],
      templates: [child0, child1, child2, child3]
    };
  })());
});