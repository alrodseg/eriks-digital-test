import {Product} from './product';

type ProductCompareSpecs = Pick<Product,
  'application'
  | 'hardness'
  | 'articleNumber'
  | 'stepQuantity'
  | 'color'
  | 'temperatureRange'
  | 'minQuantity'
  | 'material'
  | 'cordThickness'
  | 'internalDiameter'
  | 'sizeAS568'>;
