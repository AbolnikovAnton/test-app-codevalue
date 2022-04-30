import React, {Fragment, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useSelector} from 'react-redux'
import {
    addProductAction,
    changeSelectedProductAction,
    editProductAction,
    selectProductAction
} from '../../actions/productActions'
import {initStateType} from '../../reducers/types/rootReducerTypes'
import {Button} from './styles/ControlPanelStyles'
import {SideContainer} from './styles/MainStyles'
import {
    Dollar,
    FieldSet,
    InputName,
    InputPrice,
    PriceContainer,
    TextAreaDescription
} from './styles/ProductDetailsStyles'
import {ProductImage} from './styles/ProductItemStyles'


const ProductDetails = () => {
    const dispatch = useDispatch();
    const {selectedProduct, selectedName, maxId} = useSelector((state: initStateType) => state);
    return (
        <SideContainer>
            <form>
                <FieldSet selected={!!selectedProduct}>
                    <legend>{!!selectedProduct ? `${selectedName} details` : 'Details'}</legend>
                    {!selectedProduct ? <h1>Select product for details</h1> :
                        <Fragment>
                            <ProductImage color='lightblue' className="fa fa-image"/>
                            <div>Name</div>
                            <InputName maxLength={30} onChange={(e) => {
                                dispatch(changeSelectedProductAction({...selectedProduct, name: e.target.value}))
                            }} value={selectedProduct.name}/>
                            <div>Description</div>
                            <TextAreaDescription maxLength={200} onChange={(e) => {
                                dispatch(changeSelectedProductAction({...selectedProduct, description: e.target.value}))
                            }} value={selectedProduct.description}/>
                            <div>Price</div>
                            <PriceContainer>
                                <InputPrice onChange={(e) => {
                                    dispatch(changeSelectedProductAction({...selectedProduct, price: +e.target.value}))
                                }} type='number' min='0' value={selectedProduct.price}/>
                                <Dollar>$</Dollar>
                            </PriceContainer>
                            <Button
                                color={(!selectedProduct.name || selectedProduct.price === 0) ? 'grey' : 'greenyellow'}
                                disabled={!selectedProduct.name || selectedProduct.price === 0} onClick={(e) => {
                                e.preventDefault();
                                if (!!selectedProduct.name && selectedProduct.price > 0) {
                                    if (selectedProduct.id === maxId + 1)
                                        dispatch(addProductAction({
                                            ...selectedProduct,
                                            creationDate: new Date().toString()
                                        }));
                                    else
                                        dispatch(editProductAction(selectedProduct));
                                    dispatch(selectProductAction(null))
                                }
                            }} isSave={true}>Save</Button>
                        </Fragment>}
                </FieldSet>
            </form>
        </SideContainer>
    )
}

export default ProductDetails