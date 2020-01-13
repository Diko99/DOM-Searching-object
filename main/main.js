let menu = [
     ['01','buah apel',15000,'manis berwarna merah mengandung vitamin C,B', 'banner.jpg'],
     ['02','sayur bayam',10000,'tidak manis berwarna hijau mengandung protein yang sangat baik bagi tubuh','banner1.jpg'],
     ['03','daging ayam',25000,' berwarna merah mengandung banyak protein dan karbohidrat','blog1.jpg']
]

function filteritems(keyword){
     let filtered = []
     for (var i = 0 ; i < menu.length; i++){
          if(menu[i][1].toLowerCase().match(keyword.toLowerCase())){
               filtered.push(menu[i])
          }
     }
     return filtered
}

// funcition untuk menampilkan showcard

function tampilkan(arraymenu){
     let listmenucard = ''

     for (var i = 0 ; i < arraymenu.length; i++){
          listmenucard += `
          <div class="card" style="width:18rem">
               <img src="${arraymenu[i][4]}" alt"..." class="card-top-img" style="width:18rem; height:30vh;">
          <div class = "card-body">
               <h5 class="card-title" id=""itemName>${arraymenu[i][1]}</h5>
               <p class="card-text" id="itemDescription>${arraymenu[i][3]}</p>

               <p class ="card-text">Rp. ${arraymenu[i][2]}</p>
               <a href="#" class="btn btn-outline-success" id=Addcard">
               Masukan Keranjang
               </a>
               
               </div>
          </div>
          `
     }
document.getElementById('listbarang').innerHTML = listmenucard
}
tampilkan(menu)



// function pencarian data barang

function caribarang(keyword){
     let filtered = filteritems(keyword)
     tampilkan(filtered)
}

let formcari = document.getElementById("formcari")

formcari.onsubmit = function(event){
     event.preventDefault()

     let katakunci = document.getElementById("keyword").value

     if(caribarang != katakunci){
          caribarang(katakunci)
     }else{
          document.write("not found")
     }
}


