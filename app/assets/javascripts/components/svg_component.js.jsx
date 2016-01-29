// = require ./mixins/draw_line
var SVGComponent = React.createClass({
  render: function(){
    return <svg {...this.props}>{this.props.children}</svg>;
    }
});

var Line = React.createClass({
  render: function() {
    return <line {...this.props} />;
  }
});

var SVGLine = React.createClass({
  mixins:[DrawLine],
  getInitialState(){
    return({
      pos:"",
      line:[]
    })
  },
  componentWillReceiveProps(nextProps){
    //DrawLineのget_lineより　描画するリンクの情報を取得しコンポーネントを作成
    this.get_line(nextProps)
   },
  render:function(){
    if(this.state.pos == "left"){var margin = 1}else{var margin = -1}
    var svg = this.props;
    let line_style={
      position:"absolute",
      zIndex:"1",
      marginLeft:-10*margin+"px"
    }
    return(
    <div id={"line"+this.props.id} style={line_style}>
    <SVGComponent height={this.props.height} width={this.props.width} >
          {this.state.line}
    </SVGComponent>
    </div>
    )
  }
})
