import React from 'react';
import { useTelegram } from '../../hooks/useTelegram';

const Header = () => {

    const {user, OnClose, OnToggleButton} = useTelegram();

    return (
        <div className={'header'}>
            <button onClick={OnClose}>Закрыть</button>
            <span className={'username'}>
                {user.username}
            </span>
        </div>
    );
}

export default Header;