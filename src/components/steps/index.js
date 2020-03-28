import React from 'react';

import done from '../../images/done.svg';
import next from '../../images/next.svg';

const Steps = (props) => {
    return (
        <div className="steps-box">
            <ul>
                <li className="done">
                    <span>
                        <img src={done} alt="Done Icon" />
                    </span>
                    Carrinho
                    <img src={next} className="next" alt=""/>
                </li>
                <li>
                    <span>2</span>
                    Pagamento
                    <img src={next} className="next" alt=""/>
                </li>
                <li>
                    <span>3</span>
                    Confirmação
                </li>
            </ul>
        </div>
    )
}

export default Steps;