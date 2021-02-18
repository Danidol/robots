import Card from "./Card"

const CardList = ({ robots }) => {
  return (
    <div className="container">
      {robots.map((user, i) => {
        return <Card key={i} id={robots[i].id} name={user.name} email={user.email} />
      })}
    </div>
  )
}

export default CardList
