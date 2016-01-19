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

  },
  render: function() {
    var depth = this.state.depth;
    let content_style =  {
        position:"relative",
      //  width:200*ch_flag+"px",
        left:"320px",
        display:"block",
        //border:"solid 1px"
      };
      let content_title_style = {
        position:"relative",
        backgroundColor:"white",
        top:this.state.y+"px",
        border:"solid 1px",
        maxHeight:"20px",
        width:300+"px",
        overflow:"scroll",
        margin:"1em",
        zIndex:"2"
      };

    if( this.state.children){
      var content_props = this.state

      var childNodes = this.state.children.map(function(content,i){
        return (
          <Content key={i} id={"content"+content.id}  depth={depth-1} data={content} />
        )
      })
    }else{
      var childNodes = ""
    }
    return (
      <div id={this.props.id} className="content" style={content_style} >

        <SVGLine id={this.props.id} data={this.state.data} width={this.state.width} height={this.state.height} />
        {childNodes}
        <div className="content-text" style={content_title_style}>
          {this.state.text}
        </div>
      </div>
    );
  }
});
