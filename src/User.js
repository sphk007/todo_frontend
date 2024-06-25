// import React, { useEffect, useState } from "react";
// import axios from "axios";
// const User = () => {
//   const [data, setData] = useState([]);
//   const [update,setUpdate]=useState([]);
//   const [stat,setStat]=useState(false);
//   const [name,setName]=useState('');
//   const [email,setEmail]=useState('');
//   const [password,setPassword]=useState('');
//   // const handleget=()=>{
//   //     axios.get("http://localhost:3001/users").then((res)=>{
//   //         setData(res.data);
//   //         console.log(data);
//   //     })
//   // }
//   useEffect(() => {
//     axios.get("http://localhost:3001/users").then((res) => {
//       setData(res.data);
//       console.log(data);
//     });
//   }, []);
//   const handleUpdate=(id)=>{
//     axios.get(`http://localhost:3001/users/${id}`).then((res)=>{
//         setUpdate(res.data);
//         setStat(true);
//         console.log(update);
//     })
//     .catch((e)=>{
//         console.log(`from get:${e}`);
//     })
//   }
//   const handleSubmit=(id)=>{
//     axios.put(`http://localhost:3001/users/${id}`,{name,email,password}).then((res)=>{
//         // alert("updated");
//     })
//     .catch((e)=>{
//         console.log(`from put:${e}`);
//     })
//   }
//   return (
//     <>
//       {/* <button onClick={handleget}>get</button> */}

//       {stat?<>
//       <form >
//         <input type="text" value={update.name} onChange={(e)=>{setName(e.target.value)}} />
//         <input type="email" value={update.email} onChange={(e)=>{setEmail(e.target.value)}} />
//         <input type="text" value={update.password} onChange={(e)=>{setPassword(e.target.value)}} />
//         <button onClick={handleSubmit(update.id)}>update</button>


//       </form>
//       </>:<></>}

//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Email</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((i) => (
//             <tr key={i.id}>
//               <td>{i.name}</td>
//               <td>{i.email}</td>
//               <td><button onClick={handleUpdate(i.id)}>Update</button><br /><button>delete</button></td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </>
//   );
// };

// export default User;


import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [stat, setStat] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    // axios.get("http://localhost:3001/users").then((res) => {
    //   setData(res.data);
      
    // });
      axios.get('http://localhost:5006/getting')
          .then((response) => {
              setData(response.data);
          })
          .catch(() => {
              alert('Failed to retrieve data');
          });
  }, []);

  const handleUpdate = (id) => {
    axios.get(`http://localhost:5006/getting/${id}`).then((res) => {
      setId(res.data.id);
      setName(res.data.name);
      setEmail(res.data.email);
      setPassword(res.data.password);
      setStat(true);
      
    }).catch((e) => {
      console.log(`from get: ${e}`);
    });
  };

  const handleSubmit = (id) => (event) => {
    event.preventDefault();
    axios.put(`http://localhost:5006/updaitng/${id}`, { name, email, password }).then((res) => {
      alert("Updated");
      setStat(false);
      setId('');
      setName('');
      setEmail('');
      setPassword('');
      // Refresh the data after update
      axios.get("http://localhost:5006/getting").then((res) => {
        setData(res.data);
      });
    }).catch((e) => {
      console.log(`from put: ${e}`);
    });
  };


  const handleDelete=(id)=>{
    console.log(id)
      axios.delete(`http://localhost:5006/deleting/${id}`)
          .then(() => {
              // getData();
          })
          .catch(() => {
              alert("data cannot change")
          })
  }

  return (
    <>
      {stat ? (
        <form onSubmit={handleSubmit(id)}>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button type="submit">Update</button>
        </form>
      ) : (
        <></>
      )}

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {data.map((i) => (
            <tr key={i.id}>
              <td>{i.name}</td>
              <td>{i.email}</td>
              <td>
                <button onClick={() => handleUpdate(i.id)}>Edit</button><br />
                <button onClick={()=>handleDelete(i.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default User;
