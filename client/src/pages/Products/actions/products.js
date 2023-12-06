import { getJson } from 'requests';
import {
    REQUEST_PRODUCTS,
    RECEIVE_PRODUCTS,
    ERROR_RECEIVE_PRODUCTS,
} from './actionTypes';
import config from 'config';

const requestProduct = () => ({
    type: REQUEST_PRODUCTS,
});
const receiveProduct = (products) => ({
    type: RECEIVE_PRODUCTS,
    products,
});
const errorReceiveProduct = () => ({
    type: ERROR_RECEIVE_PRODUCTS,
});

const getProducts = ({ url }) => {
    console.log(`GET ${url}`);
    return getJson({ url })
        .catch(() => {
            return {
                products: [
                    {
                        id: 1,
                        name: 'Whey Gold Standard',
                        description: 'Protein 100% Whey Gold Standard contains a functional combination of whey isolate, concentrate and hydrolyzate.',
                        price: '20.49 $',
                        rating: '3.5',
                        like: true,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/o/n/on1.jpg',
                    },
                    {
                        id: 2,
                        name: 'Just Whey',
                        description: 'Just Whey is a high-quality whey multicomponent protein with 75% of first-class protein from the milk of cows that graze on green meadows.',
                        price: '16.99 $',
                        rating: '5.0',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/j/u/just_whey_chocolate_milkshake_1_kg_gymbeam_1.png',
                    },
                    {
                        id: 3,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.00 $',
                        rating: '4.3',
                        like: true,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                    {
                        id: 4,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.50 $',
                        rating: '4.3',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                    {
                        id: 5,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.00 $',
                        rating: '4.3',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                    {
                        id: 6,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.00 $',
                        rating: '4.3',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                    {
                        id: 7,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.00 $',
                        rating: '4.3',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                    {
                        id: 8,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.00 $',
                        rating: '4.3',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                    {
                        id: 9,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.00 $',
                        rating: '4.3',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                    {
                        id: 10,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.00 $',
                        rating: '4.3',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                    {
                        id: 11,
                        name: 'True Whey',
                        description: 'True Whey Protein is a whey protein concentrate (WPC) that is among the most popular protein supplements.',
                        price: '9.00 $',
                        rating: '4.3',
                        like: false,
                        category: 'protein',
                        photoUrl: 'https://gymbeam.ua/media/catalog/product/cache/bf5a31e851f50f3ed6850cbbf183db11/p/r/protei_n_true_whey_-_gymbeam_1000_g_-_chocolate_hazelnut.png'
                    },
                ]
            }
        });
};

const receiveProducts = () => async (dispatch) => {
    dispatch(requestProduct());
    await new Promise(r => setTimeout(r, 1000));
    const url = `${config.BASE_URL}${config.PRODUCTS_SERVICE}`;
    return getProducts({url})
        .then((data) => {
            console.log('got it')
            console.log(data)
            dispatch(receiveProduct(data.products))
        })
        .catch(() => dispatch(errorReceiveProduct()));

};

export default {
    receiveProducts,
};