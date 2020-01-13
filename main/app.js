var items = [
     ['001', 'keyboard logitek', 60000, 'keyboard yang mantap untuk digunakan', 'l.jpeg'],
     ['002', 'keyboard MST', 40000, 'keyboard gaming cocok disemua pc', 'l.jpeg'],
     ['003', 'Mouse Genius', 70000, 'mouse yang lebih soft dengan akurasi yang cepat', 'l.jpeg'],
     ['004', 'Mouse Jerry', 90000, 'mouse standart yang digunakan untuk semua kalangan', 'l.jpeg'],
     ['005', 'keyboard MST', 40000, 'keyboard gaming cocok disemua pc', 'l.jpeg'],
     ['006', 'Mouse Genius', 70000, 'mouse yang lebih soft dengan akurasi yang cepat', 'l.jpeg'],
     ['007', 'Mouse Jerry', 90000, 'mouse standart yang digunakan untuk semua kalangan', 'l.jpeg']
]

function filterItems(keyword) {
     var filtered = []
     for (var i = 0; i < items.length; i++) {
          if (items[i][1].toLowerCase().match(keyword.toLowerCase())) {
               filtered.push(items[i])
          }
     }
     return filtered
}


function showCard(arrayItems){
     var listItemCard = ""

     for (var i = 0; i < arrayItems.length; i++) {
          listItemCard += `
          <div class="card" style="width: 18rem;">
          <img src="${arrayItems[i][4]}" alt="..." class="card-top-img" style="width: 18rem;>
               <div class="card-body">
                    <h5 class="card-title" id="itemName">${arrayItems[i][1]}</h5>
                    <p class="card-text" id="itemDescription">${arrayItems[i][3]}</p>
                    <p class="card-text">Rp.${arrayItems[i][2]} </p>
                    <a href="" class="btn btn-primary" id="addCart">Add to the Basket</a>
               </div>
          </div>`
     }
document.getElementById("listBarang").innerHTML = listItemCard
}
showCard(items)


// function pencarian data barang
function filterCard(keyword){
     var filtered = filterItems(keyword)
     showCard(filtered)
}
var formFilter = document.getElementById("formItem")
     
formFilter.onsubmit = function(event){
     event.preventDefault()
     var keywordPencarian = document.getElementById("keyword").value
     if(filterCard != keywordPencarian){
          filterCard(keywordPencarian)     
     }else{
          document.write("tidak ditemukan")
     }

}