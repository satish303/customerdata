import './App.css';
import { useEffect, useState } from 'react';
import { getData, apiDeleteData } from './api';
import CustomerTable from './CustomerTable';
import Button from 'react-bootstrap/Button';
import Formdata from './Formdata'
function App() {
  const [data, setData] = useState([]);
  const [form, setForm] = useState(false)

  let getproducts = async () => {
    let res = await getData();
    setData(res.data);
  };
let deleteData = async(id)=>{
  await apiDeleteData(id)
  getproducts()
}
let showForm = ()=>{
  setForm(true)
}
  useEffect(() => {
    getproducts();
  }, []);

  return (
    <div className="App">
      <p>Customer Data Creation</p>
      {/* Pass the data state to Table component */}
      <Button variant="success" onClick={()=>{
        showForm()
      }}>Adddata</Button>
      <CustomerTable customerdata= {data} deleteddata = {deleteData}/>
      {
        form &&<Formdata></Formdata>
      }
      
    </div>
  );
}

export default App;
