//top level component
//has_many books
var Canvas = React.createClass({
  getInitialState:function(){
    return {data:[]}
  },
  componentDidMount: function() {
    let canvas = this
    //dom.mousemove(function(e){canvas.setState({mouse:{x:e.offsetX,y:e.offsetY}})})
    this.setState({data: this.props.data});

  },
  zoom:function(){
  },
  render: function() {
    let canvas = this;
    let bookNodes = this.state.data.map(function(book,i){
      return (
        <Book key={i} id={"book"+book.id} data={book} />
      )
    })
    return (
      <div id="canvas" className="canvas" >
        {bookNodes}
      </div>
    );
  }
});
