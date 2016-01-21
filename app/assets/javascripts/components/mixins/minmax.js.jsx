var MinMax = {
  minimalize:function(){
    let dom =$(ReactDOM.findDOMNode(this))
    let height = dom.height()
    let id = "#"+dom.attr("id")
    $(id + " > .contents").css("display","none");
    $(id + " > .card").css("display","block");
    $(id + " > .card").css("margin-top",height/4+"px");
  },
  maximalize:function(){

    let dom =$(ReactDOM.findDOMNode(this))
    let id = "#"+dom.attr("id")
    $(id + " > .contents").css("display","block");
    $(id + " > .card").css("display","none");
  }
}
