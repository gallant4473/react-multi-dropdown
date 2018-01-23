(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react')) :
	typeof define === 'function' && define.amd ? define(['react'], factory) :
	(global.ReactMultiDropdown = factory(global.React));
}(this, (function (React) { 'use strict';

var React__default = 'default' in React ? React['default'] : React;

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

var ReactMultiDropdown =
/*#__PURE__*/
function (_Component) {
  _inheritsLoose(ReactMultiDropdown, _Component);

  function ReactMultiDropdown() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = ReactMultiDropdown.prototype;

  _proto.render = function render() {
    return React__default.createElement("div", null, "hello there");
  };

  return ReactMultiDropdown;
}(React.Component);

return ReactMultiDropdown;

})));
