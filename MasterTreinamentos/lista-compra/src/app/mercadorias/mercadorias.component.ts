import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mercadorias',
  templateUrl: './mercadorias.component.html',
  styleUrls: ['./mercadorias.component.css']
})
export class MercadoriasComponent implements OnInit {
  title = "Lista de compras";
  mercadorias = [{
    id:1,
    descricao:"Arroz",
    quantidade:1
  },
  {
    id:2,    
    descricao:"Feijão",
    quantidade:5
  },
  { 
    id:3,
    descricao:"Óleo",
    quantidade:2
  }
]
  constructor() { 
    
  }

  ngOnInit(): void {
  }

}
