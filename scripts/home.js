var images =["https://img.freepik.com/free-photo/fashion-collection-design-shopping-graphic-words_53876-125567.jpg?size=626&ext=jpg&ga=GA1.1.2005001549.1724926083&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/showcasing-tshirts-hanger-clothing-retailer-shop-online-shop-marketing_1039005-11893.jpg?size=626&ext=jpg&ga=GA1.1.2005001549.1724926083&semt=ais_hybrid",
    "https://img.freepik.com/free-vector/illustration-boutique-shop-logo-stamp-banner_53876-6869.jpg?size=626&ext=jpg&ga=GA1.1.2005001549.1724926083&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/black-t-shirt-with-price-tag_1235831-166421.jpg?size=626&ext=jpg&ga=GA1.1.2005001549.1724926083&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/sleek-sportswear-collection-modern-athlete-clean-background_578399-5986.jpg?size=626&ext=jpg&ga=GA1.1.2005001549.1724926083&semt=ais_hybrid",
    "https://img.freepik.com/premium-photo/woman-is-looking-clothes-rack-with-shirt-that-says-she-is-looking-it_423236-13740.jpg?size=626&ext=jpg&ga=GA1.1.2005001549.1724926083&semt=ais_hybrid"]
    var image = document.createElement("img")
    let content = document.querySelector("#matter")
    image.id="styles"
    image.src= images[0]
    content.append(image)
    
    let i =0;
    let heading = document.createElement("h3")
    heading.innerText= "About this website"
    let para = document.createElement("p")
    para.innerText ="An e-commerce clothing website is an online platform designed for purchasing apparel and accessories. These sites range from branded retailers, which sell products from a single brand, to large marketplaces like Amazon and ASOS, where multiple brands and sellers are represented. Niche or boutique stores often focus on specialized markets such as sustainable fashion or luxury wear. Key features of these websites include detailed product listings with descriptions, size options, and high-quality images, as well as user reviews and ratings that help guide purchasing decisions. Advanced search and filter options allow users to easily find specific items, and many sites offer personalized recommendations based on browsing history. The user experience is crucial, with mobile optimization, a streamlined shopping cart, and checkout process, and clear information on shipping and returns being essential components. Popular examples include ASOS, Zara, and Boohoo, each known for their unique approach to online fashion retail"
    setInterval( function (){
     if (i == images.length){
        i = 0;
     }
     image.src = images[i++]
     content.append(image,heading,para);
    },1000)
    