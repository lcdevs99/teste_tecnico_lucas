import { ApiProperty } from '@nestjs/swagger';
import { ProductDto } from './product.dto';

export class OrderDto {
  @ApiProperty()
  orderId: string;

  @ApiProperty({ type: [ProductDto] })
  products: ProductDto[];
}

export class OrdersDto {
  @ApiProperty({ type: [OrderDto] })
  orders: OrderDto[];
}