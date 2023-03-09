import React from 'react';

export default function ConditionalRender(props) {
    console.log(props.isAuth)
    if (props.isAuth.isLoggedIn) {
        return (
            <ul>
                <li><a href="">Shikhar</a></li>
                <li><a href="">Rohit</a></li>
                <li><a href="">Virat</a></li>
            </ul>
        )
    } else {
        return (
            <ul>
                <li><a href="">Ishan</a></li>
                <li><a href="">Jasprit</a></li>
                <li><a href="">Shami</a></li>
            </ul>
        )
    }
 
}
