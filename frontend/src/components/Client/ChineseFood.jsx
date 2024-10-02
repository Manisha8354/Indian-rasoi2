import React from 'react'

const chineseFoodData = [
    { id: 1, name: 'Kung Pao Chicken', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1dOTmPd88XDHxOP5TIHePQsz74PoGLzUvOw&s' },
    { id: 2, name: 'Sweet and Sour Pork', image: 'https://cdn.sanity.io/images/2r0kdewr/production/0bc6f529c1200c84a8465d9317c3029898a4d4fa-1500x844.jpg' },
    { id: 3, name: 'Spring Rolls', image: 'https://onestophalal.com/cdn/shop/articles/frozen_spring_rolls-1699236796097_1200x.jpg?v=1699236891' },
    { id: 4, name: 'Fried Rice', image: 'https://img.lovepik.com/photo/48018/1842.jpg_wh860.jpg' },
    { id: 5, name: 'Mapo Tofu', image: 'https://i.ytimg.com/vi/HEV3iQLcx9Q/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLC2QnoAzBj1vzE5SmnsDgYuiA4UFQ' },
    { id: 6, name: 'Chow Mein', image: 'https://img.freepik.com/free-photo/top-view-delicious-noodles-concept_23-2148773775.jpg' },
    { id: 7, name: 'Peking Duck', image: 'https://s3.us-east-1.amazonaws.com/assets.mapleleaffarms.com/content/_1200x630_crop_center-center_82_none/Whole-Peking-Duck.jpg?mtime=1633983994' },
    { id: 8, name: 'Dumplings', image: 'https://t4.ftcdn.net/jpg/05/77/98/89/360_F_577988970_g0UHk76JqWkc9wPlwz3wB9rgGFuzmOZ6.jpg' },
    { id: 9, name: 'Hot Pot', image: 'https://c4.wallpaperflare.com/wallpaper/611/939/665/hot-pot-soup-food-wallpaper-preview.jpg' },
    { id: 10, name: 'Szechuan Noodles', image: 'https://t4.ftcdn.net/jpg/05/82/47/85/360_F_582478598_fTvsFztkbpLJ5W0VsMO5sN5SQqDr4ug3.jpg' },
    { id: 11, name: 'Egg Fried Rice', image: 'https://www.yummytummyaarthi.com/wp-content/uploads/2023/08/egg-fried-rice-1.jpg' },
    { id: 12, name: 'Chili Chicken', image: 'https://www.licious.in/blog/wp-content/uploads/2022/08/Shutterstock_1237679371.jpg' },
  ];

export default function ChineseFood() {
  return (
    <div className='mt-[130px]'>
      <div className="bg-black p-8">
      <h1 className="text-3xl text-white mb-8 text-center">Chinese Food Menu</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {chineseFoodData.map(food => (
          <div key={food.id} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
            <img src={food.image} alt={food.name} className="w-full h-48 object-cover" />
            <div className="p-4 text-center">
              <h2 className="text-lg text-white font-bold">{food.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>

    </div>
  )
}
