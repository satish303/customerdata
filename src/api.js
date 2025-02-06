import axios from "axios";

let url = "http://localhost:5000/products";
export async function getData(){
   return await  axios.get(url);

}

export async function apiDeleteData(id){
   return await axios.delete(`${url}/${id}`);
}