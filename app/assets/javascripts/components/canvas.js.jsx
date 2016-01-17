//top level component
//has_many books
var Canvas = React.createClass({
  getInitialState:function(){
    return {data:this.props.data}
  },
  componentDidMount: function() {
    let canvas = this
    //dom.mousemove(function(e){canvas.setState({mouse:{x:e.offsetX,y:e.offsetY}})})
    //this.setState({data:this.state.data;
    console.log(this.state.data)
  },
  zoom:function(){
  },
  render: function() {
    let canvas = this;
    console.log(this.state.data)
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
