import * as productService from './productService'
import {USER_STATUS_PREMIUM, USER_STATUS_REGULAR} from "../users/constants";

export async function createProduct(req, res, next) {
    try {
        const productData = req.body;
        const product = await productService.createProduct({productData});

        return res.json({data: product});
    } catch (err) {
        return next(err)
    }
}

export async function getProductsOverview(req, res, next) {
    try {
        const { userType } =  req.resources.loggedUser;

        if (userType === USER_STATUS_PREMIUM) {
            return res.send(await productService.getPremiumUserProductsOverview());
        }

        if (userType === USER_STATUS_REGULAR) {
            const productsCountByPrice = await productService.getProductsCountByPrice();

            const productsCountByPriceRange = [];
            for (let i = 0; productsCountByPrice.length > 0; i++) {
                const minPrice = 2 ** i;
                const maxPrice = 2 ** (i + 1);
                let productsCount = 0;

                for (let range = minPrice; range < maxPrice; range++) {
                    if (productsCountByPrice?.[0]?.price === range) {
                        const currentCount = productsCountByPrice.shift()?.count;
                        productsCount += currentCount;
                    }
                }

                const group = {
                    minPrice,
                    maxPrice,
                    count: productsCount
                }

                if (group.count) {
                    productsCountByPriceRange.push(group)
                }

            }
            return res.send(productsCountByPriceRange)
        }
    } catch (err) {
        return next(err)
    }
}
