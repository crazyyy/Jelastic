function FixedSidebar(){if($(window).width()>640){var e=$(".sidebar").offset(),i=$("footer").height(),t=$(document).height()-i-$(".widget-fixed").height();$(window).scrollTop()>e.top&&$(window).scrollTop()<t?$(".widget--getyourappliance").addClass("widget-fixed"):$(".widget--getyourappliance").removeClass("widget-fixed")}}function SetWidgetSize(){var e=$(".sidebar").width();$(".widget").each(function(i,t){$(this).width(e)})}!function(){for(var e,i=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","table","time","timeEnd","timeline","timelineEnd","timeStamp","trace","warn"],t=i.length,o=window.console=window.console||{};t--;)o[e=i[t]]||(o[e]=function(){})}(),"undefined"==typeof jQuery?console.warn("jQuery hasn't loaded"):console.log("jQuery "+jQuery.fn.jquery+" has loaded"),SetWidgetSize(),$(window).resize(function(e){SetWidgetSize()}),$(window).scroll(function(){FixedSidebar()}),jQuery(document).ready(function(e){e(".widget--getyourappliance button").on("click",function(i){e(this).hasClass("disabled")?(i.preventDefault(),e(this).parent().parent().append('<p class="error">please read and agree Terms and confirm allow using your pesonal data ... </p>')):e(".widget--getyourappliance .error").hide("fast")}),e(".widget--getyourappliance input[type=checkbox]").on("click",function(i){e(".checkbox1").is(":checked")&&e(".checkbox2").is(":checked")?(e(".widget--getyourappliance button").removeClass("disabled"),e(".widget--getyourappliance .error").hide("fast")):e(".widget--getyourappliance button").addClass("disabled")})});
//# sourceMappingURL=maps/scripts.js.map
