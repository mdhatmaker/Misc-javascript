
// JSGrid Version 1.0: developed by Dr. Nasir Darwish (KFUPM), released on Oct. 28, 2013
 
var $gridStyle = "div#gridForm { z-index:21; color:black;padding:2px;margin:0;font-size: 11pt;font-family:Tahoma;position:fixed; right:0; top:0; " +
          "background:lightgray; border:1px solid gray; border-top:0;border-right:0;width:90px; height:90px;}" +
          "div#gridForm input {font-size: 10pt; margin:3px; color:black;} " +
           "div#gridForm input[type=text] { width:30px; padding-left:2px; }"   +
           "div#gridForm input[type=button] { padding:6px; margin:8px;border:1px solid gray }" +
         "div#grid { z-index:20; position:absolute; left:0px; top:0px; background:transparent; padding:0;margin:0; } " +
         "div#grid table { border-collapse: collapse; border-spacing:0; padding:0;margin:0; table-layout:fixed; } " +
         "div#grid table td { font-size:5pt; margin:0; padding:0; box-sizing:border-box; }";
     
var $gridFormHTML = "Height <input type='text' id='cellHeight' value='200' />" + 
           "Width&nbsp;&nbsp;<input type='text' id='cellWidth' value='100' />" +
           "<input type='button' onclick='createGrid()' value='Set Grid' />"

function createGrid()
{  
   var gridForm = document.getElementById("gridForm");  

   if (gridForm ==null) // Initialization
   {  var formdiv = document.createElement("div");
      formdiv.id = 'gridForm';
      formdiv.innerHTML = $gridFormHTML;

      var docbody = document.body;
      docbody.insertBefore(formdiv , docbody.firstChild);

      var griddiv = document.createElement("div");
      griddiv.id = 'grid';
      griddiv.innerHTML = "<table id='tablebody' ></table>";

      docbody.insertBefore(griddiv, docbody.firstChild);

      var dochead = document.getElementsByTagName("head")[0]; 
      //alert(dochead);

     var gridst = document.createElement("style");
     gridst.id = 'gridstyle';

     dochead.appendChild(gridst);

     var gridExt = document.createElement("style");
     gridExt.id = 'gridExtra';

     dochead.appendChild(gridExt); 
     gridst.innerText = $gridStyle;
   }
 
    var cellWidth = parseInt(document.getElementById("cellWidth").value); 
    var cellHeight =  parseInt( document.getElementById("cellHeight").value);  
 
     var griddiv = document.getElementById("grid");

     if ((cellWidth==0) && (cellHeight==0)) 
     { griddiv.style.display = "none" ; return; }

     griddiv.style.display ="block";
     // Recent Mod: Add next line
     griddiv.style.width = window.innerWidth + "px";

    // alert(griddiv.clientWidth + "/"  + window.innerWidth);  
 
     if (cellWidth== 0) cellWidth = window.innerWidth;

     if (cellHeight==0) cellHeight= window.innerHeight;
    
     // Note: In JavaScript, int/int produces float 
     var cols= Math.floor( window.innerWidth/cellWidth); 
     var rows= Math.floor(window.innerHeight/cellHeight);
     
     var lastcellWidth = window.innerWidth - cols*cellWidth; 
     // alert(lastcellWidth); 
     if (cellWidth* cols < window.innerWidth) cols++; 
     if (cellHeight* rows < window.innerHeight) rows++; 
         
     var tbody = document.getElementById("tablebody");

     tbody.innerHTML = "";  // Delete previous content
    
     for(var i=0; i < rows; i++)
     {  var row = document.createElement("tr");
        
       for(var j=0; j < cols; j++)
       {  var cell= document.createElement("td");
          if ((cols >1) && (j== cols-1)) cell.setAttribute("style","width:" + lastcellWidth + "px");
          //cell.innerHTML = "&nbsp;";
          row.appendChild(cell);
       }
       tbody.appendChild(row);
     }
  
     document.getElementById("gridExtra").innerText = "#grid table td {border:1px solid black; width:" + cellWidth +"px; height:"+ cellHeight + "px; }" ;
  //  alert(griddiv.style.width);
  // alert( document.getElementById("gridExtra").innerText);
  // document.styleSheets[0].insertRule("#grid table td { border:1px solid black; width:" +cellWidth+"px; height:"+ cellHeight + "px }" );
}

window.addEventListener("load", createGrid , false);
 