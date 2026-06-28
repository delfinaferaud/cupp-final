export const calculateSalePrice = (cost, profitMargin) => {
  if (!cost || profitMargin === '') return '';

  return Number((cost * (1 + Number(profitMargin) / 100)).toFixed(2));
};

export const calculateProfitMargin = (cost, salePrice) => {
  if (!cost || !salePrice) return '';

  return Number((((salePrice - cost) / cost) * 100).toFixed(2));
};

export const formatPercentage = (value) => {
  if (value === undefined || value === null) return '0%';

  return `${value.toLocaleString('es-AR', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  })}%`;
};

export const calculateProfit = (product) => {
  if (!product.cost || !product.salePrice) return 0;

  return product.salePrice - product.cost;
};

export const formatPrice = (value) => {
    if (value === undefined || value === null) return '$0';

    return value.toLocaleString('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
      maximumFractionDigits: 2,
    });
  };