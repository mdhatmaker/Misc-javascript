function addRow(txt1,txt2,txt3,txt4)
{
    if (!document.getElementsByTagName) return;
    tabBody=document.getElementsByTagName("tbody").item(0);
    row=document.createElement("tr");
    cell1 = document.createElement("td");
    cell2 = document.createElement("td");
    cell3 = document.createElement("td");
    cell4 = document.createElement("td");
    textnode1=document.createTextNode(txt1);
    textnode2=document.createTextNode(txt2);
    textnode3=document.createTextNode(txt3);
    textnode4=document.createTextNode(txt4);
    cell1.appendChild(textnode1);
    cell2.appendChild(textnode2);
    cell3.appendChild(textnode3);
    cell4.appendChild(textnode4);
    row.appendChild(cell1);
    row.appendChild(cell2);
    row.appendChild(cell3);
    row.appendChild(cell4);
    tabBody.appendChild(row);    
}