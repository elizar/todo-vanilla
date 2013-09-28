(function() {

  'use strict';

  function init() {
    // Start everything here...
    var form = document.getElementById('form'),
        input = form.querySelector('#todo'),
        list = document.getElementById('todo-lists');

    form.onsubmit = function(e) {

      e.preventDefault();
      // TODO: add new tod
      var newTodo = input.value.trim();
      var li = document.createElement('li');
          li.innerText = newTodo;
      list.appendChild(li);
      input.value = '';
      input.focus();

    };
  }

  window.onload = function() {
    if (document.readyState === 'complete') {
      init();
    }
  };
})();
