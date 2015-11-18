  var winScrollX = 0,
      winScrollY = 0,
      // Only one scroll tracker that works for every Canvallax instance
      watchingScroll = false,
      onScroll = function(){
        winScrollX = root.scrollLeft || body.scrollLeft;
        winScrollY = root.scrollTop || body.scrollTop;
      };

  Canvallax.TrackScroll = createClass(Canvallax.Tracker,{

    _render: function(C,el){

      if ( !watchingScroll ) {
        watchingScroll = true;
        onScroll();
        win.addEventListener('scroll', onScroll);
        win.addEventListener('touchmove', onScroll);
      }

      return { x: winScrollX, y: winScrollY };

    }

  });