
// = require ./mixins/draw_line
var Book = React.createClass({
  mixins:[DrawLine],
  propTypes: {
    id  : React.PropTypes.string
  },
  getInitialState() {
    return {
      title:this.props.data.title,
      x:this.props.data.x,
      y:this.props.data.y,
      width:0,
      height:0,
      edge:this.props.data.edge,
      depth:this.props.data.depth,
      contents:this.props.data.contents,
      data:[]

    };
  },
  componentDidMount:function(){
      let dom = $(ReactDOM.findDOMNode(this))
      //this.getContentsHeight(dom.contents().first());
      dom.draggable();
      let aheight = dom.height()
      let awidth =  dom.width()
    //  console.log(this.props.data.nodes)
      $(".book > .contents > .book-title").css("top",aheight/2+"px")
      this.setState({height:aheight,width:awidth,data:this.props.data.nodes})

//    this.drag_note(dom);
//    this.resize_note(dom);
  },

  render: function() {
//    console.log(this.state)
    var half = this.state.contents.length/2
  //  if(half%2 == 1){half+=0.5}
    var size = this.state.edge
    var depth = this.state.depth +1
    let book_style =  {
        position:"absolute",
        left:this.state.x,

      //  border:"solid 1px",
        display:"block"
      };
    let contents_style = {
      paddingBottom:50*size/2+"px",
      paddingRight:320*(depth)+"px",
      paddingLeft:this.state.width+"px",
      zIndex:"2"
    }
      let book_title_style = {
        position:"relative",
//        top:50*size/4+"px",
        width:"200px",
        border:"solid 1px",
        display:"block"

      };


    let leftContents = this.state.contents.map(function(content,i){
      if (i+1 <= half){
        return (
          <Content key={i} pos={"left"} id={"content"+content.id}  depth={depth} data={content} />
        )
      }})
     let rightContents = this.state.contents.map(function(content,i){
       if (i+1 > half){
         return (
           <Content key={i} pos={"right"} id={"content"+content.id}  depth={depth} data={content} />
         )
       }
    })
    return (
      <div id={this.props.id} className="book" style={book_style} >
        <div className="contents" style={contents_style}>
          <div className={"left"} style={{position:"absolute"}}>{leftContents}</div>
          <div className={"right"} style={{position:"absolute"}}>{rightContents}</div>
          <SVGLine id={this.props.id} data={this.state.data} width={this.state.width} height={this.state.height} />
        <div className="book-title" style={book_title_style} onClick={this.minimalize}>
            {this.state.title}
          </div>
        </div>

        <div className="card" style={{display:"none",border:"solid 1px"}} onClick={this.maximalize}>
          {this.state.title}
        </div>
      </div>
    );
  }
});
