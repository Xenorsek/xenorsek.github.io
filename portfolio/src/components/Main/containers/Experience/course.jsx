import { Typography } from "@mui/material"
import CircularProgressWithLabel from "../../../custom/CirtucalProgressWithLabel"

const Course = ({progress, color, title, icon}) =>{
return (
    <div className="course">
        <CircularProgressWithLabel color={color} value={progress}/>
        {icon}
        <Typography >{title}</Typography>
    </div>
)
}
export default Course;