import {ProductCompareSpecs} from '../../types/product-compare-specs';
import {Product} from '../../types/product';

export function getProductToCompare(product: Product): ProductCompareSpecs {
  return {
    application: product.application,
    articleNumber: product.articleNumber,
    color: product.color,
    cordThickness: product.cordThickness,
    hardness: product.hardness,
    internalDiameter: product.internalDiameter,
    material: product.material,
    minQuantity: product.minQuantity,
    sizeAS568: product.sizeAS568,
    stepQuantity: product.stepQuantity,
    temperatureRange: product.temperatureRange
  };
}
