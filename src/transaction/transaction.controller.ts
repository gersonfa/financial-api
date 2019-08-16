import { Controller } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { BaseController } from 'src/base/base.controller';

@Controller('transaction')
export class TransactionController extends BaseController{
    constructor(protected service: TransactionService) {
        super(service)
    }
}
