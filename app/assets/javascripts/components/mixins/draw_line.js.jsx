var DrawLine = {
  get_line(props){
    var pos = ""
    let lines  = props.nodes.map(function(line,i){
      //子要素のDOMを取得
      var c_line = $("#"+line)
      //子要素が右側か左側かを判定
      pos = c_line.parents(".left").attr("class")
      //親要素がBookの場合とContentの場合で値の調整を bookとcontent関数で行う
      if(props.book){var attr = book(props,pos);pos="left"}else{var attr = content(c_line,pos)}
      //子要素のコンテナの上からの位置を取得
      var top = c_line.position().top
      //子要素のコンテナ内の位置を取得し　topの位置を足して絶対位置を算出
      var child = c_line.children(".content-text").position().top + top;
      //y1 contentの高さ分追加
        return (
                 <Line key={i} x1={attr.x1} y1={attr.parent+20} x2={attr.x2} y2={child+20} strokeWidth="1" stroke="black"/>
               )
    })
    this.setState({line:lines,pos:pos})

  }
}

function book(props,pos){
    var parent = props.top
    if(pos == "left"){
      var x1 = 100,x2 = 0
    }else{
      var x1 = 100,x2=340
    }
    return {parent:parent,x1:x1,x2:x2}
}

function content(line,pos){
    var parent = line.parent().siblings(".content-text").position().top
    if(pos == "left"){
      var x1 = 100,x2 = 0
    }else{
      var x1 = 200,x2=320
    }
    return {parent:parent,x1:x1,x2:x2}
}
