// let card =document.getElementById("card")
// card.innerHTML="<img src='https://images.meesho.com/images/products/370158187/4qkfs_400.webp'> <h3>MEN DENIUM JEANS</h3> <p>599Rs</p> "

let data= [
    {
      "id": 6,
      "title": "Classic Comfort Fit Joggers",
      "price": 25,
      "description": "Discover the perfect blend of style and comfort with our Classic Comfort Fit Joggers. These versatile black joggers feature a soft elastic waistband with an adjustable drawstring, two side pockets, and ribbed ankle cuffs for a secure fit. Made from a lightweight and durable fabric, they are ideal for both active days and relaxed lounging.",
      "images": [
        "https://i.imgur.com/ZKGofuB.jpeg",
        "https://i.imgur.com/GJi73H0.jpeg",
        "https://i.imgur.com/633Fqrz.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 8,
      "title": "Classic Red Jogger Sweatpants",
      "price": 98,
      "description": "Experience ultimate comfort with our red jogger sweatpants, perfect for both workout sessions and lounging around the house. Made with soft, durable fabric, these joggers feature a snug waistband, adjustable drawstring, and practical side pockets for functionality. Their tapered design and elastic cuffs offer a modern fit that keeps you looking stylish on the go.",
      "images": [
        "https://i.imgur.com/9LFjwpI.jpeg",
        "https://i.imgur.com/vzrTgUR.jpeg",
        "https://i.imgur.com/p5NdI6n.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 9,
      "title": "Classic Navy Blue Baseball Cap",
      "price": 61,
      "description": "Step out in style with this sleek navy blue baseball cap. Crafted from durable material, it features a smooth, structured design and an adjustable strap for the perfect fit. Protect your eyes from the sun and complement your casual looks with this versatile and timeless accessory.",
      "images": [
        "https://i.imgur.com/R3iobJA.jpeg",
        "https://i.imgur.com/Wv2KTsf.jpeg",
        "https://i.imgur.com/76HAxcA.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 10,
      "title": "Classic Blue Baseball Cap",
      "price": 86,
      "description": "Top off your casual look with our Classic Blue Baseball Cap, made from high-quality materials for lasting comfort. Featuring a timeless six-panel design with a pre-curved visor, this adjustable cap offers both style and practicality for everyday wear.",
      "images": [
        "https://i.imgur.com/wXuQ7bm.jpeg",
        "https://i.imgur.com/BZrIEmb.jpeg",
        "https://i.imgur.com/KcT6BE0.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 11,
      "title": "Classic Red Baseball Cap",
      "price": 35,
      "description": "Elevate your casual wardrobe with this timeless red baseball cap. Crafted from durable fabric, it features a comfortable fit with an adjustable strap at the back, ensuring one size fits all. Perfect for sunny days or adding a sporty touch to your outfit.",
      "images": [
        "https://i.imgur.com/cBuLvBi.jpeg",
        "https://i.imgur.com/N1GkCIR.jpeg",
        "https://i.imgur.com/kKc9A5p.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 12,
      "title": "Classic Black Baseball Cap",
      "price": 58,
      "description": "Elevate your casual wear with this timeless black baseball cap. Made with high-quality, breathable fabric, it features an adjustable strap for the perfect fit. Whether you’re out for a jog or just running errands, this cap adds a touch of style to any outfit.",
      "images": [
        "https://i.imgur.com/KeqG6r4.jpeg",
        "https://i.imgur.com/xGQOw3p.jpeg",
        "https://i.imgur.com/oO5OUjb.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 13,
      "title": "Classic Olive Chino Shorts",
      "price": 84,
      "description": "Elevate your casual wardrobe with these classic olive chino shorts. Designed for comfort and versatility, they feature a smooth waistband, practical pockets, and a tailored fit that makes them perfect for both relaxed weekends and smart-casual occasions. The durable fabric ensures they hold up throughout your daily activities while maintaining a stylish look.",
      "images": [
        "https://i.imgur.com/UsFIvYs.jpeg",
        "https://i.imgur.com/YIq57b6.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 14,
      "title": "Classic High-Waisted Athletic Shorts",
      "price": 43,
      "description": "Stay comfortable and stylish with our Classic High-Waisted Athletic Shorts. Designed for optimal movement and versatility, these shorts are a must-have for your workout wardrobe. Featuring a figure-flattering high waist, breathable fabric, and a secure fit that ensures they stay in place during any activity, these shorts are perfect for the gym, running, or even just casual wear.",
      "images": [
        "https://i.imgur.com/eGOUveI.jpeg",
        "https://i.imgur.com/UcsGO7E.jpeg",
        "https://i.imgur.com/NLn4e7S.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 15,
      "title": "Classic White Crew Neck T-Shirt",
      "price": 39,
      "description": "Elevate your basics with this versatile white crew neck tee. Made from a soft, breathable cotton blend, it offers both comfort and durability. Its sleek, timeless design ensures it pairs well with virtually any outfit. Ideal for layering or wearing on its own, this t-shirt is a must-have staple for every wardrobe.",
      "images": [
        "https://i.imgur.com/axsyGpD.jpeg",
        "https://i.imgur.com/T8oq9X2.jpeg",
        "https://i.imgur.com/J6MinJn.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 16,
      "title": "Classic White Tee - Timeless Style and Comfort",
      "price": 73,
      "description": "Elevate your everyday wardrobe with our Classic White Tee. Crafted from premium soft cotton material, this versatile t-shirt combines comfort with durability, perfect for daily wear. Featuring a relaxed, unisex fit that flatters every body type, it's a staple piece for any casual ensemble. Easy to care for and machine washable, this white tee retains its shape and softness wash after wash. Pair it with your favorite jeans or layer it under a jacket for a smart look.",
      "images": [
        "https://i.imgur.com/Y54Bt8J.jpeg",
        "https://i.imgur.com/SZPDSgy.jpeg",
        "https://i.imgur.com/sJv4Xx0.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 17,
      "title": "Classic Black T-Shirt",
      "price": 35,
      "description": "Elevate your everyday style with our Classic Black T-Shirt. This staple piece is crafted from soft, breathable cotton for all-day comfort. Its versatile design features a classic crew neck and short sleeves, making it perfect for layering or wearing on its own. Durable and easy to care for, it's sure to become a favorite in your wardrobe.",
      "images": [
        "https://i.imgur.com/9DqEOV5.jpeg",
        "https://i.imgur.com/ae0AEYn.jpeg",
        "https://i.imgur.com/mZ4rUjj.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 1,
        "name": "Clothes",
        "image": "https://i.imgur.com/QkIa5tT.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 19,
      "title": "Sleek Wireless Headphone & Inked Earbud Set",
      "price": 44,
      "description": "Experience the fusion of style and sound with this sophisticated audio set featuring a pair of sleek, white wireless headphones offering crystal-clear sound quality and over-ear comfort. The set also includes a set of durable earbuds, perfect for an on-the-go lifestyle. Elevate your music enjoyment with this versatile duo, designed to cater to all your listening needs.",
      "images": [
        "https://i.imgur.com/yVeIeDa.jpeg",
        "https://i.imgur.com/jByJ4ih.jpeg",
        "https://i.imgur.com/KXj6Tpb.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 20,
      "title": "Sleek Comfort-Fit Over-Ear Headphones",
      "price": 28,
      "description": "Experience superior sound quality with our Sleek Comfort-Fit Over-Ear Headphones, designed for prolonged use with cushioned ear cups and an adjustable, padded headband. Ideal for immersive listening, whether you're at home, in the office, or on the move. Their durable construction and timeless design provide both aesthetically pleasing looks and long-lasting performance.",
      "images": [
        "https://i.imgur.com/SolkFEB.jpeg",
        "https://i.imgur.com/KIGW49u.jpeg",
        "https://i.imgur.com/mWwek7p.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 22,
      "title": "Sleek Wireless Computer Mouse",
      "price": 10,
      "description": "Experience smooth and precise navigation with this modern wireless mouse, featuring a glossy finish and a comfortable ergonomic design. Its responsive tracking and easy-to-use interface make it the perfect accessory for any desktop or laptop setup. The stylish blue hue adds a splash of color to your workspace, while its compact size ensures it fits neatly in your bag for on-the-go productivity.",
      "images": [
        "https://i.imgur.com/w3Y8NwQ.jpeg",
        "https://i.imgur.com/WJFOGIC.jpeg",
        "https://i.imgur.com/dV4Nklf.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 23,
      "title": "Sleek Modern Laptop with Ambient Lighting",
      "price": 43,
      "description": "Experience next-level computing with our ultra-slim laptop, featuring a stunning display illuminated by ambient lighting. This high-performance machine is perfect for both work and play, delivering powerful processing in a sleek, portable design. The vibrant colors add a touch of personality to your tech collection, making it as stylish as it is functional.",
      "images": [
        "https://i.imgur.com/OKn1KFI.jpeg",
        "https://i.imgur.com/G4f21Ai.jpeg",
        "https://i.imgur.com/Z9oKRVJ.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    },
    {
      "id": 24,
      "title": "Sleek Modern Laptop for Professionals",
      "price": 97,
      "description": "Experience cutting-edge technology and elegant design with our latest laptop model. Perfect for professionals on-the-go, this high-performance laptop boasts a powerful processor, ample storage, and a long-lasting battery life, all encased in a lightweight, slim frame for ultimate portability. Shop now to elevate your work and play.",
      "images": [
        "https://i.imgur.com/ItHcq7o.jpeg",
        "https://i.imgur.com/55GM3XZ.jpeg",
        "https://i.imgur.com/tcNJxoW.jpeg"
      ],
      "creationAt": "2024-12-28T20:58:52.000Z",
      "updatedAt": "2024-12-28T20:58:52.000Z",
      "category": {
        "id": 2,
        "name": "Electronics",
        "image": "https://i.imgur.com/ZANVnHE.jpeg",
        "creationAt": "2024-12-28T20:58:52.000Z",
        "updatedAt": "2024-12-28T20:58:52.000Z"
      }
    
    }
  ]
//   console.log(data)

let cardcontainer=document.getElementById("cardcontainer")
cardcontainer.style.display="flex"
cardcontainer.style.flexWrap="wrap"
  for(i=0;i<data.length;i++){
    let card=document.createElement("div")
    card.innerHTML=`<img src='${data[i].images}' width="300"/>
    <h1>${data[i].title}</h1>
    <h3>${data[i].description}</h3>
    <p>${data[i].price}</p>`
   
    cardcontainer.appendChild(card)
     card.style.width="300px"
  }
  
  