var lastChangedElement;

onReady(function (readyElement) {
  all(readyElement, 'input,select,textarea', function (input) {
    input._ORIGINAL_VALUE = getValue(input);
  });
});

on('input,select,textarea', 'mouseup keyup change', function (input) {
  var isChanged = (getValue(input) != input._ORIGINAL_VALUE);
  input._CHANGED = isChanged;
  if (isChanged) {
    lastChangedElement = input;
  }
});
