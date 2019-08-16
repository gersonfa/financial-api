import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/base/base.service';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class TransactionService extends BaseService {
    constructor(
        @InjectModel('Transaction') transaction
    ) {
        super(transaction)
    }
}
