function Course(){
    const courselst=[
        {courseid:101,coursename:"BE-CS"},
        {courseid:102,coursename:"BE-IS"},
        {courseid:103,coursename:"BE-AI&ML"},
        {courseid:104,coursename:"BE-AI&DS"},
        ]
}
return(
        <div className="container">
            <h2 className="text-primary">React  course Component Default App</h2>
            <table className = 'table'>
            <thead>
                <tr>
                    <th>Course ID</th>
                    <th>Course Name</th>
                </tr>
            </thead>
            <tbody> 
                {
                    courselst.map((item))=>
                    {
                    return(
                            <tr>
                                <td>{item.courseid}</td>
                                <td>{item.coursename}</td>
                            </tr>
                        )
                })
            }

            </tbody>
        </table>
      </div>
      

    

export default Course;