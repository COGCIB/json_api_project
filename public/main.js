// new DataTable("#example");

async function getData() {
  const records = await fetch("https://mezgebu-bi.onrender.com/ics");
  const data = await records.json();

  console.log(data);

  let tab = "";
  data.forEach((product) => {
    tab += `<tr>
        <td>${product.No}</td>
        <td>${product.NAME}</td>
        <td>${product.FNAME}</td>
        <td>${product.GFNAME}</td>
        <td>${product.REQUEST_NO}</td>
         <td>${product.DATE_ET}</td>
        <td>${product.DATE}</td>
        <td class="table-success">${product.ፓስፖርት_የሚዎስዱበት_ቦታ}</td>
        </tr>`;
    console.log(product);
  });
  document.getElementById("tdata").innerHTML = tab;
  $("#userData").DataTable({
    data: data,
    columns: [
      { data: "No" },
      { data: "NAME" },
      { data: "FNAME" },
      { data: "GFNAME" },
      { data: "REQUEST_NO" },
      { data: "DATE_ET" },
      { data: "DATE" },
      {
        data: "ፓስፖርት_የሚዎስዱበት_ቦታ",
      },
    ],
  });
}
