// import React from 'react';
// import { useState } from 'react';


// function addComment() {

    
//     const [formState, setFormState] = useState({ 
//       text: '', 
//       username: Auth.getUser().data.username
//     });
  
//     const [addComment, { error }] = useMutation(ADD_COMMENT);
  
//     const handleFormSubmit = async (event) => {
//       event.preventDefault();
//       try {
//         const { data } = await addComment({
//           variables: { ...formState },
//         });
//         console.log(data);
//         window.location.assign(`/codes/${codeId}`);
//       } catch (err) {
//         console.error(err);
//       }
//     }; 
    
//     const handleChange = (event) => {
//       const { name, value } = event.target;
//       setFormState({ ...formState, [name]: value });
//     }  
      
//       return (
//         <main className="flex-row justify-center mb-4">
//           <div className="col-12 col-lg-10">
//             <div className="card">
//               <div className="card-body">
//                   <form onSubmit={handleFormSubmit}>
//                     <label>Comment: </label>
//                     <textarea
//                       className="form-input"
//                       placeholder="text"
//                       name="text"
//                       type="text"
//                       rows = "5"
//                       value = {formState.content}
//                       onChange={handleChange}
//                     />
//                     <button
//                       className="btn btn-block btn-info"
//                       type="submit"
//                     >
//                       Submit
//                     </button>
//                     {error && (
//                     <div className="col-12 my-3 bg-danger text-white p-3">
//                       Something went wrong...
//                     </div>
//                   )}
//                   </form>
//               </div>
//             </div>
//           </div>
//         </main>
//       );
//     };
    
//     export default addComment;