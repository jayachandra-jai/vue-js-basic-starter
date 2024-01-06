import backendInstance from "./BackendInstance"
const ItemService = {
    addItem(request){
        return backendInstance.post("/item/addItem",request);
    },
    getAllItems(){
        return backendInstance.get("/item/getAllItems");
    },
    deleteItem(id){
        return backendInstance.delete("/item/removeItem/"+id);
    },
    checkItem(id){
        return backendInstance.put("/item/checkItem/"+id);
    }

}
export default ItemService;