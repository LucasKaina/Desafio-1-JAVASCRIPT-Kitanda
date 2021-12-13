window.onload = function(){

    let produtoes = [
        {descricao: 'Banana', preco:2.2},
        {descricao: 'Melancia', preco: 5 },
        {descricao: 'Uva', preco:3.5},
        {descricao: 'Melão', preco: 10},
        {descricao: 'Jabuticaba', preco: 2},
        {descricao: 'Tomate', preco: 4}
    ]


const  listaProdutos= document.querySelector("#produtos");
const suaCesta= document.querySelector("#cestaDoCliente");
const total= document.querySelector("#mostraTotalCompra");


    // ( ()=>{
        let totalzinho = 0;
        
        for (let prod of produtoes){
            const filhao = document.createElement('li');
            listaProdutos.appendChild(filhao).setAttribute('class','lists' );


            for( listaPr in prod){
                if (listaPr =='preco'){
                    listaProdutos.appendChild(filhao).setAttribute('data-preco', prod[listaPr]);
                    totalzinho += prod[listaPr]
                } else {
                listaProdutos.appendChild(filhao).textContent = `${prod[listaPr]}`;
                }
            }

        }
        
        total.value=totalzinho.toFixed(2);


        listaB.addEventListener('click', function(){
            for(let listass in produtoes){

                let li = document.createElement('li');

                suaCesta.appendChild(li).textContent = listass.valueOf();

                

            }
        })
        
    // } )()

 


}