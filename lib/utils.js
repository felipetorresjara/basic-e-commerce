
export const FormatPrice = (price) => {
    if(price === undefined || price === ''){
        return ''
    }
    return parseInt(price).toLocaleString('es-CL', {
        style: 'decimal',
        minimumFractionDigits: 0
    })
}