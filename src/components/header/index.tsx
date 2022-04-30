import React from 'react'
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {selectProductAction} from '../../actions/productActions';
import {HeaderContainer} from './styles/HeaderStyles'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    return (
        <HeaderContainer onClick={() => {
            navigate(`/products`)
            dispatch(selectProductAction(null));
        }}>My Store</HeaderContainer>
    )
}

export default Header