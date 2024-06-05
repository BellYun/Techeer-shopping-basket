// src/mocks/handlers.ts
import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://example.com/products', ()=>{
    return HttpResponse.json({
      "response": [
        {
          "id": 1,
          "price": 10000,
          "name": "치킨",
          "imageUrl": "http://example.com/chicken.jpg"
        },
        {
          "id": 2,
          "price": 20000,
          "name": "피자",
          "imageUrl": "http://example.com/pizza.jpg"
        },
        {
          "id": 3,
          "price": 20000,
          "name": "족발",
          "imageUrl": "http://example.com/pizza.jpg"
        },
        {
          "id": 4,
          "price": 20000,
          "name": "보쌈",
          "imageUrl": "http://example.com/pizza.jpg"
        }
      ]
    })
  }),
  http.get('https://example.com/products/id', ()=>{
    return HttpResponse.json({
      "response": {
        "id": 1,
        "price": 10000,
        "name": "치킨",
        "imageUrl": "http://example.com/chicken.jpg"
      }
    })
  }),
  http.get('https://example.com/orderList', ()=>{
    return HttpResponse.json({
      "response": [
        {
          "id": 1,
          "orderDetails": [
            {
              "id": 1,
              "price": 10000,
              "name": "치킨",
              "imageUrl": "http://example.com/chicken.jpg",
              "quantity": 5
            },
            {
              "id": 2,
              "price": 20000,
              "name": "피자",
              "imageUrl": "http://example.com/pizza.jpg",
              "quantity": 3
            }
          ]
        },
        {
          "id": 2,
          "orderDetails": [
            {
              "id": 1,
              "price": 10000,
              "name": "치킨",
              "imageUrl": "http://example.com/chicken.jpg",
              "quantity": 5
            },
            {
              "id": 2,
              "price": 20000,
              "name": "피자",
              "imageUrl": "http://example.com/pizza.jpg",
              "quantity": 3
            }
          ]
        }
      ]
    })
  }),
  http.get('https://example.com/order', ()=>{
    return HttpResponse.json({
      "response": {
        "id": 1,
        "orderDetails": [
          {
            "id": 1,
            "price": 10000,
            "name": "치킨",
            "imageUrl": "http://example.com/chicken.jpg",
            "quantity": 5
          },
          {
            "id": 2,
            "price": 20000,
            "name": "피자",
            "imageUrl": "http://example.com/pizza.jpg",
            "quantity": 3
          }
        ]
      }
    })
  }),
  http.post('/carts',async ({request}) => {
    const info = await request.formData()
    console.log('Logging', info.get('product'))    
  })
]