// = require ./mixins/set_child_content
var Book = React.createClass({
  mixins:[SetChildContent],
  getInitialState() {
    return {
      title:this.props.data.title,
      width:0,
      height:0,
      y:0,
      depth:this.props.data.depth,
      contents:this.props.data.contents,
      nodes:[]
    };
  },
  componentDidMount:function(){
      let dom = $(ReactDOM.findDOMNode(this))
      //全Content配置後の幅と高さを取得　高さは Leftの高さを使用
      //book titleの位置は高さ/2の位置
      let left = dom.find(".left"),right = dom.find(".right");
      let height = left.height(),width =  left.width()+100;
      this.setState({height:height,width:width,y:height/2})

      //リンク作成用に左右の子要素のIDを配列として取得
      let children = new Array
      left.children().map(function(){children.push($(this).attr("id"))})
      right.children().map(function(){children.push($(this).attr("id"))})
      this.setState({nodes:children})

  },
  render: function() {
    var half = this.state.contents.length/2
    var depth = this.state.depth
    let book_style =  {
        position:"absolute"
      };
    let contents_style = {
      //深さを一つ下げる際に Left:-300としているので深さの分 paddingLeftを足している
      paddingLeft:this.state.width*depth+"px",
      zIndex:"2"
    }
      let book_title_style = {
        position:"relative",
        backgroundColor:"white",
        width:"200px",
        top:this.state.height/2+"px",
        border:"solid 1px",
        zIndex:"2"
      };
    //set_child_contentより子要素のコンポーネントを作成
    let contents = this.set_child_content(this.state.contents,half,{pre_c:"left",next_c:"right"})

    return (
      <div id={this.props.id} className="book" style={book_style} >
        <div className="contents" style={contents_style}>
          {/*リンク描画用*/}
          <SVGLine id={this.props.id} top={this.state.y} book={true} nodes={this.state.nodes} width={this.state.width} height={this.state.height} />
          {/*左側*/}
          <div className="left" style={{position:"absolute"}}>
            {contents.preChild}
          </div>
          {/*右側*/}
          <div className="right" style={{position:"absolute"}}>
            {contents.nextChild}
          </div>
          {/*タイトル*/}
          <div className="content-text" style={book_title_style} >
            {this.state.title}
          </div>
        </div>
      </div>
    );
  }

});
