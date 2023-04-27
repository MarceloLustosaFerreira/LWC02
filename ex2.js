import { LightningElement, track } from 'lwc';

export default class DadosCliente extends LightningElement {
    @track dadosCliente = {
        primeironome: '',
        sobrenome: '',
        email: '',
        website: '',
        empresa: '',
        receitaanual: 0
    };

    handleInputChange(event) {
        const fieldName = event.target.id;
        const value = event.target.value;
        this.dadosCliente = {...this.dadosCliente, [fieldName]: value};
        console.log(this.dadosCliente);
    }
}
