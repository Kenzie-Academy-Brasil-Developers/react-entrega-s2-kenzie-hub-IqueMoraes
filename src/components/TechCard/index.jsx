import { BoxCard, ConfigButton } from "./style";
import { FiTrash2, FiTool } from "react-icons/fi"
import { useHistory } from "react-router-dom";

export default function TechCard ({tech}){
    const {id, title, status} = tech;
    const history = useHistory()


    return(
        <BoxCard key={id}>
            <h3>{title}</h3>
            <h4>{status}</h4>

            <div>
                <ConfigButton onClick={()=> history.push(`/editcard/${id}` )}>
                    <FiTool />

                </ConfigButton>
                <ConfigButton>
                    <FiTrash2/>
                </ConfigButton>
            </div>
        </BoxCard>



    )
}