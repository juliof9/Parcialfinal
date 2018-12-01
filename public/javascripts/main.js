window.onload = () =>{
    app.init();
};

let app = {
    init: function(){
        this.addEvent();
        this.loadcontent();
    },
    addEvent: function(){
        let form = document.userForm;
        form.addEventListener('submit',this.submitUser);
    },
    submitUser: function(event){
        event.preventDefault();
        let form = document.userForm;
        let data = {
            username: form.username.value,
            name: form.name.value,
            lastname: form.lastname.value
        };
        fetch('/users', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(data => {
            if(data.ok){
                this.addRow(data.insertado);
            } else{
                let errors = document.getElementsByClassName("erros")[0];
                errors.innerText = data.err;
            }
        });
    },
    addRow: function(data){
        let tr = document.createElement('tr');
        tr.innerHTML = `<td class = "id">${data._id} </td>
                        <td class = "username">${data.username}</td>
                        <td>${data.name}</td>
                        <td>${data.lastname}</td>
                        <td>
                            <a class = "delete" href = "#"> Delete </a>
                            <a class = "update" href = "#"> Update </a>
                        </td>`;
        let tbody = document.getElementsByClassName("listUser")[0];
        tbody.appendChild(tr);
        let addEvents = () =>{
            document.querySelectorAll(".delete").forEach(elements => {
                element
            });
        }
    },
}