export interface Iuser {
    
    success: boolean,
    message: string,
    user: {
        address: {
            street: string,
            number: number,
            complement: string,
            zipcode: number,
            neighborhood: string,
            city: string
        },
        accounts: [
            number
        ],
        _id: string,
        name: string,
        document: number,
        email: string,
        phone: number,
        __v: number
    }
}