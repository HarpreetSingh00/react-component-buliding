import React from 'react';

let C_Post = (props) => {

        return(
            <div className="col">
                <div>
                    <h4 className="text-skyBlue">{props.label} </h4>
                    <p className="text-lighter"><span>{props.total_comments} Comments </span>  <span> {props.time} Months ago</span> </p>
                    <div className="row noWrap">
                        <div className="image-con">
                            <i className="fas fa-user fa-3x"></i>
                        </div>
                        <div>
                            <span className="text-light">{props.author}</span> - {props.description}
                        </div>
                    </div>
                </div>
        </div>
        )
    
}

export default C_Post;