import {ProductDTO} from './product-dto';
import {Product} from '../../../types/product';

// TODO tests to ensure that every field is mapped correctly and changes wouldn't break functionality
export function mapProduct(productsDto: ProductDTO): Product {
  return {
    application: productsDto.Toepassing,
    salePrice: Number(productsDto.salePrice),
    manufacturerName: productsDto.manufacturerName,
    hardness: Number(productsDto.Hardheid),
    grossPrice: Number(productsDto.grossPrice),
    BUPUnitOfMeasure: productsDto.BUP_UOM,
    articleNumber: productsDto.Artikelnummer,
    stepQuantity: Number(productsDto.stepQuantity),
    BUPValue: productsDto.BUP_Value,
    badges: productsDto.badges.split('|'),
    unitOfMeasure: productsDto.uom,
    color: productsDto.Kleur,
    productImage: productsDto.productImage,
    temperatureRange: productsDto.Temperatuurgebied,
    BUPConversion: productsDto.BUP_Conversion,
    minQuantity: Number(productsDto.minQuantity),
    manufacturerImage: productsDto.manufacturerImage,
    name: productsDto.name,
    material: productsDto.Materiaal,
    sku: productsDto.sku,
    cordThickness: Number(productsDto.Snoerdikte),
    internalDiameter: Number(productsDto["Inwendige diameter"]),
    sizeAS568: Number(productsDto["Maat volgens AS568"]),
    listPrice: Number(productsDto.listPrice),
    channel: productsDto.channel,
    display: productsDto.display,
    atp: productsDto.atp
  };
}
