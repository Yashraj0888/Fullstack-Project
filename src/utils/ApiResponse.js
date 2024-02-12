class ApiResponse {
    constructor(
        statusCode,
        data,
        message
    ){
        this.data=data
        this.message=message

        this.statusCode=statusCode
        this.succes=statusCode <400
    }
}