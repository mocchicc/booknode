/*
// = require ./mixins/drag_content
// = require ./mixins/draw_line
var Content = React.createClass({
  mixins:[DragContent,DrawLine],
  propTypes: {
    id   : React.PropTypes.string,
    data : React.PropTypes.object
  },

  getInitialState() {
    return {
      depth:this.props.depth,
      text:this.props.data.text,
      order:this.props.data.order,
      height:0,
      width:0,
      y:this.props.data.y,
      parent_id:this.props.data.parent_id,
      children:this.props.data.children,
      data:[],
      mouseX:0,
      mouseY:0
    };
  },
  componentDidMount:function(){
    let dom = $(ReactDOM.findDOMNode(this))
    let con = this
    this.getContentsHeight(dom);
    this.drag_content(dom);
    let id =$("#"+dom.attr("id")+" > .child-content").height()
    this.setState({height:id})
  },
  render: function() {

    if(this.props.pos == "left"){
      var pos = -1;
    }else{
      var pos = 1;
    }
    var depth = this.state.depth;
    let content_style =  {

      };
    let content_title_style = {
        position:"static",
        float:"left",
        display:"inline",
        backgroundColor:"white",
        border:"solid 1px",
        maxHeight:"20px",
        width:300+"px",
        overflow:"scroll",
        margin:"0.5em",
        zIndex:"2",
        marginTop:-10*(this.state.height/2/this.props.depth)+"px"
      };
      let child_style = {
        position:"static",
        float:"right",
        display:"inline",
        marginLeft:"300px"
      }
    if( this.state.children){
      var con = this
      var half = this.state.children.length/2
      var upChild = this.state.children.map(function(content,i){
        if(i+1 > half){
          return (
            <Content key={i} pos={con.props.pos} id={"content"+content.id}  depth={depth-1} data={content} />
          )
        }
      })
      var downChild = this.state.children.map(function(content,i){
        if(i+1 < half){
        return (
          <Content key={i} pos={con.props.pos} id={"content"+content.id}  depth={depth-1} data={content} />
        )
        }
      })
    }else{
      var childNodes = ""
    }
    return (
      <div id={this.props.id} className="content" style={content_style} >
        <div className="content-text" style={content_title_style}>
          {this.state.text}
        </div>
        <div className="child-content" style={child_style}>
        {downChild}
        {upChild}
        </div>
      </div>
    );
  }
});
*/
