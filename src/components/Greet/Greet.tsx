type GreetProps = {
    name? : string
}
const Greet = (props: GreetProps) => {
  return (
   <div>Hello World {props.name}</div>
  )
}

export default Greet;
