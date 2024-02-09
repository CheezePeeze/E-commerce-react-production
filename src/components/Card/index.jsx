import CardItem from "./CardItem"
import CardItems from "./CardItems"

const Card = ({ items }) => {
  return (
    <div className="p-10">
      {items && items.length > 1 ? (
        <CardItems items={items} />
      )
        : (
          <CardItem item={items} />
        )
      }
    </div>
  )
}

export default Card