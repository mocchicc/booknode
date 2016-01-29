// = require ./mixins/drag_content
// = require ./mixins/set_child_content
var Content = React.createClass({
  mixins:[DragContent,SetChildContent],
  getInitialState() {
    return {
      depth:this.props.depth,
      text:this.props.data.text,
      children:this.props.data.children,
      width:0,
      height:0,
      y:0,
      nodes:[]
    };
  },
  componentDidMount:function(){
    let dom = $(ReactDOM.findDOMNode(this))
    //content-textの位置を取得してstateにセット
    let pos  = dom.children(".content-text")
    this.setState({x:pos.left,y:pos.top,height:dom.height()})

    //子要素のIDを取得してnodesにセット
    let children = new Array
    dom.children(".up").children().map(function(){children.push($(this).attr("id"))})
    dom.children(".down").children().map(function(){children.push($(this).attr("id"))})
    this.setState({nodes:children})

//    this.drag_content(dom);
  },
  render: function() {
    //深度が増えるにあたって左はー、右は＋方向にleft:320する
    if(this.props.pos == "left"){var pos = -1;
    }else{var pos = 1;}

    var content_style =  {
        position:"relative",
        left:pos*320+"px",
      };
      var content_title_style = {
        position:"relative",
        backgroundColor:"white",
        border:"solid 1px",
        maxHeight:"20px",
        width:300+"px",
        overflow:"scroll",
        margin:"0.5em",
        zIndex:"2"
      };
      //set_child_contentより子要素のコンポーネントを作成
      let con = this.props.pos
      let half = this.state.children.length/2
      let children = this.set_child_content(this.state.children,half,{pre_c:con,next_c:con})

    return (
      <div id={this.props.id} className="content" style={content_style} >
        {/*リンク描画用*/}
        <SVGLine id={this.props.id} top={0} book={false} nodes={this.state.nodes} width={320} height={this.state.height} />
        {/*上側*/}
        <div className="up">{children.preChild}</div>
        <div className="content-text" style={content_title_style}>
          {this.state.text}
        </div>
        {/*下側*/}
        <div className="down">{children.nextChild}</div>
      </div>
    );
  }
});
