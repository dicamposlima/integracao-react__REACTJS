type Componente = {
    new(...args:any[]): {
        render(): any
    }
}

export default function
    logRender<C extends Componente>(componente: C){
        return class extends componente {
            render(){
                console.log('renderizando...');
                const r: any = super.render()
                console.log('...concluída');
                return r;
            }
        }
}