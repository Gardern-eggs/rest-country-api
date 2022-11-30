// import React from 'react'


// export const Filter = ({setCountries,fetchCountryData}) => {
   
//     const searchData=async(data)=>{
//       if (data!==''){
//         const response=await fetch(`https://restcountries.com/v2/name/${data}`)
//         const biibi=await response.json();
//         if(biibi.length>0){
//           await setCountries(biibi)
//           console.log(biibi)
//         }
//       }else{
//    fetchCountryData()
//       }
//     }

//     const searchRegion=async(data)=>{
//       if (data!==''){
//         const response=await fetch(`https://restcountries.com/v2/region/${data}`)
//         const biibi=await response.json();
//         if(biibi.length>0){
//           await setCountries(biibi)
//      //     console.log(biibi)
//         }
//       }else{
//   fetchCountryData()
//       }
//     }
  
  



//   return (
//     <div className='filterbar'>
//         <form className='formControl'>
//       <div className='search'>
//         <i className="fa fa-search"> <input type="search" id="search" placeholder='Search for a country…'  onChange={(e)=>searchData(e.target.value)}  /></i>
//         </div>
//         </form>
        
//         <div className='option'>
//             <select name='select' id='select' onChange={(e)=>searchRegion(e.target.value)}>
//             <option value=""defaultValue >Filter by Region </option>
//                 <option value='Africa'>Africa</option>
//                 <option value='Americas'>Americas</option>
//                 <option value='Asia'>Asia</option>
//                 <option value='Europe'>Europe</option>
//                 <option value='Oceania'>Oceania</option>
//             </select>
//         </div>
        
//     </div>
    
//   )
// }
