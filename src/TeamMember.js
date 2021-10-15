import { Image } from 'react-bootstrap';

const TeamMember = (props)=>{
    return (
        <div className="d-flex flex-column align-items-center">
            <Image id="image" src={props.image} roundedCircle className="mb-3"/>
            <h3 id="name">{props.name}</h3>
            <h5 id="number">{props.number}</h5>
        </div>
    );
}

export default TeamMember;