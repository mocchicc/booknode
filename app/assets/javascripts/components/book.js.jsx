var Book = React.createClass({
  mixins:[],
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
      contents:this.props.data.contents

    };
  },
  componentDidMount:function(){
      let dom = $(ReactDOM.findDOMNode(this))
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

    var size = this.state.edge
    var depth = this.state.depth +1
    let book_style =  {
        position:"absolute",
        left:this.state.x,
        width:this.state.width,
      //  border:"solid 1px",
        display:"block"
      };
    let contents_style = {
      paddingBottom:50*size/2+"px",
      paddingRight:300*(depth)+"px",
      border:"solid 1px"
    }
      let book_title_style = {
        position:"relative",
//        top:50*size/4+"px",
        border:"solid 1px",
        display:"block"

      };

    let contentNodes = this.state.contents.map(function(content,i){
     return (
       <Content key={i} id={"content"+content.id}  depth={depth} data={content} />
     )
    })
    return (
      <div id={this.props.id} className="book" style={book_style} >
        <div className="contents" style={contents_style}>
          {contentNodes}
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
