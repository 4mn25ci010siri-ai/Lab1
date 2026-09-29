import { useState } from "react"

function Student(){
    const studentlst=[
        {regno:101,name:"Suhasini",dept:"BE-CS",city:"mysr"},
        {regno:102,name:"Suhas",dept:"BE-CS",city:"hsn"},
        {regno:103,name:"Sinchana",dept:"BE-CS",city:"CRP"},
        {regno:104,name:"Suguna",dept:"BE-CS",city:"Banglr"},
    ]
    const [selectdept,SetSelectDept]=useState("");

    return(
        <div className="container">
            <h2 className="text-primary">List of Students</h2>
            <div className="card px-3 py-3"

            <table className="table">
                <thead>
                    <tr>
                        <th>REG No</th>
                        <th>Name</th>
                        <th>DEPT</th>
                        <th>City</th>
                    </tr>
                    </thead>
                    <tbody>
                        {
                            studentlst.filter(d=>d.dept==selectdept).map((item)=>{
                                return(
                                    <tr>
                                        <td>{item.regno}</td>
                                        <td>{item.name}</td>
                                        <td>{item.dept}</td>
                                        <td>{item.city}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                
                </table>
        </div>

    )
}