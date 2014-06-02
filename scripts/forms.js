/**
 * Get the value of a form element.
 */
var getValue = function (
  input
) {
  input = getElement(input);
  if (input) {
    var type = input.type[0];
    var value = input.value;
    var checked = input.checked;
    var options = input.options;
    if (isBoolean(checked)) {
      value = checked ? value : null;
    }
    else if (input.multiple) {
      value = [];
      forEach(options, function (option) {
        if (option.selected) {
          pushItem(value, option.value);
        }
      });
    }
    else if (type == 's') {
      value = options[input.selectedIndex].value;
    }
  }
  return value;
};

/**
 * Set the value of a form element.
 */
var setValue = function (
  input,
  value
) {
  input = getElement(input);
  if (input) {
    var type = input.type[0];
    if (type == 'c' || type == 'r') {
      input.checked = value ? true : false;
    }
    else if (type == 's') {
      var selected = {};
      if (input.multiple) {
        if (!isArray(value)) {
          value = splitByCommas(value);
        }
        forEach(value, function (val) {
          selected[val] = true;
        });
      }
      else {
        selected[value] = true;
      }
      value = isArray(value) ? value : [value];
      forEach(input.options, function (option) {
        option.selected = !!selected[option.value];
      });
    }
    else {
      input.value = value;
    }
  }
};
