
const form_data = document.querySelector('#my-form')
const my_list = document.querySelector('#items')

//Array Items
const items  = []

//Add Items 
form_data.addEventListener('submit', (e)=> {
    e.preventDefault()
    const input_data = e.target.elements.list.value
    
    if(input_data){
        e.target.elements.list.value = ''
        items.push(input_data)
        my_list.innerHTML = items.join("<br>") + "<br>" 
    }else{
        my_list.innerHTML = 'Items not provided please add the items'
        e.target.elements.list.value = ''
    }
})

//Wipe all the data
const removeAll = document.querySelector('#wipe')

removeAll.addEventListener('click', ()=> {
    setTimeout(()=> {
     return my_list.innerHTML = 'All items have been removed please add new items'
    },1000)
})
