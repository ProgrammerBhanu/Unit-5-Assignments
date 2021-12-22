function form() {
    return `<form onsubmit="todo(event)" id="FormInp" action="">
    <div>
        <label for="name">Name</label>
        <input type="text" id="name">
    </div>
    <div>
        <label for="Quantity">Quantity</label>
        <input type="text" id="quan">
    </div>
    <div>
        <label for="name">Priority</label>
        <select name="" id="priority">
            <option value="Choose">Choose</option> 
            <option value="low">Low</option>
            <option value="med">Med</option>
            <option value="high">High</option>
        </select>
    </div>
    <input type="submit" value="Sumbit">
</form>`;
}

export { form };