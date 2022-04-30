export type ReduxActionType = {
    type: string,
    payload: any
}

export type ProductType = {
    id: number,
    name: string,
    description: string,
    price: number,
    creationDate: string
}

export type initStateType = {
    products: Array<ProductType>,
    selectedProduct: ProductType | null,
    maxId: number,
    selectedName: string,
    filterText: string,
    sortBy: string,
    currentPage: number,
}