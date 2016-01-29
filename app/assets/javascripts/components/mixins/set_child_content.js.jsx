var SetChildContent ={
  set_child_content(children,half,pos){
    var pos = pos
    var preChild = children.map(function(content,i){
      if(i+1 <= half){
        return (<Content key={i} pos={pos.pre_c} id={"content"+content.id}   data={content} />)
      }
    })
    var nextChild = children.map(function(content,i){
      if(i+1 > half){
        return (<Content key={i} pos={pos.next_c}  id={"content"+content.id}   data={content} />)
      }
    })

    return {preChild:preChild,nextChild:nextChild}
  }
}
