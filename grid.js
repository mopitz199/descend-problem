sizeSquare = 50

function createSquare(pos, value){
  let id = pos[0].toString()+"_"+pos[1].toString()
  $("#panel").append(`
    <div id="${id}">${value}</div>
  `);
  $(`#${id}`).css({
    "position": "absolute",
    "top": pos[0]*sizeSquare+250,
    "left": pos[1]*sizeSquare+10,
    "width": sizeSquare.toString()+"px",
    "height": sizeSquare.toString()+"px",
    "border": "1px solid black",
    "display": "flex",
    "align-items": "center",
    "justify-content": "center",
  });
}

function build_matrix(matrix){
  let width = sizeSquare*matrix[0].length;
  width = width.toString()+"px"
  let height = sizeSquare*matrix.length;
  height = height.toString()+"px"
  $("#panel").css({"width": width, "height": height});

  for(i=0; i<matrix.length; i++){
    let row = matrix[i]
    for(j=0; j<row.length; j++){
      let val = row[j]
      let pos = [i, j]
      createSquare(pos, val)
    }
  }
}

function setColor(x, y, color){
  let id = x.toString()+"_"+y.toString()
  $(`#${id}`).css({"background-color": color});
}