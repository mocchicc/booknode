/*
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
      width:this.props.data.width,
      height:this.props.data.height,
      edge:this.props.data.edge,
      depth:this.props.data.depth,
      contents:this.props.data.contents,
      data:[]
    };
  },
  componentDidMount:function(){
      let dom = $(ReactDOM.findDOMNode(this))
      this.getContentsHeight(dom.contents().first());
      dom.draggable();
//    this.drag_note(dom);
//    this.resize_note(dom);
  },
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
  },
  render: function() {
    var half = this.state.contents.length/2
  //  if(half%2 == 1){half+=0.5}
    var size = this.state.edge
    var depth = this.state.depth +1
    let book_style =  {
      paddingTop:"500px"
      };
    let contents_style = {
    }
      let book_title_style = {
        border:"solid 1px",
      };


    let leftContents = this.state.contents.map(function(content,i){
        return (
          <Content key={i} pos={"left"} id={"content"+content.id}  depth={depth} data={content} />
        )
      })
    return (
      <div id={this.props.id} className="book" style={book_style} >
        <div className="contents" style={contents_style}>
          {leftContents}
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
*/
