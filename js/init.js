$('.navigation').each(function () {
    var $links = $(this).find('a'),
      panelIds = $links.map(function() { return this.hash; }).get().join(","),
      $panels = $(panelIds),
      $panelwrapper = $panels.filter(':first').parent(),
      delay = 500,
      heightOffset = 40;
      
    $panels.hide();
    
    $links.click(function () {
      var link = this, 
        $link = $(this);

      if ($link.is('.selected')) {
        return false;
      }
      
      $links.removeClass('selected');
      $link.addClass('selected');
      
      document.title = '  المهندس الصغير - ' + $link.text();
              
      if ($.support.opacity) {
        $panels.stop().animate({opacity: 0 }, delay);
      }
      
      $panelwrapper.stop().animate({
        height: 0
      }, delay, function () {
        var height = $panels.hide().filter(link.hash).css('opacity', 1).show().height() + heightOffset;
        
        $panelwrapper.animate({
          height: height
        }, delay);
      });
    });
    
    $links.filter(window.location.hash ? '[hash=' + window.location.hash + ']' : ':first').click();
  });