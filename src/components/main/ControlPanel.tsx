import React from 'react'
import {useSelector} from 'react-redux';
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom';
import {filterProductsAction, selectProductAction, sortByAction} from '../../actions/productActions';
import {initStateType} from '../../reducers/types/rootReducerTypes';
import {Button, ControlPanelContainer, Label, SearchInput, SortDropdown} from './styles/ControlPanelStyles'

const ControlPanel = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {maxId, filterText, sortBy} = useSelector((state: initStateType) => state);
    return (
        <ControlPanelContainer>
            <Button onClick={() => {
                navigate(`item/new`)
                dispatch(selectProductAction({
                    id: maxId + 1,
                    name: 'New product',
                    description: '',
                    price: 0,
                    creationDate: ''
                }));
            }}>Add</Button>
            <SearchInput onChange={(e) => {
                dispatch(filterProductsAction(e.target.value.toLocaleLowerCase()));
            }} value={filterText}  placeholder='search products'/>
            <div>
                <Label>Sort by:</Label>
                <SortDropdown defaultValue={sortBy} onChange={(e) => {
                    dispatch(sortByAction(e.target.value));
                }}>
                    <option value='name'>Name</option>
                    <option value='date'>Recently added</option>
                </SortDropdown>
            </div>
        </ControlPanelContainer>
    )
}

export default ControlPanel