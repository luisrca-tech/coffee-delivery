import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { useTheme } from "styled-components";

import { useCart } from "../../Hooks/useCart";
import { useParams } from "react-router-dom";

import DeliverySuccess from '../../assets/deliverysuccess.svg'
import { Container, Heading, Info, InfoContent, Order } from "./styles";

export function Success() {
  const { orders } = useCart()
  const theme = useTheme()
  const { orderId } = useParams()
  const OrderInfo = orders?.find((order) => order.id === Number(orderId))
  const paymentMethod = {
    credit: 'Cartão de crédito',
    debit: 'Cartão de débito',
    cash: 'Dinheiro',
  }

  if (!OrderInfo?.id) {
    return null
  }

  return (
  <Container>
    <Order>
      <Heading>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é so aguardar que logo o café chegará até você</span>
      </Heading>

      <Info>
        <InfoContent>
          <div>
            <MapPin 
              color={theme.colors.white}
              style={{backgroundColor: theme.colors.purple}}
              size={32}
            />
            <div>
              <span>
                Entrega em {' '}
                <strong>
                  {OrderInfo?.street}, {OrderInfo?.number}
                </strong>
              </span>
              <span>
                {OrderInfo?.neighborhood} - {OrderInfo?.city}, {OrderInfo?.state}
              </span>
            </div>
          </div>
          <div>
            <Timer 
              color={theme.colors.white}
              style={{backgroundColor: theme.colors.yellow}}
              size={32}
            />

            <div>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </div>
          </div>

          <div>
            <CurrencyDollar 
              color={theme.colors.white}
              style={{backgroundColor: theme.colors["yellow-dark"]}}
              size={32}
            />

            <div>
              <span>Pagamento na entrega</span>

              <strong>{paymentMethod[OrderInfo.paymentMethod]}</strong>
            </div>
          </div>
        </InfoContent>
      </Info>
    </Order>

    <img src={DeliverySuccess} alt="Pedido Concluído" />
  </Container>
);
}
