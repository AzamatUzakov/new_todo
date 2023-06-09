let form = document.querySelector('form')
let form_modal = document.querySelector('.edit')
let container = document.querySelector('.container')
let close = document.querySelector('.close')
let modal = document.querySelector('.modal_bg')
let todos = []
console.log(form_modal);
form.onsubmit = (event) => {
    event.preventDefault()

    let todo = {
        id: Math.random(),
        isDone: false,
        time: new Date().getHours() + ":" + new Date().getMinutes()
    }

    let fm = new FormData(event.target)

    fm.forEach((value, key) => {
        todo[key] = value
    })

    todos.push(todo)
    reload(todos)
}

function reload(arr) {
    container.innerHTML = ""

    for (let item of arr) {
        let box = document.createElement('div')
        let flex = document.createElement('div')
        let flex_button = document.createElement('div')
        let box_p = document.createElement('div')
        let p = document.createElement('p')
        let span = document.createElement('span')
        let button = document.createElement('button')
        let button_edit = document.createElement('button')
        let izm = document.querySelector('.izmena')
        console.log(izm);

        box.classList.add('box')
        box.id = item.id
        p.classList.add('text')
        span.classList.add('op')
        button_edit.classList.add('button')
        button.classList.add('button')
        flex.classList.add('flex')
        flex_button.classList.add('flex_button')

        button_edit.innerHTML = 'edit'
        button.innerHTML = "x"
        span.innerHTML = item.time
        p.innerHTML = item.task

        container.append(box)
        box.append(flex, span, button, button_edit)
        box_p.append(p)
        flex.append(box_p, flex_button)
        flex_button.append(button_edit, button)

        button.onclick = () => {
            // let check = prompt(`Напиши "${item.task}" чтобы удалить задачу`)

            // if(check === item.task) {
            todos = todos.filter(el => el.id !== item.id)
            box.classList.add('delete-anim')
            setTimeout(() => {
                box.remove()
            }, 500);
            // }
        }
        p.onclick = () => {
            item.isDone = !item.isDone
            if (item.isDone) {
                p.classList.add('line')
            } else {
                p.classList.remove('line')

            }
        }
        button_edit.onclick = () => {
            modal.style.display = 'block'
        }
        close.onclick = () => {
            modal.style.display = 'none'
        }
        form_modal.onsubmit = (e) => {
            e.preventDefault()
            let todo = {}
            let fm = new FormData(form_modal)
            fm.forEach((value, key) => {
                todo[key] = value
            })
            p.innerHTML = todo.task
        }
        izm.innerHTML = item.task


    }
}
