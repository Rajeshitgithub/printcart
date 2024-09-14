// swipper js
let swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      direction: "vertical",
      centeredSlides: true,
      loop: true,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
});


    // header scroll
window.addEventListener('scroll',function(){
      let header = document.getElementById('header');
      if(this.window.pageYOffset>100){
        header.classList.add('sticky');
      }
      else{
        header.classList.remove('sticky')
      }

})
    // tranding product here
 let tranding = document.getElementById('trand');
    let data = [
      {
        id:"aa",
        img:"",
        name:"product Name",
        img:"asset/images/product/tranding-1.webp",
        price:20,
      },
      {
        id:"ab",
        img:"asset/images/product/tranding-2.webp",
        name:"product Name",
        price:20,
      },
      {
        id:"ac",
        img:"asset/images/product/tranding-3.webp",
        name:"product Name",
        price:20,
      },
      {
        id:"ad",
        img:"asset/images/product/tranding-4.webp",
        name:"product Name",
        price:20,
      }, 
    ];
    let func = ()=>{
      return tranding.innerHTML = data.map((e)=>{
        let {id,img,name,price} = e
        return ` <div class="col-lg-3 col-md-4 col-sm-6 col-sm-6 pb-3">
            
            <div class="card">
              <div class="icon d-flex flex-column">
                <a href="#"><i class="fa-regular fa-heart"></i></a>
                <a href="#"><i class="fa-solid fa-cart-shopping"></i></a>
              </div>
              <div class="card-inner">
                <img src="${img}" class="card-img-top img-fluid" alt="...">
              </div>
              <div class="card-body">
                <h5 class="card-title">PrintKart</h5>
                <p class="card-text">best cap with best prices</p>
                <p class="card-text">$200</p>
              </div>
            </div>
            

          </div>
     `
      }).join(" ");
    }
func();

function adjustDropdownVisibility() {
  const dropdown = document.getElementById('dropdown');

  
  // Get current page URL and extract the pathname
  const currentPage = window.location.pathname;

  // Check if current page is the index page (i.e. '/', '/index.html', or '')
  if (currentPage === '/' || currentPage === '/index.html' || currentPage === '') {
      dropdown.style.display = 'none'; // Hide dropdown on index page
  } else {
      dropdown.style.display = 'block'; // Show dropdown on other pages
  }
}

// Call the function when the page loads
window.onload = adjustDropdownVisibility;



//img priview
function clickme(smallimg){
  let mainimg = document.getElementById('main-img');
  console.log(mainimg)
  mainimg.src = smallimg.src;

}


    


   