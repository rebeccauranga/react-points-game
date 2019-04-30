import React from 'react';

function Restart(props) {
    return(
        <div>
            <button onClick={restartGame}>Restart Game</button>
        </div>
    );
}

function restartGame(){
    alert('restarting');
    
}


export default Restart;