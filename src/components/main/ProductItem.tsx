import React from 'react'
import {useSelector} from 'react-redux'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {deleteProductAction, selectProductAction} from '../../actions/productActions'
import {initStateType, ProductType} from '../../reducers/types/rootReducerTypes'
import {Button} from './styles/ControlPanelStyles'
import {ImageAndDescription, ItemContainer, ItemDescription, ItemHeader, ProductImage} from './styles/ProductItemStyles'

type propsType = {
    item: ProductType
}

const ProductItem = ({item}: propsType) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const selectedId = useSelector((state: initStateType) => state.selectedProduct?.id);
    return (
        <ItemContainer selected={item.id === selectedId} onClick={() => {
            dispatch(selectProductAction(item));
            navigate(`item/${item.id}`);
        }}>
            <ImageAndDescription>
                <ProductImage className="fa fa-image"/>
                <div>
                    <ItemHeader>{item.name}</ItemHeader>
                    <ItemDescription>{item.description}</ItemDescription>
                </div>
            </ImageAndDescription>
            <Button onClick={(e) => {
                e.stopPropagation();
                dispatch(deleteProductAction(item.id));
            }} color='orange'>Delete</Button>
        </ItemContainer>
    )
}

export default ProductItem