var DrawLine = {
  getContentsHeight(dom){
    //線の描画用に子要素の座標を取得
    //描画は SVGComponentを使用し親から子に線を引く
    let heights = dom.contents().map(function(){return $(this).height();}).get();
    heights.shift();
    heights.pop();
    this.setState({data: heights,height:dom.height(),width:dom.width()});

  }
};
