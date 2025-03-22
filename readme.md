## Try-Catch

The tryCatch function is designed to mimic Go's error-handling pattern by returning both data and an error. It executes a provided function inside a try block, capturing any exceptions that occur. If the function runs successfully, it returns the result along with None as the error.

If an exception is raised, it returns None for the data and the caught exception as the error. This approach enables explicit error handling, similar to Go's value, err := function() pattern.

### Example

```ts
import { tryCatch } from 'trycatch';

type Response = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
};

 const dummyAPI = async () => {
    return await fetch('https://url').then(
      (res) => {
        if (!res.ok) throw new Error('I dont work');

        return res.json();
      }
    );
  };

  const handler = async () => {
    const { data, error } = await tryCatch<Response, Error>(dummyAPI());
    if(error != null) {
      throw error;
    }

    console.log('success: ', data);
  }
```

For more examples, check `src/examples/*`
