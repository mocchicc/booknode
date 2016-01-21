//top level component
//has_many books
var Canvas = React.createClass({
  loadBooksFromServer: function() {
  let canvas = this
  $.getJSON(this.props.url,null,function(data,status){
    canvas.setState({data:data})
//    console.log(canvas.state.data)
  })

},
  getInitialState:function(){
    return {data:[]}
  },
  componentDidMount: function() {
    let canvas = this
    this.loadBooksFromServer();

  },
  zoom:function(){
  },
  render: function() {
    let canvas = this;
  //  console.log(this.state.data)
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
