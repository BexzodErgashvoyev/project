import React from 'react'
import { Typography } from "@material-tailwind/react";
import { Carousel } from "@material-tailwind/react";


import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

const Menyo = () => {
    const data = [
        {
            label: "pizza",
            value: "html",
            images: [
                { imageLink: "https://upload.wikimedia.org/wikipedia/commons/9/91/Pizza-3007395.jpg" },
                { imageLink: "https://assets.tmecosys.com/image/upload/t_web_rdp_recipe_584x480/img/recipe/ras/Assets/ecaeb2cc-a950-4645-a648-9137305b3287/Derivates/df977b90-193d-49d4-a59d-8dd922bcbf65.jpg" },
                { imageLink: "https://www.7-eleven.ca/_next/image?url=https%3A%2F%2Fimages.contentstack.io%2Fv3%2Fassets%2Fbltbb619fd5c667ba2d%2Fblt72594df0910416c2%2F64cac110c26b1a214ac0e365%2FClassic-Pepperoni-Pizza-Product-Card-1600x1600_(1).png&w=3840&q=75" },
                { imageLink: "https://s3.smartofood.ru/madrolls/menu/26688c48-2e57-5b34-b892-d11c4562e358.webp" },
                { imageLink: "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2011/9/14/1/RX-JOHNSONVILLE_Easy-Sausage-Pizza_s3x4.jpg.rend.hgtvcom.1280.960.suffix/1371603814108.webp" },
                { imageLink: "https://static.wixstatic.com/media/597497_39dfa709d3d845eeaf43eb692e93b31b~mv2.jpg/v1/fill/w_6240,h_4160,al_c,q_90/Pepperoni%20Pizza_1_compressed.jpg" },
            ],
        },
        {
            label: "lavash",
            value: "vue",
            images: [
                { imageLink: "https://anhor.uz/wp-content/uploads/2023/12/side_view_chicken_roll_grilled_chicken_lettuce_cucumber_tomato_mayo_pita_1200x675.jpg" },
                { imageLink: "https://www.chefmarket.ru/blog/wp-content/uploads/2019/10/thin-bread-e1570189286605.jpg" },
                { imageLink: "https://www.rbc.ua/static/img/s/i/side_view_chicken_roll_grilled_chicken_lettuce_cucumber_tomato_mayo_pita_1200x675.jpg" },
                { imageLink: "https://www.gazeta.uz/media/img/2024/08/cJfrgM17244764065925_l.jpg" },
                { imageLink: "https://daryo.uz/cache/2020/05/Lavash-1000x667.jpg" },
                { imageLink: "https://cdn.foodpicasso.com/assets/2025/04/01/ab583b047d7cb52e3a39199339475c0a---jpg_528x260:whitepadding20_4715c_convert.jpg" },
            ],
        },
        {
            label: "gamburger",
            value: "angular",
            images: [
                { imageLink: "https://i.pinimg.com/originals/66/e0/3f/66e03f072ee1fd9c542f9b0d9157dbdf.jpg" },
                { imageLink: "https://static.toiimg.com/photo/79693966.cms" },
                { imageLink: "https://i.pinimg.com/originals/58/b2/e9/58b2e9cbea26a5df08b52fbb50f203fa.jpg" },
                { imageLink: "https://static.toiimg.com/photo/79693966.cms" },
                { imageLink: "https://i.pinimg.com/736x/b8/8e/35/b88e358f7ee770bc570a2163ad54419f.jpg" },
                { imageLink: "https://dikoed.ru/upload/iblock/e23/18348-fishburgery-s-omulem.jpg" },
            ],
        },
        {
            label: "hudoc",
            value: "svelte",
            images: [
                { imageLink: "https://ist.say7.info/img0014/92/1492_0140joo_4368_1024.jpg" },
                { imageLink: "https://100vkusov.ru/recepti/wp-content/uploads/krutix-retseptov-xot-dogov-d45e.webp" },
                { imageLink: "https://images.gastronom.ru/EgeRAvZr5uieLU3HG5Do-YZMxMKY7aq29aDHkks7tyM/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzNhNmFmZWY3LTE3N2YtNGRhOC1hMWI3LWJiZTEyZmVjOGM1Yi5qcGc.webp" },
                { imageLink: "https://img.iamcook.ru/2022/upl/recipes/cat/u-653596122b38c143df7260e9da85ce84.jpg" },
                { imageLink: "https://resizer.mail.ru/p/364ec59a-1acb-5918-b98a-c40a00e4da9e/AQAFXXP-8X25F8rFtIQ1WfbpWPnQWwevGXzhWGUDp9-Gp2TpdSiea5G-9i-9-ihMrLN15lGWeblCjA5Vj6OIHT4uxfg.jpg" },
                { imageLink: "https://i.lefood.menu/wp-content/uploads/w_images/2023/06/recept-74433-1240x827.jpg" },
            ],
        },
    ];





    return (


        <div className="container">


        <figure className="relative w-full">



<Carousel transition={{ duration: 2 }} className="rounded-xl">
  <img
    src="https://api.choparpizza.uz/storage/sliders/2025/02/12/TTPx5e1msAMgpAPkb3y55Lr2L0UYNGqq2Uj1Sh0J.png"
    alt="image 1"
    className="h-[450px] w-full object-cover"
  />
  <img
    src="https://roma2go.com/wp-content/uploads/2025/02/spe-copy.jpg"
    alt="image 2"
    className="h-[450px] w-full object-cover"
  />
  <img
    src="https://roma2go.com/wp-content/uploads/2023/11/Special-One-copy.webp"
    alt="image 3"
    className="h-[450px] w-full object-cover"
  />
</Carousel>


            <div className="grid grid-cols-3">
                <div className="grid place-items-center p-6">
                    <img className="object-cover object-center rounded-full h-96 w-96"
                        src="https://images.contentstack.io/v3/assets/bltcedd8dbd5891265b/blt6542458a3d1e8c6f/664cbc3d213dc5f7fd48a20e/origin-of-sushi-hero.jpeg"
                        alt="nature" />
                </div>
                <div className="grid place-items-center p-6">
                    <img className="object-cover object-center rounded-full h-96 w-96"
                        src="https://accro.fr/wp-content/uploads/2021/08/accro-recette-burger-vegetarien-1-1600x800-c-default.jpg"
                        alt="nature" />
                </div>
                <div className="grid place-items-center p-6">
                    <img className="object-cover object-center rounded-full h-96 w-96"
                        src="https://images.gastronom.ru/EgeRAvZr5uieLU3HG5Do-YZMxMKY7aq29aDHkks7tyM/pr:recipe-cover-image/g:ce/rs:auto:0:0:0/L2Ntcy9hbGwtaW1hZ2VzLzNhNmFmZWY3LTE3N2YtNGRhOC1hMWI3LWJiZTEyZmVjOGM1Yi5qcGc.webp"
                        alt="nature" />
                </div>
            </div>

            <Tabs value="html">
                <TabsHeader>
                    {data.map(({ label, value }) => (
                        <Tab key={value} value={value}>
                            {label}
                        </Tab>
                    ))}
                </TabsHeader>
                <TabsBody className="grid grid-cols-1 gap-4">
                    {data.map(({ value, images }) => (
                        <TabPanel key={value} value={value} className="grid grid-cols-2 gap-4 md:grid-cols-3">
                            {images.map(({ imageLink }, index) => (
                                <div key={index}>
                                    <img className="h-40 w-full rounded-lg object-cover object-center" src={imageLink} alt="image" />
                                </div>
                            ))}
                        </TabPanel>
                    ))}
                </TabsBody>
            </Tabs>




            <div className="flex flex-wrap gap-6 justify-center">
  <div className="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
      <img
        className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
        src="https://roma2go.com/wp-content/uploads/2024/02/Triple-Beef-1.webp"
        alt="Triple Beef"
      />
    </div>
    <div className="px-4 pb-4">
      <h1 className="text-xl font-semibold mb-2">Triple Beef</h1>
      <p className="text-sm text-gray-500 mb-1">140–504 Points</p>
      <p className="text-red-500 font-bold text-lg">160 EGP</p>
    </div>
  </div>


  <div className="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
      <img
        className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
        src="https://roma2go.com/wp-content/uploads/2023/01/Pepperoni-1.webp"
        alt="Pepperoni"
      />
    </div>
    <div className="px-4 pb-4">
      <h1 className="text-xl font-semibold mb-2">Pepperoni</h1>
      <p className="text-sm text-gray-500 mb-1">135–390 Points</p>
      <p className="text-red-500 font-bold text-lg">155 EGP</p>
    </div>
  </div>


  <div className="cursor-pointer group relative flex flex-col bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
      <img
        className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110"
        src="https://roma2go.com/wp-content/uploads/2023/01/Chicken-BBQ.webp"
        alt="BBQ Chicken"
      />
    </div>
    <div className="px-4 pb-4">
      <h1 className="text-xl font-semibold mb-2">BBQ Chicken 🌶️</h1>
      <p className="text-sm text-gray-500 mb-1">135–438 Points</p>
      <p className="text-red-500 font-bold text-lg">155 EGP</p>
    </div>
  </div>
</div>



<div className="flex flex-wrap justify-center gap-6">
  <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
      <img className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
           src="https://api.choparpizza.uz/storage/products/2024/07/15/Nc4raW8NhiVNeaKf2ZZGUZqO6quXIPfgcxUobL81.webp" alt="BBQ Chicken" />
    </div>
    <div className="p-4"></div>
    <h1 className="px-4 text-lg font-semibold">
      Lvash kichkina <br />
      <span className="text-sm font-normal">20cm</span><br />
      <span className="text-red-500 font-bold">20$</span>
    </h1>
    <div className="px-4 pb-4 pt-0 mt-2"></div>
  </div>

  <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
      <img className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
           src="https://api.choparpizza.uz/storage/products/2024/07/31/1KkuF55si1S3OeUePcoSks6BSqIV7SLihZXlfy2U.webp" alt="BBQ Chicken" />
    </div>
    <div className="p-4"></div>
    <h1 className="px-4 text-lg font-semibold">
      Lovash kota <br />
      <span className="text-sm font-normal">30cm</span><br />
      <span className="text-red-500 font-bold">40$</span>
    </h1>
    <div className="px-4 pb-4 pt-0 mt-2"></div>
  </div>

  <div className="cursor-pointer group relative flex flex-col my-6 bg-white shadow-sm border border-slate-200 rounded-lg w-96 hover:shadow-lg transition-shadow duration-300">
    <div className="relative h-80 m-2.5 overflow-hidden text-white rounded-md">
      <img className="transition-transform duration-500 ease-[cubic-bezier(0.25, 1, 0.5, 1)] transform group-hover:scale-110" 
           src="https://roma2go.com/wp-content/uploads/2024/11/Du-Pie_Roma.webp" alt="BBQ Chicken" />
    </div>
    <div className="p-4"></div>
    <h1 className="px-4 text-lg font-semibold">
      Ortanicha Lovash <br />
      <span className="text-sm font-normal">25cm</span><br />
      <span className="text-red-500 font-bold">30$</span>
    </h1>
    <div className="px-4 pb-4 pt-0 mt-2"></div>
  </div>
</div>






   <div>
    <img
      className="h-96 w-full object-cover object-center"
      src="https://www.coca-cola.com/content/dam/onexp/global/central/offerings/coke-meals-vipizza/hero_vipizza_desktop.png"
      alt="nature image"
    />
    </div>




    <div className="bg-blue-gray-600 text-white py-8 px-6 mt-28">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Ish Vaqti</h2>
            <p className="text-lg">8:00 - 00:00</p>
            <div className="space-y-2 text-gray-300">
                <p>Dushanba</p>
                <p>Seshanba</p>
                <p>Chorshanba</p>
                <p>Payshanba</p>
                <p>Juma</p>
                <p>Shanba</p>
                <p>Yakshanba</p>
            </div>
        </div>


        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Menyu</h2>
            <div className="space-y-2 text-gray-300">
                <p>Pizza</p>
                <p>Lavash</p>
                <p>Xudok</p>
                <p>Gamburger</p>
                <p>Com Bo</p>
            </div>
        </div>


        <div className="space-y-4">
            <h2 className="text-xl font-semibold">Telefon Nomer</h2>
            <div className="space-y-2 text-gray-300">
                <p>88-539-79-80</p>
                <p>99-300-79-81</p>
            </div>
        </div>
    </div>

    <div className="mt-8 text-center text-gray-400">
        <p>&copy; 2025 Your Company. Bexzod bili.</p>
    </div>
</div>



        </figure>
        </div>
    )
}

export default Menyo;

