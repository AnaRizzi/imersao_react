import React from 'react';

function ButtonLink(props) {
    // props são os parâmetros que são enviados por quem chama essa função
    // props => { className : "classe"}

    return (
        <a href={props.href} className={props.className}>
            {props.children}
        </a>
    )
}

export default ButtonLink;