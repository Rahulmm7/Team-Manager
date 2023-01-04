import { useState } from "react"
import femaleProfile from '../images/femaleProfile.jpg'
import maleProfile from '../images/maleProfile.jpg'
import './style/Employee.scss'
const Employess = () => {

    const [employees, setEmployees] = useState([{
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }]);

    return (
        <main className="container ">
            <div className="introsection">

                <h1>Team Member Allocation</h1>
                <h3>Team x has x members</h3>

                <div class="dropdown">
                    <button class="btn dropdown-toggle" type="button" id="dropdownMenuButton " data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Select your Team
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Team A</a>
                        <a class="dropdown-item" href="#">Team B</a>
                        <a class="dropdown-item" href="#">Team C</a>
                    </div>
                </div>
            </div>

            <div className="row justify-content-center mb-3 mt-3">
                <div className="col-8">
                    <div className="card-collection">

                        {
                            employees.map((employee) => (
                                <div id={employee.id} className="card m-2">

                                    {(employee.gender === 'male') ? <img src={maleProfile} className="card-img-top" /> :
                                        <img src={femaleProfile} className="card-img-top" />}
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Full Name : {employee.fullName}
                                        </h5>
                                        <p className="card-description">
                                            Designation : {employee.designation}
                                        </p>

                                    </div>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Employess