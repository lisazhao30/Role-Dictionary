var $form = $('form#main-form'),
    url = 'https://script.google.com/macros/s/AKfycbyWBYCzY0GYSt8g-EI57d4YTcVosx00pnqdvswgtL9KVQaN14RZcBkadzyyVIQz7QFR/exec'

$('#submit-form').on('click', function(e) {
  e.preventDefault();
  var jqxhr = $.ajax({
    url: url,
    method: "get",
    dataType: "json",
    data: $form.serializeObject()
  }).success(
    // do something
  );
})