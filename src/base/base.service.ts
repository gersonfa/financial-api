import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { HttpException } from '@nestjs/common/exceptions/http.exception'
import { HttpStatus } from '@nestjs/common'

export class BaseService {
    constructor(
        protected MODEL: Model<any>
    ) {}

    async create(data): Promise<any> {
        const item = new this.MODEL(data)
        return await item.save()
    }

    async findOneById(id: string): Promise<any> {
        return await this.MODEL.findOneById(id)
    }

     wait(ms){
        var start = new Date().getTime();
        var end = start;
        while(end < start + ms) {
          end = new Date().getTime();
       }
     }

    async findAll(): Promise<any[]> {
        this.wait(2000);
        return await this.MODEL.find()
        
    }

    async delete(id: string): Promise<any> {
        return await this.MODEL.findByIdAndRemove(id)
    }

    async update(id: string, data: any): Promise<any> {
        return await this.MODEL.findByIdAndUpdate(id, data, { new: true })
    }
}