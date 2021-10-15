import { Image } from 'react-bootstrap';

const AssignmentItem = (props) => {
    return (
        <div className="d-flex flex-row align-items-center justify-content-between">
            {props.id % 2 ? <Image id="image" src={props.image} className="" /> : ""}
            <div id="info" className={`text-justify ${props.id % 2 ? "text-left" : "text-right"}`}>
                <h3>{props.title}</h3>
                <div id="resume">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae metus nec tortor ultricies pulvinar nec id enim. Ut urna nunc, semper nec dui rutrum, blandit ornare massa. Nam egestas libero ut tellus eleifend, id scelerisque ipsum porta. Donec vitae velit risus. Pellentesque pretium, augue a porttitor finibus, felis ex ornare odio, eu molestie tellus risus in nulla. Nulla fermentum lacus vitae nunc condimentum ornare. Nullam interdum sodales mi, et gravida nisi. Nunc vitae nisi ac nisi dapibus convallis. Phasellus a rhoncus neque. Nulla facilisi. Phasellus malesuada, justo ut tristique mollis, elit magna faucibus quam, ut congue justo erat ut diam. Nunc molestie quis tortor a egestas. Pellentesque ac est mauris. Sed id ullamcorper eros.
                </div>
            </div>
            {props.id % 2 ? "" : <Image id="image" src={props.image} className="" />}
        </div>
    );
}

export default AssignmentItem;