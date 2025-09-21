import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { OrdersService, OrderResult } from './orders.service';
import { OrdersDto } from './dto/create-order.dto';
import { ApiTags, ApiBody } from '@nestjs/swagger';
import { BasicAuthGuard } from '../auth/basic-auth.guard';

@ApiTags('packing')
@Controller('packing')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  @UseGuards(BasicAuthGuard)
  @Post()
  @ApiBody({ type: OrdersDto })
  pack(@Body() ordersDto: OrdersDto): OrderResult[] {
    return this.ordersService.packOrders(ordersDto.orders);
  }
}

