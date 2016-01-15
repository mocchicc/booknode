var Content = React.createClass({
  mixins:[],
  propTypes: {
    id   : React.PropTypes.string,
    data : React.PropTypes.object
  },
  getInitialState() {
    return {
      text:this.props.data.text,
      order:this.props.data.order,
      height:this.props.data.height,
      parent_id:this.props.data.parent_id,
      children:this.props.data.children,
      currentSize:this.props.cs
    };
  },
  componentDidMount:function(){
    let dom = $(ReactDOM.findDOMNode(this))
    dom.draggable();

//    this.drag_note(dom);
//    this.resize_note(dom);
  },
  render: function() {
    if(this.state.children.length == 0){
      var size = 0.3
      var ch_flag = 1
    }else{
      var size = 1
      var ch_flag = 2
    }


    if(this.state.children.length%2 == 0){//偶数
      var half = this.state.children.length/2
    }else{//奇数
      var half = this.state.children.length/2+0.5
    }
    var top = (80*this.state.order*size)-(20*half);
    let content_style =  {
        position:"relative",
        width:200*ch_flag+"px",
        left:"200px",
        top:top+"px",
        display:"block"
      };
      let content_title_style = {
        border:"solid 1px",
        width:180+"px",
      };


    if( this.state.children.length != 0){
      var content_props = this.state

      var childNodes = this.state.children.map(function(content,i){
        return (
          <Content key={i} id={"content"+content.id}  cs={content_props.children.length} data={content} />
        )
      })
    }else{
      var childNodes = ""
    }
    return (
      <div id={this.props.id} className="content" style={content_style} >
        {childNodes}
        <div className="content-text" style={content_title_style}>
          {this.state.text}
        </div>

      </div>
    );
  }
});
