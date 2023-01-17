export const color = (color) => {
    if(color){
        switch (color.toLowerCase()) {
            case 'rojo':
                return '#C0392B'
            case 'verde':
                return '#229954' 
            case 'amarillo':
                return '#D4AC0D' 
            case 'morado':
                return '#7D3C98' 
            case 'azul':
                return '#1F618D' 
            default:
                break;
        }
    }
}