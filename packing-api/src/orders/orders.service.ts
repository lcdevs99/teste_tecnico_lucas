import { Injectable, BadRequestException } from '@nestjs/common';
import { OrderDto } from './dto/create-order.dto';

interface Box {
  name: string;
  height: number;
  width: number;
  length: number;
}

interface BoxUsed {
  box: string;
  products: string[];
}

export interface OrderResult {
  orderId: string;
  boxes: BoxUsed[];
  remainingProducts: string[];
}

@Injectable()
export class OrdersService {
  private boxes: Box[] = [
    { name: 'Caixa 1', height: 30, width: 40, length: 80 },
    { name: 'Caixa 2', height: 50, width: 50, length: 40 },
    { name: 'Caixa 3', height: 50, width: 80, length: 60 },
  ];

  packOrders(orders: OrderDto[]): OrderResult[] {
    if (!orders || !Array.isArray(orders)) {
      throw new BadRequestException('Orders must be an array');
    }

    const results: OrderResult[] = [];

    for (const order of orders) {
      if (!order.products || !Array.isArray(order.products)) {
        throw new BadRequestException('Each order must have a products array');
      }

      const boxesUsed: BoxUsed[] = [];
      let remainingProducts = [...order.products];

      for (const box of this.boxes) {
        const productsInBox: string[] = [];

        remainingProducts = remainingProducts.filter(product => {
          const fits = this.productFitsBox(product, box);
          if (fits) productsInBox.push(product.name);
          return !fits;
        });

        if (productsInBox.length > 0) {
          boxesUsed.push({
            box: box.name,
            products: productsInBox,
          });
        }
      }

      results.push({
        orderId: order.orderId,
        boxes: boxesUsed,
        remainingProducts: remainingProducts.map(p => p.name),
      });
    }

    return results;
  }

  private productFitsBox(product: { height: number; width: number; length: number }, box: Box): boolean {
    const productDims = [product.height, product.width, product.length].sort((a, b) => b - a);
    const boxDims = [box.height, box.width, box.length].sort((a, b) => b - a);

    return productDims.every((dim, i) => dim <= boxDims[i]);
  }
}
