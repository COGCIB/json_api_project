// new DataTable("#example");

async function getData() {
  const records = await fetch("https://mezgebu-bi.onrender.com/products");
  const data = await records.json();

  console.log(data);

  let tab = "";
  data.forEach((product) => {
    tab += `<tr>
        <td>${product.id}</td>
        <td>${product.title}</td>
        <td>${product.category}</td>
        <td>${product.price}</td>
        <td>${product.description}</td>
        </tr>`;
    console.log(product);
  });
  document.getElementById("tdata").innerHTML = tab;
  $("#userData").DataTable({
    data: data,
    columns: [
      { data: "id" },
      { data: "title" },
      { data: "category" },
      { data: "price" },
      {
        data: "description",
      },
    ],
  });
}
