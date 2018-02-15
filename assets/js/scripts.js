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
  $('.widget--getyourappliance button').on('click', function(e) {
    if ($(this).hasClass('disabled')) {
      e.preventDefault();
      $(this).parent().parent().append('<p class="error">please read and agree Terms and confirm allow using your pesonal data ... </p>')
    } else {
      $('.widget--getyourappliance .error').hide('fast');
    }
  })
  $('.widget--getyourappliance input[type=checkbox]').on('click', function(e) {
    if ($('.checkbox1').is(':checked') && $('.checkbox2').is(':checked')) {
      $('.widget--getyourappliance button').removeClass('disabled')
    } else {
      $('.widget--getyourappliance button').addClass('disabled')
    }
  })
});


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
