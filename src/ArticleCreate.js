import axios from "axios";

function ArticleCreate (){
onFormSubmit = function (event) {
        event.preventDefault();
    
        console.log(event);
        console.log(this);
    
        const formData = new FormData(event.target);
        alert(`${formData.get('first_name')}`) (`${formData.get('last_name')}`) (`${formData.get('birth')}`) (`${formData.get('death')}`);
    
        
        axios.post(
            'https://limon-kg-default-rtdb.firebaseio.com/', 
            Object.fromEntries(formData.entries()));
    }
return (
    <form className="ArticleCreate" onSubmit={onFormSubmit}>
        <div>
<label>
    Title
    <input type="text" name="title" required/>
</label>
<label>
Description
    <input type="text" name="title" required/>
</label>
        </div>
        <button>Submit</button>
    </form>
)
}

export default ArticleCreate;