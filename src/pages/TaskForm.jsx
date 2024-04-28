import { Card, Input, Label, Container, Button, TextArea } from "../components/ui";
import { useForm } from "react-hook-form";

export const TaskForm = () => {

  const { register } = useForm();

  return (
    <Container className="h-[calc(100vh-10rem)] flex items-center justify-center">
      <Card>
        <h3 className="text-xl font-semibold text-center mb-4">Task Info</h3>
        <form>
          <Label htmlFor="title">Title</Label>
          <Input 
            type="text"
            placeholder="Enter task title" 
            {...register('title', {required: true})}
          />

          <Label htmlFor="description">Description</Label>
          <TextArea 
            type="text"
            placeholder="Enter task description" 
            {...register('description')}
          />

          <Button>Create Task</Button>
        </form>
      </Card>
    </Container>
  )
}
