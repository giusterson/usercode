export const initialState = 
{
  columns:
   [
    {
      id:'column-0',
      colTitle: 'Todo',
      colTasks: [{
        id: 'task-0',
        taskTitle: 'Content for task-1',
        taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias labore magni modi nam numquam officia placeat quidem quos recusandae reiciendis ullam, voluptatem voluptatibus. Adipisci aliquam aliq'
      }]
    }, {
      id: 'column-1',
      colTitle: 'In Progress',
      colTasks: [{
        id:'card-0',
        taskTitle: 'Content for task-2',
        taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias labore magni modi nam numquam officia placeat quidem quos recusandae reiciendis ullam, voluptatem voluptatibus. Adipisci aliquam aliquid cumque'
      },
      {
        id: 'task-1',
        taskTitle: 'Content for task-3',
        taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A alias labore magni modi nam numquam officia placeat qfugiat harum illo iste laudantium modi, repudiandae! Laudantium neque nihil tenetur! Aperiam itaque minima perspiciatis provident voluptatem!'
      }]
    }, {
      id: 'column-2',
      colTitle: 'Review',
      colTasks: [
        {
          id: 'task-0',
          taskTitle: 'Content for task-4',
          taskDescription: 'Lorem ipsum dolor sit amet, consecteem quos recusandae reiciendis ullam, voluptatem voluptatibus. Adipisci aliquam aliquid cumque, debitis delectus deleniti dolor dolores fugiat harum illo iste laudantium modi, repudiandae! Laudantium neque nihil tenetur! Aperiam itaque minima perspiciatis provident voluptatem!'
        }
      ]
    },
    {
      id: 'column-3',
      colTitle: 'Completed',
      colTasks: [{
        id: 'task-0',
        taskTitle: 'Content for task-5',
        taskDescription: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autemiam voluptate voluptatum!'
      }]
    }
  ]
};
