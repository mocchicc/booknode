//top level component
//has_many books
var Canvas = React.createClass({
  loadBooksFromServer: function() {
  let canvas = this
  $.getJSON(this.props.url,null,function(data,status){
    canvas.setState({data:data})
  })
},
  getInitialState:function(){
    return {data:[],x:0,y:0}
  },
  componentDidMount: function() {
    //books/id.json からデータを取得
    this.loadBooksFromServer();
  },
  render: function() {
    let canvas = this;
    //今後の拡張用に複数のBookを配置
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
