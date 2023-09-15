import SectionTitle from '../../components/SectionTitle/SectionTitle'
import ItemOnSaleList_Container from '../../components/ItemList_Container/ItemOnSaleList_Container'
import ItemFullPriceList_Container from '../../components/ItemList_Container/ItemFullPriceList_Container'


const HomePage = (props) => {
  return (
    <div>
        <SectionTitle text={'Items On Sale'} />
        <ItemOnSaleList_Container />

        <SectionTitle text={'Featured Products'} />
        <ItemFullPriceList_Container/>
    </div>
  )
}

export default HomePage