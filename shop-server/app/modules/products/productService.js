import Product from './productModel'

export function createProduct({productData}) {
    return Product.create(productData)
}

export function getPremiumUserProductsOverview() {
    return Product.aggregate([
        {
            '$replaceRoot': {
                'newRoot': {
                    '$mergeObjects': [
                        {
                            'newRoot': '$$ROOT'
                        }, {
                            'price': '$price'
                        }
                    ]
                }
            }
        }, {
            '$unset': [
                'newRoot.__v', 'newRoot.createdAt', 'newRoot.updatedAt', 'newRoot.name', 'newRoot._id', 'newRoot.price'
            ]
        }, {
            '$project': {
                'price': 1,
                'keyValue': {
                    '$objectToArray': '$newRoot'
                }
            }
        }, {
            '$unwind': '$keyValue'
        }, {
            '$group': {
                '_id': {
                    'k': '$keyValue.k',
                    'v': '$keyValue.v'
                },
                'count': {
                    '$sum': 1
                },
                'minPrice': {
                    '$min': '$price'
                },
                'maxPrice': {
                    '$max': '$price'
                }
            }
        }, {
            '$project': {
                '_id': 0,
                'key': '$_id.k',
                'value': '$_id.v',
                'count': 1,
                'minPrice': 1,
                'maxPrice': 1
            }
        }
    ]).exec()
}

export function getProductsCountByPrice() {
    return Product.aggregate([
        {
            '$group': {
                '_id': '$price',
                'count': {
                    '$sum': 1
                }
            }
        }, {
            '$project': {
                '_id': 0,
                'price': '$_id',
                'count': 1
            }
        }, {
            '$sort': {
                'price': 1
            }
        }
    ]);
}
