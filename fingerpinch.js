if (Meteor.isClient) {
  

  
  Template.pad.rendered = function(template){
    var el = this.find('#pad');
    Hammer(el).on('touch pinch', function(e){
      //console.log(e);
      e.gesture.preventDefault();
      var ox=e.gesture.srcEvent.changedTouches[0].pageX,oy=e.gesture.srcEvent.changedTouches[0].pageY,dx=e.gesture.srcEvent.changedTouches[1].pageX,dy=e.gesture.srcEvent.changedTouches[1].pageY,snap=120;
      console.log(ox+','+oy+'|'+dx+','+dy);
      if(ox>dx && oy<dy){
        var disX=ox-dx;
        var disY=dy-oy;
        if(disX<snap || disY<snap){disX=0;disY=0;}
        e.currentTarget.children.markerO.style.left = dx + 'px';
        e.currentTarget.children.markerO.style.top = oy + 'px';
        e.currentTarget.children.markerO.style.width = disX + 'px';
        e.currentTarget.children.markerO.style.height = disY + 'px';
      }else if(ox<dx && oy<dy){
        var disX=dx-ox;
        var disY=dy-oy;
        if(disX<snap || disY<snap){disX=0;disY=0;}
        e.currentTarget.children.markerO.style.left = ox + 'px';
        e.currentTarget.children.markerO.style.top = oy + 'px';
        e.currentTarget.children.markerO.style.width = disX + 'px';
        e.currentTarget.children.markerO.style.height = disY + 'px';
      }else if(ox>dx && oy>dy){
        var disX=ox-dx;
        var disY=oy-dy;
        if(disX<snap || disY<snap){disX=0;disY=0;}
        e.currentTarget.children.markerO.style.left = dx + 'px';
        e.currentTarget.children.markerO.style.top = dy + 'px';
        e.currentTarget.children.markerO.style.width = disX + 'px';
        e.currentTarget.children.markerO.style.height = disY + 'px';
      }else if(ox<dx && oy>dy){
        var disX=dx-ox;
        var disY=oy-dy;
        if(disX<snap || disY<snap){disX=0;disY=0;}
        e.currentTarget.children.markerO.style.left = ox + 'px';
        e.currentTarget.children.markerO.style.top = dy + 'px';
        e.currentTarget.children.markerO.style.width = disX + 'px';
        e.currentTarget.children.markerO.style.height = disY + 'px';      
      }
      
    });
  }
}//meteor is no longer client

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
    // sudo rm -rf theInternet <<-- the most dangerous code in the world?
  });
}