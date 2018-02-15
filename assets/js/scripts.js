// Avoid `console` errors in browsers that lack a console.
(function() {
  var method
  var noop = function() {}
  var methods = [
    "assert",
    "clear",
    "count",
    "debug",
    "dir",
    "dirxml",
    "error",
    "exception",
    "group",
    "groupCollapsed",
    "groupEnd",
    "info",
    "log",
    "markTimeline",
    "profile",
    "profileEnd",
    "table",
    "time",
    "timeEnd",
    "timeline",
    "timelineEnd",
    "timeStamp",
    "trace",
    "warn"
  ]
  var length = methods.length
  var console = (window.console = window.console || {})

  while (length--) {
    method = methods[length]

    // Only stub undefined methods.
    if (!console[method]) {
      console[method] = noop
    }
  }
})()
if (typeof jQuery === "undefined") {
  console.warn("jQuery hasn't loaded")
} else {
  console.log("jQuery " + jQuery.fn.jquery + " has loaded")
}
// Place any jQuery/helper plugins in here.
// set sidebar size on page load and every time when page size changed
SetWidgetSize();
$(window).resize(function(event) {
  /* Act on the event */
  SetWidgetSize();
});

$(window).scroll(function() {
  FixedSidebar();
});

jQuery(document).ready(function($) {

  $('#gform_submit_button_1').addClass('disabled');
  $(".gchoice_1_8_1 input").prop("checked", false);
  $(".gchoice_1_9_1 input").prop("checked", false);

  $('.gform_body select').wrap('<span class="form-select"></span>');

  $('.widget--getyourappliance #gform_submit_button_1').live('click', function(e) {
    if ($(this).hasClass('disabled')) {
      e.preventDefault();
      $(this).parent().parent().append('<p class="error">please read and agree Terms and confirm allow using your pesonal data ... </p>')
    } else {
      $('.widget--getyourappliance .error').hide('fast');
      $("#gform_1").submit();
    }
  })
  $('.widget--getyourappliance input[type=checkbox]').live('click', function(e) {
    if ($('.gchoice_1_8_1 input').is(':checked') && $('.gchoice_1_9_1 input').is(':checked')) {
      $('.widget--getyourappliance #gform_submit_button_1').removeClass('disabled');
      $('.widget--getyourappliance .error').hide('fast');
    } else {
      $('.widget--getyourappliance #gform_submit_button_1').addClass('disabled')
    }
  })



  UserInfo.getInfo(function(data) {
    // the "data" object contains the info

    $('#input_1_11').val(data.country.name);

    if (data.continent.code = "EU") {
      var currentEUR = GetLatestCurrency();
      ChangePrices(currentEUR);
    }
  }, function(err) {
    // the "err" object contains useful information in case of an error
    console.warn(err);
  });

});

function GetLatestCurrency() {
  var userID = '635fd3cbaa4e486596dc97a868812032';
  var url = 'https://openexchangerates.org/api/latest.json?app_id=' + userID;

  var exchangerate = null;

  $.ajax({
    'async': false,
    url: url,
    success: function(result) {
      exchangerate = result.rates.EUR;
    }

  });
  return exchangerate;
}


function FixedSidebar() {

  var windowWidth = $(window).width();

  if (windowWidth > 640) {
    var elementPosition = $('.sidebar').offset();

    var footerHeight = $('footer').height();
    var documentHeight = $(document).height();
    var fixedWidgetHeight = $('.widget-fixed').height();

    var breakpoint = documentHeight - footerHeight - fixedWidgetHeight;

    if (($(window).scrollTop() > elementPosition.top) && ($(window).scrollTop() < breakpoint)) {
      $('.widget--getyourappliance').addClass('widget-fixed');
    } else {
      $('.widget--getyourappliance').removeClass('widget-fixed');
    }
  }

}

function SetWidgetSize() {
  var sidebarWidth = $('.sidebar').width();
  $('.widget').each(function(index, el) {
    $(this).width(sidebarWidth)
  });
}

function ChangePrices(exchangerate) {

  $('.table-item--price').each(function(index, el) {
    var cosntInUSD = $(this).attr('data-cost');
    var constInEUR = parseInt(cosntInUSD * exchangerate);
    var currentHTML = $(this).html();
    var newHTML = currentHTML.replace("$", "€").replace(cosntInUSD, constInEUR);
    $(this).html(newHTML);

    var selectOptionValue = '$' + cosntInUSD + ' server/month';
    var selector = 'option[value="' + selectOptionValue + '"]';
    var newSelectOptionValue = selectOptionValue.replace("$", "€").replace(cosntInUSD, constInEUR);
    $(selector).attr('value', newSelectOptionValue).html(newSelectOptionValue)
  });

}
