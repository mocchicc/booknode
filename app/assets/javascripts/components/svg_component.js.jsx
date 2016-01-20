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
  render:function(){

    let line_style={
      position:"absolute",
      //top:"-20px",
      zIndex:"1"
    }
    let svg_style={
      height:this.props.height+"px",
      width:this.props.width+"px"
    }
    var current_height = 0;
    var svg = this;
    let lines  = this.props.data.map(function(line,i){
      current_height = current_height + line + (5*(i-1))

            return (
              <Line key={i} x1={svg.props.width/2} y1={svg.props.height} x2={svg.props.width} y2={current_height} strokeWidth="1" stroke="black"/>
            )
          })
    return(
    <div id={"line"+this.props.id} style={line_style}>
    <SVGComponent height={this.props.height} width={this.props.width} >
          {lines}
    </SVGComponent>
    </div>
    )

  }
})
