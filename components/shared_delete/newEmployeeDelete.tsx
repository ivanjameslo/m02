import { deleteEmployee } from "@/app/actions/todoActions"
import Button from "../ui/Button"

const newEmployeeDelete = () => {
  return (
    <div>
      <Button text="Delete" actionButton={true} />
    </div>
  )
}

export default newEmployeeDelete