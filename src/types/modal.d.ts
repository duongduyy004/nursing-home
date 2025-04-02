import { number } from yup;

export { };

declare global {
    interface IBackendRes<T> {
        error?: string | string[];
        message: string | string[];
        statusCode: number | string;
        data?: T;
    }

    interface IRegister {
        _id: string;
    }

    interface IVerify {
        email: string;
        isActive: boolean;
    }

    interface IResend {
        _id: string;
    }

    interface ILogin {
        user: {
            email: string;
            _id: string;
            name: string;
            role: string;
            phone: string;
            address: any;
            avatar: string;
        };
        access_token: string;
    }

    interface ITopRestaurants {
        _id: string;
        name: string;
        phone: string;
        address: string;
        email: string;
        rating: number;
        image: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        __v: number
    }
    interface IRestaurant {
        _id: string;
        name: string;
        phone: string;
        address: string;
        email: string;
        rating: number;
        image: string;
        isActive: boolean;
        createdAt: Date;
        updatedAt: Date;
        menu: IMenu[]
        isLike: boolean
    }

    interface IMenu {
        _id: string;
        restaurant: string;
        title: string;
        createdAt: Date;
        updatedAt: Date;
        menuItem: IMenuItem[];
    }

    interface IMenuItem {
        _id: string;
        menu: string;
        description: string;
        title: string;
        basePrice: number;
        image: string;
        options: {
            title: string;
            description: string;
            additionalPrice: number
        }[];
        createdAt: Date;
        updatedAt: Date;
    }

    interface ICart {
        [key: string]: {
            sum: number;
            quantity: number;
            items: {
                [key: string]: {
                    quantity: number;
                    data: IMenuItem;
                    extra?: {
                        [key: string]: number;
                    }
                }
            }
        }
    }

    interface IPlaceOrder {
        _id: string
    }

    interface IOrderHistory {
        _id: string;
        restaurant: IRestaurant
        user: string;
        status: string;
        totalPrice: number;
        totalQuantity: number;
        orderTime: Date;
        detail: {
            image: string;
            quantity: number;
            title: string;
            option?: string;
            price: number
        }[];
        createdAt: Date;
        updatedAt: Date;
    }

    interface IUpdateUser {
        acknowledged: boolean
        matchedCount: number
        modifiedCount: number
        upsertedCount: number
        upsertedId: string
    }

    interface IUserInfo {
        _id: string
        name: string
        email: string
        address: []
        avatar: string
        gender: string
        role: string
        accountType: string
        isActive: boolean
        codeId: string
        codeExpired: Date
        createdAt: Date
        updatedAt: Date
        phone: string
    }

    interface IRespones {
        _id: string
    }

    interface IModalPaginate<T> {
        meta: {
            current: number;
            pageSize: number;
            pages: number;
            total: numer;
        }
        results: T[]
    }
}