define("finalproject/templates/search", ["exports"], function (exports) {
  exports["default"] = Ember.HTMLBars.template((function () {
    var child0 = (function () {
      return {
        meta: {
          "revision": "Ember@2.8.2",
          "loc": {
            "source": null,
            "start": {
              "line": 41,
              "column": 0
            },
            "end": {
              "line": 50,
              "column": 0
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
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("div");
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("b");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" - ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment(" Calories: {{item.fields.nf_calories}} <br>\n  Calories from Fat: {{item.fields.nf_calories_from_fat}} <br> ");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n  ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("br");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var morphs = new Array(2);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]), 0, 0);
          morphs[1] = dom.createMorphAt(element0, 3, 3);
          return morphs;
        },
        statements: [["content", "item.fields.brand_name", ["loc", [null, [44, 5], [44, 31]]], 0, 0, 0, 0], ["content", "item.fields.item_name", ["loc", [null, [44, 38], [44, 63]]], 0, 0, 0, 0]],
        locals: ["item"],
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
              "line": 50,
              "column": 0
            },
            "end": {
              "line": 52,
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
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("p");
          var el2 = dom.createTextNode("No results");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
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
            "line": 55,
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
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" <nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <button type=\"button\" class=\"navbar-toggle collapsed\"\n      data-toggle=\"collapse\" data-target=\"#menu-collapse\">\n        <span class=\"sr-only\">Toggle navigation</span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n        <span class=\"icon-bar\"></span>\n      </button> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n      ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" {{ link-to 'Home' 'index' class=\"navbar-brand\" }} ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n    ");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" </div>\n\n    <div class=\"collapse navbar-collapse\" id=\"menu-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li>{{ link-to 'About' 'about' }}</li>\n        <li>{{ link-to 'Contact' 'contact' }}</li>\n      </ul>\n    </div>\n  </div>\n</nav> ");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("h1");
        var el2 = dom.createTextNode("Search");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        var el2 = dom.createTextNode("\nWhat do you want to eat? (i.e. fish, chocolate, ) \n");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\nDiet Preferences?");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "radio");
        dom.setAttribute(el2, "name", "diet");
        dom.setAttribute(el2, "value", "lowcarb");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Low Carb");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "radio");
        dom.setAttribute(el2, "name", "diet");
        dom.setAttribute(el2, "value", "highprotein");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("High Protein");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "radio");
        dom.setAttribute(el2, "name", "diet");
        dom.setAttribute(el2, "value", "lowsugar");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("Low Sugar");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("br");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("input");
        dom.setAttribute(el2, "type", "submit");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element1 = dom.childAt(fragment, [9]);
        var element2 = dom.childAt(element1, [8]);
        var element3 = dom.childAt(element1, [12]);
        var element4 = dom.childAt(element1, [16]);
        var element5 = dom.childAt(element1, [22]);
        var morphs = new Array(8);
        morphs[0] = dom.createMorphAt(element1, 1, 1);
        morphs[1] = dom.createAttrMorph(element2, 'onclick');
        morphs[2] = dom.createAttrMorph(element3, 'onclick');
        morphs[3] = dom.createAttrMorph(element4, 'onclick');
        morphs[4] = dom.createElementMorph(element5);
        morphs[5] = dom.createMorphAt(fragment, 11, 11, contextualElement);
        morphs[6] = dom.createMorphAt(fragment, 13, 13, contextualElement);
        morphs[7] = dom.createMorphAt(fragment, 15, 15, contextualElement);
        return morphs;
      },
      statements: [["inline", "input", [], ["type", "text", "value", ["subexpr", "@mut", [["get", "foodItem", ["loc", [null, [28, 26], [28, 34]]], 0, 0, 0, 0]], [], [], 0, 0]], ["loc", [null, [28, 0], [28, 36]]], 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowcarb"], [], ["loc", [null, [null, null], [31, 95]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "highprotein"], [], ["loc", [null, [null, null], [32, 103]]], 0, 0], 0, 0, 0, 0], ["attribute", "onclick", ["subexpr", "action", ["selectPreference", "lowsugar"], [], ["loc", [null, [null, null], [33, 97]]], 0, 0], 0, 0, 0, 0], ["element", "action", ["search"], [], ["loc", [null, [35, 21], [35, 40]]], 0, 0], ["inline", "log", [["get", "response", ["loc", [null, [39, 6], [39, 14]]], 0, 0, 0, 0]], [], ["loc", [null, [39, 0], [39, 16]]], 0, 0], ["block", "each", [["get", "response.hits", ["loc", [null, [41, 8], [41, 21]]], 0, 0, 0, 0]], [], 0, 1, ["loc", [null, [41, 0], [52, 9]]]], ["content", "outlet", ["loc", [null, [54, 0], [54, 10]]], 0, 0, 0, 0]],
      locals: [],
      templates: [child0, child1]
    };
  })());
});