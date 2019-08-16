import { Post, Body, HttpException, HttpStatus, Get, Delete, Put, Param, Req } from '@nestjs/common'

export class BaseController {
    constructor(
        protected service: any
    ) { }

    @Post()
    async create(@Req() req, @Body() body) {
        console.log(req.body, body)
        const item = await this.service.create(req.body)
        return item
    }

    @Get()
    async list() {
        return await this.service.findAll()
    }

    @Get(':id')
    async findOne(@Param('id') id) {
        return await this.service.findOneById(id)
    }

    @Put(':id')
    async update(@Param('id') id, @Body() data) {
        return await this.service.update(id, data)
    }

    @Delete(':id')
    async delete(@Param('id') id) {
        return await this.service.delete(id)
    }
}
