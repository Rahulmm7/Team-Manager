// import { useState } from "react"
// import femaleProfile from '../images/femaleProfile.jpg'
// import maleProfile from '../images/maleProfile.jpg'
// import './Employee.scss'
// const Employees = () => {

//     const [employees, setEmployees] = useState([{
//         id: 1,
//         fullName: "Bob Jones",
//         Position: "FWD",
//         PAC: 99,
//         gender: "male",
//         teamName: "TeamA"
//     },
//     {
//         id: 2,
//         fullName: "Jill Bailey",
//         Position: "CMF",
//         PAC: 89,
//         gender: "female",
//         teamName: "TeamA"
//     },
//     {
//         id: 3,
//         fullName: "Gail Shepherd",
//         Position: "CMF",
//         PAC: 69,
//         gender: "female",
//         teamName: "TeamA"
//     },
//     {
//         id: 4,
//         fullName: "Sam Reynolds",
//         Position: "GK",
//         PAC: 99,
//         gender: "male",
//         teamName: "TeamB"
//     },
//     {
//         id: 5,
//         fullName: "David Henry",
//         Position: "LB",
//         PAC: 99,
//         gender: "male",
//         teamName: "TeamB"
//     },
//     {
//         id: 6,
//         fullName: "Sarah Blake",
//         Position: "CB",
//         PAC: 99,
//         gender: "female",
//         teamName: "TeamB"
//     },
//     {
//         id: 7,
//         fullName: "James Bennet",
//         Position: "CB",
//         PAC: 99,
//         gender: "male",
//         teamName: "TeamC"
//     },
//     {
//         id: 8,
//         fullName: "Jessica Faye",
//         Position: "DMF",
//         PAC: 99,
//         gender: "female",
//         teamName: "TeamC"
//     },
//     {
//         id: 9,
//         fullName: "Lita Stone",
//         Position: "LWF",
//         PAC: 99,
//         Pac: "female",
//         teamName: "TeamC"
//     },
//     {
//         id: 10,
//         fullName: "Daniel Young",
//         Position: "RWF",
//         PAC: 99,
//         gender: "male",
//         teamName: "TeamD"
//     },
//     {
//         id: 11,
//         fullName: "Adrian Jacobs",
//         Position: "ST",
//         PAC: 99,
//         gender: "male",
//         teamName: "TeamD"
//     },
//     {
//         id: 12,
//         fullName: "Devin Monroe",
//         Position: "CMF",
//         PAC: 99,
//         gender: "male",
//         teamName: "TeamD"
//     }]);


//     const [selectedValue, setSelectedValue] = useState('');
//     const options = ["Team A", "Team B", "Team C"];
//     function handleChange(event) {
//         setSelectedValue(event.target.value)
//     }





//     return (
//         <main className="container ">
//             <div className="introsection">

//                 <h1>Team Member Allocation</h1>
//                 <h3>Team x has x members</h3>

//                 <div class="dropdown">
//                     <button class="btn dropdown-toggle" data-toggle="dropdown" >
//                         <input type="text" placeholder="Select your team" value={selectedValue} />
//                     </button>

//                     <div class="dropdown-menu" >
//                         <a class="dropdown-item" href="#">FC Barcelona</a>
//                         <a class="dropdown-item" href="#">Real Madrid FC</a>
//                         <a class="dropdown-item" href="#">Manchester United</a>
//                     </div>

//                 </div>
//             </div>

//             <div className="row-full justify-content-center mb-3 mt-3">
//                 <div className="col">
//                     <div className="card-collection">

//                         {
//                             employees.map((employee) => (
//                                 <div id={employee.id} className="card m-2">

//                                     {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" /> :
//                                         <img src={femaleProfile} className="card-img-top" />}
//                                     <div className="card-body">

//                                         <h5 className="card-title">
//                                             {employee.fullName}
//                                         </h5>
//                                         <div className="player-details">
//                                             <div class="row">
//                                                 <div class="col">{employee.PAC} PAC </div>
//                                                 <div class="col">col</div>
//                                                 <div class="col">col</div>
//                                                 <div class="w-50"></div>
//                                                 <div class="col">col</div>
//                                                 <div class="col">col</div>
//                                                 <div class="col">col</div>
//                                             </div>
//                                         </div>

//                                     </div>
//                                 </div>

//                             ))
//                         }
//                     </div>
//                 </div>
//             </div>
//         </main>
//     )
// }

// export default Employees