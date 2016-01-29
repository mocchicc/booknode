var DragContent = {
  drag_content:function(dom) {
     let content = this

     dom.draggable(
       {
         drag:function(){content.start_drag(dom)},
         stop:function(){content.stop_drag(dom)}
       }
     );
    },
 	start_drag:function(dom){
    let con = this
//    $(dom).bind("mousemove",
  //  function(ev){con.setState({mouseX:ev.offsetX,mouseY:ev.offsetY})}
  //  )
  },
  stop_drag:function(dom) {
    $(dom).unbind("mousemove")
    //let left = px_to_num(dom.css("left"));
    //let top  = px_to_num(dom.css("top"));
    //this.setState({x:left,y:top});
  }
};
