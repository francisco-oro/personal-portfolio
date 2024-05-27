import { Button } from "../../utlis/Bootstrap.jsx";

export default function ButtonOutline ({text, icon}) {

  return (
    <Button 
      size="lg" 
      variant="success"
      className="d-block d-lg-inline m-auto button-style button-effect">{icon} {text}</Button>
  )
}