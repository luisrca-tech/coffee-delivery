import { CardContainer, CoffeeList, DeliveryQualities, HeaderContainer, HomeContainer } from "./styles";

import coffeeDeliiiveryHeader from '../../assets/coffeedeliveryheader.svg'
import Cart  from '../../assets/cart.svg'
import Timer  from '../../assets/timer.svg'
import Package  from '../../assets/package.svg'
import Coffee  from '../../assets/coffee.svg'

import {coffees} from '../../../data.json'
import { Card } from "../../components/Card";

export function Home() {
  return (
    <>
    <HomeContainer>
      <HeaderContainer>
      <div>
        <strong>
          Encontre o café perfeito para qualquer hora do dia
        </strong>
        <span>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora
        </span>
      </div>
      <DeliveryQualities>
        <div>
        <p>
          <img src={Cart} alt="" />
          Compra simples e segura
        </p>
        <p><img src={Package} alt="" /> 
        Embalagem mantém o café intacto</p>
        </div>
        <div>
        <p><img src={Timer} alt="" /> 
        Entrega rápida e rastreada</p>
        <p><img src={Coffee} alt="" /> 
        O café chega fresquinho até você</p>
        </div>
      </DeliveryQualities>
      </HeaderContainer>
      <img src={coffeeDeliiiveryHeader} alt="" />
    </HomeContainer>
    <CoffeeList>
      <h2>Nossos cafés</h2>
      <CardContainer>
      {coffees.map((coffee) => (
        <div>
        <Card key={coffee.id} coffee={coffee}/>
        </div>
      ))}
      </CardContainer>
    </CoffeeList>
    </>
  );
}