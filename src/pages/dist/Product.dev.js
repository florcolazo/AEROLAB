"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _getHash = _interopRequireDefault(require("../utils/getHash"));

var _getData = _interopRequireDefault(require("../utils/getData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var Product = function Product(products) {
  var id, product, view;
  return regeneratorRuntime.async(function Product$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          id = (0, _getHash["default"])();
          _context.next = 3;
          return regeneratorRuntime.awrap((0, _getData["default"])(id));

        case 3:
          product = _context.sent;
          view = "\n    <div class=\"Product-inner\">\n      <article class=\"Product-card\">\n        <img src=\"".concat(product.img, "\" alt=\"").concat(product.img, "\">\n        <h2>").concat(product.name, "</h2> \n      </article>\n      <article class=\"Product-card\">\n        // <h3>Episodes: <span>").concat(product.episode.length, "</span></h3>  \n        // <h3>Status: <span>").concat(character.status, "</span></h3>\n        // <h3>Species: <span>").concat(character.species, "</span></h3>\n        // <h3>Gender: <span>").concat(character.gender, "</span></h3>\n        // <h3>Origin: <span>").concat(character.origin.name, "</span></h3>\n        // <h3>Last Location: ").concat(character.location.name, "</h3>\n      </article>\n    </div>\n  ");
          return _context.abrupt("return", view);

        case 6:
        case "end":
          return _context.stop();
      }
    }
  });
};

var _default = Product;
exports["default"] = _default;