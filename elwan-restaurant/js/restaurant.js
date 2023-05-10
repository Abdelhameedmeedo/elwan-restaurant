let our_branches = document.querySelector('.our_branches')
let rest_headings = document.querySelectorAll('.website .content-menu li')
let content_area = document.querySelector('.website .content')
let meals = rest_headings[5],pizza = rest_headings[4],grilled = rest_headings[3],
    italian = rest_headings[2],sandwitch = rest_headings[1],soup = rest_headings[0]
let contact = document.querySelector('.contact')
let span = document.querySelectorAll('.contact .social ul li a span')
let contact_ul = document.querySelectorAll('.contact .social ul li')
let contact_btn = contact.querySelector('button')
let popup= document.querySelector('.popup')
let room_1 = popup.querySelector('.room_1')
let room_2 = popup.querySelector('.room_2')
let popup_btn = popup.querySelector('button')
let window_height = 800
let header = document.querySelector('.header .row')

//active buttons
rest_headings.forEach(el=>{
    el.addEventListener('click',()=>{
        rest_headings.forEach(ele=>{
            ele.classList.remove('active')
        })
        el.classList.add('active')
    })
})
//toggle contact
let open_contact = ()=>{
    span.forEach(el=>{
        el.classList.add('span_toggle')
    })
    contact.classList.add('open_close')
}
contact_btn.addEventListener('mouseenter',open_contact)
let close_contact = ()=>{
    span.forEach(el=>{
        el.classList.remove('span_toggle')
    })
    contact.classList.remove('open_close')
}
contact.addEventListener('mouseleave',close_contact)
//popup
let places = ['البلينا-جوار بنك مصر الجديد','أولاد عليو-أولاد علي','جرجا-بعد الكوبري']
let names = ['علوان_1','شام وعلوان','جرجاوي سويت']
for(let i=0; i<places.length;i++){
    let popup_td = document.createElement('td')
        popup_td.textContent = names[i]
    let popup_td_2 = document.createElement('td')
        popup_td_2.textContent = places[i]
    //appending
    room_1.appendChild(popup_td)
    room_2.appendChild(popup_td_2)
}
//open popup
our_branches.addEventListener('click',()=>{
    popup.style.display = 'block'
})
//close popup
popup_btn.addEventListener('click',()=>{
    if(popup.style.display == 'block'){
        popup.style.display = 'none'
    }
})
//add background to navbar when scrolling
window.addEventListener('scroll',()=>{
    let scroll_position = window.scrollY + window.innerHeight
    if(scroll_position >= window_height && window.innerWidth == 1280){
        header.classList.add('nav_back')
    }else{
        header.classList.remove('nav_back')
    }
})

///fetch data///
fetch('../js/db/db_1.json')
.then(resp=>resp.json())
.then(data=>{
    let array = []
   array.push(data)
   ///funcs
    for(let i = 0; i < array.length; i++){
        let data_meals = array[0]['meals']
        let data_pizza_normal = array[0]['pizza'][0]['normal']
        let data_pizza_mini = array[0]['pizza'][1]['mini']
        let data_pizza_meat_mix = array[0]['pizza'][2]['meat_mix']
        let data_pizza_cheese_mix = array[0]['pizza'][3]['cheese_mix']
        let data_grilled = array[0]['grilled']
        let data_italian = array[0]['italian_pasta']
        let data_soups = array[0]['soups']
        let data_sandwitch = array[0]['sandwitch']
        /////////////////////meals//////////////////////////
        let meals_ul = document.createElement('ul')
        meals_ul.className = 'meals'
        for(let i in data_meals){
            let meals_img = data_meals[i]['img']
            let meals_name = data_meals[i]['name']
            let meals_price = data_meals[i]['price']
            let meals_free = data_meals[i]['free']
            //creation
            let item = document.createElement('li')
            let img = document.createElement('img')
                img.src = meals_img
                img.title = 'عرض فقط'
            let name = document.createElement('h4')
                name.innerText = meals_name
            let price = document.createElement('h5')
                price.innerText = meals_price
            let free = document.createElement('h6')
                free.innerText = `${meals_free} مجانية`
            //appending
            item.appendChild(img)
            item.appendChild(name)
            item.appendChild(price)
            item.appendChild(free)
            content_area.appendChild(item)
            meals_ul.appendChild(item)
        }
        content_area.appendChild(meals_ul)
        ////////////////////////////////////////////////
        // pizza section
            let pizza = document.createElement('div')
                pizza.className = 'pizza'
            let row_div = document.createElement('div')
                row_div.className = 'row'
            let left_col = document.createElement('div')
                left_col.className = 'col-lg-12 left_col'
            let center_col = document.createElement('div')
                center_col.className = 'col-lg-12 center_col'
            let right_col = document.createElement('div')
                right_col.className = 'col-lg-12 right_col'
            let far_right = document.createElement('div')
                far_right.className = 'col-lg-12 far_right_col'
            //normal// 
            let normal_heading = document.createElement('h3')
                normal_heading.innerText = 'العادية'
            let pizza_ul = document.createElement('ul')
            for(let i in data_pizza_normal){
                let normal = data_pizza_normal[i]
                let normal_img = normal['img']
                let normal_name = normal['name']
                //creation
                let item = document.createElement('li')
                let img = document.createElement('img')
                    img.src = normal_img
                    img.title = 'عرض فقط'
                let name = document.createElement('h4')
                    name.innerText = normal_name
                //volum
                let volum_ul = document.createElement('ul')
                for(let i in normal['volum']){
                    let volum_L = normal['volum'][i]['L']
                    let volum_M = normal['volum'][i]['M']
                    let volum_S = normal['volum'][i]['S']
                    let volum_size = normal['volum'][i]['size']
                    let volum_items = document.createElement('li')
                    let size = document.createElement('h2')
                        size.textContent = volum_size
                    let L = document.createElement('h5')
                        L.textContent = volum_L
                    let M = document.createElement('h5')
                        M.textContent = volum_M
                    let S = document.createElement('h5')
                        S.textContent = volum_S
                    //appending
                    volum_items.appendChild(size)
                    volum_items.appendChild(L)
                    volum_items.appendChild(M)
                    volum_items.appendChild(S)
                    volum_ul.appendChild(volum_items)
                    item.appendChild(img)
                    item.appendChild(name)
                    item.appendChild(volum_ul)
                }
                //appending
                pizza_ul.appendChild(item)
                left_col.appendChild(normal_heading)
                left_col.appendChild(pizza_ul) 
            }
            //mini pizza
            let mini_heading = document.createElement('h3')
                mini_heading.innerText = 'الحجم الصغير'
            let mini_ul = document.createElement('ul')
            for(let i in data_pizza_mini){
                let mini = data_pizza_mini[i]
                let mini_img = mini['img']
                let mini_name = mini['name']
                 let mini_price = mini['price']
                //creation
                let item = document.createElement('li')
                let img = document.createElement('img')
                    img.src = mini_img
                    img.title = 'عرض فقط'
                let name = document.createElement('h4')
                    name.innerText = mini_name
                let price = document.createElement('h5')
                    price.innerText = mini_price
                //appending
                item.appendChild(img)
                item.appendChild(name)
                item.appendChild(price)
                mini_ul.appendChild(item)
                center_col.appendChild(mini_heading)
                center_col.appendChild(mini_ul)
            }
            //meat mix
            let meat_heading = document.createElement('h3')
                meat_heading.innerText = 'باللحمة'
            let meat_ul = document.createElement('ul')
            let meat_mix = data_pizza_meat_mix
            let meat_mix_img = meat_mix[0]['img']
            let meat_mix_name = meat_mix[0]['name']
            //creation
            let item = document.createElement('li')
            let img = document.createElement('img')
                img.src = meat_mix_img
                img.title = 'عرض فقط'
            let name = document.createElement('h4')
                name.innerText = meat_mix_name
            //volum
            let volum_ul = document.createElement('ul')
            for(let i in meat_mix[0]['volum']){
                let volum_L = meat_mix[0]['volum'][i]['L']
                let volum_M = meat_mix[0]['volum'][i]['M']
                let volum_S = meat_mix[0]['volum'][i]['S']
                let volum_size = meat_mix[0]['volum'][i]['size']
                let volum_items = document.createElement('li')
                let size = document.createElement('h2')
                    size.textContent = volum_size
                let L = document.createElement('h5')
                    L.textContent = volum_L
                let M = document.createElement('h5')
                    M.textContent = volum_M
                let S = document.createElement('h5')
                    S.textContent = volum_S
                //appending
                volum_items.appendChild(size)
                volum_items.appendChild(L)
                volum_items.appendChild(M)
                volum_items.appendChild(S)
                volum_ul.appendChild(volum_items)
                item.appendChild(img)
                item.appendChild(name)
                item.appendChild(volum_ul)
            }
            //appending meat mix
            meat_ul.appendChild(item)
            right_col.appendChild(meat_heading)
            right_col.appendChild(meat_ul) 
            //cheese mix
            let cheese_heading = document.createElement('h3')
                cheese_heading.innerText = 'بالجبنة'
            let cheese_ul = document.createElement('ul')
            for(let i in data_pizza_cheese_mix){
                let cheese_mix = data_pizza_cheese_mix[i]
                let cheese_img = cheese_mix['img']
                let cheese_name = cheese_mix['name']
                //creation
                let item = document.createElement('li')
                let img = document.createElement('img')
                    img.src = cheese_img
                    img.title = 'عرض فقط'
                let name = document.createElement('h4')
                    name.innerText = cheese_name
                //volum
                let volum_ul = document.createElement('ul')
                for(let i in cheese_mix['volum']){
                    let volum_L = cheese_mix['volum'][i]['L']
                    let volum_M = cheese_mix['volum'][i]['M']
                    let volum_S = cheese_mix['volum'][i]['S']
                    let volum_size = cheese_mix['volum'][i]['size']
                    let volum_items = document.createElement('li')
                    let size = document.createElement('h2')
                        size.textContent = volum_size
                    let L = document.createElement('h5')
                        L.textContent = volum_L
                    let M = document.createElement('h5')
                        M.textContent = volum_M
                    let S = document.createElement('h5')
                        S.textContent = volum_S
                    //appending
                    volum_items.appendChild(size)
                    volum_items.appendChild(L)
                    volum_items.appendChild(M)
                    volum_items.appendChild(S)
                    volum_ul.appendChild(volum_items)
                    item.appendChild(img)
                    item.appendChild(name)
                    item.appendChild(volum_ul)
                }
                //appending
                cheese_ul.appendChild(item)
                far_right.appendChild(cheese_heading)
                far_right.appendChild(cheese_ul) 
            }
            //pizza section
            row_div.appendChild(left_col)
            row_div.appendChild(center_col)
            row_div.appendChild(right_col)
            row_div.appendChild(far_right)
            pizza.appendChild(row_div)
            content_area.appendChild(pizza)

        // grilld section
        let grilled_ul = document.createElement('ul')
            grilled_ul.className = 'grilled'
        for(let i in data_grilled){
            let grilled_img = data_grilled[i]['img']
            let grilled_name = data_grilled[i]['name']
            let grilled_price = data_grilled[i]['price']
            //creation
            let item = document.createElement('li')
            let img = document.createElement('img')
                img.src = grilled_img
                img.title = 'عرض فقط'
            let name = document.createElement('h4')
                name.innerText = grilled_name
            let price = document.createElement('h5')
                price.innerText = grilled_price
            //appending
            item.appendChild(img)
            item.appendChild(name)
            item.appendChild(price)
            content_area.appendChild(item)
            grilled_ul.appendChild(item)
        }
        content_area.appendChild(grilled_ul)

        // italian section
        let italian_ul = document.createElement('ul')
            italian_ul.className = 'italian'
        for(let i in data_italian){
            let italian_img = data_italian[i]['img']
            let italian_name = data_italian[i]['name']
            let italian_orice = data_italian[i]['price']
            //creation
            let item = document.createElement('li')
            let img = document.createElement('img')
                img.src = italian_img
                img.title = 'عرض فقط'
            let name = document.createElement('h4')
                name.innerText = italian_name
            let price = document.createElement('h5')
                price.innerText = italian_orice
            //appending
            item.appendChild(img)
            item.appendChild(name)
            item.appendChild(price)
            content_area.appendChild(item)
            italian_ul.appendChild(item)
        }
        content_area.appendChild(italian_ul)

        // soups section
        let soups_ul = document.createElement('ul')
            soups_ul.className = 'soups'
        for(let i in data_soups){
            let soups_img = data_soups[i]['img']
            let soups_nae = data_soups[i]['name']
            let soups_price = data_soups[i]['price']
            //creation
            let item = document.createElement('li')
            let img = document.createElement('img')
                img.src = soups_img
                img.title = 'عرض فقط'
            let name = document.createElement('h4')
                name.innerText = soups_nae
            let price = document.createElement('h5')
                price.innerText = soups_price
            //appending
            item.appendChild(img)
            item.appendChild(name)
            item.appendChild(price)
            content_area.appendChild(item)
            soups_ul.appendChild(item)
        }
        content_area.appendChild(soups_ul)

        // sandwitch section
        let sandwitch_ul = document.createElement('ul')
            sandwitch_ul.className = 'sandwitch'
        for(let i in data_sandwitch){
            let sandwitch_img = data_sandwitch[i]['img']
            let sandwitch_name = data_sandwitch[i]['name']
            let sandwitch_price = data_sandwitch[i]['price']
            //creation
            let item = document.createElement('li')
            let img = document.createElement('img')
                img.src = sandwitch_img
                img.title = 'عرض فقط'
            let name = document.createElement('h4')
                name.innerText = sandwitch_name
            let price = document.createElement('h5')
                price.innerText = sandwitch_price
            //appending
            item.appendChild(img)
            item.appendChild(name)
            item.appendChild(price)
            content_area.appendChild(item)
            sandwitch_ul.appendChild(item)
        }
        content_area.appendChild(sandwitch_ul)

        /// sections ///
        let meals_section = document.querySelector('.content .meals')
        let pizza_section = document.querySelector('.content .pizza')
        let grilled_section = document.querySelector('.content .grilled')
        let italian_section = document.querySelector('.content .italian')
        let sandwitch_section = document.querySelector('.content .sandwitch')
        let soups_section = document.querySelector('.content .soups')
            //hide section
            pizza_section.style.display = 'none'
            grilled_section.style.display = 'none'
            italian_section.style.display = 'none'
            sandwitch_section.style.display = 'none'
            soups_section.style.display = 'none'

        ///events///
        rest_headings[5].addEventListener('click',()=>{     //meals
            if(meals_section.style.display == 'none'){
                meals_section.style.display = 'grid'
                pizza_section.style.display = 'none'
                italian_section.style.display = 'none'
                grilled_section.style.display = 'none' 
                sandwitch_section.style.display = 'none'     
                soups_section.style.display = 'none' 
            }
        })
        rest_headings[4].addEventListener('click',()=>{ //pizza
            if(pizza_section.style.display = 'none'){
                    pizza_section.style.display = 'grid'
                    meals_section.style.display = 'none'
                    italian_section.style.display = 'none'
                    grilled_section.style.display = 'none' 
                    sandwitch_section.style.display = 'none'     
                    soups_section.style.display = 'none' 
            }
        })
        rest_headings[3].addEventListener('click',()=>{ //grilld
            if(grilled_section.style.display == 'none'){
                grilled_section.style.display = 'grid'
                pizza_section.style.display = 'none'
                meals_section.style.display = 'none'
                italian_section.style.display = 'none'
                sandwitch_section.style.display = 'none'     
                soups_section.style.display = 'none' 
            }
        })
        rest_headings[2].addEventListener('click',()=>{ //italian
            if(italian_section.style.display == 'none'){
                italian_section.style.display = 'grid'
                pizza_section.style.display = 'none'
                meals_section.style.display = 'none'
                grilled_section.style.display = 'none' 
                sandwitch_section.style.display = 'none'     
                soups_section.style.display = 'none' 
            }
        })
        rest_headings[1].addEventListener('click',()=>{ //sandwitch
            if(sandwitch_section.style.display == 'none'){
                sandwitch_section.style.display = 'grid' 
                pizza_section.style.display = 'none'
                meals_section.style.display = 'none'
                italian_section.style.display = 'none'
                grilled_section.style.display = 'none' 
                soups_section.style.display = 'none' 
            }
        })
        rest_headings[0].addEventListener('click',()=>{ //soups
            if(soups_section.style.display == 'none'){
                soups_section.style.display = 'grid' 
                pizza_section.style.display = 'none'
                meals_section.style.display = 'none'
                italian_section.style.display = 'none'
                grilled_section.style.display = 'none' 
                sandwitch_section.style.display = 'none'     
            }
        })
    }
})