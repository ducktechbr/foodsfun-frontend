

export default function selected(state = [], action){
    
    switch(action.type){
        case 'SELECTED_ONE':
            console.log("cheguei")
            state = [
                { name: 'Produtos', href: '#', current: false },
                { name: 'Pedidos', href: '#', current: true },
                { name: 'Mesas', href: '#', current: false },
              ];
              console.log(state)
            return state
        
            
        default:
            return state;
    }
}
