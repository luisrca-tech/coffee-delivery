import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import { useCart } from '../../Hooks/useCart'
import { Aside, Container } from './styles'

import CoffeeLogo from '../../assets/coffeeLogo.svg'

export function Header() {
  const { cart } = useCart()

  return (
    <Container>
      <Link to="/">
        <img src={ CoffeeLogo } alt="Coffee Delivery" />
      </Link>

      <Aside>
        <div>
          <MapPin size={22} weight="fill" />
          <span>Goiânia, GO</span>
        </div>

        <Link to={`cart`} aria-disabled={cart?.length === 0}>
          <ShoppingCart size={22} weight="fill" />
          {cart?.length > 0 ? <span>{cart?.length}</span> : null}
        </Link>
      </Aside>
    </Container>
  )
}