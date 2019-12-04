import React, { Component } from 'react';
import C_Post from '../C_Post/C_Post';
import Post from '../Post/Post';
import './Posts.css';

export default class Posts extends Component{

    Comments = [
        {
            label:"How to Use the useReducer Hook",
            total_comments:"3",
            time: "6",
            author: "alfie qashwa",
            description: "very good explaination. Thank you sir!"
        },
        {
            label:"React Project Ideas, and How to Invent Your Own",
            total_comments:"2",
            time: "4",
            author: "Fu-Lin Liu",
            description: "For Long time I was trying to be too original with my app ideas. It was to the point that I ended up not building..."
        },
        {
            label:"React Project Ideas, and How to Invent Your Own",
            total_comments:"2",
            time: "4",
            author: "erritta",
            description: "very good  I was trying to be too original with my app ideas. It was to the point that I ended"
        },
        {
            label:"How to write blog that people will see",
            total_comments:"1",
            time: "2",
            author: "Lenardo",
            description: "Original with my app ideas. It was to the point that I ended..."
        }
    ]

    constructor(props){
        super(props);
        this.state = {
                        isHidden: false
                     }
    }

    static getDerivedStateFromProps = (props, state) => {
        console.log("getDerivedStateFromProps() is called ");
    }

    componentDidMount = () => {
        console.log("componentDidMount() is called ");
    }

    hideComponentHandler = () =>{
        this.setState({
            isHidden: !this.state.isHidden,
        })
    }

    render()
    {
        console.log("Render is called ");

        const postArr = [];
        for (let i=0; i< this.Comments.length; i++) {
            postArr.push(<Post 
                            key={i}
                            label={ this.Comments[i].label }
                            total_comments={this.Comments[i].total_comments}
                            time={this.Comments[i].time}
                            author={this.Comments[i].author}
                            description={this.Comments[i].description}
                    ></Post>)
        }

        if(!this.state.isHidden)
        {

            let getPosts = this.Comments.map((comment,i)=>{
                return (
                    <C_Post
                        key={i+"aaa"}
                        label={ comment.label }
                        total_comments={ comment.total_comments }
                        time={ comment.time }
                        author={ comment.author }
                        description={ comment.description }
                    ></C_Post>
                )
            });
            postArr.push(getPosts);
        }
        
        return (
            <div className="row main-con">
                {postArr}
                <button className="btn" onClick={this.hideComponentHandler} > {this.state.isHidden?"Show":"Hide"} </button>
            </div>
        )
    }

}

