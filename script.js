function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading") {
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

ready(function() {
  var importantElements = document.querySelectorAll('.important');

  for (var i = 0; i < importantElements.length; i++) {
    var element = importantElements[i];
    element.addEventListener('click', function (event) {
      this.style.fontSize = '40px';
    });
  }
});

// $(document).ready(function() {
//   var importantElements = $('.important');
//
//   importantElements.click(function(event) {
//     $(this).css('font-size', '40px');
//   });
// });
