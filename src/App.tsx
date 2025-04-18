import { Button } from './components/Button/Button'
import { Card } from './components/Card/Card'

type TypeProduct = {
  id: string | number 
  text: string
}

export type Product = {
  id: number
  pt: string
  title: string
  description: string
  types: TypeProduct[]
  price: number
}

const products: Product[] = [
  {
    id: 1,
    pt: 'https://menu2go.ru/images/food/546/546_761_20230222134354_1376.jpg',
    title: 'Чебур',
    description: `Здесь будет описание товара.
    У некоторых товаров описание может быть коротким, а у некоторых - длинным.`,
    types: [{
      id: 'Cтандарт',
      text: 'Cтандарт'
    },
    {
      id: 'Двойной',
      text: 'Двойной'
    }],
    price: 180
  },
  {
    id: 2,
    pt: 'https://img.freepik.com/premium-photo/homemade-fried-cheburek-pies-with-meat-top-view_199073-375.jpg?w=996',
    title: 'Чебур c соусом',
    description: `Здесь будет описание товара.
    У некоторых товаров/`,
    types: [{
      id: 'Cтандарт',
      text: 'Cтандарт'
    }],
    price: 300
  },
  {
    id: 3,
    pt: 'https://img.freepik.com/premium-photo/homemade-fried-cheburek-pies-with-meat-top-view_199073-375.jpg?w=996',
    title: 'Чебур c соусом',
    description: `Здесь будет описание товара.
    У некоторых товаров описание может быть коротким, а у некоторых - длинным.`,
    types: [{
      id: 'Cтандарт',
      text: 'Cтандарт'
    }],
    price: 300
  },
  {
    id: 4,
    pt: 'https://img.freepik.com/premium-photo/homemade-fried-cheburek-pies-with-meat-top-view_199073-375.jpg?w=996',
    title: 'Чебур c соусом',
    description: `Здесь будет описание товара. Здесь будет описание товара. Здесь будет описание товара.
    У некоторых товаров описание может быть коротким, а у некоторых - длинным.`,
    types: [{
      id: 'Cтандарт',
      text: 'Cтандарт'
    }],
    price: 300
  },
  {
    id: 5,
    pt: 'https://img.freepik.com/premium-photo/homemade-fried-cheburek-pies-with-meat-top-view_199073-375.jpg?w=996',
    title: 'Чебур c соусом',
    description: `Здесь будет описание товара.
    У некоторых товаров описание может быть коротким, а у некоторых - длинным.`,
    types: [{
      id: 'Cтандарт',
      text: 'Cтандарт'
    }],
    price: 300
  }
]

function App() {
  return (
     <div className='app'>
        <header className='header'>
          <div className='header__top'>
            <div className='header__item'>
              <Button color='var(--color-button-main)'>лого</Button>
            </div>
            <div className='header__item'>
              <a className='item__link' href='tel: +7'>
                <span>+7 (812)</span>
                <span>944-4490</span>
              </a>
            </div>
          </div>
        </header>
        <main className='main'>
          <section className='products'>
            <div className='products__section'>
              <span className='chits'>Главная / Меню / Категория товаров</span>
              <h1 className='section__title'>Название категории</h1>
              <div className='section__productList'>
                {products.map((item: Product) => (
                  <Card 
                    key={item.id}
                    pathProduct={item.pt} 
                    title={item.title}
                    description={item.description}
                    types={item.types}
                    price={item.price}
                  />
                ))}
              </div>
            </div>
          </section>
        </main>
        <footer className='footer'>
          <h2 className='footer__title'>Подвал сайта</h2>
        </footer>
     </div>
  )
}

export default App
