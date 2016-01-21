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
  getInitialState(){
    return({
    line:[]

  })
  },
  componentDidMount:function(){
    let lines  = this.props.data.map(function(line,i){


        var hoge = $("#content"+line.child_id).offset();
      var parent = $("#content"+line.parent_id).offset();
console.log(line.child_id)
            return (
              <Line key={i} x1={parent.left} y1={parent.top} x2={hoge.left} y2={hoge.top} strokeWidth="1" stroke="black"/>
            )
        
    })
    this.setState({line:lines})
  },
  render:function(){
    //console.log(this.props.data)
    let line_style={
      position:"absolute",
      //top:"-20px",
      zIndex:"1",
//      marginLeft:-this.props.width
    }
    let svg_style={
      height:this.props.height+"px",
      width:this.props.width+"px"
    }
    var current_height = 0;
    var svg = this;


    return(
    <div id={"line"+this.props.id} style={line_style}>
    <SVGComponent height={this.props.height} width={this.props.width} >
          {this.line}
    </SVGComponent>
    </div>
    )

  }
})
