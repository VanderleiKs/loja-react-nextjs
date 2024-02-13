export class Moeda{

    static format(value: number){
        return Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(value)
        
    }
}