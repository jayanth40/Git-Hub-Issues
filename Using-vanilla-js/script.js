let page = 1;

let list = document.getElementById("issues");
let pageNo = document.getElementById('page_num')
pageNo.innerHTML = `Page Number : ${page}` 
function responseApi(pa) {
    let url = `https://api.github.com/repositories/1296269/issues?page=${pa}&per_page=5 `;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      list.innerHTML = "";
      data.forEach((element) => {
        let issueTitle = document.createElement("li");
        issueTitle.textContent = element.title;
        list.appendChild(issueTitle);
      });
    });
}
responseApi();
let nxtBut = document.getElementById("next_page")
nxtBut.addEventListener("click",function(){
    page++;
    pageNo.innerHTML = `Page Number : ${page}`
    responseApi(page)
})
let prevBut = document.getElementById("prev_page")
prevBut.addEventListener("click",function(){
   if(page>1) page--;
    pageNo.innerHTML = `Page Number : ${page}`
    responseApi(page)
})